<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class MessageResource extends JsonResource
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
            'read' => !!$this->read,
            'title' => $this->title,
            'body' => $this->body,
            'date' => Carbon::parse($this->created_at)->format('d.m.Y')
        ];
    }
}
