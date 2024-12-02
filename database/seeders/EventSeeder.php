<?php

namespace Database\Seeders;

use App\Models\Event;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Event::create([
            "vendor_id" => 1,
            "name" => "Smarista",
            "slug" => "smarista",
            "tax" => 10,
            "description" => '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis porro perspiciatis natus voluptatibus rerum, fugiat nemo eaque quos cupiditate libero modi eligendi dolores architecto dolorum repellat, nesciunt ad et. Quaerat voluptatibus itaque ratione pariatur nihil architecto voluptatem magni velit ullam dolorum, commodi exercitationem illo ea, aliquid culpa sed, similique dolor facere? Repellendus deleniti quibusdam, fugit nulla voluptate necessitatibus quo, laudantium eius cum sint, fuga perferendis inventore omnis. Sequi, ipsum accusamus? Quae, doloribus itaque, labore optio sint numquam, soluta recusandae hic quam quibusdam commodi natus porro harum ea? Accusantium neque ea illo eos, tempore aspernatur! Explicabo maiores molestiae laboriosam dicta veniam!</p>',
            "start_date" => "2024-11-18",
            "start_time" => "00:00:00",
            "end_date" => "2024-11-25",
            "end_time" => "00:00:00",
            "building_name" => "Balai Kota Surabaya",
            "address" => "Jl. Taman Surya No.1, Ketabang, Kec. Genteng, Surabaya, Jawa Timur 60272",
            "maps_link" => "https://www.google.com/maps/place/?q=place_id:ChIJ89IIa2T51y0RWdw8G5i2iLg",
            "banner" => "banners/banner-smarista.jpg",
        ]);
    }
}
