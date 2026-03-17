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

  const userId = localStorage.getItem("userId") || "dummyUserId";
  const garageId = "defaultGarageId";

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("http://localhost:3000/service");
        setServices(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const handleBooking = async () => {
    if (!bookingDate) {
      toast.error("Please select a booking date ❌");
      return;
    }
    const bookingData = {
      user: userId,
      garage: garageId,
      service: modalService.name,
      date: bookingDate,
    };
    try {
      const res = await axios.post("http://localhost:3000/booking", bookingData);
      toast.success(`Booking confirmed for ${modalService.name} ✅`);
      setModalService(null);
      console.log(res.data);
    } catch (err) {
      console.log(err);
      toast.error("Booking failed ❌");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading services...</p>;

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* 🌌 Animated Gradient Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x opacity-60 dark:from-gray-800 dark:via-gray-900 dark:to-black transition-all duration-1000"></div>

      <div className={darkMode ? "bg-gray-900 text-white min-h-screen p-6 transition-colors duration-500" : "bg-gray-100 text-gray-800 min-h-screen p-6 transition-colors duration-500"}>
        
        {/* 🔹 DARK MODE TOGGLE */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-5 right-5 px-4 py-2 rounded-lg bg-white text-gray-800 dark:bg-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        <h1 className="text-5xl font-extrabold text-center mb-6 tracking-wide drop-shadow-lg">
          Our Premium Services
        </h1>

        <div className="text-center mb-6">
          <label className="mr-2 font-medium">Select Booking Date:</label>
          <input
            type="date"
            className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
          />
        </div>

        {/* 🔹 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service._id}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105 cursor-pointer relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              {/* Floating decorative circles */}
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 bg-blue-400 rounded-full opacity-30"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-pink-400 rounded-full opacity-20"
                animate={{ x: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              />

              <h2 className="text-2xl font-bold mb-2 text-blue-600">{service.name}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
              <p className="font-bold text-gray-800 dark:text-gray-100 mb-2">Price: ₹{service.price}</p>
              <p className="text-gray-500 dark:text-gray-300 mb-4">Duration: {service.duration || "N/A"}</p>
              <button
                onClick={() => setModalService(service)}
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Book Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* 🔹 BOOKING MODAL */}
        {modalService && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center relative"
            >
              <h2 className="text-3xl font-bold mb-4">{modalService.name}</h2>
              <p className="mb-2">Price: ₹{modalService.price}</p>
              <p className="mb-2">Duration: {modalService.duration || "N/A"}</p>
              <p className="mb-4">Date: <strong>{bookingDate}</strong></p>
              <div className="flex justify-around mt-6">
                <button
                  onClick={handleBooking}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Confirm & Pay
                </button>
                <button
                  onClick={() => setModalService(null)}
                  className="bg-gray-300 dark:bg-gray-600 px-6 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* 🔹 TESTIMONIALS */}
        <motion.div
          className="py-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
            {["Rajesh", "Priya", "Ankit"].map((name, idx) => (
              <motion.div
                key={idx}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
                whileHover={{ scale: 1.03 }}
              >
                <p className="italic">"This platform made booking my car service extremely easy!"</p>
                <h3 className="font-semibold mt-4">– {name} Kumar</h3>
                <p className="text-gray-500 dark:text-gray-300">Verified User</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};