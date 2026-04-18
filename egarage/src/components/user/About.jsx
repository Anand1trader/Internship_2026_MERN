import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();

  const [garages, setGarages] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    fetchGarages();
  }, []);

  const fetchGarages = async () => {
    try {
      const res = await axios.get("http://localhost:3000/garage");
      setGarages(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredGarages = garages.filter((g) =>
    g.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#0b1120] text-white">

      {/* 🔥 NAVBAR */}
      <div className="flex justify-between items-center px-8 py-4 bg-white text-black">
        <h1 className="font-bold text-xl">🔧 e-GARAGE</h1>
        <div className="flex gap-4">
          <button onClick={() => navigate("/user/services")}>
            Browse Services
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Sign In
          </button>
        </div>
      </div>

      {/* 🔥 HERO */}
      <div className="relative h-[90vh] flex items-center px-10">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          className="absolute inset-0 w-full h-full object-cover"
          alt="car"
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl font-extrabold mb-4">
            Precision Vehicle Service <br /> At Your Fingertips
          </h1>

          <p className="text-gray-300 mb-6">
            Connect with trusted garages. Book seamlessly. Track transparently.
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => navigate("/user/services")}
              className="px-6 py-3 bg-blue-600 rounded-lg"
            >
              Browse Services
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="px-6 py-3 bg-white text-black rounded-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 FEATURES */}
      <div className="py-20 px-6 bg-[#f3f4f6] text-black">
        <h2 className="text-4xl text-center mb-10 font-bold">
          WHY CHOOSE e-GARAGE
        </h2>

        <p className="text-center mb-12 text-gray-600">
          Engineered for efficiency, built for trust.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Advanced Search", desc: "Find garages quickly", icon: "🔍" },
            { title: "Instant Booking", desc: "Book in seconds", icon: "📅" },
            { title: "Real-Time Tracking", desc: "Track progress live", icon: "⏱️" },
            { title: "Secure Payments", desc: "UPI, Cards supported", icon: "💳" },
            { title: "Verified Ratings", desc: "Real customer reviews", icon: "⭐" },
            { title: "Trusted Providers", desc: "100% verified garages", icon: "🛡️" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-3xl mb-2">{item.icon}</h3>
              <h4 className="font-bold">{item.title}</h4>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 HOW IT WORKS */}
      <div className="py-20 bg-[#0f172a] text-center">
        <h2 className="text-4xl mb-12 font-bold">HOW IT WORKS</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            {
              step: "1",
              title: "Search & Select",
              desc: "Choose your preferred garage",
            },
            {
              step: "2",
              title: "Book & Pay",
              desc: "Select slot & pay securely",
            },
            {
              step: "3",
              title: "Track & Review",
              desc: "Track service and give feedback",
            },
          ].map((item, i) => (
            <div key={i}>
              <div className="bg-blue-600 w-12 h-12 flex items-center justify-center mx-auto rounded-lg mb-4">
                {item.step}
              </div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 GARAGES */}
      <div className="py-20 px-6">
        <h2 className="text-4xl text-center mb-8 text-blue-400">
          Nearby Garages 🔧
        </h2>

        <div className="text-center mb-10">
          <input
            type="text"
            placeholder="Search garage..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 w-80 rounded-lg text-black"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredGarages.map((garage) => (
            <motion.div
              key={garage._id}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 rounded-xl overflow-hidden border"
            >
              <img
                src={
                  garage.image ||
                  "https://source.unsplash.com/400x300/?garage"
                }
                className="h-40 w-full object-cover"
                alt="garage"
              />

              <div className="p-5">
                <h3 className="text-lg font-bold text-blue-300">
                  {garage.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {garage.address || "No address"}
                </p>
                <p className="text-yellow-400 mt-1">
                  ⭐ {garage.rating || "4.5"}
                </p>

                <button
                  onClick={() => navigate("/user/services")}
                  className="mt-4 w-full bg-blue-600 py-2 rounded"
                >
                  View Services
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔹 CTA */}
      <div className="py-20 bg-gray-100 text-black text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Experience Precision Service?
        </h2>
        <p className="mb-6 text-gray-600">
          Join thousands of satisfied customers
        </p>

        <button
          onClick={() => navigate("/signup")}
          className="px-6 py-3 bg-blue-600 text-white rounded mr-4"
        >
          Sign Up Now
        </button>

        <button
          onClick={() => navigate("/user/services")}
          className="px-6 py-3 border rounded"
        >
          Explore Services
        </button>
      </div>

      {/* 🔹 FOOTER */}
      <div className="bg-[#020617] py-10 px-8 text-gray-400">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <h2 className="text-white font-bold mb-2">e-GARAGE</h2>
            <p>Precision vehicle service platform</p>
          </div>

          <div>
            <h3 className="text-white">For Customers</h3>
            <p>Browse Services</p>
            <p>Book Now</p>
          </div>

          <div>
            <h3 className="text-white">For Providers</h3>
            <p>Register Garage</p>
            <p>Manage Bookings</p>
          </div>

          <div>
            <h3 className="text-white">Support</h3>
            <p>Help Center</p>
            <p>Contact</p>
          </div>
        </div>

        <p className="text-center mt-8 text-sm">
          © 2026 e-Garage. All rights reserved.
        </p>
      </div>
    </div>
  );
};