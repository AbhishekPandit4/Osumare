import React from 'react';
import './Inquiries.css';
import Blackboard from "../Inquiries/asstes/Blackboard.png"

export default function Inquiries() {
  return (
    <div className="inquiries">
      <p className="inquiries-title">Driving Property Inquiries to Conversions</p>
      <p className="inquiries-subtitle">Streamlined Strategies for Real Estate Success</p>
      <div style={{display:"flex"}}>
      <div className="sections">
        <Section
          icon="star"
          title="Market Trends Analysis"
          description="Predictive insights to guide real estate strategies."
        />
        <Section
          icon="bolt"
          title="Targeted Buyer Persona"
          description="Understand and connect with your ideal property buyers."
        />
        <Section
          icon="shield"
          title="Competitor Insights"
          description="Stand out in the property market with informed strategies."
        />
        <Section
          icon="search"
          title="Visual Content Appeal"
          description="Captivate buyers with appealing visuals and immersive experiences."
        />
      </div>
      <div className="expert-section">
        <div className="expert-image">
          <img src={Blackboard} alt="Expert" />
        </div>
      </div>
      </div>
   
     
    </div>
  );
}

function Section({ icon, title, description }) {
  return (
    <div className="section">
      <div className={`icon icon-${icon}`}></div>
      <div className="text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
