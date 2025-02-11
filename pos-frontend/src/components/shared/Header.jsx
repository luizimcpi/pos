// import React from "react";
// import { FaSearch } from "react-icons/fa";
// import { FaUserCircle } from "react-icons/fa";
// import { FaBell } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

const Header = () => {
    return (
        <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">   
            {/* LOGO */}
            <div className="flex items-center gap-2">  
                <img src={logo} alt="restro logo" className="h-8 w-8" />
                <h1 className="text-lg font-semibold text-[#f5f5f5]">Restro</h1>
            </div>
            {/* SEARCH */}

        </header>
    );
}

export default Header;