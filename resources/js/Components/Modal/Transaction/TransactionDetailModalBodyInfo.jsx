import React from "react";

function TransactionDetailModalBodyInfo({ transaction }) {
    return (
        <div className="space-y-4">
            <div className="flex justify-between">
                <span className="lg:text-sm text-xs">Status</span>
                <span className="lg:text-sm text-xs text-gray-600">
                    {transaction.status}
                </span>
            </div>
            <div className="flex justify-between">
                <span className="lg:text-sm text-xs">No Invoice</span>
                <span className="lg:text-sm text-xs text-gray-600">
                    {transaction.invoice}
                </span>
            </div>
            <div className="flex justify-between">
                <span className="lg:text-sm text-xs">Tanggal Pembelian</span>
                <span className="lg:text-sm text-xs text-gray-600 text-right">
                    {transaction.created_at}
                </span>
            </div>
        </div>
    );
}

export default TransactionDetailModalBodyInfo;
