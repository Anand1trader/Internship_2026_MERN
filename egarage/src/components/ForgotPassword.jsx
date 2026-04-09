import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/user/forgot-password",
        { email }
      );

      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.response?.data?.message || "Error ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-black to-blue-900">

      {/* Glass Card */}
      <div className="w-full max-w-md p-8 rounded-2xl 
        bg-white/10 backdrop-blur-xl border border-white/20 
        shadow-2xl text-white">

        <h2 className="text-3xl font-bold text-center mb-6">
          Forgot Password 🔑
        </h2>

        <p className="text-gray-300 text-center mb-6 text-sm">
          Enter your email to receive reset link
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg 
            bg-white/20 border border-white/30 
            focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <button
            className="w-full py-2 rounded-lg font-semibold
            bg-gradient-to-r from-blue-500 to-purple-600
            hover:scale-105 transition"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;