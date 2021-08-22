<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterColumnsClientIdConnectionIdIsActive extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('recurrings', function (Blueprint $table) {
            $table->unsignedInteger('client_id')->default(0);
            $table->unsignedInteger('connection_id')->default(0);
            $table->boolean('is_active')->default(true);
            $table->string('personal_account')->default('');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('recurrings', function (Blueprint $table) {
            $table->dropColumn('client_id');
            $table->dropColumn('connection_id');
            $table->dropColumn('is_active');
            $table->dropColumn('personal_account');
        });
    }
}
