<?php

namespace App\Http\Controllers\Api\v2;

use App\ManagerHistory;
use App\Http\Controllers\Controller;
use App\Http\Resources\ManagerHistory as ResourcesManagerHistory;
use Illuminate\Http\Request;

class ManagerHistoryController extends Controller
{
    public function index()
    {
        return ResourcesManagerHistory::collection(
            ManagerHistory::orderByDesc('id')->get()
        );
    }

    public function store(Request $request)
    {
        return ManagerHistory::create($request->all());
    }

    public function show($id)
    {
        return ManagerHistory::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        ManagerHistory::findOrFail($id)->update($request->all());
        return ManagerHistory::findOrFail($id);
    }

    public function destroy($id)
    {
        ManagerHistory::findOrFail($id)->delete();
        return 'История удалена';
    }
}
