import "../AboutUs/AboutUs.css";
import Cuate from "../AboutUs/asstes/cuate.png"; // Make sure this path is correct

export default function AboutUs() {
  return (
    <div className="container">
      <div className="about-us-container">
        <p className="about-us">Real Estate-Focused Digital Mastery</p>
      </div>
      <div className="about-us-content">
        <div className="about_us_left_container">
          <img src={Cuate} className="about-us-img" alt="Cuate" />
        </div>
        <div className="about_us_rgt_container">
          <p className="about-us-text">
            Unlock the Potential of Digital Real Estate Excellence
          </p>

          <p>
            At Osumare, we understand that the real estate landscape demands a
            digital presence that aligns with the intricacies of property
            marketing. Our range of specialized services is meticulously
            designed to catapult your brand's success in the ever-evolving
            digital property market.
          </p>

          <button>Get started</button>
        </div>
      </div>
    </div>
  );
}
