import { Link } from "@inertiajs/react";
import React from "react";

function NavbarLink({ href, name, icon }) {
    return (
        <Link
            href={route(href)}
            className={`border ${
                route().current(href)
                    ? "bg-teal-700 text-white hover:bg-teal-800"
                    : "border-teal-700 text-teal-700 hover:bg-teal-700 hover:bg-opacity-10"
            } duration-200 focus:ring-4 focus:ring-teal-300 font-medium rounded-xl text-sm px-5 py-2.5 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800 flex items-center gap-2`}
        >
            {icon && <i className={icon}></i>}
            {name}
        </Link>
    );
}

export default NavbarLink;
