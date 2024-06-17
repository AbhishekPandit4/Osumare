import React from "react";
import "./Partners.css";
import Video from "../Partners/asstes/Video.png"
import Team from "../Partners/asstes/team.png"
import Symbol from "../Partners/asstes/Symbol.png"

const Partners = () => {
  return (
    <div className="partners-container">
      <h1>What Our Pharma Partners Say</h1>
      <span>Driving Transformations, One Brand at a Time</span>
      <div className="partners-content">
        <div className="video-thumbnail">
          <img src={Video} alt="Tabish Khan" className="thumbnail-image" />
        </div>
        <div className="partners-text">
          <img src={Team} alt="Tabish Khan" className="partners-avatar" />
          <div className="partners-quote">
            <div className="quote-header">
              <p>
                <strong>Tabish Khan</strong>
              </p>
              <img src={Symbol} alt="Symbol" className="quote-symbol" />
            </div>
            <p>
              Osumare's expertise in pharma marketing is unparalleled. Their
              strategies helped us navigate complex regulations while driving
              remarkable growth.
            </p>
          </div>
        </div>
      </div>
      <div className="navigation-arrows">
        <button className="arrow-button">{"→"}</button>
        <button className="arrow-button">{"←"}</button>
      </div>
    </div>
  );
};

export default Partners;
