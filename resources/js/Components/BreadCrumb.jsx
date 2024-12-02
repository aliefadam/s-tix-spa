import { Link } from "@inertiajs/react";
import React from "react";

function BreadCrumb({ before, active }) {
    return (
        <div className="flex items-center gap-2 text-sm h-fit">
            {before &&
                before.map((item, index) => (
                    <React.Fragment key={index}>
                        {item.back ? (
                            <Link
                                href="javascript:void(0)"
                                id="back"
                                className="text-teal-700 hover:underline"
                            >
                                {item.name}
                            </Link>
                        ) : (
                            <Link
                                href={item.url}
                                className="text-teal-700 hover:underline"
                            >
                                {item.name}
                            </Link>
                        )}
                        <i className="fa-regular fa-angle-right"></i>
                    </React.Fragment>
                ))}
            <span className="text-gray-700 flex items-center gap-2">
                {active}
            </span>
        </div>
    );
}

export default BreadCrumb;
