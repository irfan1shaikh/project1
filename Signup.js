import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    // Name validation
    if (name.trim() === "") {
      errors.name = "Please enter your name";
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    // Password validation
    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    // Phone validation (optional)
    if (!/^[\d\-\+\(\) ]+$/.test(phone)) {
      errors.phone = "Please enter a valid phone number";
    }

    // Address validation (optional)
    if (address.trim() === "") {
      errors.address = "Please enter your address";
    }

    // If there are errors, display them
    if (Object.keys(errors).length > 0) {
      // Implement error display logic here (e.g., using an error state or alert)
      console.error("Errors:", errors);
      return; // Stop form submission
    }

    // If there are no errors, proceed with submission
    console.log("Form data:", name, email, password, phone, address);
    // ... handle form submission here

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Phone:", phone);
    console.log("Address:", address);
  };

  const handleInputFocus = () => {
    // Add desired focus animations or effects
  };

  return (
    <div className="signup-container">
      <h2 className="signup-header">Create Your Account</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          className="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          required
        />
        <br />
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
        <label>Confirm Password:</label>
        <input
          className="input"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
          required
        />
        <br />
        <label>Phone:</label>
        <input
          className="input"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          required
        />
        <br />
        <label>Address:</label>
        <input
          className="input"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your address"
          required
        />
        <br />
        <div className="signup-agreement">
          <input
            type="checkbox"
            id="agree"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            required
          />
          <label htmlFor="agree">
            I agree to the <a href="#">Terms & Conditions</a>
          </label>
        </div>
        <button
          className="signup-btn"
          type="submit"
          disabled={!agreed}
          onClick={handleInputFocus}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
