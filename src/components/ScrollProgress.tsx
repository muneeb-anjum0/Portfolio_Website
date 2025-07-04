// src/components/ScrollProgress.tsx
import { useState, useEffect } from 'react'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [currentSection, setCurrentSection] = useState('home')

  const sections = [
    { id: 'home', name: 'Hero' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'education', name: 'Education' },
    { id: 'contact', name: 'Contact' }
  ]

  useEffect(() => {
    let ticking = false

    const updateScrollProgress = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPx = document.documentElement.scrollTop
          const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
          const scrolled = Math.min(100, Math.max(0, (scrollPx / winHeightPx) * 100))
          setScrollProgress(Math.round(scrolled * 10) / 10) // Round to 1 decimal place for smoother updates

          // Detect current section with smoother transitions
          const sectionElements = sections.map(section => ({
            ...section,
            element: document.getElementById(section.id)
          })).filter(section => section.element)

          const currentSectionElement = sectionElements.find(section => {
            const rect = section.element!.getBoundingClientRect()
            const threshold = window.innerHeight * 0.3 // 30% of viewport height
            return rect.top <= threshold && rect.bottom >= threshold
          })

          if (currentSectionElement) {
            setCurrentSection(currentSectionElement.name)
          }
          
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    updateScrollProgress() // Initial call
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-black z-[60] select-none">
      <div 
        className="h-full bg-gradient-to-r from-green-400 to-green-400 transition-all duration-75 ease-out will-change-transform"
        style={{ 
          width: `${scrollProgress}%`,
          transform: 'translateZ(0)' // Force hardware acceleration
        }}
      />
      {/* Terminal-style progress indicator */}
      <div className="fixed top-2 right-4 bg-black/90 backdrop-blur-sm border border-gray-800 rounded px-3 py-1.5 font-mono text-xs text-green-400 z-[60] shadow-lg transition-all duration-200">
        <div className="flex items-center gap-2">
          <span className="text-gray-500">~/</span>
          <span className="text-cyan-400 transition-all duration-300 hidden sm:inline">{currentSection.toLowerCase()}</span>
          <span className="text-cyan-400 transition-all duration-300 sm:hidden">{currentSection.slice(0, 4)}</span>
          <span className="text-gray-500">|</span>
          <span className="text-green-400 transition-all duration-100">[{scrollProgress.toFixed(1)}%]</span>
          {scrollProgress >= 99.5 && <span className="text-yellow-400 animate-pulse">EOF</span>}
        </div>
      </div>
    </div>
  )
}

export default ScrollProgress
