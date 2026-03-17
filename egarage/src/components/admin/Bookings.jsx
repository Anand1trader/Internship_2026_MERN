import React, { useState } from "react";
import axios from "axios";

export const Bookings = () => {
  const [form, setForm] = useState({
    user: "",
    garage: "",
    service: "",
    date: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:3000/booking",
        form
      );

      alert("Booking Done ✅");
      console.log(res.data);

      // reset form
      setForm({
        user: "",
        garage: "",
        service: "",
        date: ""
      });

    } catch (err) {
      console.log(err);
      alert("Booking failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Book Service 🚗
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* User */}
          <input
            name="user"
            value={form.user}
            onChange={handleChange}
            placeholder="User ID"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Garage */}
          <input
            name="garage"
            value={form.garage}
            onChange={handleChange}
            placeholder="Garage ID"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Service */}
          <input
            name="service"
            value={form.service}
            onChange={handleChange}
            placeholder="Service ID"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Date */}
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg text-white font-semibold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Booking..." : "Book Now"}
          </button>

        </form>
      </div>
    </div>
  );
};