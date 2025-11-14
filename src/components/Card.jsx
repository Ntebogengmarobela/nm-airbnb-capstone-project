import React from "react";
import "./Card.css";

const Card = ({ src, title, description, variant }) => {
  return (
    <div className={`card ${variant === "discover" ? "discover-card" : ""}`}>
      <img src={src} alt={title} className="card-img" />

      {/* Normal card */}
      {variant !== "discover" && (
        <div className="card-info">
          <h2>{title}</h2>
          <h4>{description}</h4>
        </div>
      )}

      {/* Discover Airbnb Experiences */}
      {variant === "discover" && (
        <div className="discover-overlay">
          <h2 className="discover-title">
            {title ? title : "Things to do on your trip"}
          </h2>

          <button className="discover-btn">
            {description ? description : "Experiences"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
