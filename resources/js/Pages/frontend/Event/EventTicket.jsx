import BreadCrumb from "@/Components/BreadCrumb";
import EventDetailPanel from "@/Components/Event/EventDetailPanel";
import EventTicketList from "@/Components/Event/EventTicketList";
import UserLayout from "@/Layouts/UserLayout";
import { formatMoney } from "@/utils/formatMoney";
import { useForm } from "@inertiajs/react";
import React from "react";

function EventTicket({ event }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        count: [],
    });

    const before = [
        {
            url: route("home"),
            name: "Beranda",
        },
        {
            url: route("event", event.slug),
            name: event.name,
        },
    ];
    const active = "Pilih Tiket";

    const setCounter = (type, countElement, id) => {
        const count = +countElement.value;

        if (type === "plus") {
            countElement.value = count + 1;
            const newCount = [...data.count];
            newCount[id] = {
                id: id,
                count: count + 1,
            };
            setData("count", newCount);
        } else {
            if (count > 0) {
                countElement.value = count - 1;
            }
            const newCount = [...data.count];
            newCount[id] = {
                id: id,
                count: count - 1,
            };
            setData("count", newCount);
        }

        calculateTotalTicket();
    };

    const calculateTotalTicket = () => {
        let total = 0;
        let totalTicket = 0;
        const actions = document.querySelectorAll(".action");
        actions.forEach((action) => {
            const count = +action.querySelector(".count").value;
            const price = +action.querySelector(".price").value;
            total += count * price;
            totalTicket += count;
        });

        document.getElementById(
            "total-ticket"
        ).innerHTML = `${totalTicket} Tiket Dipesan`;
        document.getElementById("total").innerHTML = formatMoney(total);
    };

    const handleCheckout = (e) => {
        e.preventDefault();

        post(route("event.data-diri", event.slug));
    };

    return (
        <UserLayout title={"Detail Event"}>
            <BreadCrumb active={active} before={before} />

            <div className="mt-10 min-h-[50vh]">
                <form
                    onSubmit={handleCheckout}
                    action={route("event.data-diri", event.slug)}
                    method="POST"
                >
                    <div className="mt-8 grid grid-cols-12 gap-8 min-h-[80vh]">
                        <div className="col-span-8 h-fit">
                            <div className="border p-5 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-md">
                                <span className="text-center block">
                                    Kategori Tiket
                                </span>
                            </div>
                            <div className="flex flex-col mt-5 gap-5">
                                <EventTicketList
                                    setCounter={setCounter}
                                    tickets={event.tickets}
                                />
                            </div>
                        </div>
                        <EventDetailPanel event={event} />
                    </div>
                </form>
            </div>
        </UserLayout>
    );
}

export default EventTicket;
