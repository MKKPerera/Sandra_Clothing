import React from "react";
import { FiUser } from "react-icons/fi";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between w-full px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-auto h-10" />
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-8 text-[#331D0C] font-medium text-lg">
        <li className="cursor-pointer hover:text-gray-600">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-600">
          <Link to="/bestsellers">Best Sellers</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-600">
          <Link to="/linenpage">Linen</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-600">
          <Link to="/frockpage">Dresses</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-600">
          <Link to="/tshirtpage">Tops</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-600">
          <Link to="/pantspage">Pants</Link>
        </li>
      </ul>

      {/* Contact/Login Icon */}
      <div className="text-[#331D0C] text-2xl cursor-pointer">
        <Link to="/login">
          <FiUser />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
