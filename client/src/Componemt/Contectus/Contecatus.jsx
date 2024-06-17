import React from "react";
import "./Contecatus.css";
const ContactUs = () => {
  return (
    <div className="contact-form-container">
      <h1>Connect with Our Digital Marketing Experts</h1>
      <p>
        Reach Out for Tailored Strategies and Results-Driven Solutions. Let's
        Elevate Your Online Presence Together
      </p>
      <div className="form-container">
        <form>
          <div style={{ display: "flex" }}>
            <div>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="text" placeholder="Enter your Number" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Enter your Total No of Vehicles:"
                />
              </div>
            </div>

            <div>
              <div className="form-group message-group">
                <label>Message</label>
                <textarea placeholder="Enter your Message"></textarea>
              </div>
            </div>
          </div>
          <button type="submit" className="submit-button">
            Get started
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
