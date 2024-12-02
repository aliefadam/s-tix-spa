import React from "react";

function EventLineUp({ talents }) {
    return (
        <>
            <h1 className="text-2xl poppins-semibold">Lineup</h1>
            <div className="grid grid-cols-4 gap-5 mt-5">
                {talents.map((talent, i) => (
                    <div
                        key={i}
                        className="border border-teal-700 rounded-lg shadow-sm overflow-hidden"
                    >
                        <img
                            src={talent.image}
                            className="border-b border-teal-700 w-full h-[250px] object-cover"
                            alt=""
                        />
                        <div className="p-5">
                            <h1 className="text-center text-teal-700 poppins-semibold">
                                {talent.name}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default EventLineUp;
