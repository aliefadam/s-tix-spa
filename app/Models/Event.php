<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    /** @use HasFactory<\Database\Factories\EventFactory> */
    use HasFactory;

    protected $guarded = ["id"];
    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
        'start_time' => 'datetime:H:i',
        'end_time' => 'datetime:H:i',
    ];

    public function vendor()
    {
        return $this->belongsTo(Vendor::class);
    }

    public function ticket()
    {
        return $this->hasMany(Ticket::class);
    }

    public function talent()
    {
        return $this->hasMany(Talent::class);
    }
}
