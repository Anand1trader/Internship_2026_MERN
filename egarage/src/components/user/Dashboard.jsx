import React, { useEffect, useState } from "react";
import axios from "axios";

export const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/user/dashboard", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  }, []);

  if (!data) return <div className="text-white p-6">Loading...</div>;

  return (
    <div className="text-white p-6">

      {/* Profile */}
      <h2 className="text-2xl font-bold">{data.user.name}</h2>
      <p className="text-gray-400">{data.user.email}</p>

      {/* Stats */}
      <div className="flex gap-4 mt-4">
        <StatCard title="Bookings" value={data.stats.totalBookings} />
        <StatCard title="Active" value={data.stats.activeServices} />
        <StatCard title="Done" value={data.stats.completedServices} />
      </div>

      {/* Bookings */}
      <div className="mt-6 bg-gray-800 p-4 rounded-lg">
        <h3 className="mb-3 text-lg font-semibold">My Bookings</h3>

        {data.bookings.length === 0 ? (
          <p className="text-gray-400">No bookings found</p>
        ) : (
          data.bookings.map((b, i) => (
            <BookingRow key={i} booking={b} />
          ))
        )}
      </div>

    </div>
  );
};



// 🔥 ADD THIS (StatCard Component)
const StatCard = ({ title, value }) => (
  <div className="bg-gray-800 p-4 rounded-lg shadow w-40">
    <h4 className="text-gray-400 text-sm">{title}</h4>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);


// 🔥 ADD THIS (BookingRow Component)
const BookingRow = ({ booking }) => (
  <div className="flex justify-between border-b border-gray-700 py-2">
    <div>
      <p className="font-medium">{booking.service}</p>
      <p className="text-sm text-gray-400">{booking.garage}</p>
    </div>

    <span
      className={`px-3 py-1 rounded text-sm ${
        booking.status === "Pending"
          ? "bg-yellow-500"
          : "bg-green-500"
      }`}
    >
      {booking.status}
    </span>
  </div>
);