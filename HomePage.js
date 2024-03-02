import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./HomePage.css";
import Carousel from "./Carousel";
import ReservationForm from "./ReservationForm";
import TestimonialSlider from "./TestimonialSlider"; // Assuming you have a Testimonial component
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="header">
        <h1>Travel in Comfort and Style</h1>
        <p>Your Journey Starts with Us</p>
        <button
          className="cta-button"
          onClick={() => (window.location.href = "/signup")}
        >
          Book Now
        </button>
      </header>
      <Carousel />
      <section className="about-section">
        <div className="about-content">
          <h2>Experience Effortless Travel</h2>
          <p>
            We're dedicated to providing exceptional bus services that make your
            journey comfortable, convenient, and memorable. Whether you're
            traveling for business, leisure, or visiting loved ones, we'll get
            you there safely and in style.
          </p>
          <ul className="about-features">
            <li>Spacious and modern buses with comfortable seating</li>
            <li>
              Onboard amenities like Wi-Fi, entertainment systems, and
              refreshments
            </li>
            <li>Professional and courteous drivers</li>
            <li>Multiple routes and flexible schedules</li>
            <li>Online booking and easy ticket management</li>
            <li>Dedicated customer support</li>
          </ul>
          {/* Use the Link component to create a link to the about_us.js file */}
          <Link to="/about-us" className="learn-more-button">
            Learn More About Us
          </Link>
        </div>
      </section>
      <section className="services-section">
        <div className="services-content">
          <h2>Our Features</h2>
          <div className="service-grid">
            <div className="service-item">
              <i className="fas fa-route"></i>
              <h3>Extensive Route Network</h3>
              <p>
                Explore diverse destinations across the country with our wide
                range of routes.
              </p>
            </div>
            <div className="service-item">
              <i className="fas fa-couch"></i>
              <h3>Comfortable Seats</h3>
              <p>
                Relax and enjoy your journey in our spacious and well-equipped
                buses.
              </p>
            </div>
            <div className="service-item">
              <i className="fas fa-wifi"></i>
              <h3>Onboard Wi-Fi</h3>
              <p>
                Stay connected and productive throughout your trip with free
                Wi-Fi.
              </p>
            </div>
            {/* Add more service items as needed */}
          </div>
        </div>
      </section>
      <TestimonialSlider/>
      <ReservationForm />
      <Footer />
    </div>
  );
};

export default HomePage;
