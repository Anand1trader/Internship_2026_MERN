import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const FormDemo4 = () => {

  const { register, handleSubmit, watch, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const password = watch("password", "");

  const submitHandler = (data) => {
    console.log(data);

    // Success message show
    setSuccessMessage("Password submitted successfully!");

    // Optional: form reset after submit
    reset();
  };

  const passwordRules = [
    { label: "At least 1 Capital Letter", isValid: /[A-Z]/.test(password) },
    { label: "At least 1 Small Letter", isValid: /[a-z]/.test(password) },
    { label: "At least 1 Digit", isValid: /[0-9]/.test(password) },
    { label: "At least 1 Special Character", isValid: /[!@#$%^&*(),.?\":{}|<>_]/.test(password) },
    { label: "Minimum 8 Characters", isValid: password.length >= 8 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Password Validation Demo</h1>

      <form onSubmit={handleSubmit(submitHandler)}>

        <div style={{ position: "relative", width: "250px", margin: "auto" }}>
          <label>Password</label>
          <br />

          <input
            type={showPassword ? "text" : "password"}
            {...register("password")}
            style={{ width: "100%", paddingRight: "35px" }}
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "10px",
              top: "35px",
              cursor: "pointer",
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <br />

        <div style={{ textAlign: "left", width: "250px", margin: "auto" }}>
          {passwordRules.map((rule, index) => (
            <p
              key={index}
              style={{
                color: rule.isValid ? "green" : "black",
                fontWeight: rule.isValid ? "bold" : "normal",
              }}
            >
              {rule.label}
            </p>
          ))}
        </div>

        <br />
        <input type="submit" />

      </form>

      {/* ✅ Success Message */}
      {successMessage && (
        <p style={{ color: "green", marginTop: "15px", fontWeight: "bold" }}>
          {successMessage}
        </p>
      )}
    </div>
  );
};
