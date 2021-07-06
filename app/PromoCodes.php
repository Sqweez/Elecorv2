<?php

namespace App;

use App\PromoCodesPackages;
use Carbon\Carbon;
use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;

/**
 * App\PromoCodes
 *
 * @property int $id
 * @property int|null $package_id
 * @property string $name
 * @property string $promocode
 * @property int $fixed_discount
 * @property int $discount
 * @property int $limit
 * @property int $activated_count
 * @property int $timeless
 * @property string $expiration_date
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|PromoCodes newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PromoCodes newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PromoCodes query()
 * @method static \Illuminate\Database\Eloquent\Builder|PromoCodes whereActivatedCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PromoCodes whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PromoCodes whereDiscount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PromoCodes whereExpirationDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PromoCodes whereFixedDiscount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PromoCodes whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PromoCodes whereLimit($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PromoCodes whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PromoCodes wherePackageId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PromoCodes wherePromocode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PromoCodes whereTimeless($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PromoCodes whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property string|null $expired_at
 * @method static \Illuminate\Database\Eloquent\Builder|PromoCodes whereExpiredAt($value)
 * @property-read PromoCodesPackages|null $package
 */
class PromoCodes extends Model
{
    protected $fillable = [
        'package_id',
        'name',
        'promocode',
        'fixed_discount',
        'discount',
        'limit',
        'activated_count',
        'timeless',
        'expired_at'
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('d.m.Y');
    }

    public function getExpiredAtAttribute($value)
    {
        return $value ? Carbon::parse($value)->format('d.m.Y') : 'Бессрочный';
    }

    public function getActivatedCountAttribute($value)
    {
        return $value ?: 'Нет активированных';
    }

    public function package()
    {
        return $this->belongsTo(PromoCodesPackages::class);
    }
}
