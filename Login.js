import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; // Assuming you have a Login.css file for styling

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    // Password validation
    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    // If there are errors, display them
    if (Object.keys(errors).length > 0) {
      // Implement error display logic here (e.g., using an error state or alert)
      console.error("Errors:", errors);
      return; // Stop form submission
    }

    // If there are no errors, proceed with submission
    console.log("Form data:", email, password);
    // ... handle form submission here

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="signup-container">
      <h2 className="signup-header">Login to Your Account</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          className="input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
        />
        <br />
        <label>Password:</label>
        <input
          className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        <br />
        <button className="signup-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;


