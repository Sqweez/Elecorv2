<?php

namespace App\Http\Controllers\Api\v2;

use App\Certificates;
use App\Http\Controllers\Controller;
use App\Http\Resources\Certificates as ResourcesCertificates;
use Illuminate\Http\Request;

class CertificatesController extends Controller
{
    public function index()
    {
        return ResourcesCertificates::collection(
        	Certificates::query()
				->with('source')
				->orderByDesc('id')
				->select(['id', 'name', 'source_id', 'active', 'is_paid', 'created_at'])
				->get()
		);
    }

    public function show($id)
    {
        return Certificates::with('source')->findOrFail($id);
    }

    public function store(Request $request)
    {
        return Certificates::create($request->all());
    }

    public function update($id, Request $request)
    {
        $certificate = Certificates::with('source')->findOrFail($id);

        $certificate->update($request->all());

        return $certificate;
    }

    public function destroy($id)
    {
        Certificates::find($id)->delete();
        return 'Сертификат удален';
    }

	public function makeCertificatePaid(Request $request) {
		Certificates::whereWpCertificateId($request->get('id'))->update([
			'is_paid' => true
		]);
    }
}
