import React from "react";

function InputGroup({
    type,
    id,
    name,
    value,
    handleChange,
    title,
    userType,
    index = null,
    ticketID = null,
}) {
    const onChange = (e) => {
        if (userType === "pembeli") {
            handleChange(e, "data_pembeli");
        } else {
            handleChange(e, "data_pengunjung", index, ticketID);
        }
    };

    return (
        <div>
            <label
                htmlFor={id}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {title}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={(e) => onChange(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
            />
            {type === "email" && id === "email" && (
                <span className="text-xs poppins-medium text-teal-700 mt-2 block">
                    Email ini digunakan untuk mengirim E-Ticket
                </span>
            )}
        </div>
    );
}

export default InputGroup;
