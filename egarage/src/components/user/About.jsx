import React, { useState } from "react";
import { motion } from "framer-motion";

export const About = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"}>

      {/* 🔹 DARK MODE TOGGLE */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-5 right-5 px-4 py-2 rounded-lg bg-white text-gray-800 dark:bg-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* 🔹 HERO SECTION */}
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4">About E-Garage</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Revolutionizing car servicing with smart booking, trusted garages, and seamless experience.
        </p>
      </motion.div>

      {/* 🔹 ABOUT DESCRIPTION */}
      <motion.div
        className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <img
          src="https://images.unsplash.com/photo-1515923162033-98c3f7f5b6e5"
          alt="garage"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-600 mb-4">
            E-Garage is a modern platform that connects car owners with trusted garages and professional services.
            We simplify the booking process, save your time, and ensure high-quality service at affordable prices.
          </p>
          <p className="text-gray-600">
            Our mission is to bring transparency and convenience into the automobile service industry.
          </p>
        </div>
      </motion.div>

      {/* 🔹 FEATURES */}
      <motion.div
        className="bg-white dark:bg-gray-800 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          <div className="p-6 shadow-lg rounded-xl text-center hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2">🚀 Fast Booking</h3>
            <p className="text-gray-600 dark:text-gray-300">Book services instantly without waiting in long queues.</p>
          </div>
          <div className="p-6 shadow-lg rounded-xl text-center hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2">🔧 Trusted Garages</h3>
            <p className="text-gray-600 dark:text-gray-300">Verified garages with professional mechanics.</p>
          </div>
          <div className="p-6 shadow-lg rounded-xl text-center hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2">💰 Affordable Pricing</h3>
            <p className="text-gray-600 dark:text-gray-300">Transparent pricing with no hidden charges.</p>
          </div>
        </div>
      </motion.div>

      {/* 🔹 STATS SECTION */}
      <motion.div
        className="bg-blue-600 text-white py-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-3xl font-bold">500+</h2>
            <p>Garages</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">10K+</h2>
            <p>Bookings</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">8K+</h2>
            <p>Happy Users</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">4.8⭐</h2>
            <p>Rating</p>
          </div>
        </div>
      </motion.div>

      {/* 🔹 TEAM SECTION */}
      <motion.div
        className="py-16 bg-gray-50 dark:bg-gray-900 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <h2 className="text-3xl font-bold mb-12">Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg w-60">
            <img src="https://i.pravatar.cc/150?img=1" alt="team" className="rounded-full mx-auto mb-4"/>
            <h3 className="font-semibold">Anand Talpada</h3>
            <p className="text-gray-500 dark:text-gray-300">Founder & Developer</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg w-60">
            <img src="https://i.pravatar.cc/150?img=2" alt="team" className="rounded-full mx-auto mb-4"/>
            <h3 className="font-semibold">Team Member</h3>
            <p className="text-gray-500 dark:text-gray-300">Backend Developer</p>
          </div>
        </div>
      </motion.div>

      {/* 🔹 TESTIMONIALS */}
      <motion.div
        className="py-16 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
            <p>"E-Garage made booking my car service so easy! Highly recommend."</p>
            <h3 className="font-semibold mt-4">– Rajesh Kumar</h3>
            <p className="text-gray-500 dark:text-gray-300">Verified User</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
            <p>"Professional garages and great prices. Saved me hours of waiting."</p>
            <h3 className="font-semibold mt-4">– Priya Sharma</h3>
            <p className="text-gray-500 dark:text-gray-300">Verified User</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
            <p>"I love the fast booking feature. My car was ready on time."</p>
            <h3 className="font-semibold mt-4">– Ankit Patel</h3>
            <p className="text-gray-500 dark:text-gray-300">Verified User</p>
          </div>
        </div>
      </motion.div>

      {/* 🔹 CTA SECTION */}
      <motion.div
        className="bg-indigo-700 text-white py-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Book Your Service?</h2>
        <p className="mb-6">Experience the best car service platform today.</p>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          Book Now
        </button>
      </motion.div>

    </div>
  );
};