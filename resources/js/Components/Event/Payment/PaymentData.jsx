import React from "react";

function PaymentData({ transaction }) {
    return (
        <div className="flex items-center justify-between p-5 border-b">
            <h1 className="lg:text-sm text-xs">Nomor Virtual Account</h1>
            <div className="flex items-center gap-2">
                <span className="poppins-semibold lg:text-base text-sm">
                    {transaction.payment.data}
                </span>
                <i
                    id="btn-salin-va"
                    data-virtual-account={transaction.payment.data}
                    className="cursor-pointer fa-regular fa-copy text-teal-700 hover:text-teal-800 text-semibold"
                />
            </div>
        </div>
    );
}

export default PaymentData;
