<?php

namespace App;

use App\Http\Controllers\Service\PushService;
use Illuminate\Database\Eloquent\Model;

/**
 * App\RecurrentPayments
 *
 * @property int $id
 * @property int $connection_id
 * @property int $client_id
 * @property string|null $recurring_profile_id
 * @property string|null $recurring_profile_expiry_date
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|RecurrentPayments newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|RecurrentPayments newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|RecurrentPayments query()
 * @method static \Illuminate\Database\Eloquent\Builder|RecurrentPayments whereClientId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RecurrentPayments whereConnectionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RecurrentPayments whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RecurrentPayments whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RecurrentPayments whereRecurringProfileExpiryDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RecurrentPayments whereRecurringProfileId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RecurrentPayments whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class RecurrentPayments extends Model
{
    protected $fillable = ['connection_id', 'recurring_profile_id', 'recurring_profile_expiry_date', 'client_id'];

    protected static function boot() {
        parent::boot();

        parent::created(function($recurrentPayment) {
                $token = PushService::getToken($recurrentPayment->client_id);
                if ($token) {
                    PushService::sendPush([
                        'title' => 'Новое сообщение',
                        'body' => 'Вы успешно подключены к системе ежемесячного списания платежей'
                    ], $token);
                }
            });
    }
}
