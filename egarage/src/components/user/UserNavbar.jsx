import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const UserNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/user/about" },
    { name: "SERVICES", path: "/user/services" },
    { name: "CONTACT", path: "/user/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">

      {/* 🔥 TOP BAR */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-black text-gray-300 text-sm flex justify-between px-8 py-2 backdrop-blur-lg border-b border-white/10">
        <p>📍 Ahmedabad, India</p>
        <p>⏰ Mon - Fri : 09:00 AM - 09:00 PM</p>
      </div>

      {/* 🔥 NAVBAR */}
      <div className="flex justify-between items-center px-10 py-4 bg-gradient-to-r from-blue-950 via-blue-900 to-black backdrop-blur-xl shadow-lg border-b border-white/10">

        {/* 🚗 LOGO */}
        <h1 className="text-2xl font-extrabold text-blue-400 flex items-center gap-2 tracking-wide">
          🚗 eGarage
        </h1>

        {/* 🔥 ADVANCED MENU */}
        <ul className="hidden md:flex gap-6 font-semibold">
          {menuItems.map((item, index) => {
            const isActive =
              item.path === "/"
                ? location.pathname === "/"
                : location.pathname.includes(item.path.split("/").pop());

            return (
              <li key={index} className="relative group">
                <Link
                  to={item.path}
                  className={`relative px-5 py-2 rounded-xl transition-all duration-500 
                  backdrop-blur-md border overflow-hidden
                  ${
                    isActive
                      ? "text-white border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                      : "text-gray-300 border-white/10 hover:text-white"
                  }`}
                >
                  {/* ✨ Moving Gradient */}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 opacity-0 group-hover:opacity-20 animate-[gradientMove_3s_linear_infinite]"></span>

                  {/* 🔤 TEXT */}
                  <span className="relative z-10">{item.name}</span>

                  {/* 🎯 UNDERLINE ANIMATION */}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* 🔥 BUTTONS */}
        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-4 py-2 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition backdrop-blur-lg hover:shadow-[0_0_10px_rgba(59,130,246,0.8)]"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:scale-105 transition shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.9)]"
          >
            Signup
          </Link>
        </div>

        {/* 📱 MOBILE BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* 📱 MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-blue-950 text-white flex flex-col items-center gap-4 py-6 shadow-lg">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-blue-500/30 transition hover:shadow-[0_0_10px_rgba(59,130,246,0.8)]"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* 🔹 PAGE CONTENT */}
      <div className="flex-1 bg-gradient-to-br from-blue-950 via-black to-blue-900 text-white">
        <Outlet />
      </div>

      {/* 🔥 CUSTOM ANIMATION */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% }
            100% { background-position: 200% }
          }
        `}
      </style>
    </div>
  );
};