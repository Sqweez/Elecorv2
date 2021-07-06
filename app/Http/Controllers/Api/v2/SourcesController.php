<?php

namespace App\Http\Controllers\Api\v2;

use App\Http\Controllers\Controller;
use App\Http\Resources\Sources as ResourcesSources;
use App\Sources;
use Illuminate\Http\Request;

class SourcesController extends Controller
{
    public function index()
    {
        return ResourcesSources::collection(Sources::with('certificates')->orderByDesc('id')->get());
    }

    public function show($id)
    {
        return Sources::with('certificates')->findOrFail($id);
    }

    public function store(Request $request)
    {
        return Sources::create($request->all());
    }

    public function update($id, Request $request)
    {
        $sources = Sources::with('certificates')->findOrFail($id);

        $sources->update($request->all());

        return $sources;
    }

    public function destroy($id)
    {
        Sources::find($id)->delete();
        return 'Источник удален';
    }
}
