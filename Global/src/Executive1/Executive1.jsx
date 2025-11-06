import React from "react";
import "./Executive1.css";
import { useNavigate } from "react-router-dom";

const executives = [
  {
    img: "/Images/Hassan-El-Tamimi.e5a28071ccb252b74746 (1).webp",
    name: "Hassan El-Tamimi",
    role: "Founder & Prof.",
    country: "UAE",
  },
  {
    img: "/Images/Mohamed.911e34c26a8168d7d2e6.jpg",
    name: "Mohamed Hosni",
    role: "CEO & Prof.",
    country: "UK",
  },
  {
    img: "/Images/chrysoula.872cd623771a8263d69d.png",
    name: "Chrysoula I. Liakou",
    role: "Founder & Prof.",
    country: "Greece",
  },
  {
    img: "/Images/dana.3d0dc6ab96c3aa2f3391.jpg",
    name: "Dana York",
    role: "Founder & Prof.",
    country: "United States",
  },
];

const Executive1 = () => {
  const navigate = useNavigate();

  const HandleView = () => {
    navigate("/exceutive");
  };

  return (
    <div className="executive-container">
      <h2 className="executive-title">Meet Our Esteemed Executive Panel</h2>
      <p className="executive-subtitle">
        Our executive panel comprises visionary leaders and industry pioneers who bring
        deep expertise and strategic insight to guide our mission in advancing global
        health innovation.
      </p>

      <div className="executive-grid">
        {executives.map((exec, index) => (
          <div key={index} className="executive-card">
            <div className="executive-img-wrapper">
              <img src={exec.img} alt={exec.name} className="executive-img" />
            </div>
            <h3 className="executive-name">{exec.name}</h3>
            <p className="executive-role">{exec.role}</p>
            <p className="executive-country">{exec.country}</p>
          </div>
        ))}
      </div>

      <button className="view-all-btn" onClick={HandleView}>
        View All
      </button>
    </div>
  );
};

export default Executive1;
