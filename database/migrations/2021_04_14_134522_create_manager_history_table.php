<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateManagerHistoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('manager_history', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamp('connect_time');
            $table->integer('client_id');
            $table->boolean('payed');
            $table->integer('wallet')->comment('0 - Наличными. 1 - Каспи');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('manager_history');
    }
}
