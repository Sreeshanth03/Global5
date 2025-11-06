import React from 'react'
import './Venue.css'
import { FaClock, FaMapMarkerAlt, FaCoffee } from 'react-icons/fa'
import { FaUtensils, FaIdCard, FaUserTie } from 'react-icons/fa6'

const Venue = () => {
  const venueData = [
    { time: "8:00AM - 9:00AM", title: "Breakfast", icon: <FaUtensils />, location: "Spain" },
    { time: "9:00AM - 9:30AM", title: "Registration", icon: <FaIdCard />, location: "Spain" },
    { time: "9:30AM - 9:45AM", title: "Introduction", icon: <FaUserTie />, location: "Spain" },
    { time: "9:45AM - 10:15AM", title: "KeyNote - 1", icon: <FaUserTie />, location: "Spain", slot: true },
    { time: "10:15AM - 10:45AM", title: "KeyNote - 2", icon: <FaUserTie />, location: "Spain" },
    { time: "10:45AM - 11:15AM", title: "KeyNote - 3", icon: <FaUserTie />, location: "Spain" },
    { time: "11:15AM - 11:30AM", title: "Refreshment", icon: <FaCoffee />, location: "Spain" },
  ]

  const days = [
    { day: "Day 01", date: "25th Nov", dayName: "Saturday", active: true },
    { day: "Day 02", date: "26th Nov", dayName: "Sunday", active: false },
    { day: "Day 03", date: "27th Nov", dayName: "Monday", active: false },
  ]

  return (
    <div className="mediclave-schedule-container">
      {/* --- Hero Section --- */}
      <div className="mediclave-schedule-hero">
        <h1>Mediclave 2025</h1>
      </div>

      {/* --- Main Content --- */}
      <div className="mediclave-schedule-content">
        {/* --- Heading --- */}
        <div className="mediclave-schedule-header">
          <h2>Our Events Schedule Plan</h2>
          <div className="mediclave-days-navigation">
            {days.map((day, index) => (
              <div
                key={index}
                className={`mediclave-day-tab ${day.active ? "mediclave-active-day" : ""}`}
              >
                <p className="mediclave-day-label">{day.day}</p>
                <h4 className="mediclave-date">{day.date}</h4>
                <p className="mediclave-day-name">{day.dayName}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Schedule Timeline --- */}
        <div className="mediclave-timeline-container">
          <div className="mediclave-timeline">
            {venueData.map((event, index) => (
              <div className="mediclave-timeline-item" key={index}>
                <div className="mediclave-event-separator"></div>
                <div className="mediclave-event-card">
                  <div className="mediclave-event-icon-wrapper">
                    {event.icon}
                  </div>
                  <div className="mediclave-event-content">
                    <p className="mediclave-event-time-location">
                      <FaClock className="mediclave-time-icon" /> {event.time}{" "}
                      | <FaMapMarkerAlt className="mediclave-location-icon" /> {event.location}
                    </p>
                    <h4 className="mediclave-event-title">{event.title}</h4>
                    {event.slot && (
                      <span className="mediclave-slot-badge">Slot Available</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Venue