import React from "react";
import "./Quick.css";
import { Button } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaReddit,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Quick = () => {
  const navigate = useNavigate();

  const HandleClick = () => {
    navigate("/about");
  };

  return (
    <footer className="footer-container">
      {/* Left Logo Section */}
      <div className="footer-section logo-section">
        {/* ✅ Fixed image path for deployment */}
        <img src="/Images/Image.png" alt="Mediclave 2025" className="footer-logo" />
        <p className="footer-tagline">
          Innovations in Global Health: Bridging Gaps through Technology & Collaboration
        </p>
      </div>

      {/* Quick Links */}
      <div className="footer-section">
        <h3 className="footer-title">Quick Links</h3>
        <ul className="footer-links">
          <li onClick={HandleClick}><FaChevronRight /> About</li>
          <li><FaChevronRight /> Executive Panel</li>
          <li><FaChevronRight /> Tracks</li>
          <li><FaChevronRight /> Orators</li>
          <li><FaChevronRight /> Schedule</li>
          <li><FaChevronRight /> Venue</li>
          <li><FaChevronRight /> Event Partners</li>
          <li><FaChevronRight /> Contact</li>
        </ul>
      </div>

      {/* Social Media */}
      <div className="footer-section">
        <h3 className="footer-title">Social Media</h3>
        <ul className="footer-social">
          <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /> Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /> Twitter (X)</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /> Instagram</a></li>
          <li><a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /> YouTube</a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a></li>
          <li><a href="https://reddit.com" target="_blank" rel="noreferrer"><FaReddit /> Reddit</a></li>
        </ul>
      </div>

      {/* Get In Touch */}
      <div className="footer-section">
        <h3 className="footer-title">Get In Touch</h3>
        <ul className="footer-contact">
          <li><FaPhoneAlt /> +1 757 656 7778</li>
          <li><FaWhatsapp /> +1 715 990 5583</li>
          <li><FaEnvelope /> hello@helixconferences.com</li>
          <li>
            <FaMapMarkerAlt /> Helix Conferences LLC, 45573 Shepard Drive,
            Suite #101, Sterling, Virginia-20164, USA
          </li>
        </ul>
        <Button className="register-btn">Register</Button>
      </div>
    </footer>
  );
};

export default Quick;
