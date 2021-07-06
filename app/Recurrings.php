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
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrings newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrings newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrings query()
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrings whereBill($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrings whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrings whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrings whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrings whereNextPayment($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrings wherePayboxId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrings whereSum($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrings whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property string $lastname
 * @property string $firstname
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrings whereFirstname($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrings whereLastname($value)
 */
class Recurrings extends Model
{
    protected $fillable = [
        'paybox_id',
        'lastname',
        'firstname',
        'sum',
        'next_payment',
    ];
    protected $appends = ['fullname'];

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
}
