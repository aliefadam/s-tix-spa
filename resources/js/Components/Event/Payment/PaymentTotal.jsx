import React from "react";

function PaymentTotal({ transaction }) {
    return (
        <div className="flex items-center justify-between p-5 border-b">
            <h1 className="lg:text-sm text-xs">Total Tagihan</h1>
            <div className="flex items-center gap-2">
                <span className="poppins-semibold lg:text-base text-sm">
                    {transaction.total}
                </span>
                <span
                    data-modal-target="detail-transaksi-modal"
                    data-modal-toggle="detail-transaksi-modal"
                    className="cursor-pointer text-teal-700 hover:text-teal-800 poppins-semibold lg:text-base text-sm"
                >
                    Lihat Detail
                </span>
            </div>
        </div>
    );
}

export default PaymentTotal;
