<?php

namespace App\Http\Controllers\Api;

use App\Connection;
use App\Http\Controllers\Controller;
use App\Http\Resources\ConnectionResource;
use App\Http\Resources\HistoryResource;
use App\Payment;
use App\Sale;
use App\Transaction;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ConnectionController extends Controller {

    public function store(Request $request) {

        $data = $request->all();
        $connection = Connection::create($data)->id;
        $date_start = Carbon::parse($data['date_start']);
        if (!($date_start > Carbon::today()->endOfMonth())) {
            Payment::create(['connection_id' => $connection, 'price' => $data['month_price']]);
            Transaction::create(['connection_id' => $connection, 'balance_change' => $data['month_price'] * -1, 'user_id' => $data['user_id']]);
        }
        return new ConnectionResource(Connection::find($connection));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Connection $connection
     * @param Request $request
     * @return ConnectionResource
     */
    public function update(Connection $connection, Request $request) {
        $data = $request->all();
        if (isset($data['is_deleted'])) {
            $connection->update(['is_deleted' => true]);
            return null;
        }
        $data['personal_account'] = preg_replace('/\s+/', '', $data['personal_account']);
        $connection->update($data);
        return new ConnectionResource($connection);
    }

    public function destroy(Connection $connection) {
        $connection->delete();
    }

    public function getDuplicate(Request $request) {
        $account = $request->get('personal_account');
        $result = Connection::where(['personal_account' => $account, 'is_deleted' => false])->get();
        return count($result);
    }

    public function connect(Connection $connection) {
        $connection->update(['is_active' => true, 'disable_date' => null]);
        return $connection;
    }

    public function disconnect(Connection $connection) {
        $connection->update(['is_active' => false, 'disable_date' => Carbon::today()]);
        return $connection;
    }


    public function addBalances(Request $request) {
        $balances = json_decode($request->get('balances'), true);
        foreach ($balances as $balance) {
            Transaction::create(['connection_id' => $balance['id'], 'balance_change' => $balance['balance'], 'user_id' => 1]);
        }
    }

    public function addBalance(Connection $connection, Request $request) {
        $balance = $request->all();
        $balance['connection_id'] = $connection['id'];
        return Transaction::create($balance);
    }

    public function makeSale(Request $request) {
        $sale = $request->all();
        $sale_id = Sale::create($sale)->id;
        Payment::create(['connection_id' => $sale['connection_id'], 'price' => $sale['price'], 'sale_id' => $sale_id]);
        Transaction::create(['connection_id' => $sale['connection_id'], 'balance_change' => $sale['price'] * -1, 'sale_id' => $sale_id, 'user_id' => $sale['user_id']]);
    }

    public function history(Connection $connection) {
        return new HistoryResource($connection);
    }

    public function findAccount(Request $request) {
        $account = $request->get('account');
        $account = preg_replace('/\s+/', '', $account);
        $account = Connection::where('personal_account', $account)->with('client')->first();
        return $account;
    }

    public function destroyDupls() {
        $connections = Connection::all();
        $m = [];
        foreach ($connections as $value) {
            $m[$value['personal_account']][] = $value;
        }
        foreach ($m as $item) {
            if (count($item) > 1) {
                foreach ($item as $value) {
                    echo $value['id'] . PHP_EOL;
                }
                echo "-------" . PHP_EOL;
            }
            /*if (count($item) > 1) {
                for ($i = 1; $i < count($item); $i++) {
                    $connection_id = $item[$i]['id'];
                    Connection::find($connection_id)->delete();
                    $transaction = Transaction::where('connection_id', $connection_id)->first();
                    if ($transaction) {
                        $transaction->delete();
                    }
                }
                echo "-------" . PHP_EOL;
            }*/

        }
    }

}
