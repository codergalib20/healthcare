import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import HeaderLogo from '../../images/medizoid_Logo.webp';
import './Header.css';


// Menu Active Style____________
const navbarMenuActiveStyle = {
    color: '#e83a3b',
}



const Header = () => {
    const {user, logOut} = useAuth()


    // Responsive Navbar Menu Condition_____________
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
                    <ul className="flex items-center" >
                        <NavLink className="menu-link text-gray-700 text-lg font-bold capitalize ml-8" activeStyle={navbarMenuActiveStyle} to="/home">Home</NavLink>
                        <NavLink className="menu-link text-gray-700 text-lg font-bold capitalize ml-8" activeStyle={navbarMenuActiveStyle} to="/">Service</NavLink>
                        <NavLink className="menu-link text-gray-700 text-lg font-bold capitalize ml-8" activeStyle={navbarMenuActiveStyle} to="/">About</NavLink>
                        {/* ------------Show Login and Log Out Button or Link by condition------------ */}
                        {
                            user.email ?
                                <button onClick={logOut} className="menu-link text-gray-700 text-lg font-bold capitalize ml-8">Logout</button>
                                   :
                                <NavLink className="menu-link text-gray-700 text-lg font-bold capitalize ml-8" activeStyle={navbarMenuActiveStyle} to="/login">Login</NavLink>
                        }
                        {/* --------Show user Image-------- */}
                                {
                                    user.photoURL?
                                        <div className="w-10 h-10 mx-3 rounded-full overflow-hidden">
                                            <img className="w-full" src={user.photoURL} alt={user.photoURL} />
                                        </div>
                                             :
                                         <div></div>
                                }
                            {/* ------Show User Names----- */}
                            <span className="text-lg font-medium capitalize">
                                {
                                    user.displayName ?
                                        user.displayName
                                        :
                                        ''
                                }
                            </span>
                    </ul>
                </div>
                <span onClick={()=>setMenuRes(!menuRes)} className="menu-handle"><i className={menuRes ? "fas fa-times" : "fas fa-bars"}></i></span>
            </div>
        </div>
    );
};

export default Header;