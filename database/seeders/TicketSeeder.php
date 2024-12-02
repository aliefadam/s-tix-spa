<?php

namespace Database\Seeders;

use App\Models\Ticket;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TicketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tickets = [
            [
                "event_id" => 1,
                "name" => "Presale 1",
                "price" => 100000,
                "sold" => 0,
                "target" => 100,
            ],
            [
                "event_id" => 1,
                "name" => "Presale 2",
                "price" => 150000,
                "sold" => 0,
                "target" => 100,
            ]
        ];

        foreach ($tickets as $ticket) {
            Ticket::create($ticket);
        }
    }
}
