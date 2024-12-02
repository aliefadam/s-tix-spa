import { Link } from "@inertiajs/react";
import React from "react";

function PaymentButton({ type, route, name }) {
    const getVariant = () => {
        if (type == "filled") {
            return "text-white bg-teal-700 hover:bg-teal-800";
        } else {
            return "hover:bg-teal-700 hover:bg-opacity-20 text-teal-700 border border-teal-700";
        }
    };
    return (
        <Link
            href={route}
            className={`text-center lg:py-2.5 py-2 flex-[1] text-sm poppins-semibold rounded-lg duration-300 focus:ring-4 focus:ring-teal-300 ${getVariant()}`}
        >
            {name}
        </Link>
    );
}

export default PaymentButton;
