import React from "react";
import "./Expertise.css";
import icon_1 from "../Expertise/asstents/icon_1.png";
import icon_2 from "../Expertise/asstents/icon_2.png";
import icon_3 from "../Expertise/asstents/icon_3.png";
import icon_4 from "../Expertise/asstents/icon_4.png";

const Conversions = () => {
  return (
    <div className="container">
      <h1>Our Expertise in Action</h1>
      <div className="card-container">
        <div className="row">
          <div className="card">
            <img
              src={icon_1}
              className="icon"
              alt="Call-to-Action Optimization Icon"
            />
            <h2>Call-to-Action Optimization</h2>
            <p>
              Our carefully crafted CTAs guide potential buyers through the
              property journey, enhancing engagement and conversion rates.
            </p>
          </div>
          <div className="card">
            <img
              src={icon_2}
              className="icon"
              alt="Call-to-Action Optimization Icon"
            />

            <h2>Landing Page Efficiency</h2>
            <p>
              Optimized landing pages ensure visitors find the information they
              need quickly, improving user experience and boosting conversions.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="card">
            <div>
              <img
                src={icon_3}
                className="icon"
                alt="Call-to-Action Optimization Icon"
              />
            </div>

            <h2>Social Proof Utilization</h2>
            <p>
              Use testimonials and success stories from satisfied buyers to
              build trust and credibility, encouraging hesitant prospects to
              act.
            </p>
          </div>
          <div className="card">
            <img
              src={icon_4}
              className="icon"
              alt="Call-to-Action Optimization Icon"
            />
            <h2>Mobile-Friendly Experience</h2>
            <p>
              Ensure a seamless experience for mobile users, allowing potential
              buyers to access property information on-the-go and increasing
              engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversions;
