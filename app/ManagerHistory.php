<?php

namespace App;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;

/**
 * App\ManagerHistory
 *
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerHistory newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerHistory newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerHistory query()
 * @mixin \Eloquent
 */
class ManagerHistory extends Model
{
    protected $fillable = [
        'connect_time',
        'client_id',
        'payed',
        'wallet',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('d.m.Y');
    }
}
