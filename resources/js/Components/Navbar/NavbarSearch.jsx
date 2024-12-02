import React from "react";

function NavbarSearch() {
    return (
        <div className="flex w-[500px]">
            <div className="relative w-full">
                <input
                    type="search"
                    id="search"
                    className="block py-2.5 px-3 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-teal-500"
                    placeholder="Cari berdasarkan artis, acara atau nama tempat..."
                    required
                />
                <button
                    type="submit"
                    className="absolute top-0 right-0 py-2.5 px-3 text-sm font-medium h-full text-white bg-teal-700 rounded-e-lg border border-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                >
                    <i className="fa-regular fa-magnifying-glass"></i>
                </button>
            </div>
        </div>
    );
}

export default NavbarSearch;
