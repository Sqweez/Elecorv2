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
			'next_payment' => $request->get('next_payment'),
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

    }
}
