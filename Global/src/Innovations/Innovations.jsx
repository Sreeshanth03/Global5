import React from "react";
import "./Innovations.css";
import { IoIosArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Innovations = () => {
  const navigate = useNavigate();

  const HandleKnow = () => {
    navigate("/about");
  };

  return (
    <div className="innovations-container">
      <div className="innovations-image">
        <img
          src="/Images/About_page.4367b8764303a4b76871 (1).png"
          alt="Innovations in Global Health"
        />
      </div>

      <div className="innovations-content">
        <h4 className="innovations-title">
          Innovations{" "}
          <p style={{ color: "black", display: "inline" }}>
            in Global Health: Bridging Gaps
          </p>{" "}
          through Technology & Collaboration
        </h4>

        <ul className="innovations-list">
          <li>
            <IoIosArrowDropright className="icon-arrow" />
            Explores the impact of AI and big data on medical diagnostics
          </li>
          <li>
            <IoIosArrowDropright className="icon-arrow" />
            Using digital health tools and telemedicine for patient care
          </li>
          <li>
            <IoIosArrowDropright className="icon-arrow" />
            Ethical challenges in new technologies like AI & data privacy
          </li>
          <li>
            <IoIosArrowDropright className="icon-arrow" />
            Global response to infectious diseases and collaboration strategies
          </li>
        </ul>

        <button className="know-more-btn" onClick={HandleKnow}>
          Know More
        </button>
      </div>
    </div>
  );
};

export default Innovations;
