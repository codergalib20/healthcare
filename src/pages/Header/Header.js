import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import HeaderLogo from '../../images/medizoid_Logo.webp';
import './Header.css';


// Menu Active Style____________
const navbarMenuActiveStyle = {
    color: '#e83a3b',
}



const Header = () => {
    const [menuRes, setMenuRes] = useState(false);
    const onClickResponsiveMenu = () => {
        setMenuRes(true)
    }
    return (
        <div className="bg-yellow-200 z-10 py-3 fixed w-full left-0 top-0">
            <div className="container mx-auto px-3 h-8 flex items-center justify-between">
                <div className="h-8">
                    <Link to="/">
                        <img className="h-full" src={HeaderLogo} alt="" />
                    </Link>
                </div>
                <div id={menuRes ? "responsive-menus" : "responsive-menus-no-toggle"}>
                    <ul>
                        <NavLink className="menu-link text-gray-700 text-lg font-bold capitalize ml-8" activeStyle={navbarMenuActiveStyle} to="/home">Home</NavLink>
                        <NavLink className="menu-link text-gray-700 text-lg font-bold capitalize ml-8" activeStyle={navbarMenuActiveStyle} to="/">Service</NavLink>
                        <NavLink className="menu-link text-gray-700 text-lg font-bold capitalize ml-8" activeStyle={navbarMenuActiveStyle} to="/login">Login</NavLink>
                        <NavLink className="menu-link text-gray-700 text-lg font-bold capitalize ml-8" activeStyle={navbarMenuActiveStyle} to="/">About</NavLink>
                    </ul>
                </div>
                <span onClick={()=>setMenuRes(!menuRes)} className="menu-handle"><i className={menuRes ? "fas fa-times" : "fas fa-bars"}></i></span>
            </div>
        </div>
    );
};

export default Header;