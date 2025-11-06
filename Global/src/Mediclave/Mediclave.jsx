import React from "react";
import "./Mediclave.css";
import {
  GiMonoWheelRobot,
  GiMedicines,
  GiBrain,
  GiMedicalDrip,
  GiHeartOrgan,
  GiHealthNormal,
  GiStethoscope,
  GiDoctorFace,
  GiHeartInside,
  GiMuscleUp,
} from "react-icons/gi";
import { FaBaby, FaSyringe, FaFemale, FaBone, FaDna } from "react-icons/fa";
import {
  MdLocalHospital,
  MdPsychology,
  MdOutlineHealthAndSafety,
} from "react-icons/md";
import { RiMentalHealthLine, RiVirusLine } from "react-icons/ri";
import { Button } from "react-bootstrap";

const tracks = [
  { icon: <GiMonoWheelRobot />, title: "AI in Healthcare" },
  { icon: <MdLocalHospital />, title: "Telemedicine & Digital Health" },
  { icon: <GiHeartOrgan />, title: "Cardiology" },
  { icon: <FaFemale />, title: "Gynecology" },
  { icon: <FaBaby />, title: "Pediatrics" },
  { icon: <GiMedicines />, title: "Emergency Medicine" },
  { icon: <RiVirusLine />, title: "Oncology" },
  { icon: <GiHealthNormal />, title: "Gastroenterology" },
  { icon: <FaDna />, title: "Genetic Disorder" },
  { icon: <MdOutlineHealthAndSafety />, title: "Infectious Diseases" },
  { icon: <GiHeartInside />, title: "Endocrinology" },
  { icon: <FaBone />, title: "Rheumatology" },
  { icon: <RiMentalHealthLine />, title: "Mental Health" },
  { icon: <GiDoctorFace />, title: "Pain Management" },
  { icon: <GiMuscleUp />, title: "Nutrition and Metabolism" },
  { icon: <MdPsychology />, title: "Addiction Medicine" },
  { icon: <GiMedicalDrip />, title: "Geriatrics" },
  { icon: <GiStethoscope />, title: "Women's Health & Midwifery" },
  { icon: <GiBrain />, title: "Cosmetic Surgery" },
  { icon: <FaSyringe />, title: "Vaccines" },
];

const Mediclave = () => {
  return (
    <div className="med-section-container">
      <h3 className="med-section-title">Mediclave – Tracks</h3>
      <p className="med-section-subtitle">
        Explore a diverse range of medical and healthcare tracks designed to foster innovation,
        collaboration, and knowledge exchange.
      </p>

      <div className="med-grid">
        {tracks.map((item, index) => (
          <div className="med-card" key={index}>
            <div className="med-icon">{item.icon}</div>
            <p className="med-title">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="med-buttons">
        <Button className="med-read-btn">Read More</Button>
        <Button className="med-abstract-btn">Submit Abstract</Button>
      </div>
    </div>
  );
};

export default Mediclave;
