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
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->string("invoice");
            $table->foreignId('user_id');
            $table->foreignId('event_id');
            $table->double('sub_total');
            $table->double('tax_percent');
            $table->double('tax_amount');
            $table->double('internet_fee');
            $table->string('promo_code')->nullable();
            $table->double('promo_percent')->nullable();
            $table->double('promo_amount')->nullable();
            $table->double('total');
            $table->string('payment')->nullable();
            $table->string('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
