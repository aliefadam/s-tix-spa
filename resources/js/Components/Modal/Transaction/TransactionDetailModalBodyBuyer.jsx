import React from "react";

function TransactionDetailModalBodyBuyer({ buyer }) {
    return (
        <div className="space-y-4">
            <h1 className="poppins-semibold lg:text-base text-sm">
                Detail Pembeli
            </h1>
            <div className="flex justify-between">
                <span className="lg:text-sm text-xs flex-[3]">Email</span>
                <span className="lg:text-sm text-xs flex-[2] text-gray-600 text-end">
                    {buyer.email}
                </span>
            </div>
            <div className="flex justify-between">
                <span className="lg:text-sm text-xs flex-[3]">Nama</span>
                <span className="lg:text-sm text-xs flex-[2] text-gray-600 text-end">
                    {buyer.name}
                </span>
            </div>
            <div className="flex justify-between">
                <span className="lg:text-sm text-xs flex-[3]">
                    Jenis Kelamin
                </span>
                <span className="lg:text-sm text-xs flex-[2] text-gray-600 text-end">
                    {buyer.gender}
                </span>
            </div>
            <div className="flex justify-between">
                <span className="lg:text-sm text-xs flex-[3]">
                    Tanggal Lahir
                </span>
                <span className="lg:text-sm text-xs flex-[2] text-gray-600 text-end">
                    {buyer.date_of_birth}
                </span>
            </div>
            <div className="flex justify-between">
                <span className="lg:text-sm text-xs flex-[3]">
                    Tipe Identitas
                </span>
                <span className="lg:text-sm text-xs flex-[2] text-gray-600 text-end">
                    {buyer.identity_type}
                </span>
            </div>
            <div className="flex justify-between">
                <span className="lg:text-sm text-xs flex-[3]">
                    Nomor Identitas
                </span>
                <span className="lg:text-sm text-xs flex-[2] text-gray-600 text-end">
                    {buyer.identity_number}
                </span>
            </div>
        </div>
    );
}

export default TransactionDetailModalBodyBuyer;
