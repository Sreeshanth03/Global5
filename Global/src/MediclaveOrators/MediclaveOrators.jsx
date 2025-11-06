import React from "react";
import { Button } from "react-bootstrap";
import "./MediclaveOrators.css";
import { useNavigate } from "react-router-dom";

const MediclaveOrators = () => {
  const navigate = useNavigate();

  const HandleViewAll = () => {
    navigate("/orators");
  };

  const orators = [
    {
      img: "/Images/Mohamed.911e34c26a8168d7d2e6.jpg",
      name: "Prof. Mohamed Hosni",
      title: "CEO & Prof.",
      country: "United Kingdom",
    },
    {
      img: "/Images/chrysoula.872cd623771a8263d69d.png",
      name: "Prof. Chrysoula I. Liakou",
      title: "CEO & Prof.",
      country: "Greece",
    },
    {
      img: "/Images/Joaquin.9230a5565d4d0c709f83.jpg",
      name: "Prof. Joaquin Cayon",
      title: "CEO & Prof.",
      country: "Spain",
    },
    {
      img: "/Images/Mohammed.913e01f3ba94e2457a47.jpg",
      name: "Prof. Mohammed Abu-Ragheef",
      title: "CEO & Prof.",
      country: "Sweden",
    },
  ];

  return (
    <div className="mediclave-orators-container">
      <h2 className="mediclave-orators-heading">Mediclave - Orators</h2>
      <p className="mediclave-orators-subtitle">
        Renowned experts from across the globe sharing insights and leading the
        conversation at Mediclave.
      </p>

      <div className="mediclave-orators-grid">
        {orators.map((o, index) => (
          <div key={index} className="mediclave-orator-card">
            <div className="mediclave-orator-img-box">
              <img src={o.img} alt={o.name} className="mediclave-orator-img" />
            </div>
            <h5 className="mediclave-orator-name">{o.name}</h5>
            <p className="mediclave-orator-title">{o.title}</p>
            <p className="mediclave-orator-country">{o.country}</p>
          </div>
        ))}
      </div>

      <Button className="mediclave-view-all-btn" onClick={HandleViewAll}>
        View All
      </Button>
    </div>
  );
};

export default MediclaveOrators;
