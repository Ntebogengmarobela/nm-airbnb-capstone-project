import React from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ fadeOut }) => {
  return (
    <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
      <img
        src="https://companylogos.org/wp-content/uploads/2024/10/Airbnb-Logo-1.png"
        alt="Airbnb logo"
        className="loading-logo"
      />
    </div>
  );
};

export default LoadingScreen;
