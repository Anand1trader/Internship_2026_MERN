import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/user/login",
        data
      );

      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);

        toast.success("Login Successful ✅");

        if (res.data.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/user");
        }
      }
    } catch (err) {
      const msg =
        err.response?.data?.message || "Invalid email or password ❌";
      toast.error(msg);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 🔧 Background */}
      <img
        src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1920&q=80"
        alt="mechanic repairing car"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute inset-0 backdrop-blur-[3px]"></div>

      {/* 🧊 Glass Card */}
      <div className="relative z-10 w-full max-w-md p-8 rounded-2xl 
        bg-white/10 backdrop-blur-xl border border-white/20 
        shadow-2xl text-white">

        <h2 className="text-3xl font-bold text-center mb-6">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
              })}
              className="w-full px-4 py-2 rounded-lg 
              bg-white/20 border border-white/30 
              focus:outline-none focus:ring-2 focus:ring-blue-400
              placeholder-gray-300 text-white"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block mb-1 text-sm">Password</label>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
              })}
              className="w-full px-4 py-2 rounded-lg pr-10
              bg-white/20 border border-white/30 
              focus:outline-none focus:ring-2 focus:ring-blue-400
              placeholder-gray-300 text-white"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-300"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>

            {errors.password && (
              <p className="text-red-400 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* 🔥 FORGOT PASSWORD BUTTON */}
          <div className="flex justify-end">
            <span
              onClick={() => navigate("/forgot-password")}
              className="text-sm text-blue-400 cursor-pointer hover:underline hover:text-blue-300 transition"
            >
              Forgot Password?
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg font-semibold
            bg-gradient-to-r from-blue-500 to-purple-600
            hover:scale-105 transition-all duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-gray-300">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-400 cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;