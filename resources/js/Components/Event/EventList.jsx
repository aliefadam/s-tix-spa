import { Link } from "@inertiajs/react";
import React from "react";

function EventList({ events }) {
    return (
        <div className="grid grid-cols-4 gap-8 mt-10">
            {events.map((event, i) => (
                <Link
                    key={i}
                    href={route("event", event.slug)}
                    className="border border-teal-700 rounded-xl overflow-hidden shadow-md hover:-translate-y-1 duration-200"
                >
                    <img
                        src={event.banner}
                        className="object-cover w-full h-[220px]"
                        alt=""
                    />
                    <div className="p-4 flex flex-col gap-1 border-b border-teal-700">
                        <span className="text-xs text-gray-500 poppins-medium">
                            {event.date}
                        </span>
                        <span className="uppercase poppins-semibold text-[15px] text-teal-700">
                            {event.name}
                        </span>
                        <div className="mt-1 flex items-center gap-1.5">
                            <i className="text-xs fa-regular fa-location-dot" />
                            <span className="text-xs poppins-medium">
                                {`${
                                    event.building_name
                                } | ${event.address.toString()}`.substr(
                                    0,
                                    40
                                )}{" "}
                                ...
                            </span>
                        </div>
                    </div>
                    <div className="p-3.5 flex items-center justify-between">
                        <span className="text-sm">Mulai Dari</span>
                        <span className="text-sm poppins-semibold text-teal-700">
                            {event.price}
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default EventList;
