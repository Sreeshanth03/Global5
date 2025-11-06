import React from "react";
import bgImage from "/Images/Exceutive.png"; // ✅ use public image

const Exceutive = () => {
  // List of executives (cleaner & easier to maintain)
  const executives = [
    { src: "/Images/Alireza.bf7b629dbecc85dcd35b.webp", name: "Alireza Heidari", role: "CEO & Prof. USA" },
    { src: "/Images/Hassan-El-Tamimi.e5a28071ccb252b74746 (1).webp", name: "Hassan El-Tamimi", role: "CEO & Prof. USA" },
    { src: "/Images/Willie_Sai_Ho_Chan.eb79196219fa1331ddc7.webp", name: "Willie Sai Ho Chan", role: "CEO & Prof. China" },
    { src: "/Images/Mihail.8c0d7000c838068225e1.webp", name: "Mihail Lucian Birsa", role: "CEO & Prof. Romania" },
    { src: "/Images/LauraSarbu.ebad3786937e90cfd658.webp", name: "Laura Gabriela SARBU", role: "CEO & Prof. Romania" },
    { src: "/Images/Mohamed.911e34c26a8168d7d2e6 (1).jpg", name: "Mohamed Hosni", role: "CEO & Prof. United Kingdom" },
    { src: "/Images/dana.3d0dc6ab96c3aa2f3391 (1).jpg", name: "Dana York", role: "CEO & Prof. USA" },
    { src: "/Images/Sobia.767371ea139849259186.webp", name: "Sobia Hasan", role: "CEO & Prof. Pakistan" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          width: "80%",
          textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          marginLeft: "140px",
          marginTop: "-20px",
        }}
        className="hero-section"
      >
        <h1 className="hero-title">Mediclave – Executive Panel Members</h1>
      </div>

      {/* Content Section */}
      <div style={{ padding: "20px", fontSize: "18px", textAlign: "center" }} className="content-section">
        <h3 className="section-title">Meet Our Esteemed Executive Panel</h3>
        <p style={{ color: "grey" }} className="section-description">
          Our executive panel comprises visionary leaders and industry pioneers
          who bring deep expertise and strategic insight to guide our mission in
          advancing global health innovation.
        </p>

        {/* Executive Images Grid */}
        <div className="executive-grid">
          {executives.map((person, index) => (
            <div key={index} className="executive-item">
              <img src={person.src} alt={person.name} className="executive-img" />
              <div className="executive-info">
                <h4>{person.name}</h4>
                <p>{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .hero-section {
          width: 80%;
          margin-left: 140px;
          margin-top: -20px;
          height: 50vh;
        }

        .hero-title {
          font-size: 2.5rem;
        }

        .section-title {
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }

        .section-description {
          font-size: 1.1rem;
          max-width: 800px;
          margin: 0 auto 2rem;
        }

        .executive-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          padding: 2rem;
        }

        .executive-item {
          text-align: center;
          transition: transform 0.3s ease;
        }

        .executive-item:hover {
          transform: translateY(-5px);
        }

        .executive-img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #f0f0f0;
          margin-bottom: 1rem;
        }

        .executive-info h4 {
          margin: 0.5rem 0;
          color: #333;
          font-size: 1.2rem;
        }

        .executive-info p {
          margin: 0;
          color: #666;
          font-size: 1rem;
        }

        @media (max-width: 1024px) {
          .hero-section {
            width: 90%;
            margin-left: 5%;
            height: 40vh;
          }

          .hero-title {
            font-size: 2.2rem;
          }

          .executive-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            width: 95%;
            margin-left: 2.5%;
            height: 35vh;
            margin-top: 0;
          }

          .hero-title {
            font-size: 1.8rem;
            text-align: center;
          }

          .executive-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .executive-img {
            width: 160px;
            height: 160px;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            width: 100%;
            margin-left: 0;
            height: 30vh;
          }

          .hero-title {
            font-size: 1.5rem;
          }

          .executive-grid {
            grid-template-columns: 1fr;
          }

          .executive-img {
            width: 140px;
            height: 140px;
          }
        }
      `}</style>
    </div>
  );
};

export default Exceutive;
