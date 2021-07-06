<?php

namespace App;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Sources
 *
 * @property int $id
 * @property string $name
 * @property string $text
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Sources newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Sources newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Sources query()
 * @method static \Illuminate\Database\Eloquent\Builder|Sources whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sources whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sources whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sources whereText($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sources whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Certificates[] $certificates
 * @property-read int|null $certificates_count
 */
class Sources extends Model
{
    protected $fillable = [
        'name',
        'text'
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('d.m.Y');
    }

    public function certificates()
    {
        return $this->hasMany(Certificates::class, 'source_id');
    }
}
