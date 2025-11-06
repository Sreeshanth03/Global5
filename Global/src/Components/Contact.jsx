import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="conference-contact-page">
      {/* --- Header Section --- */}
      <div className="conference-header-section">
        <h1 className="conference-main-title">Upcoming Conferences</h1>
      </div>

      {/* --- Content Section --- */}
      <div className="conference-content-container">
        {/* Webinars Section */}
        <div className="conference-section-box">
          <h2 className="conference-section-title">Webinars</h2>
          <div className="conference-list-container">
            <p className="conference-item">Global Summit on Nano Engineering & Smart Technology</p>
            <p className="conference-item">World Nano Summit</p>
            <p className="conference-item">International Graphene Conclave</p>
            <p className="conference-item">International Conference on Cloud Computing</p>
            <p className="conference-item">International Artificial Intelligence & Robotics Conclave</p>
            <p className="conference-item">Global Aerospace Engineering Conclave</p>
          </div>
        </div>

        {/* Hybrids Section */}
        <div className="conference-section-box">
          <h2 className="conference-section-title">Hybrids</h2>
          <div className="conference-list-container">
            <p className="conference-item">Global Bioinformatics summit</p>
            <p className="conference-item">World Biofuel Congress</p>
            <p className="conference-item">International Biotechnology Conclave</p>
            <p className="conference-item">Global Stem Cell & Regenerative Medicine Summit</p>
            <p className="conference-item">World Summit on Artificial Intelligence in Healthcare</p>
            <p className="conference-item">International Conference on Climate Engineering</p>
            <p className="conference-item">International Pharmaceutical</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="conference-contact-section">
          <Card className="conference-contact-card">
            <h2 className="conference-contact-title">Contact Us</h2>
            <form className="conference-contact-form">
              <div className="conference-form-row">
                <input type="text" placeholder="First Name" className="conference-form-input conference-form-half" />
                <input type="text" placeholder="Last Name" className="conference-form-input conference-form-half" />
              </div>
              <input type="email" placeholder="Email" className="conference-form-input" />
              <input type="text" placeholder="Phone" className="conference-form-input" />
              <input type="text" placeholder="Company / University" className="conference-form-input" />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="conference-form-textarea"
              ></textarea>
              <Button className="conference-submit-button">Submit</Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;