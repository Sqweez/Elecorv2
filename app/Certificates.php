<?php

namespace App;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Certificates
 *
 * @property int $id
 * @property string $name
 * @property string $promocode
 * @property int $active
 * @property string $lastname
 * @property string $firstname
 * @property string $patronymic
 * @property string $phone
 * @property int $months
 * @property float $sum
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Certificates newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Certificates newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Certificates query()
 * @method static \Illuminate\Database\Eloquent\Builder|Certificates whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificates whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificates whereFirstname($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificates whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificates whereLastname($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificates whereMonths($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificates whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificates wherePatronymic($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificates wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificates wherePromocode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificates whereSum($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificates whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property int $source_id
 * @property string $certificate_lastname
 * @property string $certificate_firstname
 * @property string $certificate_patronymic
 * @property string $certificate_phone
 * @property int $certificate_months
 * @property float $certificate_sum
 * @property string $contact_lastname
 * @property string $contact_firstname
 * @property string $contact_patronymic
 * @property string $contact_phone
 * @method static \Illuminate\Database\Eloquent\Builder|Certificates whereCertificateFirstname($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificates whereCertificateLastname($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificates whereCertificateMonths($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificates whereCertificatePatronymic($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificates whereCertificatePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificates whereCertificateSum($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificates whereContactFirstname($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificates whereContactLastname($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificates whereContactPatronymic($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificates whereContactPhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Certificates whereSourceId($value)
 * @property-read \App\Sources|null $source
 */
class Certificates extends Model
{
    protected $fillable = [
        'source_id',
        'name',
        'promocode',
        'active',
        'certificate_lastname',
        'certificate_firstname',
        'certificate_patronymic',
        'certificate_phone',
        'certificate_months',
        'certificate_sum',
        'contact_lastname',
        'contact_firstname',
        'contact_patronymic',
        'contact_phone'
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('d.m.Y');
    }

    public function source()
    {
        return $this->belongsTo(Sources::class);
    }
}
