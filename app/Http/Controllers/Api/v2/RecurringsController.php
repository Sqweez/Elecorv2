<?php

namespace App\Http\Controllers\Api\v2;

use App\Http\Controllers\Controller;
use App\Http\Resources\Recurrings as ResourcesRecurrings;
use App\Recurrings;
use Carbon\Carbon;
use Hash;
use Illuminate\Http\Request;

class RecurringsController extends Controller
{
    public function index()
    {
        return ResourcesRecurrings::collection(Recurrings::orderByDesc('id')->get());
    }

    public function show($id)
    {
        return Recurrings::findOrFail($id);
    }

    public function store(Request $request)
    {
        return Recurrings::create($request->all());
    }

    public function update($id, Request $request)
    {
        $recurrings = Recurrings::findOrFail($id);

        $recurrings->update($request->all());

        return $recurrings;
    }

    public function destroy($id)
    {
        Recurrings::find($id)->delete();
        return 'Автоплатеж удален';
    }

    public function init(Request $request)
    {
        $request->validate([
            'sum' => 'required',
            'description' => 'required'
        ]);

        $recurring = Recurrings::create([
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
}
