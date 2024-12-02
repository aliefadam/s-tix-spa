import React from "react";

function TransactionDetailModalBodyVisitor({ visitor }) {
    return (
        <div className="space-y-4">
            <h1 className="poppins-semibold lg:text-base text-sm">
                Detail Pengunjung
            </h1>
            <div id="accordion-collapse" data-accordion="collapse">
                {visitor.map((pengunjung, i) => (
                    <div className="mb-3" key={i}>
                        <h2 id={`accordion-collapse-heading-${i}`}>
                            <button
                                type="button"
                                className="flex items-center justify-between w-full p-4 rounded-md rtl:text-right text-gray-500 border border-b border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                data-accordion-target={`#accordion-collapse-body-${i}`}
                                aria-expanded="false"
                                aria-controls={`accordion-collapse-body-${i}`}
                            >
                                <span className="">
                                    Data Pengunjung {i + 1}
                                </span>
                                <svg
                                    data-accordion-icon=""
                                    className="w-3 h-3 rotate-180 shrink-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id={`accordion-collapse-body-${i}`}
                            className="hidden"
                            aria-labelledby={`accordion-collapse-heading-${i}`}
                        >
                            <div className="p-5 border border-b space-y-4 border-gray-200 dark:border-gray-700">
                                <div className="flex justify-between">
                                    <span className="lg:text-sm text-xs flex-[3]">
                                        Jenis Tiket
                                    </span>
                                    <span className="lg:text-sm text-xs flex-[2] text-gray-600 text-end">
                                        {pengunjung.ticket_name}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="lg:text-sm text-xs flex-[3]">
                                        Email
                                    </span>
                                    <span className="lg:text-sm text-xs flex-[2] text-gray-600 text-end">
                                        {pengunjung.email}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="lg:text-sm text-xs flex-[3]">
                                        Nama Lengkap
                                    </span>
                                    <span className="lg:text-sm text-xs flex-[2] text-gray-600 text-end">
                                        {pengunjung.name}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="lg:text-sm text-xs flex-[3]">
                                        Jenis Kelamin
                                    </span>
                                    <span className="lg:text-sm text-xs flex-[2] text-gray-600 text-end">
                                        {pengunjung.gender}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="lg:text-sm text-xs flex-[3]">
                                        Tanggal Lahir
                                    </span>
                                    <span className="lg:text-sm text-xs flex-[2] text-gray-600 text-end">
                                        {pengunjung.date_of_birth}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="lg:text-sm text-xs flex-[3]">
                                        Tipe Identitas
                                    </span>
                                    <span className="lg:text-sm text-xs flex-[2] text-gray-600 text-end">
                                        {pengunjung.identity_type}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="lg:text-sm text-xs flex-[3]">
                                        Nomor Identitas
                                    </span>
                                    <span className="lg:text-sm text-xs flex-[2] text-gray-600 text-end">
                                        {pengunjung.identity_number}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TransactionDetailModalBodyVisitor;
