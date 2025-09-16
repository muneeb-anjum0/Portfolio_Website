import React from 'react'
import Navbar from './components/NavBar'
import ScrollProgress from './components/ScrollProgress'
import ScrollBar from './components/ScrollBar'
import KeyboardNavigation from './components/KeyboardNavigation'
import TerminalLoader from './components/TerminalLoader'
import Hero   from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import FeaturedProjects from './components/FeaturedProjects'
import Education from './components/Education'
import GetInTouch from './components/GetInTouch'


import { useState, useEffect } from 'react'

const SECTION_IDS = [
  'about',
  'skills',
  'experience',
  'projects',
  'education',
  'contact',
]

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.3;
      let found = 'about';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold && rect.bottom >= threshold) {
            found = id;
            break;
          }
        }
      }
      setCurrentSection(found);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen select-none">
      <TerminalLoader />
      <ScrollProgress />
      <ScrollBar />
      <KeyboardNavigation />
      <Navbar currentSection={currentSection} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <Education />
      <GetInTouch />
      {/* other sections… */}
    </div>
  )
}

export default App
