import React from "react";

function SelectBirthDate({
    date,
    month,
    year,
    handleChange,
    userType,
    index = null,
    ticketID = null,
}) {
    const onChange = (e) => {
        if (userType === "pembeli") {
            onChange(e);
        } else {
            handleChange(e, "data_pengunjung", index, ticketID);
        }
    };

    return (
        <div>
            <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Tanggal Lahir
            </label>
            <div className="grid grid-cols-3 gap-5">
                <select
                    id="date"
                    name="date"
                    value={date}
                    onChange={(e) => onChange(e)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                >
                    <option value="">Tanggal</option>
                    {Array.from({ length: 31 }, (_, i) => (
                        <option key={i} value={String(i + 1).padStart(2, "0")}>
                            {String(i + 1).padStart(2, "0")}
                        </option>
                    ))}
                </select>

                <select
                    id="month"
                    name="month"
                    value={month}
                    onChange={(e) => onChange(e)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                >
                    <option value="">Bulan</option>
                    {Array.from({ length: 12 }, (_, i) => (
                        <option key={i} value={String(i + 1).padStart(2, "0")}>
                            {String(i + 1).padStart(2, "0")}
                        </option>
                    ))}
                </select>

                <select
                    id="year"
                    name="year"
                    value={year}
                    onChange={(e) => onChange(e)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                >
                    <option value="">Tahun</option>
                    {Array.from({ length: 100 }, (_, i) => (
                        <option key={i} value={String(2024 - i)}>
                            {2024 - i}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default SelectBirthDate;
