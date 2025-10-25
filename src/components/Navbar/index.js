import React from "react";
import {
    Nav,
    // NavLogo,
    NavLink,
    HamburgerBars,
    NavMenu,
    // NavBtn,
    // NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
                <HamburgerBars />

                <NavMenu>
                    <NavLink 
                    to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink 
                    to="/about"
                    >
                        About
                    </NavLink>
                    <NavLink 
                    to="https://drive.google.com/file/d/1r2fMy5B16Ri29AJXlN9dhR20HGJFRUZf/view?usp=drive_link" target='_blank' 
                    >
                        Resume
                    </NavLink>
                    <NavLink
                    to="/contact"
                    >
                        Contact
                    </NavLink>
                </NavMenu>
           </Nav> 
        </>
    );
};

export default Navbar;