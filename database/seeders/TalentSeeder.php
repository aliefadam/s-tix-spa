<?php

namespace Database\Seeders;

use App\Models\Talent;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TalentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $talents = [
            [
                "event_id" => 1,
                "name" => "Meiska",
                "image" => "talents/talent-meiska.jpg",
            ],
            [
                "event_id" => 1,
                "name" => "Hasan Aftershine",
                "image" => "talents/talent-hasan-aftershine.jpg",
            ],
            [
                "event_id" => 1,
                "name" => "Avogato",
                "image" => "talents/talent-avogato.jpg",
            ]
        ];

        foreach ($talents as $talent) {
            Talent::create($talent);
        }
    }
}
