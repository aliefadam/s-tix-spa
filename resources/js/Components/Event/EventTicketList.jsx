import React from "react";

function EventTicketList({ tickets, setCounter }) {
    return (
        <>
            {tickets.map((ticket, i) => (
                <div
                    key={i}
                    className="border border-teal-700 shadow-md rounded-md flex items-center justify-between p-5"
                >
                    <div className="flex flex-col gap-2">
                        <span className="">{ticket.name}</span>
                        <span className="poppins-semibold">
                            {ticket.format_price}
                        </span>
                    </div>
                    <div className="flex items-center gap-3 action">
                        <input
                            type="hidden"
                            className="price"
                            defaultValue={ticket.price}
                        />
                        <button
                            onClick={(e) => {
                                const inputElement = e.target
                                    .closest("div")
                                    .querySelector(".count");
                                setCounter("minus", inputElement, ticket.id);
                            }}
                            type="button"
                            className="btn-minus text-red-700 border-2 border-red-700 hover:bg-red-700 hover:bg-opacity-20 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                        >
                            <i className="fa-solid fa-minus" />
                        </button>
                        <input
                            type="number"
                            name={`count[${ticket.id}]`}
                            readOnly=""
                            defaultValue={0}
                            className="poppins-medium count text-center bg-gray-100 border border-black text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-[80px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black-500 dark:focus:border-black-500"
                        />
                        <button
                            onClick={(e) => {
                                const inputElement = e.target
                                    .closest("div")
                                    .querySelector(".count");
                                setCounter("plus", inputElement, ticket.id);
                            }}
                            type="button"
                            className="btn-plus text-teal-700 border-2 border-teal-700 hover:bg-teal-700 hover:bg-opacity-20 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800"
                        >
                            <i className="fa-solid fa-plus" />
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default EventTicketList;
