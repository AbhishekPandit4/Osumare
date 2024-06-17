// App.js
import React from 'react';
import "../Service/Service.css";

const services = [
  {
    title: 'Automotive SEO',
    description: 'Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today',
    icon: '📈',
  },
  {
    title: 'PPC Precision',
    description: 'Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns.',
    icon: '🖱️',
  },
  {
    title: 'Social Acceleration',
    description: 'Engage and influence your audience across social media platforms, amplifying your brand\'s presence and connection.',
    icon: '🔗',
  },
  {
    title: 'Content Excellence',
    description: 'Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement.',
    icon: '📄',
  },
  {
    title: 'Web Design',
    description: 'Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions.',
    icon: '💻',
  },
  {
    title: 'Data-Driven Insights',
    description: 'Leverage data to refine your strategies, making informed decisions that drive revenue growth.',
    icon: '📊',
  },
  {
    title: 'End-to-End Solutions',
    description: 'From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey.',
    icon: '🔑',
  },
  {
    title: 'Video Marketing',
    description: 'Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories.',
    icon: '📹',
  },
];

function Service() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Our Service Offerings</h1>
        <p>Strategies that Drive Property Market Excellence</p>
      </header>
      <div className="service-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div className="cta-button">
        <button>Get started</button>
      </div>
    </div>
  );
}

export default Service;
