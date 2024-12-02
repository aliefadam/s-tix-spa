import React from "react";

function EventBanner({ path }) {
    return (
        <img
            src={path}
            className="w-full h-[500px] object-cover rounded-md"
            alt=""
        />
    );
}

export default EventBanner;
