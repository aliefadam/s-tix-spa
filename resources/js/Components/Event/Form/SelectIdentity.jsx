import React from "react";

function SelectIdentity({
    identity_type,
    identity_number,
    handleChange,
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
                htmlFor="identity-type"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Nomor Identitas
            </label>
            <div className="flex">
                <select
                    id="identity-type"
                    name="identity_type"
                    value={identity_type}
                    onChange={(e) => onChange(e)}
                    className="poppins-medium bg-gray-100 rounded-s-lg border border-gray-300 text-gray-900 text-sm focus:ring-teal-500 focus:border-teal-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                >
                    <option value="">Pilih Identitas</option>
                    <option value="KTP">KTP</option>
                    <option value="SIM">SIM</option>
                    <option value="PASSPORT">Passport</option>
                </select>

                <input
                    type="number"
                    id="identity-number"
                    name="identity_number"
                    value={identity_number}
                    onChange={(e) => onChange(e)}
                    className="bg-gray-50 rounded-e-lg border border-gray-300 text-gray-900 text-sm focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                />
            </div>
        </div>
    );
}

export default SelectIdentity;
