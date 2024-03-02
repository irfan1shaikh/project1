import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import React from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook

const Navbar = () => {
  const [showServicesMenu, setShowServicesMenu] = useState(false);

  const toggleServicesMenu = () => {
    setShowServicesMenu(!showServicesMenu);
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about-us" className="nav-link">
            About Us
          </Link>
        </li>
        <li className="nav-item">
         <Link to="/Services">
          <button className="nav-link" onClick={toggleServicesMenu}>
            Services &#9662;
          </button>
         </Link>
          {showServicesMenu && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/services/booking" className="dropdown-link">
                  Local Bus Booking
                </Link>
              </li>
              <li>
                <Link to="/services/rentals" className="dropdown-link">
                  Bus Rentals for Events
                </Link>
              </li>
              {/* Add more services as needed */}
            </ul>
          )}
        </li>
        <li className="nav-item">
          <Link to="/FAQs" className="nav-link">
            FAQs
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact-us" className="nav-link">
            Contact Us
          </Link>
        </li>
      </ul>

      <ul className="nav-list1">
        <li className="nav-item">
          <button>
            <Link to="/signup" className="cta">
              Sign Up
            </Link>
          </button>
        </li>
        <li className="nav-item">
          <button>
            <Link to="/login" className="cta">
              Log In
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
