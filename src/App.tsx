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

const App: React.FC = () => (
  <div className="min-h-screen select-none">
    <TerminalLoader />
    <ScrollProgress />
    <ScrollBar />
    <KeyboardNavigation />
    <Navbar />
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

export default App
