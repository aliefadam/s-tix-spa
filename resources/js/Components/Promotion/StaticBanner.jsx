import React from "react";

function StaticBanner({ image }) {
    return (
        <>
            <a href="">
                <img
                    src={image}
                    className="w-full h-[calc(250px-14px)] rounded-xl border-[3px] border-teal-700 shadow-md object-cover"
                    alt=""
                />
            </a>
        </>
    );
}

export default StaticBanner;
