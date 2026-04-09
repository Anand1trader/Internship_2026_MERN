import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookingDate, setBookingDate] = useState("");
  const [darkMode, setDarkMode] = useState(true); // ✅ default dark
  const [modalService, setModalService] = useState(null);

  const userId = localStorage.getItem("userId");
  const garageId = "65f123abc123xyz";

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
      service: modalService._id,
      date: bookingDate,
      price: finalPrice,
    };

    try {
      await axios.post("http://localhost:3000/booking", bookingData);
      toast.success("Booking Confirmed ✅");
      setModalService(null);
    } catch (err) {
      console.log(err);
      toast.error("Booking failed ❌");
    }
  };

  if (loading)
    return <p className="text-center mt-10 text-white">Loading services...</p>;

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* 🌌 PREMIUM DARK BLUE BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-950 via-blue-900 to-black"></div>

      <div className="min-h-screen p-6 text-gray-100">
        
        {/* 🔹 TOGGLE */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-5 right-5 px-4 py-2 rounded-lg bg-blue-800 text-white hover:bg-blue-700 transition"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        <h1 className="text-5xl font-extrabold text-center mb-8 tracking-wide text-blue-400 drop-shadow-lg">
          Premium Car Services
        </h1>

        {/* 📅 DATE */}
        <div className="text-center mb-8">
          <input
            type="date"
            className="px-4 py-2 rounded-lg bg-blue-900 border border-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 border border-blue-700"
                whileHover={{ scale: 1.05 }}
              >
                {/* IMAGE */}
                <div className="relative group">
                  <img
                    src={
                      service.image
                        ? service.image
                        : `https://source.unsplash.com/400x300/?car,garage,${service.name}`
                    }
                    alt={service.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* DISCOUNT */}
                  {discount > 0 && (
                    <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-lg text-sm shadow">
                      {discount}% OFF
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-blue-300">
                    {service.name}
                  </h2>

                  <p className="text-gray-300 mb-3">
                    {service.description}
                  </p>

                  {/* PRICE */}
                  <div className="mb-2">
                    {discount > 0 ? (
                      <>
                        <span className="line-through text-gray-400 mr-2">
                          ₹{service.price}
                        </span>
                        <span className="text-green-400 font-bold">
                          ₹{finalPrice}
                        </span>
                      </>
                    ) : (
                      <span className="font-bold text-white">
                        ₹{service.price}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-400 mb-3">
                    Duration: {service.duration || "N/A"}
                  </p>

                  <button
                    onClick={() => setModalService(service)}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition"
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
          <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
            <div className="bg-blue-900 text-white p-6 rounded-xl text-center shadow-xl border border-blue-700">

              <h2 className="text-2xl font-bold text-blue-300">
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
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition"
              >
                Confirm
              </button>

              <button
                onClick={() => setModalService(null)}
                className="ml-3 bg-gray-600 px-4 py-2 rounded hover:bg-gray-500 transition"
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