
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/NavBar';
import ScrollProgress from './components/ScrollProgress';
import ScrollBar from './components/ScrollBar';
import KeyboardNavigation from './components/KeyboardNavigation';
import TerminalLoader from './components/TerminalLoader';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import FeaturedProjects from './components/FeaturedProjects';
import Education from './components/Education';
import GetInTouch from './components/GetInTouch';

const App: React.FC = () => {
  // You may want to keep some of the security/keyboard logic, but for clarity, it's omitted here
  return (
    <Router>
      <div className="min-h-screen select-none">
        <TerminalLoader />
        <ScrollProgress />
        <ScrollBar />
        <KeyboardNavigation />
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<FeaturedProjects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<GetInTouch />} />
          {/* Redirect any unknown route to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
