import React from "react";
import "./Venue.css";

const Venue = () => {
  return (
    <div className="venue-container">
      {/* ---- Hero Section ---- */}
      <div className="venue-hero">
        <div className="venue-overlay">
          <h1 className="venue-title">Our Venue</h1>
          <p className="venue-description">
            <strong>Proposed Conference Venue:</strong> <br />
            Novotel Valencia Lavant, Valencia International Airport (Manises), Valencia, Spain
          </p>
        </div>
      </div>

      {/* ---- Venue Image ---- */}
      <div className="venue-image">
        {/* ✅ Correct way to access image from public folder */}
        <img src="/Images/restaurante-home-rooftop.jpg" alt="Venue" />
      </div>

      {/* ---- Nearby Places ---- */}
      <div className="places-section">
        <h2 className="places-title">Places to Visit Near the Venue</h2>

        <div className="places-grid">
          <div className="place-card">
            <img src="/Images/see.jpeg" alt="Serranos Towers" />
            <h4>Serranos Towers</h4>
            <p>2.4 km away</p>
          </div>

          <div className="place-card">
            <img src="/Images/val.jpeg" alt="Valencia Cathedral" />
            <h4>Valencia Cathedral</h4>
            <p>3.6 km away</p>
          </div>

          <div className="place-card">
            <img src="/Images/gu.jpeg" alt="Gulliver Park" />
            <h4>Gulliver Park</h4>
            <p>4.7 km away</p>
          </div>

          <div className="place-card">
            <img src="/Images/ocean.webp" alt="Oceanogràfic València" />
            <h4>Oceanogràfic València</h4>
            <p>6.0 km away</p>
          </div>

          <div className="place-card">
            <img src="/Images/city.webp" alt="City of Arts and Sciences" />
            <h4>City of Arts and Sciences</h4>
            <p>6.5 km away</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
