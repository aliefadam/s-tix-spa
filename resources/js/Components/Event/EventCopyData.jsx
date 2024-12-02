import React from "react";

function EventCopyData({ index, ticketID, samakanDataPembeli }) {
    return (
        <span className="text-center block">
            <label className="inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    value=""
                    className="sr-only peer samakan-data-pembeli"
                    name={`samakan-data-pembeli[${index}]`}
                    onChange={(e) => samakanDataPembeli(e, index, ticketID)}
                />
                <div className="shadow-md relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
                <span className="ms-3 text-sm font-medium text-white dark:text-gray-300">
                    Samakan dengan data pembeli
                </span>
            </label>
        </span>
    );
}

export default EventCopyData;
