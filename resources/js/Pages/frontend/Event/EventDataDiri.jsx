import BreadCrumb from "@/Components/BreadCrumb";
import EventDataPembeliForm from "@/Components/Event/EventDataPembeliForm";
import EventDataPengunjungForm from "@/Components/Event/EventDataPengunjungForm";
import EventDetailPanel from "@/Components/Event/EventDetailPanel";
import UserLayout from "@/Layouts/UserLayout";
import getDatePart from "@/utils/getDatePart";
import { useForm } from "@inertiajs/react";
import React from "react";

function EventDataDiri({ profile, event, data_ticket }) {
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
    ];
    const active = "Pengisian Data Diri";

    const { data, setData, post, processing } = useForm({
        data_pengunjung: [],
        data_pembeli: {
            email: profile.email,
            name: profile.name,
            date: getDatePart(profile.date_of_birth, "day"),
            month: getDatePart(profile.date_of_birth, "month"),
            year: getDatePart(profile.date_of_birth, "year"),
            gender: profile.gender,
            identity_type: profile.identity_type,
            identity_number: profile.identity_number,
        },
        sub_total: data_ticket.sub_total,
        tax: data_ticket.tax,
        tax_amount: data_ticket.tax_amount,
        total: data_ticket.total,
    });

    const handleChange = (e, type, index = null, ticket_id = null) => {
        const name = e.target.name;
        const value = e.target.value;
        if (type == "data_pembeli") {
            setData("data_pembeli", {
                ...data.data_pembeli,
                [name]: value,
            });
        } else {
            const newDataPengunjung = [...data.data_pengunjung];
            newDataPengunjung[index] = {
                ...newDataPengunjung[index],
                [`ticket_id-${index}`]: ticket_id,
                [name]: value,
            };
            setData("data_pengunjung", newDataPengunjung);
        }
    };

    const samakanDataPembeli = (e, index, ticket_id) => {
        const newDataPengunjung = [...data.data_pengunjung];
        if (e.target.checked) {
            newDataPengunjung[index] = {
                ...newDataPengunjung[index],
                [`ticket_id-${index}`]: ticket_id,
                email: data.data_pembeli.email,
                name: data.data_pembeli.name,
                date: data.data_pembeli.date,
                month: data.data_pembeli.month,
                year: data.data_pembeli.year,
                [`gender-${index}`]: data.data_pembeli.gender,
                identity_type: data.data_pembeli.identity_type,
                identity_number: data.data_pembeli.identity_number,
            };
        } else {
            newDataPengunjung[index] = {
                ...newDataPengunjung[index],
                [`ticket_id-${index}`]: null,
                email: "",
                name: "",
                date: "",
                month: "",
                year: "",
                [`gender-${index}`]: "",
                identity_type: "",
                identity_number: "",
            };
        }
        setData("data_pengunjung", newDataPengunjung);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        post(route("event.pembayaran", event.slug));
    };

    return (
        <UserLayout title={"Detail Event"}>
            <BreadCrumb active={active} before={before} />

            <form action="" onSubmit={handleSubmit}>
                <div className="mt-8 grid grid-cols-12 gap-8 min-h-[80vh]">
                    <div className="col-span-8 h-fit flex flex-col gap-5 border">
                        <EventDataPembeliForm
                            data_pembeli={data.data_pembeli}
                            handleChange={handleChange}
                        />
                        <EventDataPengunjungForm
                            data_pengunjung={data.data_pengunjung}
                            handleChange={handleChange}
                            tickets={data_ticket.tickets}
                            samakanDataPembeli={samakanDataPembeli}
                        />
                    </div>
                    <div className="col-span-4 h-fit sticky top-[110px] bg-white border border-teal-700 shadow-md rounded-md">
                        <EventDetailPanel
                            processing={processing}
                            event={event}
                            subTotal={data_ticket.sub_total}
                            ticketCount={data_ticket.tickets.length}
                            tax={data_ticket.tax}
                            taxAmount={data_ticket.tax_amount}
                            total={data_ticket.total}
                        />
                    </div>
                </div>
            </form>
        </UserLayout>
    );
}

export default EventDataDiri;
