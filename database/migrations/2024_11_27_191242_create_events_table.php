<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->foreignId("vendor_id");
            $table->string("name");
            $table->string("slug");
            $table->double("tax");
            $table->text("description");
            $table->date("start_date");
            $table->time("start_time");
            $table->date("end_date");
            $table->time("end_time");
            $table->string("building_name");
            $table->string("address");
            $table->string("maps_link")->nullable();
            $table->string("banner");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
