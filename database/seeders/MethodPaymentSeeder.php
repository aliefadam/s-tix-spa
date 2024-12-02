<?php

namespace Database\Seeders;

use App\Models\MethodPayment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MethodPaymentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $methodPayments = [
            [
                "name" => "BCA",
                "type" => "virtual_account",
                "image" => "/imgs/BCA.png",
                "is_active" => true,
            ],
            [
                "name" => "BNI",
                "type" => "virtual_account",
                "image" => "/imgs/BNI.png",
                "is_active" => true,
            ],
            [
                "name" => "BRI",
                "type" => "virtual_account",
                "image" => "/imgs/BRI.png",
                "is_active" => true,
            ],
            [
                "name" => "MANDIRI",
                "type" => "virtual_account",
                "image" => "/imgs/MANDIRI.png",
                "is_active" => true,
            ],
            [
                "name" => "DANA",
                "type" => "e_wallet",
                "image" => "/imgs/dana.png",
                "is_active" => true,
            ],
            [
                "name" => "OVO",
                "type" => "e_wallet",
                "image" => "/imgs/ovo.png",
                "is_active" => true,
            ],
            [
                "name" => "Shoope Pay",
                "type" => "e_wallet",
                "image" => "/imgs/spay.png",
                "is_active" => true,
            ],
            [
                "name" => "QRIS",
                "type" => "qris",
                "image" => "/imgs/qris.png",
                "is_active" => true,
            ]
        ];
        MethodPayment::insert($methodPayments);
    }
}
