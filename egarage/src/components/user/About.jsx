import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

export const About = () => {

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // 🤖 AI Suggestion Logic
  const handleSuggest = () => {
    const text = input.toLowerCase();

    if (text.includes("engine")) {
      setResult("🔧 Engine Check Recommended");
    } else if (text.includes("brake")) {
      setResult("🛑 Brake Service Needed");
    } else if (text.includes("oil")) {
      setResult("🛢 Oil Change Required");
    } else if (text.includes("noise")) {
      setResult("⚙️ General Inspection Recommended");
    } else {
      setResult("🚗 Full Car Diagnosis Suggested");
    }
  };

  return (
    <div className="bg-[#0b1120] text-white overflow-hidden relative">

      {/* 🔵 Glow Background */}
      <div className="absolute w-96 h-96 bg-blue-600 opacity-20 blur-3xl top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-indigo-600 opacity-20 blur-3xl bottom-10 right-10"></div>

      {/* 🔹 HERO */}
      <motion.div
        className="text-center py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 relative z-10"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-6xl font-extrabold mb-4">E-Garage 🚗</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Smart Car Service Platform – Fast, Reliable & Transparent
        </p>
      </motion.div>

      {/* 🔹 ABOUT */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <img
          data-aos="fade-right"
          src="https://images.unsplash.com/photo-1625047509168-a7026f36de04"
          alt="garage"
          className="rounded-2xl shadow-2xl hover:scale-105 transition"
        />

        <div data-aos="fade-left">
          <h2 className="text-4xl font-bold mb-6 text-blue-400">Who We Are</h2>
          <p className="text-gray-300 mb-4">
            E-Garage connects car owners with trusted garages and professional mechanics.
          </p>
          <p className="text-gray-400">
            We bring transparency and innovation into the automobile service industry.
          </p>
        </div>
      </div>

      {/* 🔹 FEATURES */}
      <div className="py-20 bg-[#0f172a]">
        <h2 className="text-4xl text-center mb-16 text-blue-400">Why Choose Us</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {[
            { title: "Fast Booking", icon: "🚀" },
            { title: "Trusted Garages", icon: "🔧" },
            { title: "Affordable Pricing", icon: "💰" },
          ].map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-center hover:scale-105 transition"
            >
              <h3 className="text-3xl">{item.icon}</h3>
              <h4 className="text-xl mt-2">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 AI SUGGESTION */}
      <div className="py-20 text-center bg-[#0b1120]" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6 text-blue-400">
          Smart AI Suggestion 🤖
        </h2>

        <input
          type="text"
          placeholder="Describe your car problem..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="px-4 py-2 w-80 rounded-lg text-black"
        />

        <br />

        <button
          onClick={handleSuggest}
          className="mt-4 px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Get Suggestion
        </button>

        {result && (
          <div className="mt-6 bg-white/10 p-4 rounded-xl inline-block">
            {result}
          </div>
        )}
      </div>

      {/* 🔹 STATS */}
      <div className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-center">
        <div className="grid md:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {["500+ Garages", "10K+ Bookings", "8K+ Users", "4.8⭐ Rating"].map((item, i) => (
            <div key={i} data-aos="flip-up">
              <h2 className="text-3xl font-bold text-blue-400">{item}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 TESTIMONIALS */}
      <div className="py-20 bg-[#0f172a]">
        <h2 className="text-4xl text-center mb-12 text-blue-400">Testimonials</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {["Amazing service!", "Very fast booking!", "Highly recommended!"].map((text, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="p-6 bg-white/10 rounded-xl backdrop-blur-xl border border-white/20"
            >
              <p>"{text}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 CTA */}
      <div className="py-20 text-center bg-gradient-to-r from-blue-900 to-indigo-900">
        <h2 className="text-4xl font-bold mb-4">Ready to Book?</h2>
        <button className="px-8 py-3 bg-blue-500 rounded-xl hover:bg-blue-600">
          Book Now 🚀
        </button>
      </div>

    </div>
  );
};