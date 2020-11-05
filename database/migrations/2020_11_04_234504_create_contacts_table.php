<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContactsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->text('keywords');
            $table->string('phone');
            $table->string('email');
            $table->string('address');
            $table->string('instagram');
            $table->string('whatsapp');
            $table->string('yandex');
            $table->text('yandex_script')->nullable();
            $table->text('google_script')->nullable();
            $table->text('other_script')->nullable();
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
        Schema::dropIfExists('contacts');
    }
}
