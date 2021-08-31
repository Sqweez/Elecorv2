<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class InformationController extends Controller
{
    public function getReferralInformation() {
        return "
            <h1>Копи бонусы и оплачивай ими услуги ОА “ELECOR”!</h1>
            <h3>Как накопить? </h3>
            <p>Подключи другу Мобильную Тревожную Кнопку,отправив ему реферальную ссылку на установку, в любой из мессенджеров. За каждого приведённого друга,начисляется 2000 бонусов.</p>
			<h3>Как пригласить?</h3>
            <p>Нажми на Кнопку в клиентском приложении «ПРИГЛАСИТЬ ДРУГА»,в всплывающих мессенджерах выбери ,кого хочешь пригласить.Выбранный человек получит ссылку на установку услуги-Мобильная Тревожная Кнопка.</p>
			<h3>Как узнать сколько бонусов я накопил?</h3>
        	<p>В личном кабинете ( иконка в верхнем правом углу экрана) Графа  « Мои бонусы»</p>
			<h3>Как потратить?</h3>
        	<p>При оплате онлайн , вбейте сумму бонусов, которой вы хотите оплатить услуги, в графу:  «Списать бонусы». Вы можете оплатить 100% стоимости любой услуги  бонусами.</p>";
    }

    public function getQRInformation() {
        return "Поделитесь QR-кодом, чтобы получить бонусы!";
    }

    public function getPaymentInformation() {
        return [
            'max_percent' => 100,
            'services' => [1, 2, 3, 4, 5, 6],
            'message' => "Вы можете оплатить 100% от стоимости услуги бонусами!"
        ];
    }

    public function getRecurrentInformation() {
        return " http://docs.google.com/gview?embedded=true&url=" . url('/') . \Storage::url('public/documents/recurrent_rules.pdf');
    }
}
