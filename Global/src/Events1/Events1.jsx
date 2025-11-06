import React from "react";
import { Button } from "react-bootstrap";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "./Events1.css";
import { useNavigate } from "react-router-dom";

const Events1 = () => {
  const navigate = useNavigate();

  const HandleViewAll = () => {
    navigate("/venue");
  };

  const images = [
    "/Images/Img1.avif",
    "/Images/cac-vlc.jpg",
    "/Images/img3.jpeg",
    "/Images/img5.avif",
    "/Images/img6.jpg",
  ];

  const places = [
    "City of Arts and Sciences",
    "Valencia Cathedral",
    "La Lonja de la Seda (UNESCO)",
    "El Carmen district",
    "Oceanogràfic",
    "L’Umbracle & Mya nightlife",
    "Bioparc Valencia",
  ];

  return (
    <div className="venue-container">
      <h1 className="venue-heading">Mediclave – Venue</h1>

      <div className="venue-content">
        <div className="venue-left">
          <p className="venue-subtitle">Proposed Conference Venue</p>
          <h5 className="venue-hotel">Novotel Valencia Lavant</h5>

          <ul className="venue-list">
            {places.map((place, index) => (
              <li key={index}>
                <FaRegArrowAltCircleRight className="venue-icon" />
                {place}
              </li>
            ))}
          </ul>
        </div>

        <div className="venue-right">
          {images.map((src, i) => (
            <div key={i} className="venue-img-box">
              <img src={src} alt={`venue-${i}`} className="venue-img" />
            </div>
          ))}
        </div>
      </div>

      <Button className="venue-btn" onClick={HandleViewAll}>
        View All
      </Button>
    </div>
  );
};

export default Events1;
