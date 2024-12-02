<?php

namespace Database\Seeders;

use App\Models\Menu;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $menus = [
            [
                "type" => "title",
                "name" => "Menu",
                "slug" => "menu",
                "role" => json_encode(["super-admin", "vendor"]),
            ],
            [
                "type" => "link",
                "name" => "dashboard",
                "url" => "admin.dashboard",
                "icon" => "fa-regular fa-house",
                "slug_id" => "menu",
                "role" => json_encode(["super-admin", "vendor"]),
            ],
            [
                "type" => "title",
                "name" => "Event",
                "slug" => "event",
                "role" => json_encode(["super-admin", "vendor"]),
            ],
            [
                "type" => "link",
                "name" => "vendor",
                "url" => "admin.vendor.index",
                "icon" => "fa-regular fa-users",
                "slug_id" => "event",
                "role" => json_encode(["super-admin"]),
            ],
            [
                "type" => "link",
                "name" => "event",
                "url" => "admin.event.index",
                "icon" => "fa-regular fa-calendar-days",
                "slug_id" => "event",
                "role" => json_encode(["vendor"]),
            ],
            [
                "type" => "title",
                "name" => "Umum",
                "slug" => "umum",
                "role" => json_encode(["super-admin"]),
            ],
            [
                "type" => "link",
                "name" => "Pengaturan",
                "url" => "admin.vendor.index",
                "icon" => "fa-regular fa-gear",
                "slug_id" => "umum",
                "role" => json_encode(["super-admin"]),
            ],
            [
                "type" => "link",
                "name" => "Website",
                "url" => "admin.vendor.index",
                "icon" => "fa-regular fa-globe",
                "slug_id" => "umum",
                "role" => json_encode(["super-admin"]),
            ],
        ];

        foreach ($menus as $menu) {
            Menu::create($menu);
        }
    }
}
