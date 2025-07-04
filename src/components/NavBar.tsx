// src/components/Navbar.tsx
import { useState, useEffect } from 'react'

const NAV_LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Education'] as const

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 select-none ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-gray-800' 
        : 'bg-transparent backdrop-transparent border-b border-transparent'
    }`}>
      {/* Terminal-style navbar container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Terminal-style brand */}
        <button
          onClick={() => scrollTo('home')}
          className="font-mono text-xl transition-colors group flex items-center gap-2"
        >
          <span className="text-green-400">$</span>
          <span className="text-white group-hover:text-green-400 transition-colors">muneeb</span>
          <span className="text-green-400 group-hover:text-white transition-colors">@devmachine</span>
        </button>

        {/* Center nav links - terminal style */}
        <ul className="hidden md:flex items-center space-x-1">
          {NAV_LINKS.map((label) => (
            <li key={label}>
              <button
                onClick={() => scrollTo(label.toLowerCase())}
                className="px-4 py-2 font-mono text-base text-gray-400 hover:text-green-400 hover:bg-gray-900 rounded transition-all duration-200 flex items-center gap-2"
              >
                <span className="text-gray-600">./</span>
                {label.toLowerCase()}
                <span className="text-gray-600">.sh</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Right-side: Terminal-style CTA + mobile toggle */}
        <div className="flex items-center space-x-4">
          {/* Desktop Contact CTA - terminal button style */}
          <button
            onClick={() => scrollTo('contact')}
            className="hidden md:flex items-center px-4 py-2 font-mono text-sm border border-green-400 text-green-400 bg-transparent hover:bg-green-400 hover:text-black transition-all duration-200 gap-2"
          >
            <span>./contact</span>
            <span className="text-xs opacity-60">[ENTER]</span>
          </button>

          {/* Mobile hamburger - terminal style */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden p-2 text-green-400 hover:text-white transition-colors duration-200 font-mono"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <span className="text-lg">✕</span>
            ) : (
              <span className="text-lg">≡</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile terminal-style menu */}
      <div
        className={`
          md:hidden fixed inset-x-0 top-16 bg-black/95 backdrop-blur-md border-t border-gray-800 z-40 select-none
          transform transition-all duration-300 ease-out shadow-2xl
          ${mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        `}
      >
        {/* Terminal window header for mobile */}
        <div className="bg-gray-900/90 backdrop-blur-sm px-4 py-2 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <span className="font-mono text-sm text-gray-400 ml-4">Navigation Menu</span>
          </div>
        </div>

        <ul className="flex flex-col py-6 space-y-4 px-6 bg-gradient-to-b from-transparent to-black/20">
          {NAV_LINKS.map((label) => (
            <li key={label} className="font-mono">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                <span className="text-green-400">$</span>
                <span>execute navigation command</span>
              </div>
              <button
                onClick={() => scrollTo(label.toLowerCase())}
                className="w-full text-left pl-4 py-3 text-white hover:text-green-400 hover:bg-gray-900/50 rounded-md transition-all duration-200 flex items-center gap-2 border border-transparent hover:border-gray-700"
              >
                <span className="text-gray-600">./</span>
                {label.toLowerCase()}
                <span className="text-gray-600">.sh</span>
                <span className="ml-auto text-gray-600 text-xs">→</span>
              </button>
            </li>
          ))}
          
          {/* Mobile Contact CTA */}
          <li className="pt-4 border-t border-gray-800">
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-2 font-mono">
              <span className="text-green-400">$</span>
              <span>initiate contact protocol</span>
            </div>
            <button
              onClick={() => scrollTo('contact')}
              className="w-full px-4 py-3 font-mono text-sm border border-green-400 text-green-400 bg-transparent hover:bg-green-400 hover:text-black transition-all duration-200 flex items-center justify-center gap-2 rounded-md hover:shadow-lg hover:shadow-green-400/20"
            >
              <span>./contact.sh</span>
              <span className="text-xs opacity-60">[ENTER]</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
