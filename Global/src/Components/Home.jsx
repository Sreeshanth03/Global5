// import React from 'react'
// import "./Home.css"

// import Innovations from "../Innovations/Innovations.jsx";
// import Marquee1 from "../Marquee1/Marquee1.jsx";
// import Executive1 from "../Executive1/Executive1.jsx";
// import Mediclave from "../Mediclave/Mediclave.jsx";
// import MediclaveOrators from "../MediclaveOrators/MediclaveOrators.jsx";
// import Events1 from "../Events1/Events1.jsx";
// import EventPartners from "../EventPartners/EventPartners.jsx";

// const Home = () => {
//   const targetDate = new Date('November 25, 2025 00:00:00').getTime();

//         function updateCountdown() {
//             const now = new Date().getTime();
//             const difference = targetDate - now;

//             if (difference > 0) {
//                 const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//                 const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//                 const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//                 const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//                 // Update the display
//                 document.getElementById('days').textContent = formatTime(days);
//                 document.getElementById('hours').textContent = formatTime(hours);
//                 document.getElementById('minutes').textContent = formatTime(minutes);
//                 document.getElementById('seconds').textContent = formatTime(seconds);
//             } else {
//                 // Countdown finished
//                 document.getElementById('days').textContent = '00';
//                 document.getElementById('hours').textContent = '00';
//                 document.getElementById('minutes').textContent = '00';
//                 document.getElementById('seconds').textContent = '00';
//             }
//         }

//         function formatTime(time) {
//             return time < 10 ? `0${time}` : time;
//         }

//         // Update the countdown every second
//         setInterval(updateCountdown, 1000);

//         // Initialize the countdown
//         updateCountdown();
//   return (
//     <div>
//     {/* <img src="../Images/home-banner.jpg" alt=""  width="100%" style={{marginTop:"-150px"}}/> */}
//     <section class="countdown-section">
//         <div class="countdown-container">
//             <div class="date-badge">NOV 25-27 | VALENCIA | SPAIN</div>
//             <h1 class="conference-title">Global Medical Conclave</h1>
//             <h2 class="conference-subtitle">MEDICLAVE - 2025</h2>

//             <div class="timer-container">
//                 <div class="timer-digits">
//                     <div class="timer-digit" id="days">00</div>
//                     <div class="timer-digit" id="hours">00</div>
//                     <div class="timer-digit" id="minutes">00</div>
//                     <div class="timer-digit" id="seconds">00</div>
//                 </div>
//                 <div class="timer-labels">
//                     <div class="timer-label">Days</div>
//                     <div class="timer-label">Hours</div>
//                     <div class="timer-label">Minutes</div>
//                     <div class="timer-label">Seconds</div>
//                 </div>
//             </div>

//             <button class="register-btn">Register Now</button>
//         </div>
//     </section>

//     <Innovations />
//     <Marquee1 />
//     <Executive1 />
//           <Mediclave />
//           <MediclaveOrators />
//           <Events1 />
//           <Venue />
//           <EventPartners />
//           <Quick />

//     </div>
//   )
// }

// export default Home

import React, { useEffect, useState } from "react";
import "./Home.css";

import Innovations from "../Innovations/Innovations.jsx";
import Marquee1 from "../Marquee1/Marquee1.jsx";
import Executive1 from "../Executive1/Executive1.jsx";
import Mediclave from "../Mediclave/Mediclave.jsx";
import MediclaveOrators from "../MediclaveOrators/MediclaveOrators.jsx";
import Events1 from "../Events1/Events1.jsx";
import EventPartners from "../EventPartners/EventPartners.jsx";
import Venue from "../Venue/Venue.jsx";

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("November 25, 2025 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: formatTime(days),
          hours: formatTime(hours),
          minutes: formatTime(minutes),
          seconds: formatTime(seconds),
        });
      } else {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      }
    };

    const formatTime = (time) => (time < 10 ? `0${time}` : time);

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="countdown-section">
        <div className="countdown-container">
          <div className="date-badge">NOV 25-27 | VALENCIA | SPAIN</div>
          <h1 className="conference-title">Global Medical Conclave</h1>
          <h2 className="conference-subtitle">MEDICLAVE - 2025</h2>

          <div className="timer-container">
            <div className="timer-digits">
              <div className="timer-digit">{timeLeft.days}</div>
              <div className="timer-digit">{timeLeft.hours}</div>
              <div className="timer-digit">{timeLeft.minutes}</div>
              <div className="timer-digit">{timeLeft.seconds}</div>
            </div>
            <div className="timer-labels">
              <div className="timer-label">Days</div>
              <div className="timer-label">Hours</div>
              <div className="timer-label">Minutes</div>
              <div className="timer-label">Seconds</div>
            </div>
          </div>

          <button className="register-btn">Register Now</button>
        </div>
      </section>

      <Innovations />
      <Marquee1 />
      <Executive1 />
      <Mediclave />
      <MediclaveOrators />
      <Venue />
      <Events1 />
    
      <EventPartners />
    </div>
  );
};

export default Home;
