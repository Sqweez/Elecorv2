<?php

namespace App\Http\Controllers\Api\v2;

use App\Http\Controllers\Controller;
use App\Http\Resources\PromoCodes as ResourcesPromoCodes;
use App\PromoCodes;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PromoCodesController extends Controller
{
    public function index()
    {
        return ResourcesPromoCodes::collection(
            PromoCodes::with('package')->orderByDesc('id')->get()
        );
    }

    public function store(Request $request)
    {
        if ($request->input('count')) {
            for ($i = 0; $i < intval($request->input('count')); $i++) {
                $randomStr = Str::random(10);
                $fixedDiscount = $request->input('fixed_discount');
                $wallet = $fixedDiscount ? 'тнг.' : '%';
                $discount = $request->input('discount') . $wallet;
                $timeless = $request->input('timeless');
                $timeExpires = Carbon::parse($request->input('expired_at'))->format('d.m.Y');
                $time = $timeless ? 'бессрочный' : "до $timeExpires";

                PromoCodes::create(array_merge(
                    $request->all(),
                    [
                        'promocode' => $randomStr,
                        'name' => "$randomStr скидка на $discount $time",
                    ]
                ));
            }
        } else {
            return PromoCodes::create($request->all());
        }
    }

    public function show($id)
    {
        return PromoCodes::with('package')->findOrFail($id);
    }

    public function update($id, Request $request)
    {
        PromoCodes::with('package')->findOrFail($id)->update($request->all());
        return PromoCodes::with('package')->findOrFail($id);
    }

    public function destroy($id)
    {
        PromoCodes::find($id)->delete();
        return 'Промокод удален';
    }
}
