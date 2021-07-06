<?php

namespace App;

use App\PromoCodes;
use Illuminate\Database\Eloquent\Model;

/**
 * App\PromoCodesPackages
 *
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|PromoCodesPackages newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PromoCodesPackages newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PromoCodesPackages query()
 * @method static \Illuminate\Database\Eloquent\Builder|PromoCodesPackages whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PromoCodesPackages whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PromoCodesPackages whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PromoCodesPackages whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property-read int|null $promo_codes_count
 * @property-read \Illuminate\Database\Eloquent\Collection|PromoCodes[] $promoCodes
 */
class PromoCodesPackages extends Model
{
    protected $fillable = ['name'];
    protected $appends = ['promo_codes_count'];

    public function promoCodes()
    {
        return $this->hasMany(PromoCodes::class, 'package_id');
    }

    public function getPromoCodesCountAttribute()
    {
        return $this->promoCodes()->count() ?: '-';
    }
}
