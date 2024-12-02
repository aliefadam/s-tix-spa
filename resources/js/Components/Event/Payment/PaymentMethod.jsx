import React from "react";

function PaymentMethod({ transaction }) {
    return (
        <div className="flex items-center justify-between p-5 border-b">
            <h1 className="poppins-semibold">{transaction.payment.method}</h1>
            <img src={transaction.payment.image} className="w-[70px]" />
        </div>
    );
}

export default PaymentMethod;
