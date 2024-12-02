import React from "react";
import NavbarBrand from "./NavbarBrand";
import NavbarSearch from "./NavbarSearch";
import NavbarMenu from "./NavbarMenu";

function Navbar() {
    return (
        <nav className="fixed top-0 z-20 w-full bg-white h-[80px] px-10 flex justify-between items-center shadow-md">
            <div className="flex gap-5 items-center">
                <NavbarBrand />
                <NavbarSearch />
            </div>
            <NavbarMenu />
        </nav>
    );
}

export default Navbar;
