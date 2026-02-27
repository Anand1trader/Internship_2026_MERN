import React, { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

export const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/admin" },
    { name: "Users", path: "/admin/allusers" },
    { name: "Garages", path: "/admin/garages" },
    { name: "Bookings", path: "/admin/bookings" },
    { name: "Services", path: "/admin/adminservices" },
    { name: "Payments", path: "/admin/payments" },
  ];

  return (
    <div className="flex h-screen">
      
      {/* Sidebar */}
      <div
        className={`relative bg-gray-900 text-white p-5 pt-8 duration-300 ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-6 -right-3 bg-blue-600 text-white p-1 rounded-full"
        >
          {isOpen ? "<" : ">"}
        </button>

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400 mb-10">
          {isOpen ? "eGarage Admin" : "EA"}
        </h1>

        {/* Menu */}
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center p-2 rounded-lg hover:bg-blue-600 transition ${
                  location.pathname === item.path
                    ? "bg-blue-600"
                    : ""
                }`}
              >
                <span className={`${!isOpen && "hidden"}`}>
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Logout */}
        <div className="absolute bottom-10 left-5">
          <button className="text-red-400 hover:text-red-600">
            {isOpen ? "Logout" : "⎋"}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-100 p-6 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};