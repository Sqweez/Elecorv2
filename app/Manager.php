<?php

namespace App;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Manager
 *
 * @property int $id
 * @property string $firstname
 * @property string $lastname
 * @property string|null $patronymic
 * @property string $phone
 * @property string $birthday
 * @property string $identity
 * @property string $utm
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Manager newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Manager newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Manager query()
 * @method static \Illuminate\Database\Eloquent\Builder|Manager whereBirthday($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Manager whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Manager whereFirstname($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Manager whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Manager whereIdentity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Manager whereLastname($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Manager wherePatronymic($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Manager wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Manager whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Manager whereUtm($value)
 * @mixin \Eloquent
 */
class Manager extends Model
{
    protected $fillable = [
        'firstname',
        'lastname',
        'patronymic',
        'phone',
        'birthday',
        'identity',
        'utm',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('d.m.Y');
    }
}
