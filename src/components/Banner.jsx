import React from "react";
import heroImage from "../assets/hero-image-air.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img src={heroImage} alt="Hero" className="banner-img" />

      <div className="banner-content">
        <h1>Not sure where to go? Perfect.</h1>
        <button>I'm flexible</button>
      </div>
    </div>
  );
};

export default Banner;
