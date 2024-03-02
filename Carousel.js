import React, { useEffect, useState } from "react";
import Carouseldata from "../components/Data/CarouselData";
import "./HomePage.css"; // Assuming styles are defined here
import logo from "../components/images/logobus.png";
import { Link } from "react-router-dom"; // Import Link from React Router

const Carousel = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNum((prevNum) => (prevNum + 1) % Carouseldata.length);
    }, 4000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <>
      <div className="carousel-cont">
        <div
          className="carousel-item"
          style={{ backgroundImage: `url(${Carouseldata[num].imgurl})` }}
        >
          <button
            className="CarouselControl prev"
            onClick={() =>
              setNum(
                (prevNum) =>
                  (prevNum - 1 + Carouseldata.length) % Carouseldata.length
              )
            }
          >
            Prev
          </button>
          <div className="carousel-text" style={{ color: "white" }}>
            <img className="logo" src={logo} alt="" />
            <h2>{Carouseldata[num].line1}</h2>
            <p>{Carouseldata[num].line2}</p>
            <p>{Carouseldata[num].line3}</p>
            <Link to="/services">
              <button className="Carousel-text-btn register-btn">
                View services
              </button>
            </Link>
          </div>
          <button
            className="CarouselControl next"
            onClick={() =>
              setNum((prevNum) => (prevNum + 1) % Carouseldata.length)
            }
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
