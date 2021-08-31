<?php

namespace App\Http\Controllers\Api;

use App\Client;
use App\Connection;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Service\ClientService;
use App\Http\Controllers\Service\DebtService;
use App\Http\Controllers\Service\ExcelController;
use App\Http\Resources\ClientsResource;
use App\Http\Resources\DebtResource;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class ExportController extends Controller
{

    public function exportClients(Request $request)
    {
        $clients =  ClientService::getClients($request);
        $clients = ClientsResource::collection($clients);
        $excelService = new ExcelController();
        return Response::download($excelService->exportClients($request, $clients));
        return $excelService->exportClients($request, $clients);
    }

    public function exportDebts(Request $request)
    {
        $debts = DebtResource::collection(DebtService::getDebtsOld($request));
        $excelService = new ExcelController();
		return Response::download($excelService->exportDebts($debts));
		return $excelService->exportDebts($debts);
    }
}
