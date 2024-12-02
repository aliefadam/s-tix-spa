<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\TransactionDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class TransactionController extends Controller
{
    public function index()
    {
        return view("backend.transaction.index");
    }

    public function create()
    {
        return view("backend.transaction.create");
    }

    public function store(Request $request, $slug)
    {
        try {
            DB::beginTransaction();
            $data_ticket = $request->data_ticket;
            $internetFee = 0;
            $transaction = Transaction::create([
                "id" => "1",
                "invoice" => "INV-" . Str::upper(Str::random(10)) . "-" . date("Ymd"),
                "user_id" => Auth::user()->id,
                "event_id" => $request->event_id,
                "sub_total" => $data_ticket["sub_total"],
                "tax_percent" => $data_ticket["tax"],
                "tax_amount" => $data_ticket["tax_amount"],
                "internet_fee" => $internetFee,
                "promo_code" => $request->promo_code ?? null,
                "promo_percent" => $request->promo_percent ?? null,
                "promo_amount" => $request->promo_amount ?? null,
                "total" => $data_ticket["sub_total"] + $data_ticket["tax_amount"] + $internetFee,
                "payment" => json_encode([
                    "method" => $request["payment_method"],
                    "data" => "123123123",
                    "expiration_date" => now()->addDays(1),
                ]),
                "status" => "Menunggu Pembayaran",
            ]);

            $pembeli = $data_ticket["pembeli"];
            TransactionDetail::create([
                "transaction_id" => $transaction["id"],
                "ticket_id" => null,
                "type" => "pembeli",
                "name" => $pembeli["name"],
                "email" => $pembeli["email"],
                "date_of_birth" => $pembeli["tanggal_lahir"],
                "gender" => $pembeli["jenis_kelamin"],
                "identity_type" => $pembeli["tipe_identitas"],
                "identity_number" => $pembeli["nomor_identitas"],
                "e_ticket" => null,
            ]);

            foreach ($data_ticket["pengunjung"] as $pengunjung) {
                TransactionDetail::create([
                    "transaction_id" => $transaction["id"],
                    "ticket_id" => $pengunjung["ticket_id"],
                    "type" => "pengunjung",
                    "name" => $pengunjung["name"],
                    "email" => $pengunjung["email"],
                    "date_of_birth" => $pengunjung["tanggal_lahir"],
                    "gender" => $pengunjung["jenis_kelamin"],
                    "identity_type" => $pengunjung["tipe_identitas"],
                    "identity_number" => $pengunjung["nomor_identitas"],
                    "e_ticket" => "E-TICKET-" . Str::upper(Str::random(10)) . Auth::user()->id . "-" . date("Ymd"),
                ]);
            }
            DB::commit();
            return redirect()->route("event.payment-waiting", [$slug, $transaction->invoice]);
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back()->with("notification", [
                "title" => "Error",
                "message" => $e->getMessage(),
                "icon" => "error",
            ]);
        }
    }

    public function show($id)
    {
        return response()->json([
            "view" => view("components.modal.modal-detail-transaksi", [
                "transaction" => Transaction::firstWhere("id", $id),
            ])->render(),
        ]);
    }

    public function edit($id)
    {
        // TODO: Implement edit() method.
    }

    public function update(Request $request, $id)
    {
        // TODO: Implement update() method.
    }

    public function destroy($id)
    {
        // TODO: Implement destroy() method.
    }
}
