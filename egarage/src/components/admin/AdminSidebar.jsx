import React, { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Users,
  Wrench,
  CalendarCheck,
  CreditCard,
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  Settings,
  TrendingUp,
  Car,
  IndianRupee,
} from "lucide-react";

import axios from "axios";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(true);

  // ✅ NEW STATS STATE
  const [stats, setStats] = useState({
    users: 0,
    garages: 0,
    bookings: 0,
    services: 0,
    revenue: 0,
  });

  // ✅ OLD STATES
  const [users, setUsers] = useState([]);
  const [garages, setGarages] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [services, setServices] = useState([]);

  // ✅ TOKEN
  const token = localStorage.getItem("token");

  // ✅ FETCH DATA
  useEffect(() => {
    fetchDashboardData();
  }, []);

  // ✅ FETCH FUNCTION
  const fetchDashboardData = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      // 🔥 ADMIN STATS API
      const statsRes = await axios.get(
        "http://localhost:3000/admin/stats",
        {
          headers,
        }
      );

      setStats(statsRes.data);

      // 🔥 OTHER APIs
      const [
        usersRes,
        garagesRes,
        bookingsRes,
        servicesRes,
      ] = await Promise.all([
        axios.get("http://localhost:3000/user", { headers }),
        axios.get("http://localhost:3000/garage", { headers }),
        axios.get("http://localhost:3000/booking", { headers }),
        axios.get("http://localhost:3000/service/services", {
          headers,
        }),
      ]);

      setUsers(usersRes.data || []);
      setGarages(garagesRes.data || []);
      setBookings(bookingsRes.data || []);
      setServices(servicesRes.data || []);

    } catch (err) {
      console.log("Dashboard Error:", err);
    }
  };

  // ✅ MENU ITEMS
  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/admin",
    },
    {
      name: "Users",
      icon: <Users size={20} />,
      path: "/admin/userpanel",
    },
    {
      name: "Garages",
      icon: <Car size={20} />,
      path: "/admin/garages",
    },
    {
      name: "Bookings",
      icon: <CalendarCheck size={20} />,
      path: "/admin/bookings",
    },
    {
      name: "Services",
      icon: <Wrench size={20} />,
      path: "/admin/adminservices",
    },
    {
      name: "Payments",
      icon: <CreditCard size={20} />,
      path: "/admin/payments",
    },
  ];

  // ✅ LOGOUT
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="flex bg-[#0B1120] text-white min-h-screen overflow-hidden">

      {/* 🔥 SIDEBAR */}
      <motion.div
        animate={{ width: sidebarOpen ? 260 : 90 }}
        className="bg-[#111827] border-r border-white/10 min-h-screen p-4 hidden md:block"
      >

        {/* LOGO */}
        <div className="flex items-center justify-between mb-10">

          {sidebarOpen && (
            <h1 className="text-2xl font-extrabold text-blue-400">
              E-GARAGE
            </h1>
          )}

          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MENU */}
        <div className="space-y-3">

          {menuItems.map((item, i) => {
            const active = location.pathname === item.path;

            return (
              <button
                key={i}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300
                ${
                  active
                    ? "bg-blue-600 shadow-lg shadow-blue-600/30"
                    : "hover:bg-white/10"
                }`}
              >
                {item.icon}

                {sidebarOpen && (
                  <span className="font-medium">
                    {item.name}
                  </span>
                )}
              </button>
            );
          })}

          {/* ✅ LOGOUT */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-red-600/20 text-red-400 mt-10"
          >
            <LogOut size={20} />

            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </motion.div>

      {/* 🔥 MAIN CONTENT */}
      <div className="flex-1 overflow-y-auto">

        {/* 🔹 TOPBAR */}
        <div className="sticky top-0 z-50 bg-[#0F172A]/80 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex justify-between items-center">

          {/* SEARCH */}
          <div className="flex items-center bg-white/10 px-4 py-2 rounded-xl w-[350px]">
            <Search size={18} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none ml-3 w-full text-sm"
            />
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-5">

            <button className="relative">
              <Bell className="text-gray-300" />

              <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] px-1 rounded-full">
                3
              </span>
            </button>

            <button>
              <Settings className="text-gray-300" />
            </button>

            <div className="flex items-center gap-3 bg-white/10 px-3 py-2 rounded-xl">
              <img
                src="https://i.pravatar.cc/40"
                alt="admin"
                className="w-10 h-10 rounded-full"
              />

              <div>
                <h3 className="text-sm font-semibold">
                  Admin
                </h3>

                <p className="text-xs text-gray-400">
                  Administrator
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 🔥 DASHBOARD */}
        {location.pathname === "/admin" && (
          <div className="p-6">

            {/* TITLE */}
            <div className="mb-8">
              <h1 className="text-4xl font-extrabold">
                Admin Dashboard 🚀
              </h1>

              <p className="text-gray-400 mt-2">
                Monitor garages, services, users &
                bookings in real-time.
              </p>
            </div>

            {/* ✅ NEW PROFESSIONAL STATS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">

              <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-6 rounded-2xl shadow-xl">
                <h2 className="text-lg font-semibold">
                  Users
                </h2>

                <p className="text-3xl font-bold mt-2">
                  {stats.users}
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 rounded-2xl shadow-xl">
                <h2 className="text-lg font-semibold">
                  Garages
                </h2>

                <p className="text-3xl font-bold mt-2">
                  {stats.garages}
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-600 to-emerald-400 p-6 rounded-2xl shadow-xl">
                <h2 className="text-lg font-semibold">
                  Bookings
                </h2>

                <p className="text-3xl font-bold mt-2">
                  {stats.bookings}
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-yellow-400 p-6 rounded-2xl shadow-xl">
                <h2 className="text-lg font-semibold">
                  Services
                </h2>

                <p className="text-3xl font-bold mt-2">
                  {stats.services}
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 rounded-2xl shadow-xl">
                <h2 className="text-lg font-semibold">
                  Revenue
                </h2>

                <p className="text-3xl font-bold mt-2">
                  ₹{stats.revenue}
                </p>
              </div>

            </div>

            {/* 🔹 ANALYTICS */}
            <div className="grid lg:grid-cols-3 gap-6 mt-10">

              {/* RECENT BOOKINGS */}
              <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6">

                <div className="flex justify-between items-center mb-6">

                  <h2 className="text-2xl font-bold">
                    Recent Bookings
                  </h2>

                  <TrendingUp className="text-green-400" />
                </div>

                <div className="space-y-4">

                  {bookings.slice(0, 5).map((booking, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center bg-white/5 p-4 rounded-xl"
                    >
                      <div>
                        <h3 className="font-semibold">
                          Booking #{i + 1}
                        </h3>

                        <p className="text-sm text-gray-400">
                          {booking.date
                            ? new Date(
                                booking.date
                              ).toDateString()
                            : "No Date"}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-green-400 font-bold">
                          ₹{booking.price}
                        </p>

                        <span className="text-xs bg-green-500/20 px-2 py-1 rounded-full text-green-300">
                          Completed
                        </span>
                      </div>
                    </div>
                  ))}

                </div>
              </div>

              {/* QUICK ACTIONS */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <h2 className="text-2xl font-bold mb-6">
                  Quick Actions
                </h2>

                <div className="space-y-4">

                  <button
                    onClick={() =>
                      navigate("/admin/garages")
                    }
                    className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-xl"
                  >
                    Manage Garages
                  </button>

                  <button
                    onClick={() =>
                      navigate("/admin/adminservices")
                    }
                    className="w-full bg-purple-600 hover:bg-purple-500 py-3 rounded-xl"
                  >
                    Manage Services
                  </button>

                  <button
                    onClick={() =>
                      navigate("/admin/bookings")
                    }
                    className="w-full bg-green-600 hover:bg-green-500 py-3 rounded-xl"
                  >
                    View Bookings
                  </button>

                  <button
                    onClick={() =>
                      navigate("/admin/payments")
                    }
                    className="w-full bg-orange-600 hover:bg-orange-500 py-3 rounded-xl"
                  >
                    Payment Reports
                  </button>

                </div>
              </div>
            </div>

            {/* 🔹 SERVICES TABLE */}
            <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-6">

              <h2 className="text-2xl font-bold mb-6">
                Services Overview
              </h2>

              <div className="overflow-x-auto">

                <table className="w-full">

                  <thead>
                    <tr className="text-left border-b border-white/10">
                      <th className="pb-4">Service</th>
                      <th className="pb-4">Price</th>
                      <th className="pb-4">Discount</th>
                      <th className="pb-4">Status</th>
                    </tr>
                  </thead>

                  <tbody>

                    {services.slice(0, 6).map((service, i) => (
                      <tr
                        key={i}
                        className="border-b border-white/5 hover:bg-white/5"
                      >
                        <td className="py-4">
                          {service.name}
                        </td>

                        <td className="py-4">
                          ₹{service.price}
                        </td>

                        <td className="py-4">
                          {service.discount || 0}%
                        </td>

                        <td className="py-4">
                          <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                            Active
                          </span>
                        </td>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 🔥 CHILD ROUTES */}
        {location.pathname !== "/admin" && (
          <div className="p-6">
            <Outlet />
          </div>
        )}
      </div>
    </div>
  );
};