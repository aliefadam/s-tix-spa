import React from "react";
import MethodPaymentItem from "./MethodPaymentItem";

function MethodPaymentContainer({ type, methods, setData }) {
    return (
        <div className="border border-teal-700 text-white rounded-md shadow-md overflow-hidden">
            <div className="p-5 bg-gradient-to-r from-teal-400 to-teal-500">
                <span className="text-center block">{type}</span>
            </div>
            <div className="p-5 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                    {methods.map((method, i) => (
                        <MethodPaymentItem
                            key={i}
                            name={method.name}
                            img={method.image}
                            setData={setData}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MethodPaymentContainer;
