import React from "react";

function TransactionDetailModalBodyPayment({ payment, transaction }) {
    return (
        <div className="space-y-4">
            <h1 className="poppins-semibold lg:text-base text-sm">
                Rincian Pembayaran
            </h1>
            <div className="flex justify-between">
                <span className="lg:text-sm text-xs flex-[3]">
                    Metode Pembayaran
                </span>
                <span className="lg:text-sm text-xs flex-[2] text-gray-600 text-end">
                    {payment.method}
                </span>
            </div>
            <div className="flex justify-between">
                <span className="lg:text-sm text-xs flex-[3]">Nomor VA</span>
                <span className="lg:text-sm text-xs flex-[2] text-gray-600 text-end">
                    {payment.data}
                </span>
            </div>
            <div className="flex justify-between">
                <span className="lg:text-sm text-xs flex-[3]">
                    Total Harga (1 Tiket)
                </span>
                <span className="lg:text-sm text-xs flex-[2] text-gray-600 text-end">
                    {transaction.total_ticket_price}
                </span>
            </div>
            <div className="flex justify-between">
                <span className="lg:text-sm text-xs flex-[3]">
                    Internet Fee
                </span>
                <span className="lg:text-sm text-xs flex-[2] text-gray-600 text-end">
                    {transaction.internet_fee}
                </span>
            </div>
            <div className="flex justify-between">
                <span className="lg:text-sm text-xs flex-[3]">Pajak</span>
                <span className="lg:text-sm text-xs flex-[2] text-gray-600 text-end">
                    {transaction.tax_percent}% {` (${transaction.tax_amount})`}
                </span>
            </div>
            <div className="flex justify-between poppins-semibold">
                <span className="lg:text-[15px] text-[14px] flex-[3]">
                    Total Belanja
                </span>
                <span className="lg:text-[15px] text-[14px] flex-[2] text-gray-600 text-end">
                    {transaction.total}
                </span>
            </div>
        </div>
    );
}

export default TransactionDetailModalBodyPayment;
