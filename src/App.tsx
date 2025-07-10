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
    // Prevent right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    window.addEventListener('contextmenu', handleContextMenu);
    // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+Shift+C
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    window.addEventListener('keydown', handleKeyDown, true);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown, true);
    };
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
