<?php

namespace App;

use Carbon\Carbon;
use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Recurrings
 *
 * @property int $id
 * @property string $name
 * @property string $paybox_id
 * @property string $bill Лицевой счет
 * @property float $sum
 * @property string $next_payment
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Recurring newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Recurring newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Recurring query()
 * @method static \Illuminate\Database\Eloquent\Builder|Recurring whereBill($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurring whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurring whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurring whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurring whereNextPayment($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurring wherePayboxId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurring whereSum($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurring whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property string $lastname
 * @property string $firstname
 * @method static \Illuminate\Database\Eloquent\Builder|Recurring whereFirstname($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurring whereLastname($value)
 */
class Recurring extends Model
{
    protected $guarded = ['id'];
    protected $appends = ['fullname'];
    protected $casts = [
    	'boolean'
	];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('d.m.Y');
    }

    public function getNextPaymentAttribute($value)
    {
        return Carbon::parse($value)->format('d.m.Y');
    }

    public function getFullnameAttribute()
    {
        return $this->attributes['lastname'] . ' ' . $this->attributes['firstname'];
    }

	public function client() {
		return $this->belongsTo('App\Client');
    }

	public function connection() {
		return $this->belongsTo('App\Connection');
    }
}
