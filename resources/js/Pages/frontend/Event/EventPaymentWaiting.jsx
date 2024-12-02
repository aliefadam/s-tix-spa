import PaymentButton from "@/Components/Event/Payment/PaymentButton";
import PaymentData from "@/Components/Event/Payment/PaymentData";
import PaymentHeader from "@/Components/Event/Payment/PaymentHeader";
import PaymentMethod from "@/Components/Event/Payment/PaymentMethod";
import PaymentStatus from "@/Components/Event/Payment/PaymentStatus";
import PaymentTotal from "@/Components/Event/Payment/PaymentTotal";
import TransactionDetailModal from "@/Components/Modal/Transaction/TransactionDetailModal";
import UserLayout from "@/Layouts/UserLayout";
import React from "react";

function EventPaymentWaiting({ title, transaction }) {
    return (
        <UserLayout title={title}>
            <div className="flex flex-col items-center w-full justify-center min-h-[50vh]">
                <PaymentHeader transaction={transaction} />
                {/* {"{"}
                    {"{"}-- Kalau metode pembayaran QR --{"}"}
                    {"}"}
                    @if (false)
                    <div className="flex justify-center mt-10">
                        {"{"}!! showQR($data['virtual_account'], 200) !!{"}"}
                    </div>
                    @endif */}
                <div className="lg:w-[45%] w-[95%] mt-10 border rounded-lg">
                    <PaymentMethod transaction={transaction} />
                    <PaymentData transaction={transaction} />
                    <PaymentTotal transaction={transaction} />
                    <PaymentStatus transaction={transaction} />
                </div>
                <div className="lg:w-[45%] w-[95%] flex gap-3 lg:mt-8 mt-5">
                    <PaymentButton
                        name={"Lihat Transaksi"}
                        type={"bordered"}
                        route={route("transaction")}
                    />
                    <PaymentButton
                        name={"Kembali ke beranda"}
                        type={"filled"}
                        route={route("home")}
                    />
                </div>
            </div>

            <TransactionDetailModal transaction={transaction} />
        </UserLayout>
    );
}

export default EventPaymentWaiting;
