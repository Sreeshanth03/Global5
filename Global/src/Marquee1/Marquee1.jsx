import React, { useState, useEffect } from "react";
import "./Marquee.css";

const Marquee1 = () => {
  const images = [
    "/Images/Marquee1.jpg",
    "/Images/Marq2.jpg",
    "/Images/Marq3.jpg",
    "/Images/marq5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // ✅ Auto-slide works together with manual controls
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Cleanup
  }, [images.length]);

  return (
    <div className="marquee-container">
      <div className="marquee-wrapper">
        <button
          className="marquee-btn"
          onClick={prevSlide}
          aria-label="Previous image"
        >
          ‹
        </button>

        <div className="marquee-slider">
          <div
            className="marquee-track"
            style={{
              transform: `translateX(-${currentIndex * 220}px)`, // 200px width + 20px gap
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {images.map((src, index) => (
              <div key={index} className="marquee-item">
                <img src={src} alt={`Marquee image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <button
          className="marquee-btn"
          onClick={nextSlide}
          aria-label="Next image"
        >
          ›
        </button>
      </div>

      {/* Dots indicator */}
      <div className="marquee-dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Marquee1;
