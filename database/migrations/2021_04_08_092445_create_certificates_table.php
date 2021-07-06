<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCertificatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('certificates', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('source_id')->nullable();
            $table->string('name');
            $table->string('promocode');
            $table->boolean('active');
            $table->string('certificate_lastname');
            $table->string('certificate_firstname');
            $table->string('certificate_patronymic');
            $table->string('certificate_phone');
            $table->integer('certificate_months');
            $table->float('certificate_sum');
            $table->string('contact_lastname');
            $table->string('contact_firstname');
            $table->string('contact_patronymic');
            $table->string('contact_phone');
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
        Schema::dropIfExists('certificates');
    }
}
