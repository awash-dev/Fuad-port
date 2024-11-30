import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../pages/ABout";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Services from "../pages/services";
const Routers = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Routers;
