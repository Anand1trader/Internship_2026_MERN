import React, { useEffect, useState } from "react";
import axios from "axios";

export const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:3000/my-bookings",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        setBookings(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Bookings</h1>

      {bookings.map((b) => (
        <div key={b._id} className="border p-4 mb-3 rounded">
          <p><b>Service:</b> {b.service?.name}</p>
          <p><b>Garage:</b> {b.garage?.name}</p>
          <p><b>Date:</b> {new Date(b.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};