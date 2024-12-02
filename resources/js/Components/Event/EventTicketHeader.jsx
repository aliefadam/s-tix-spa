import { formatMoney } from "@/utils/formatMoney";
import React from "react";

function EventTicketHeader({ ticket }) {
    return (
        <div className="bg-gray-50 p-4 border border-teal-700 flex justify-between items-center rounded-md shadow-md">
            <div className="flex flex-col">
                <h1 className="text-gray-500 text-sm poppins-medium">
                    Kategori Tiket
                </h1>
                <span className="text-black poppins-medium mt-[3px]">
                    {ticket.name}
                </span>
            </div>
            <div className="flex flex-col">
                <h1 className="text-gray-500 text-sm poppins-medium text-right">
                    Harga
                </h1>
                <span className="text-black poppins-medium mt-[3px]">
                    {formatMoney(ticket.price)}
                </span>
            </div>
        </div>
    );
}

export default EventTicketHeader;
