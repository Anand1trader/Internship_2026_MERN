import React from "react";
import { Link, Outlet } from "react-router-dom";

export const UserNavbar = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Top Info Bar */}
      <div className="bg-gray-100 text-gray-600 text-sm flex justify-between px-8 py-2">
        <p>📍 Ahmedabad, India</p>
        <p>⏰ Mon - Fri : 09:00 AM - 09:00 PM</p>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-10 py-4 shadow-md bg-white">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-600 flex items-center gap-2">
          🚗 eGarage
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 font-semibold text-gray-700">
          <li>
            <Link to="/" className="hover:text-red-600">HOME</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-red-600">ABOUT</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-red-600">SERVICES</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-red-600">CONTACT</Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-4 py-2 border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Signup
          </Link>
        </div>
      </div>

      {/* Page Content Render Here */}
      <div className="flex-1">
        <Outlet />
      </div>

    </div>
  );
};