import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../Footer/assten/Osumare_Logo.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <Row>
        <Col>
          <img src={logo} alt="Osumare Logo" className="logo" />
          <p>
            The best digital marketing agency in Pune with a proven track
            record of consistently delivering quality service.
          </p>
        </Col>
        <Col>
          <div className="footer-section address">
            <p>Add</p>
            <p>Survey No. 43, Pathare</p>
            <p>
              Thube Nagar, Nagar Road, Kharadi, Pune-14, Maharastra, India.
            </p>
          </div>
        </Col>
        <Col>
          <div className="footer-section contacts">
            <h2>Contacts</h2>
            <p>
              <i className="fas fa-envelope"></i> hello@osumare.in
            </p>
            <p>
              <i className="fas fa-phone"></i> +91 8459 8762 26
            </p>
          </div>
        </Col>
        <Col>
          <div className="footer-section menu">
            <h2>Menu</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Work</li>
              <li>Blog</li>
              <li>Career</li>
            </ul>
          </div>
        </Col>
        <Col>
          <div className="footer-section social">
            <h2>Social</h2>
            <div className="social-icons">
              <i className="fab fa-x"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-pinterest"></i>
              <i className="fab fa-whatsapp"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
