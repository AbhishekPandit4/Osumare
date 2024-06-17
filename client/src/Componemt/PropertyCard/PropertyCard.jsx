import React from "react";
import "./PropertyCard.css";
import house from "../PropertyCard/asstes/bro.png";
const PropertyCard = () => {
  return (
    <>
      <p className="inquiries-title">
        Driving Property Inquiries to Conversions
      </p>
      <p className="inquiries-subtitle">
        Streamlined Strategies for Real Estate Success
      </p>
      <div className="property-card">
        <div className="property-card-image">
          <img src={house} alt="House" />
        </div>
        <div className="property-card-content">
          <h2>Optimized Path to Property Purchase</h2>
          <p>
            In the dynamic realm of real estate, the journey from a property
            inquiry to a successful conversion demands a well-crafted approach.
            At Osumare, we specialize in guiding potential buyers through this
            journey seamlessly, maximizing inquiries-turned-conversions with
            expert strategies.
          </p>
          <button className="get-started-btn">Get started</button>
        </div>
      </div>
    </>
  );
};

export default PropertyCard;
