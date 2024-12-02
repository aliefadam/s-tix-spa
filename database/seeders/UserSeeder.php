<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        $users = [
            [
                'name' => 'Super Admin',
                'email' => 'stix@admin.com',
                "password" => bcrypt("123"),
                "role" => "super-admin",
            ],
            [
                'name' => 'Adam',
                'email' => 'aliefadam21@gmail.com',
                "password" => bcrypt("123"),
                'date_of_birth' => "2003-07-21",
                'gender' => 'Laki-laki',
                'whatsapp' => '895364711840',
                'identity_type' => 'KTP',
                'identity_number' => '123',
                'works' => 'Mahasiswa',
                'height' => 170,
                'weight' => 50,
                'religion' => 'Islam',
                'region' => 'Indonesia',
                'blood_type' => 'O',
                'role' => 'user',
            ],
            [
                'name' => 'Alief',
                'email' => 'aliefadam@gmail.com',
                "password" => bcrypt("123"),
                "role" => "vendor",
            ],
        ];

        foreach ($users as $user) {
            User::create($user);
        }
    }
}
