import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const password = watch("password");

  const submitHandler = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/user/register",
        data
      );

      if (res.status === 201) {
        alert("User Registered Successfully ✅");
        reset();
        navigate("/");
      }
    } catch (err) {
      if (err.response?.data?.error) {
        alert(err.response.data.error);
      } else {
        alert("Something went wrong ❌");
      }
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')", // 🚗 Garage/Car image
      }}
    >
      {/* 🔥 Dark + Blur Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* 🧊 Glass Card */}
      <div className="relative z-10 w-full max-w-md p-8 rounded-2xl 
        bg-white/10 backdrop-blur-xl border border-white/20 
        shadow-2xl text-white">

        <h2 className="text-3xl font-bold text-center mb-6">
          Create Account 🚀
        </h2>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">

          {/* First Name */}
          <div>
            <label className="block mb-1 text-sm">First Name</label>
            <input
              type="text"
              placeholder="Enter first name"
              {...register("firstName", { required: "First name is required" })}
              className="w-full px-4 py-2 rounded-lg 
              bg-white/20 border border-white/30 
              focus:outline-none focus:ring-2 focus:ring-blue-400
              placeholder-gray-300 text-white"
            />
            {errors.firstName && (
              <p className="text-red-400 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block mb-1 text-sm">Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              {...register("lastName", { required: "Last name is required" })}
              className="w-full px-4 py-2 rounded-lg 
              bg-white/20 border border-white/30 
              focus:outline-none focus:ring-2 focus:ring-blue-400
              placeholder-gray-300 text-white"
            />
            {errors.lastName && (
              <p className="text-red-400 text-sm">{errors.lastName.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-2 rounded-lg 
              bg-white/20 border border-white/30 
              focus:outline-none focus:ring-2 focus:ring-blue-400
              placeholder-gray-300 text-white"
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 text-sm">Phone</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              {...register("phone", {
                required: "Phone number is required",
                minLength: {
                  value: 10,
                  message: "Enter valid phone number",
                },
              })}
              className="w-full px-4 py-2 rounded-lg 
              bg-white/20 border border-white/30 
              focus:outline-none focus:ring-2 focus:ring-blue-400
              placeholder-gray-300 text-white"
            />
            {errors.phone && (
              <p className="text-red-400 text-sm">{errors.phone.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block mb-1 text-sm">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters required",
                },
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
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block mb-1 text-sm">Confirm Password</label>
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm password"
              {...register("confirmPassword", {
                required: "Confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="w-full px-4 py-2 rounded-lg pr-10
              bg-white/20 border border-white/30 
              focus:outline-none focus:ring-2 focus:ring-blue-400
              placeholder-gray-300 text-white"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-9 text-gray-300"
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>

            {errors.confirmPassword && (
              <p className="text-red-400 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg font-semibold
            bg-gradient-to-r from-blue-500 to-purple-600
            hover:scale-105 transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-gray-300">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;