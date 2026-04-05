import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookingDate, setBookingDate] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [modalService, setModalService] = useState(null);

  // ✅ FIXED USER + GARAGE ID
  const userId = localStorage.getItem("userId");
  const garageId = "65f123abc123xyz"; // 👉 yaha real MongoDB ID daalna

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("http://localhost:3000/service/services");
        setServices(res.data);
        setLoading(false);
      } catch (err) {
        console.log("Fetch Error:", err);
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  // ✅ FIXED BOOKING FUNCTION
  const handleBooking = async () => {
    if (!bookingDate) {
      toast.error("Please select a booking date ❌");
      return;
    }

    if (!userId) {
      toast.error("User not logged in ❌");
      return;
    }

    const discount = modalService.discount || 0;
    const finalPrice =
      modalService.price - (modalService.price * discount) / 100;

    const bookingData = {
      user: userId,
      garage: garageId,
      service: modalService._id, // ✅ IMPORTANT (name nahi ID)
      date: bookingDate,
      price: finalPrice,
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/booking",
        bookingData
      );

      console.log("SUCCESS:", res.data);
      toast.success("Booking Confirmed ✅");
      setModalService(null);
    } catch (err) {
      console.log("ERROR:", err.response?.data || err.message);
      toast.error(err.response?.data?.message || "Booking failed ❌");
    }
  };

  if (loading)
    return <p className="text-center mt-10">Loading services...</p>;

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* 🌌 Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-60 dark:from-gray-800 dark:via-gray-900 dark:to-black"></div>

      <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen p-6">
        
        {/* 🔹 Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-5 right-5 px-4 py-2 rounded-lg bg-white dark:bg-gray-700"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <h1 className="text-5xl font-bold text-center mb-6">
          Our Premium Services
        </h1>

        {/* 📅 Date */}
        <div className="text-center mb-6">
          <input
            type="date"
            className="px-3 py-2 border rounded-lg"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
          />
        </div>

        {/* 🔥 SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const discount = service.discount || 0;
            const finalPrice =
              service.price - (service.price * discount) / 100;

            return (
              <motion.div
                key={service._id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition"
                whileHover={{ scale: 1.05 }}
              >
                {/* 🔥 IMAGE FIX */}
                <div className="relative group">
                  <img
                    src={
                      service.image
                        ? service.image
                        : `https://source.unsplash.com/400x300/?car,repair,${service.name}`
                    }
                    alt={service.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* 💸 DISCOUNT */}
                  {discount > 0 && (
                    <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-lg text-sm">
                      {discount}% OFF
                    </div>
                  )}
                </div>

                {/* 🔹 CONTENT */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-blue-600">
                    {service.name}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {service.description}
                  </p>

                  {/* 💰 PRICE */}
                  <div className="mb-2">
                    {discount > 0 ? (
                      <>
                        <span className="line-through text-gray-400 mr-2">
                          ₹{service.price}
                        </span>
                        <span className="text-green-500 font-bold">
                          ₹{finalPrice}
                        </span>
                      </>
                    ) : (
                      <span className="font-bold">
                        ₹{service.price}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-500 mb-3">
                    Duration: {service.duration || "N/A"}
                  </p>

                  <button
                    onClick={() => setModalService(service)}
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 🔹 MODAL */}
        {modalService && (
          <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl text-center">

              <h2 className="text-2xl font-bold">
                {modalService.name}
              </h2>

              <p className="mt-2">
                Price: ₹
                {modalService.discount
                  ? modalService.price -
                    (modalService.price * modalService.discount) / 100
                  : modalService.price}
              </p>

              <button
                onClick={handleBooking}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
              >
                Confirm
              </button>

              <button
                onClick={() => setModalService(null)}
                className="ml-3 bg-gray-400 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};