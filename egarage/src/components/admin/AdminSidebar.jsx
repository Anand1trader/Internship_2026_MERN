import React, { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Users, Layers, ClipboardList, DollarSign, LogOut } from "lucide-react";

export const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/admin", icon: <Home size={20} /> },
    { name: "Users", path: "/admin/userpanel", icon: <Users size={20} /> },
    { name: "Garages", path: "/admin/garages", icon: <Layers size={20} /> },
    { name: "Bookings", path: "/admin/bookings", icon: <ClipboardList size={20} /> },
    { name: "Services", path: "/admin/adminservices", icon: <Layers size={20} /> },
    { name: "Payments", path: "/admin/payments", icon: <DollarSign size={20} /> },
  ];

  return (
    <div className={darkMode ? "flex h-screen bg-gray-900 text-white" : "flex h-screen bg-gray-100 text-gray-800"}>
      
      {/* Sidebar */}
      <motion.div
        animate={{ width: isOpen ? 250 : 80 }}
        className={`relative bg-gray-900 dark:bg-gray-800 p-5 pt-8 shadow-xl`}
      >
        {/* Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-6 -right-3 bg-blue-600 text-white p-1 rounded-full shadow-lg"
        >
          {isOpen ? "<" : ">"}
        </button>

        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold text-blue-400 mb-10"
        >
          {isOpen ? "eGarage Admin" : "EA"}
        </motion.h1>

        {/* Menu */}
        <ul className="space-y-4">
          {menuItems.map((item, idx) => (
            <motion.li key={idx} whileHover={{ scale: 1.05 }}>
              <Link
                to={item.path}
                className={`flex items-center gap-4 p-2 rounded-lg transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "bg-blue-600 text-white"
                    : "text-gray-200 hover:bg-blue-600 hover:text-white"
                }`}
              >
                {item.icon}
                <span className={`${!isOpen && "hidden"} font-medium`}>{item.name}</span>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Dark Mode */}
        <div className={`absolute bottom-20 left-0 w-full px-5`}>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-2 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg w-full justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* Logout */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="absolute bottom-5 left-0 w-full flex items-center gap-4 px-5 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition"
        >
          <LogOut size={20} />
          {isOpen && <span>Logout</span>}
        </motion.button>
      </motion.div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Route ke hisaab se dynamically content */}
        <Outlet />
      </div>
    </div>
  );
};