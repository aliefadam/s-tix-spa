import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import { Head, usePage } from "@inertiajs/react";
import { initFlowbite } from "flowbite";
import React, { useEffect } from "react";

function UserLayout({ title, children }) {
    useEffect(() => {
        initFlowbite();
    }, []);
    return (
        <>
            <Head title={title} />
            <Navbar />
            <main className="p-10 mt-[75px] min-h-screen">
                <Head title={title}></Head>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default UserLayout;
