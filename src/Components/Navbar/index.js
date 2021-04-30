import React from 'react';
import Logo from '../../images/Logo.png';
import { Nav, NavLink, Bars, NavMenu} from './NavbarElements'

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to="/">
                <img className="logo" src={Logo} alt="Logo" />
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/projects" activeStyle>
                    Projects
                </NavLink>
                <NavLink to="/contact-me" activeStyle>
                    Contact
                </NavLink>
            </NavMenu>
        </Nav>
        </>             
    );
};

export default Navbar
