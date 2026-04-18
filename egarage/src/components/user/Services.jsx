import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookingDate, setBookingDate] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [modalService, setModalService] = useState(null);

  const garageId = "65f123abc123xyz";

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("http://localhost:3000/service/services");
        setServices(res.data);
      } catch (err) {
        console.log("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const handleBooking = async () => {
    const token = localStorage.getItem("token"); // ✅ ALWAYS inside function

    if (!bookingDate) {
      toast.error("Please select a booking date ❌");
      return;
    }

    if (!token) {
      toast.error("User not logged in ❌");
      return;
    }

    if (!modalService) {
      toast.error("Service not selected ❌");
      return;
    }

    const discount = modalService.discount || 0;
    const finalPrice =
      modalService.price - (modalService.price * discount) / 100;

    const bookingData = {
      garage: garageId,
      service: modalService._id,
      date: bookingDate,
      price: finalPrice,
    };

    try {
      await axios.post(
        "http://localhost:3000/booking",
        bookingData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Booking Confirmed ✅");
      setModalService(null);
      setBookingDate("");
    } catch (err) {
      console.log("BOOKING ERROR:", err.response?.data || err.message);
      toast.error(err.response?.data?.message || "Booking failed ❌");
    }
  };

  if (loading)
    return <p className="text-center mt-10 text-white">Loading services...</p>;

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-950 via-blue-900 to-black"></div>

      <div className="min-h-screen p-6 text-gray-100">

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-5 right-5 px-4 py-2 rounded-lg bg-blue-800 text-white"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        <h1 className="text-5xl font-extrabold text-center mb-8 text-blue-400">
          Premium Car Services
        </h1>

        <div className="text-center mb-8">
          <input
            type="date"
            className="px-4 py-2 rounded-lg bg-blue-900 border border-blue-700 text-white"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const discount = service.discount || 0;
            const finalPrice =
              service.price - (service.price * discount) / 100;

            return (
              <motion.div
                key={service._id}
                className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={
                    service.image ||
                    `https://source.unsplash.com/400x300/?car`
                  }
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">
                  <h2 className="text-xl font-bold text-blue-300">
                    {service.name}
                  </h2>

                  <p className="text-gray-300 mb-3">
                    {service.description}
                  </p>

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

                  <button
                    onClick={() => setModalService(service)}
                    className="w-full bg-blue-600 py-2 rounded-lg"
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* MODAL */}
        {modalService && (
          <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
            <div className="bg-blue-900 p-6 rounded-xl text-center">

              <h2 className="text-2xl font-bold text-blue-300">
                {modalService.name}
              </h2>

              <p className="mt-2">
                Price: ₹{modalService.price}
              </p>

              <button
                onClick={handleBooking}
                className="mt-4 bg-green-600 px-4 py-2 rounded"
              >
                Confirm
              </button>

              <button
                onClick={() => setModalService(null)}
                className="ml-3 bg-gray-600 px-4 py-2 rounded"
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