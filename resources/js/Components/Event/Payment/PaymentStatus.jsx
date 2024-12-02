import React from "react";

function PaymentStatus({ transaction }) {
    return (
        <div className="flex justify-between p-5 border-b">
            <h1 className="lg:text-sm text-xs">Status Pembayaran</h1>
            <div className="flex items-center gap-2 lg:text-sm text-xs text-right">
                {transaction.status === "Menunggu Pembayaran" ? (
                    <span className="poppins-semibold text-sm text-yellow-500">
                        {transaction.status}
                    </span>
                ) : transaction.status === "Sudah Dibayar" ? (
                    <span className="poppins-semibold text-sm text-green-500">
                        {transaction.status}
                    </span>
                ) : (
                    <span className="poppins-semibold text-sm text-red-500">
                        {transaction.status}
                    </span>
                )}
            </div>
        </div>
    );
}

export default PaymentStatus;
