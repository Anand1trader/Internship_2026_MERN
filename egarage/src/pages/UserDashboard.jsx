import React from "react";
import { Link, Outlet } from "react-router-dom";

export const UserDashboard = () => {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold">User Panel</h2>

        <nav className="space-y-4">
          <Link
            to="/user/book"
            className="block p-2 rounded hover:bg-blue-700"
          >
            🚗 Book Service
          </Link>

          <Link
            to="/user/my-bookings"
            className="block p-2 rounded hover:bg-blue-700"
          >
            📋 My Bookings
          </Link>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>

    </div>
  );
};