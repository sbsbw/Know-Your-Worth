import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav_Bar from "./components/Nav-Bar";
import Home from "./pages/App-home";
import Job_help from "./pages/App-job-help";
import About_us from "./pages/App-about-us";
import Job_search from "./pages/App-search";
import Footer from './components/Footer';

const app = () => {
  return (
    <Router>
      <Nav_Bar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job-help" element={<Job_help />} />
        <Route path="/about-us" element={<About_us />} />
        <Route path="/job-search" element={<Job_search />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default app;