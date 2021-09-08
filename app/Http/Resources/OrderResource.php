<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class User
 *
 * @mixin \App\Order
 * */

class OrderResource extends JsonResource
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
            'client' => $this->client_name,
            'push_token' => $this->push_token,
            'client_id' => $this->client_id,
            'feedback' => $this->feedback,
            'service_id' => $this->service_id,
            'service' => strlen($this->service->name) > 0 ? $this->service->name : $this->comment,
            'answer' => $this->answer,
            'date' => Carbon::parse($this->created_at)->format('d.m.Y'),
            'is_worked' => !!$this->is_worked,
            'comment' => $this->comment,
            'phone' => $this->phone,
            'client_comment' => $this->client_comment,
			'type' => $this->type,
        ];
    }
}
