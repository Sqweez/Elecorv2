<?php

namespace App\Http\Controllers\Api\v2;

use App\Http\Controllers\Controller;
use App\Http\Resources\PromoCodesPackages as ResourcesPromoCodesPackages;
use App\PromoCodesPackages;
use Illuminate\Http\Request;

class PromoCodesPackagesController extends Controller
{
    public function index()
    {
        return ResourcesPromoCodesPackages::collection(PromoCodesPackages::with('promoCodes')->orderByDesc('id')->get());
    }

    public function show($id)
    {
        return PromoCodesPackages::with('promoCodes')->findOrFail($id);
    }

    public function store(Request $request)
    {
        return PromoCodesPackages::create($request->all());
    }

    public function update($id, Request $request)
    {
        PromoCodesPackages::with('promoCodes')->findOrFail($id)->update($request->all());
        return PromoCodesPackages::with('promoCodes')->findOrFail($id);
    }

    public function destroy($id)
    {
        PromoCodesPackages::find($id)->delete();
        return 'Пакет удален';
    }
}
