import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();

  const password = watch("password");

  const submitHandler = async (data) => {
    console.log("data", data);

    try {
      const res = await axios.post("http://localhost:3000/user/register", data);

      console.log("response..", res);

      if (res.status === 201) {
        alert("User Registered Successfully ✅");
        reset(); // form clear
        navigate("/");
      }

    } catch (err) {
      console.log(err);

      // 🔥 Backend error handling
      if (err.response?.data?.error) {
        alert(err.response.data.error);
      } else {
        alert("Something went wrong ❌");
      }
    }
  };

  return (
    <div className="min-h-screen flex">
      
      {/* Left Side Image */}
      <div className="hidden md:flex w-1/2">
        <img
          src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc"
          alt="garage"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Create eGarage Account
          </h2>

          <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          
            {/* First Name */}
            <div>
              <label className="block mb-1 font-medium">First Name</label>
              <input
                type="text"
                placeholder="Enter first name"
                {...register("firstName", { required: "First name is required" })}
                className="w-full px-4 py-2 border rounded-lg"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName.message}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block mb-1 font-medium">Last Name</label>
              <input
                type="text"
                placeholder="Enter last name"
                {...register("lastName", { required: "Last name is required" })}
                className="w-full px-4 py-2 border rounded-lg"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
                className="w-full px-4 py-2 border rounded-lg"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1 font-medium">Phone</label>
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
                className="w-full px-4 py-2 border rounded-lg"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters required",
                  },
                })}
                className="w-full px-4 py-2 border rounded-lg"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block mb-1 font-medium">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                {...register("confirmPassword", {
                  required: "Confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className="w-full px-4 py-2 border rounded-lg"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <span 
              onClick={() => navigate("/login")}
              className="text-blue-600 cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;