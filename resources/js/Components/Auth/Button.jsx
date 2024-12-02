import { Link } from "@inertiajs/react";
import React from "react";

function Button({ href, name, srcImage, processing, type }) {
    return (
        <>
            {type === "button" ? (
                <button
                    disabled={processing}
                    type="submit"
                    className={`text-white bg-teal-700 hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 w-[80%] ${
                        processing ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                    {name}
                </button>
            ) : (
                <Link
                    href={route(href)}
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-[80%] flex items-center justify-center gap-2"
                >
                    <img src={srcImage} className="w-[15px] " alt="" />
                    {name}
                </Link>
            )}
        </>
    );
}

export default Button;
