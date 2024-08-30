"use client";
import React, { useState } from "react";
import "./register.css";

const Register = () => {
  const [emailVal, setEmailVal] = useState("");
  const [passVal, setPassVal] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailVal,
          password: passVal,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setEmailVal("");
        setPassVal("");
        console.log("Registration successful:", data);
      } else {
        console.log("Registration error:", data.error);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          id="email"
          value={emailVal}
          onChange={(e) => setEmailVal(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          id="password"
          value={passVal}
          onChange={(e) => setPassVal(e.target.value)}
          required
        />

        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
