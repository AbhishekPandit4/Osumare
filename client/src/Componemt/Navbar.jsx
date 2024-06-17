import React from "react";
import logoImg from "../assets/Osumare_Logo.png";

export default function Navbar() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <img src={logoImg} className="nav-img" />
      </div>
      <div style={{}}>
        <button className="nav-btn">
          <span className="Top Right Button">Top Right Button</span>
        </button>
      </div>
    </div>
  );
}
