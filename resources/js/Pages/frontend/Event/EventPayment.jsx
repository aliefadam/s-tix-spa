import BreadCrumb from "@/Components/BreadCrumb";
import EventDetailPanel from "@/Components/Event/EventDetailPanel";
import MethodPaymentContainer from "@/Components/Event/MethodPayment/MethodPaymentContainer";
import UserLayout from "@/Layouts/UserLayout";
import { useForm } from "@inertiajs/react";
import React from "react";

function EventPayment({ event, data_ticket, method_payment }) {
    const before = [
        {
            url: route("home"),
            name: "Beranda",
        },
        {
            url: route("event", event.slug),
            name: event.name,
        },
        {
            url: route("event.tickets", event.slug),
            name: "Pilih Tiket",
        },
        {
            url: route("event.data-diri", event.slug),
            name: "Pengisian Data Diri",
        },
    ];
    const active = "Pilih Pembayaran";

    const { data, setData, post, processing } = useForm({
        data_ticket: data_ticket,
        event_id: event.id,
        promo_code: "",
        promo_percent: "",
        promo_amount: "",
        payment_method: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("event.payment", event.slug));
    };

    return (
        <UserLayout title={"Pilih Pembayaran"}>
            <BreadCrumb active={active} before={before} />

            <form action="" onSubmit={handleSubmit} method="POST">
                <div className="mt-8 grid grid-cols-12 gap-8 min-h-[80vh]">
                    <div className="col-span-8 h-fit flex flex-col gap-5">
                        <MethodPaymentContainer
                            type={"Virtual Account"}
                            methods={method_payment.virtual_account}
                            setData={setData}
                        />
                        <MethodPaymentContainer
                            type={"E-Wallet & QRIS"}
                            methods={method_payment.e_wallet}
                            setData={setData}
                        />
                    </div>
                    <EventDetailPanel
                        ticketCount={data_ticket.pengunjung.length}
                        event={event}
                        subTotal={data_ticket.sub_total}
                        tax={data_ticket.tax}
                        taxAmount={data_ticket.tax_amount}
                        total={data_ticket.total}
                        processing={processing}
                    />
                </div>
            </form>
        </UserLayout>
    );
}

export default EventPayment;
