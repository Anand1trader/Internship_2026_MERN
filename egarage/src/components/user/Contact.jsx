import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields ❌");
      return;
    }

    console.log("Contact Form Submitted:", form);
    toast.success("Message sent successfully ✅");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen relative text-white p-6">

      {/* 🌌 DARK BLUE GRADIENT BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-950 via-blue-900 to-black"></div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-blue-400 tracking-wide">
        Contact Us
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* 🔹 GLASS FORM */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl"
        >
          <h2 className="text-2xl font-bold mb-6 text-blue-300">
            Get in Touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-blue-900/50 border border-blue-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-blue-900/50 border border-blue-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-blue-900/50 border border-blue-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition h-32"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-lg font-semibold tracking-wide transition transform hover:scale-105 shadow-lg"
            >
              Send Message
            </button>

          </form>
        </motion.div>

        {/* 🔹 GLASS MAP */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-lg"
        >
          <iframe
            title="garage-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0!2d72.5714!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848dd88f62eb%3A0x4d7b8c72df7a2c71!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            loading="lazy"
            className="border-0"
          ></iframe>
        </motion.div>

      </div>
    </div>
  );
};