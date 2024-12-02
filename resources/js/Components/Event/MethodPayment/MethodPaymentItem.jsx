import React from "react";

function MethodPaymentItem({ name, img, setData }) {
    return (
        <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
            <input
                id={name}
                type="radio"
                defaultValue={name}
                name="pembayaran"
                onChange={(e) => setData("payment_method", e.target.value)}
                className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
                htmlFor={name}
                className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center gap-2"
            >
                <img src={img} className="w-[50px] border p-2" alt="" />
                {name}
            </label>
        </div>
    );
}

export default MethodPaymentItem;
