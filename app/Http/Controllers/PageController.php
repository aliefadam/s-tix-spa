<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\MethodPayment;
use App\Models\Ticket;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {
        return Inertia::render("frontend/Welcome", [
            "title" => "Beranda",
            "events" => Event::all()->map(function ($event) {
                return [
                    "id" => $event->id,
                    "name" => $event->name,
                    "slug" => $event->slug,
                    "date" => $event->start_date->translatedFormat('l, d F Y'),
                    "building_name" => $event->building_name,
                    "address" => $event->address,
                    "price" => formatMoney($event->ticket()->min('price')),
                    "banner" => upload_asset($event->banner),
                ];
            }),
            "static_banner" => [
                asset("imgs/gambar-4.jpg"),
                asset("imgs/gambar-5.jpg"),
            ],
            "carousel" => [
                asset("imgs/gambar-2.jpg"),
                asset("imgs/gambar-3.jpg"),
            ]
        ]);
    }

    public function event($slug)
    {
        return Inertia::render("frontend/Event/EventDetail", [
            "title" => "Event",
            "event" => mappingEvent(Event::firstWhere("slug", $slug)),
        ]);
    }

    public function eventTickets($slug)
    {
        return Inertia::render("frontend/Event/EventTicket", [
            "title" => "Pilih Tiket",
            "event" => mappingEvent(Event::firstWhere("slug", $slug)),
        ]);
    }

    public function eventDataDiri(Request $request, $slug)
    {
        $data_ticket = [];
        foreach ($request->count as $count) {
            if ($count != null) {
                for ($i = 1; $i <= $count["count"]; $i++) {
                    array_push($data_ticket, [
                        "id" => $count["id"],
                        "name" => Ticket::firstWhere("id",  $count["id"])->name,
                        "price" => Ticket::firstWhere("id",  $count["id"])->price,
                    ]);
                }
            }
        }

        $sub_total = array_sum(Arr::pluck($data_ticket, "price"));
        $tax = Event::firstWhere("slug", $slug)->tax;
        $taxAmount = $sub_total * $tax / 100;
        $total = $sub_total + $taxAmount;

        if (!Auth::check()) {
            session()->put("redirect", [
                "route" => route("event.tickets", $slug),
            ]);
            return redirect()->route("login");
        }

        if (session("redirect")) {
            session()->forget("redirect");
        }

        return Inertia::render("frontend/Event/EventDataDiri", [
            "title" => "Data Diri",
            "profile" => Auth::user(),
            "event" => mappingEvent(Event::firstWhere("slug", $slug)),
            "data_ticket" => [
                "tickets" => $data_ticket,
                "sub_total" => $sub_total,
                "tax" => $tax,
                "tax_amount" => $taxAmount,
                "total" => $total,
            ],
        ]);
    }

    public function eventPembayaran(Request $request, $slug)
    {
        $data_pengunjung = [];
        foreach ($request->data_pengunjung as $key => $pengunjung) {
            array_push($data_pengunjung, [
                "ticket_id" => $pengunjung["ticket_id-{$key}"],
                "name" => $pengunjung["name"],
                "email" => $pengunjung["email"],
                "tanggal_lahir" => $pengunjung["year"] . "-" . $pengunjung["month"] . "-" . $pengunjung["date"],
                "jenis_kelamin" => $pengunjung["gender-{$key}"],
                "tipe_identitas" => $pengunjung["identity_type"],
                "nomor_identitas" => $pengunjung["identity_number"],
            ]);
        }

        $data_ticket = [
            "pembeli" => [
                "name" => $request->data_pembeli["name"],
                "email" => $request->data_pembeli["email"],
                "tanggal_lahir" => $request->data_pembeli["year"] . "-" . $request->data_pembeli["month"] . "-" . $request->data_pembeli["date"],
                "jenis_kelamin" => $request->data_pembeli["gender"],
                "tipe_identitas" => $request->data_pembeli["identity_type"],
                "nomor_identitas" => $request->data_pembeli["identity_number"],
            ],
            "pengunjung" => $data_pengunjung,
            "sub_total" => $request["sub_total"],
            "tax" => $request["tax"],
            "tax_amount" => $request["tax_amount"],
            "total" => $request["total"],
        ];

        return Inertia::render("frontend/Event/EventPayment", [
            "title" => "Data Diri",
            "event" => mappingEvent(Event::firstWhere("slug", $slug)),
            "data_ticket" => $data_ticket,
            "method_payment" => [
                "virtual_account" => MethodPayment::where("type", "virtual_account")->get(),
                "e_wallet" => MethodPayment::where("type", "e_wallet")->orWhere("type", "qris")->get(),
            ],
        ]);
    }

    public function eventPaymentWaiting($slug, $invoice)
    {
        $transaction = Transaction::firstWhere("invoice", $invoice);
        return Inertia::render("frontend/Event/EventPaymentWaiting", [
            "title" => "Menunggu Pembayaran",
            "transaction" => [
                "invoice" => $transaction->invoice,
                "status" => $transaction->status,
                "event" => mappingEvent($transaction->event),
                "buyer" => getDataPembeli($transaction->id),
                "visitor" => getDataPengunjung($transaction->id),
                "tickets" => getGroupingTicket($transaction->id),
                "payment" => [
                    "method" => json_decode($transaction->payment)->method,
                    "data" => json_decode($transaction->payment)->data,
                    "expiration_date" => formatDate(json_decode($transaction->payment)->expiration_date),
                    "expiration_date_raw" => json_decode($transaction->payment)->expiration_date,
                    "image" => MethodPayment::firstWhere("name", json_decode($transaction->payment)->method)->image
                ],
                "internet_fee" => formatMoney($transaction->internet_fee),
                "tax_percent" => $transaction->tax_percent,
                "tax_amount" => formatMoney($transaction->tax_amount),
                "total_ticket_price" => formatMoney(getTotalTicket($transaction->id)),
                "total" => formatMoney($transaction->total),
                "created_at" => formatDate($transaction->created_at),
            ],
        ]);
    }

    public function profile()
    {
        return view("frontend.user.profile", [
            "title" => "Profil",
            "profile" => Auth::user(),
        ]);
    }

    public function transaction()
    {
        return view("frontend.transaction.transaction", [
            "title" => "Transaksi",
            "transactions" => Transaction::where("user_id", Auth::user()->id)->get()
        ]);
    }

    public function ticket()
    {
        return view("frontend.ticket.ticket", [
            "title" => "Tiket",
        ]);
    }

    public function ticketDetail($id)
    {
        return view("frontend.ticket.ticket-detail", [
            "title" => "Tiket Detail",
        ]);
    }

    public function directDashboard()
    {
        return redirect()->route("admin.dashboard");
    }

    public function dashboard()
    {
        return view("backend.dashboard", [
            "title" => "Dashboard",
        ]);
    }

    public function changePassword()
    {
        return view("backend.profile.change-password", [
            "title" => "Ubah Password",
        ]);
    }
}
