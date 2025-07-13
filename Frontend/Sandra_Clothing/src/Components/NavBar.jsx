import React from "react";
import { FiUser } from "react-icons/fi";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-8 text-[#331D0C] font-medium text-lg">
        <li className="hover:text-gray-600 cursor-pointer">New Arrivals</li>
        <li className="hover:text-gray-600 cursor-pointer">Linen</li>
        <li className="hover:text-gray-600 cursor-pointer">Skirts</li>
        <li className="hover:text-gray-600 cursor-pointer">T-shirts</li>
      </ul>

      {/* Contact/Login Icon */}
      <div className="text-[#331D0C] text-2xl cursor-pointer">
        <FiUser />
      </div>
    </nav>
  );
};

export default NavBar;
