import React from "react";
import "./Schedule.css";
import {
  FaClock,
  FaMapMarkerAlt,
  FaUtensils,
  FaIdCard,
  FaChalkboardTeacher,
  FaCoffee,
} from "react-icons/fa";

const Schedule = () => {
  const scheduleData = [
    { time: "8:00AM - 9:00AM", title: "Breakfast" },
    { time: "9:00AM - 9:30AM", title: "Registration" },
    { time: "9:30AM - 9:45AM", title: "Introduction" },
    { time: "9:45AM - 10:15AM", title: "Keynote - 1" },
    { time: "10:15AM - 10:45AM", title: "Keynote - 2" },
    { time: "10:45AM - 11:15AM", title: "Keynote - 3" },
    { time: "11:15AM - 11:30AM", title: "Refreshment" },
    { time: "11:30AM - 11:50AM", title: "Oral Presentation - 1" },
    { time: "11:50AM - 12:10PM", title: "Oral Presentation - 2" },
    { time: "12:10PM - 12:30PM", title: "Oral Presentation - 3" },
    { time: "12:30PM - 12:50PM", title: "Oral Presentation - 4" },
    { time: "12:50PM - 1:10PM", title: "Oral Presentation - 5" },
    { time: "1:10PM - 1:30PM", title: "Oral Presentation - 6" },
    { time: "1:30PM - 2:00PM", title: "Lunch" },
    { time: "2:00PM - 2:20PM", title: "Oral Presentation - 7" },
    { time: "2:20PM - 2:40PM", title: "Oral Presentation - 8" },
    { time: "2:40PM - 3:00PM", title: "Oral Presentation - 9" },
    { time: "3:00PM - 3:20PM", title: "Oral Presentation - 10" },
    { time: "3:20PM - 3:40PM", title: "Oral Presentation - 11" },
    { time: "3:40PM - 4:00PM", title: "Oral Presentation - 12" },
    { time: "4:00PM - 4:20PM", title: "Refreshment" },
    { time: "4:20PM - 4:40PM", title: "Oral Presentation - 13" },
    { time: "4:40PM - 5:00PM", title: "Oral Presentation - 14" },
    { time: "5:00PM - 5:20PM", title: "Oral Presentation - 15" },
    { time: "5:20PM - 5:40PM", title: "Oral Presentation - 16" },
    { time: "5:40PM - 6:00PM", title: "Oral Presentation - 17" },
  ];

  const days = [
    { day: "Day 01", date: "25th Nov", dayName: "Saturday", active: true },
    { day: "Day 02", date: "26th Nov", dayName: "Sunday", active: false },
    { day: "Day 03", date: "27th Nov", dayName: "Monday", active: false },
  ];

  return (
    <div className="medischedule-container">
      {/* --- Hero Section --- */}
      <div
        className="medischedule-hero"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/Images/schedule.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1>Mediclave 2025</h1>
      </div>

      {/* --- Header Section --- */}
      <div className="medischedule-header">
        <h2>Our Events Schedule Plan</h2>

        <div className="medischedule-days">
          {days.map((d, i) => (
            <div
              key={i}
              className={`medischedule-day ${d.active ? "active" : ""}`}
            >
              <p className="day-label">{d.day}</p>
              <h4>{d.date}</h4>
              <p className="day-name">{d.dayName}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- Schedule List --- */}
      <div className="medischedule-list">
        {scheduleData.map((event, i) => (
          <div className="medischedule-event" key={i}>
            <div className="medischedule-icon">
              {event.title.includes("Breakfast") && <FaUtensils />}
              {event.title.includes("Registration") && <FaIdCard />}
              {event.title.includes("Introduction") && <FaChalkboardTeacher />}
              {event.title.includes("Refreshment") && <FaCoffee />}
            </div>
            <div className="medischedule-details">
              <p className="event-time">
                <FaClock className="event-icon" /> {event.time}{" "}
                <FaMapMarkerAlt className="event-icon" /> Spain
              </p>
              <h4 className="event-title">{event.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
