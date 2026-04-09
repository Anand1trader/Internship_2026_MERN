import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:3000/user/reset-password/${token}`,
        { password }
      );

      toast.success(res.data.message);
      navigate("/login");

    } catch (err) {
      toast.error(err.response?.data?.message || "Error ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-black to-blue-900">

      <div className="w-full max-w-md p-8 rounded-2xl 
        bg-white/10 backdrop-blur-xl border border-white/20 
        shadow-2xl text-white">

        <h2 className="text-3xl font-bold text-center mb-6">
          Reset Password 🔐
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg 
            bg-white/20 border border-white/30 
            focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <button
            className="w-full py-2 rounded-lg font-semibold
            bg-gradient-to-r from-green-500 to-blue-600
            hover:scale-105 transition"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;