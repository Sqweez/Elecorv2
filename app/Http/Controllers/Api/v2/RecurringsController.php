<?php

namespace App\Http\Controllers\Api\v2;

use App\Connection;
use App\Http\Controllers\Controller;
use App\Http\Resources\RecurringResource;
use App\Recurring;
use Carbon\Carbon;
use Hash;
use Illuminate\Http\Request;

class RecurringsController extends Controller
{
	public function index()
	{
		return RecurringResource::collection(
			Recurring::query()
				->orderByDesc('id')
				->with('client:id,name')
				->with('connection:id,trademark,personal_account')
				->get()
		);
	}

	public function show($id)
	{
		return Recurring::findOrFail($id);
	}

	public function store(Request $request)
	{
		return Recurring::create($request->all());
	}

	public function update($id, Request $request)
	{
		$recurrings = Recurring::findOrFail($id);

		$recurrings->update($request->all());

		return $recurrings;
	}

	public function destroy($id)
	{
		Recurring::find($id)->delete();
		return 'Автоплатеж удален';
	}

	public function init(Request $request)
	{
		$request->validate([
			'sum' => 'required',
			'description' => 'required'
		]);

		$recurring = Recurring::create([
			'sum' => $request->input('sum'),
			'next_payment' => Carbon::now()->addMonth()
		]);

		$payboxData = [
			'pg_merchant_id' => config('pg.merchant_id'),
			'pg_amount' => $recurring->sum,
			'pg_description' => $request->input('description'),
			'pg_success_url' => config('pg.success_url'),
			'pg_salt' => Hash::make(config('pg.secret')),
			// 'pg_sig' =>
		];

		return $recurring;
	}

	public function submit(Request $request)
	{
		// $request->validate([
		//     ''
		// ]);

		// Recurrings::create($request->all());

		// $payboxData = [
		//     'pg_merchant_id' => config('pg.merchant_id'),
		//     'pg_order_id' =>
		// ];
		// return 'hello world';
	}

	public function createRecurringWordpress(Request $request) {
		$personal_account = $request->get('personal_account');
		$connection = Connection::wherePersonalAccount($personal_account)->first();
		$recurring = [
			'personal_account' => $personal_account,
			'paybox_id' => $request->get('paybox_id'),
			'sum' => $request->get('sum'),
			'next_payment' => Carbon::parse($request->get('next_payment')),
			'client_id' => 0,
			'connection_id' => 0,
			'lastname' => $request->get('lastname'),
			'firstname' => $request->get('firstname'),
		];
		if ($connection) {
			$recurring['client_id'] = $connection->client_id;
			$recurring['connection_id'] = $connection->id;
		}

		return Recurring::create($recurring);
	}

	public function disableRecurring(Request $request) {
		$personal_account = $request->get('personal_account');
		Recurring::wherePersonalAccount($personal_account)->update(['is_active' => false]);
	}

	public function cronRecurring(Request $request) {
		// @TODO
		$merchant_id = 534862;
		$secret_word = 'BCRUGmuGz4ioSSoC';
		$recurringPayments = Recurring::query()
			->whereDate('next_payment', '<=', now())
			->where('is_active', true)
			->whereHas('connection', function ($q) {
				return $q->where('is_active', true);
			})
			->get();
		return $recurringPayments->each(function ($recurring) use ($merchant_id, $secret_word) {
			$description = 'Автоплатеж от ELECOR (' . $recurring['personal_account'] . ') на сумму ' . $recurring['sum'] . ' тенге';
			$pg_order_id = date('ymdHis') . $recurring['id'];
			$requestArray = [
				'pg_merchant_id'       => $merchant_id,
				'pg_order_id'          => $pg_order_id,
				'pg_recurring_profile' => $recurring['paybox_id'],
				'pg_amount'            => $recurring['sum'],
				'pg_salt'              => rand(21, 43433),
				'pg_description'       => $description,
				'pg_encoding'          => 'UTF-8',
				'pg_currency'          => "KZT",
				'pg_lifetime'          => 86400,
				'pg_request_method'    => 'GET',
			];

			$requestArray['pg_sig'] = $this->makes('make_recurring_payment.php', $requestArray, $secret_word);
			$query = http_build_query($requestArray);
			$url = 'https://api.paybox.money/make_recurring_payment.php?' . $query;
			try {
				$result = file_get_contents($url);
				echo $result . '\n';

				if (preg_match('/(error)/', $result)) {
					$newDate = Carbon::parse($recurring['next_payment'])->addDay();
				} else {
					$newDate = Carbon::parse($recurring['next_payment'])->addMonth();
				}

				Recurring::whereId($recurring['id'])->update(['next_payment' => $newDate]);
			} catch (Exception $e) {}
			return $query;
		});
	}

	private function makes($scriptName, $arrReq, $secret_word) {
		ksort($arrReq);

		array_unshift($arrReq, $scriptName);
		array_push($arrReq, $secret_word);

		$sig = implode(';', $arrReq);

		return md5($sig);
	}
}
