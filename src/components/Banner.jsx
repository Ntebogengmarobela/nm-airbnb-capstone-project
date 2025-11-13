import React from 'react'
import heroImage from "../assets/hero-image-air.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img
        // src="https://media.cntraveller.com/photos/67befadb4b331bedfbb24181/master/w_2048%2Cc_limit/best%2520airbnbs%2520cape%2520town4-feb25.jpeg"
        src={heroImage}
        alt=""
      />
    </div>
  );
}

export default Banner;
