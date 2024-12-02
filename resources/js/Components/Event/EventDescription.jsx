import React from "react";

function EventDescription({ description }) {
    return (
        <div className="mt-5 border-b border-teal-700 pb-5">
            <h1 className="text-2xl poppins-semibold">Deskripsi</h1>
            <div
                className="ckeditor mt-2"
                dangerouslySetInnerHTML={{
                    __html: description,
                }}
            />
        </div>
    );
}

export default EventDescription;
