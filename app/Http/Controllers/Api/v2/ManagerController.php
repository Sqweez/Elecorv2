<?php

namespace App\Http\Controllers\Api\v2;

use App\Manager;
use App\Http\Controllers\Controller;
use App\Http\Resources\Manager as ResourcesManager;
use Illuminate\Http\Request;

class ManagerController extends Controller
{
    public function index()
    {
        return ResourcesManager::collection(
            Manager::orderByDesc('id')->get()
        );
    }

    public function store(Request $request)
    {
        return Manager::create($request->all());
    }

    public function show($id)
    {
        return Manager::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        Manager::findOrFail($id)->update($request->all());
        return Manager::findOrFail($id);
    }

    public function destroy($id)
    {
        Manager::findOrFail($id)->delete();
        return 'Менеджер удален';
    }
}
