import { Head, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";
import Notification from "../utils/notification";

function AuthLayout({ children, title }) {
    const { notification } = usePage().props;

    useEffect(() => {
        if (notification) {
            const { title, text, icon } = notification;
            Notification({ title, text, icon });
        }
    }, [notification]);

    return (
        <>
            <Head title={title} />
            <div className="bg-[#475569] bg-opacity-10 w-full h-screen flex justify-center items-center">
                <div className="bg-[#475569] bg-opacity-10 w-full h-screen flex justify-center items-center">
                    {children}
                </div>
            </div>
        </>
    );
}

export default AuthLayout;
