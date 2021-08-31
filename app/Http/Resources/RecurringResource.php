<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

/*
 * Class Recurring
 * @mixin \App\Recurring
 * */

class RecurringResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
        	'id' => $this->id,
			'client' => $this->client,
			'client_id' => $this->client_id,
			'connection' => $this->connection,
			'fullname' => $this->client->name ?? $this->fullname,
			'connection_id' => $this->connection_id,
			'created_at' => Carbon::parse($this->created_at)->format('d.m.Y'),
			'firstname' => $this->firstname,
			'lastname' => $this->lastname,
			'is_active' => !!$this->is_active,
			'next_payment' => $this->next_payment,
			'paybox_id' => $this->paybox_id,
			'personal_account' => $this->personal_account,
			'sum' => $this->sum,
			'updated_at' => $this->updated_at
		];
    }
}
