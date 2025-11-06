import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div>
      {/* Background Image Section */}
      <div
        className="background-header"
        style={{
          backgroundImage: `url("/Images/about_img.f4bf0a90c4e6470260a6.jpg")`,
        }}
      >
        <div className="background-overlay">
          <h1 className="background-title">About Event</h1>
        </div>
      </div>

      <div className="container mt-4 about-page">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="conference-title">MEDICLAVE</h1>
          <h4 className="conference-date">25–27 Nov 2025 | Valencia, Spain</h4>
        </div>

        {/* Introduction */}
        <Card className="intro-card mb-5">
          <Card.Body>
            <p className="intro-text">
              Join us at the prestigious Global Medical Conclave – Mediclave 2025,
              where healthcare professionals, researchers, scientists, and
              policymakers unite to discuss groundbreaking developments...
            </p>
          </Card.Body>
        </Card>

        {/* Who Can Attend Section */}
        <div className="section mb-5">
          <h2 className="section-title">Who Can Attend...</h2>
          <Row>
            <Col md={6}>
              <Card className="attendee-card h-100">
                <Card.Body>
                  <ul className="attendee-list">
                    <li>Researchers & Academicians</li>
                    <li>Healthcare Providers & Clinicians</li>
                    <li>Medical Device Innovators</li>
                    <li>Government Officials & Policymakers</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="attendee-card h-100">
                <Card.Body>
                  <ul className="attendee-list">
                    <li>Pharmaceutical & Biotech Professionals</li>
                    <li>Students & Early-Career Professionals</li>
                    <li>NGOs & Public Health Organizations</li>
                    <li>Investors & Healthcare Entrepreneurs</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Event Highlights Section */}
        <div className="section mb-5">
          <h2 className="section-title">Event Highlights</h2>
          <Row>
            {[
              ["Keynote Speakers", "Leading experts in medicine, policy, and tech."],
              ["Exhibition", "Showcase of cutting-edge healthcare tech."],
              ["Accredited Learning", "Earn CPD/CME credits by attending the conferences."],
              ["Publication Opportunities", "Proceedings or journal partnerships for presented work."],
              ["Workshops & Seminars", "Interactive sessions on current topics."],
              ["Networking Opportunities", "Connect with global leaders."],
              ["Collaboration Building", "Initiate joint research projects or multi-institutional studies."],
              ["Awards & Recognition", "Compete for best paper/poster prizes and other accolades."],
            ].map(([title, desc], i) => (
              <Col md={6} lg={4} className="mb-3" key={i}>
                <Card className="highlight-card h-100">
                  <Card.Body>
                    <h5 className="highlight-title">{title}</h5>
                    <p className="highlight-desc">{desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Important Dates Section */}
        <div className="section mb-5">
          <h2 className="section-title">Important Dates</h2>
          <Row>
            {[
              ["Event Date", "25th November"],
              ["Proposed Venue", "Novotel Valencia, Spain"],
              ["Registration Deadline", "20th November"],
            ].map(([title, info], i) => (
              <Col md={4} className="mb-3" key={i}>
                <Card className="date-card text-center h-100">
                  <Card.Body>
                    <h5 className="date-title">{title}</h5>
                    <div className="date-divider"></div>
                    <p className="date-info">{info}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default About;
