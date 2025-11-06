import React from "react";
import "./EventPartners.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EventPartners = () => {
  const navigate = useNavigate();

  const HandlePartner = () => {
    navigate("/event");
  };

  const partners = [
    "/Images/data1.webp",
    "/Images/data2.webp",
    "/Images/data3.webp",
    "/Images/data4.webp",
    "/Images/data5.webp",
    "/Images/data6.webp",
    "/Images/data7.webp",
  ];

  return (
    <div className="partners-container">
      <h1 className="partners-heading">Mediclave – Event Partners</h1>

      <div className="partners-marquee">
        <div className="partners-track">
          {partners.concat(partners).map((src, index) => (
            <div key={index} className="partner-item">
              <img src={src} alt={`partner-${index}`} className="partner-img" />
            </div>
          ))}
        </div>
      </div>

      <div>
        <Button onClick={HandlePartner}>Become a Partner</Button>
      </div>
    </div>
  );
};

export default EventPartners;
