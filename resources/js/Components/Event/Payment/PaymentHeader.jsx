import React from "react";

function PaymentHeader({ transaction }) {
    return (
        <div className="flex flex-col items-center text-center gap-1">
            <h1 className="poppins-semibold lg:text-xl text-lg">
                Selesaikan pembayaran dalam
            </h1>
            <span
                className="poppins-semibold tlg:ext-2xl text-xl text-teal-700 w-[200px] text-center"
                id="countdown"
                data-batas-akhir-pembayaran={
                    transaction.payment.expiration_date_raw
                }
            >
                00:00:00
            </span>
            <span className="text-gray-700 mt-2 lg:text-base text-sm">
                Batas Akhir Pembayaran
            </span>
            <h1 className="poppins-semibold lg:text-xl text-[15px] text-teal-700">
                {transaction.payment.expiration_date}
            </h1>
        </div>
    );
}

export default PaymentHeader;
