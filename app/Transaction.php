<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Transaction
 *
 * @property int $id
 * @property int $connection_id
 * @property int $balance_change
 * @property int|null $sale_id
 * @property int $user_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int $is_visible
 * @property-read \App\Sale|null $sales
 * @method static \Illuminate\Database\Eloquent\Builder|Transaction newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Transaction newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Transaction query()
 * @method static \Illuminate\Database\Eloquent\Builder|Transaction whereBalanceChange($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Transaction whereConnectionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Transaction whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Transaction whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Transaction whereIsVisible($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Transaction whereSaleId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Transaction whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Transaction whereUserId($value)
 * @mixin \Eloquent
 * @property int $is_bonus
 * @method static \Illuminate\Database\Eloquent\Builder|Transaction whereIsBonus($value)
 * @property-read \App\Connection $connection
 * @property-read \App\User $user
 */
class Transaction extends Model {
    protected $guarded = [];

    public function sales() {
        return $this->belongsTo('App\Sale', 'sale_id');
    }


    public function client() {

    }

    public function user() {
        return $this->belongsTo('App\User')->withDefault([
            'id' => -1,
            'name' => 'Система'
        ]);
    }

    public function connection() {
        return $this->belongsTo('App\Connection', 'connection_id');
    }

    protected static function boot() {
        parent::boot();
        static::creating(function($query) {
            $query->user_id = $query->user_id ?? -1;
        });
    }
}
