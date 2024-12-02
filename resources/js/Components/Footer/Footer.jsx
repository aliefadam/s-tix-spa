import React from "react";
import FooterItem from "./FooterItem";
import FooterFollowUs from "./FooterFollowUs";

function Footer() {
    return (
        <footer className="mt-5 border-t">
            <div className="p-10 bg-teal-700 bg-opacity-5">
                <div className="grid grid-cols-5 gap-5">
                    <FooterItem
                        title={"S-TIX"}
                        links={[
                            {
                                name: "Tentang Kami",
                                url: "home",
                            },
                            {
                                name: "Syarat dan Ketentuan",
                                url: "home",
                            },
                            {
                                name: "Kebijakan Privasi",
                                url: "home",
                            },
                        ]}
                    />
                    <FooterItem
                        title={"Layanan Kami"}
                        links={[
                            {
                                name: "Ticketing Management System",
                                url: "home",
                            },
                        ]}
                    />
                    <FooterItem
                        title={"Dukungan"}
                        links={[
                            {
                                name: "Customer Service",
                                url: "home",
                            },
                        ]}
                    />
                    <FooterItem
                        title={"Lainnya"}
                        links={[
                            {
                                name: "Cara Membeli Tiket",
                                url: "home",
                            },
                        ]}
                    />
                    <div className="poppins-bold">
                        <span>Ikuti Kami</span>
                        <FooterFollowUs />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center bg-gradient-to-r from-teal-500 to-teal-700 py-4 text-white">
                <span className="text-sm poppins-medium">
                    S-Tix © 2024. All rights reserved
                </span>
            </div>
        </footer>
    );
}

export default Footer;
