import { usePage } from "@inertiajs/react";
import React from "react";
import NavbarLink from "./NavbarLink";

function NavbarMenu() {
    const { auth } = usePage().props;
    return (
        <div className="flex items-center gap-3">
            <NavbarLink
                href={"home"}
                icon={"fa-regular fa-home"}
                name={"Beranda"}
            />
            {auth ? (
                <>
                    <NavbarLink
                        href={"transaction"}
                        icon={"fa-regular fa-money-from-bracket"}
                        name={"Transaksi"}
                    />
                    <NavbarLink
                        href={"ticket"}
                        icon={"fa-regular fa-ticket"}
                        name={"Tiket"}
                    />
                    <NavbarLink
                        href={"profile"}
                        icon={"fa-regular fa-user"}
                        name={auth.name}
                    />
                </>
            ) : (
                <>
                    <NavbarLink href={"login"} name={"Masuk"} />
                    <NavbarLink href={"register"} name={"Daftar"} />
                </>
            )}
        </div>
    );
}

export default NavbarMenu;
