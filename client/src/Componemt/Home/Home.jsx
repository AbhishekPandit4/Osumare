import React from "react";
import "./Home.css";
import HeaderImage from "./assets/Header_image.jpg";

export default function Home() {
  return (
    <div className="home-main">
      <div className="home-text-container">
        <p className="home-text-p">
          Elevate <span className="home-text-span">Real Estate Success</span>{" "}
          with Osumare's Digital Expertise
        </p>
        <p className="home-subtext">
          Tailored Solutions for Thriving in the Digital Real Estate Landscape
        </p>
        <button className="home-button">Get started</button>
      </div>
      <img src={HeaderImage} alt="Header" className="home-img" />
    </div>
  );
}
