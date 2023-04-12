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
import resumePdf from '../../files/mya-schmitz-resume.pdf'

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
                    to={resumePdf} target='_blank' 
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