import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About.jsx";
import Exceutive from "./Components/Exceutive";
import Navbar from "./Navbar/Navbar";
import Tracks from "./Components/Tracks.jsx";
import Orators from "./Components/Orators.jsx";
import Schedule from "./Components/Schedule.jsx";
import Venue from "./Components/Venue.jsx";
import Event from "./Components/Event.jsx";
import Contact from "./Components/Contact.jsx";
import Quick from "./Quick/Quick.jsx";

const App = () => {
  const location = useLocation(); 

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/exceutive" element={<Exceutive />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/orators" element={<Orators />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/event" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Quick/>
    </div>
  );
};

export default App;
