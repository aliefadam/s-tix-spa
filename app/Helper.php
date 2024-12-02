<?php

use App\Models\Event;
use App\Models\Menu;
use App\Models\Ticket;
use App\Models\Transaction;
use App\Models\TransactionDetail;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Symfony\Component\CssSelector\XPath\Extension\FunctionExtension;

if (!function_exists("generateQR")) {
    function generateQR($code, $size = 200)
    {
        return QrCode::size($size)->generate($code);
    }
}

if (!function_exists("generateQRWithColor")) {
    function generateQRWithColor($code, $size = 200, $color = [0, 0, 0])
    {
        return QrCode::size($size)->color($color[0], $color[1], $color[2])->generate($code);
    }
}

if (!function_exists("generateQRWithLogo")) {
    function generateQRWithLogo($code, $size = 200, $logo = 'path/to/logo.png')
    {
        return QrCode::size($size)
            ->merge($logo, 0.3)
            ->generate($code);
    }
}

if (!function_exists("generateQRAsImage")) {
    function generateQRAsImage($code, $size = 200)
    {
        return QrCode::format('png')
            ->size($size)
            ->generate($code);
    }
}

if (!function_exists("getMenuTitle")) {
    function getMenuTitle()
    {
        $role = Auth::user()->role;
        $menuTitles = collect(Menu::where("type", "title")->get())->filter(function ($menu) use ($role) {
            $roles = json_decode($menu->role);
            if (in_array($role, $roles)) {
                return $menu;
            }
        });
        return $menuTitles;
    }
}

if (!function_exists("getMenuLink")) {
    function getMenuLink($slug)
    {
        $role = Auth::user()->role;
        $menuLinks = collect(Menu::where("type", "link")->where("slug_id", $slug)->get())->filter(function ($menu) use ($role) {
            $roles = json_decode($menu->role);
            if (in_array($role, $roles)) {
                return $menu;
            }
        });
        return $menuLinks;
    }
}

if (!function_exists("static_asset")) {
    function static_asset($path)
    {
        return asset("imgs/{$path}");
    }
}

if (!function_exists("upload_asset")) {
    function upload_asset($path)
    {
        return asset("storage/{$path}");
    }
}

if (!function_exists("formatMoney")) {
    function formatMoney($number)
    {
        return "Rp. " . number_format($number, 0, ',', '.');
    }
}

if (!function_exists("formatDate")) {
    function formatDate($date)
    {
        return Carbon::parse($date)->translatedFormat("l, d F Y");
    }
}

if (!function_exists("concatDate")) {
    function concatDate($date, $month, $year)
    {
        return Carbon::create($year, $month, $date)->translatedFormat("d F Y");
    }
}

if (!function_exists("getTicket")) {
    function getTicket($id)
    {
        return Ticket::find($id);
    }
}

if (!function_exists("getTotalTicket")) {
    function getTotalTicket($transactionID)
    {
        $total = 0;
        $transaction = Transaction::find($transactionID);
        foreach ($transaction->transaction_detail as $detail) {
            if ($detail->ticket_id != null) {
                $ticket_price = getTicket($detail->ticket_id)->price;
                $total += $ticket_price;
            }
        }

        return $total;
    }
}

if (!function_exists("getGroupingTicket")) {
    function getGroupingTicket($transactionID)
    {
        $transaction = Transaction::find($transactionID);
        $data = [];
        foreach ($transaction->transaction_detail->where('ticket_id', '!=', null)->groupBy('ticket_id') as $detail) {
            foreach ($detail as $ticket) {
                array_push($data, [
                    "ticket_name" => getTicket($ticket->ticket_id)->name,
                    "ticket_count" => $detail->count(),
                    "ticket_price" => formatMoney(getTicket($ticket->ticket_id)->price),
                ]);
            }
        }
        return $data;
    }
}

if (!function_exists("getDataPembeli")) {
    function getDataPembeli($transactionID)
    {
        $transaction = Transaction::find($transactionID);
        $pembeli = $transaction->transaction_detail->firstWhere("type", "pembeli");
        return [
            "name" => $pembeli->name,
            "email" => $pembeli->email,
            "gender" => $pembeli->gender,
            "date_of_birth" => concatDate($pembeli->date, $pembeli->month, $pembeli->year),
            "identity_type" => $pembeli->identity_type,
            "identity_number" => $pembeli->identity_number
        ];
    }
}

if (!function_exists("getDataPengunjung")) {
    function getDataPengunjung($transactionID)
    {
        $transaction = Transaction::find($transactionID);
        $visitors = $transaction->transaction_detail->where("type", "pengunjung");
        $data = [];
        foreach ($visitors as $visitor) {
            array_push($data, [
                "ticket_name" => getTicket($visitor->ticket_id)->name,
                "name" => $visitor->name,
                "email" => $visitor->email,
                "gender" => $visitor->gender,
                "date_of_birth" => concatDate($visitor->date, $visitor->month, $visitor->year),
                "identity_type" => $visitor->identity_type,
                "identity_number" => $visitor->identity_number
            ]);
        }
        return $data;
    }
}

if (!function_exists("getDatePart")) {
    function getDatePart($dateString, $type)
    {
        if (empty($dateString)) {
            return null;
        }

        $parts = explode('-', $dateString);

        switch (strtolower($type)) {
            case 'day':
                return (int)$parts[2];
            case 'month':
                return (int)$parts[1];
            case 'year':
                return (int)$parts[0];
        }
    }
}

if (!function_exists("mappingEvent")) {
    function mappingEvent($event)
    {
        return [
            "id" => $event->id,
            "name" => $event->name,
            "slug" => $event->slug,
            "description" => $event->description,
            "date" => $event->start_date->translatedFormat('l, d F Y'),
            "time" => $event->start_time->format('H:i'),
            "building_name" => $event->building_name,
            "address" => $event->address,
            "price" => formatMoney($event->ticket()->min('price')),
            "banner" => upload_asset($event->banner),
            "talents" => $event->talent->map(function ($talent) {
                return [
                    "name" => $talent->name,
                    "image" => upload_asset($talent->image),
                ];
            }),
            "tickets" => $event->ticket->map(function ($ticket) {
                return [
                    "id" => $ticket->id,
                    "name" => $ticket->name,
                    "format_price" => formatMoney($ticket->price),
                    "price" => $ticket->price,
                ];
            }),
            "maps_link" => $event->maps_link,
            "url" => url("/event/{$event->slug}"),
            "created_by" => $event->vendor->user->name,
        ];
    }
}
