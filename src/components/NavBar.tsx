// src/components/Navbar.tsx
import { useState, useEffect, useRef } from 'react'

const NAV_LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Education'] as const

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileOpen(false)
      }
    }

    if (mobileOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [mobileOpen])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <nav 
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 select-none ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-gray-800' 
          : 'bg-transparent backdrop-transparent border-b border-transparent'
      }`}
    >
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
            className="md:hidden p-2 text-green-400 hover:text-white transition-colors duration-200 font-mono relative z-50"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <div className="flex items-center gap-1">
                <span className="text-lg">✕</span>
                <span className="text-xs hidden sm:inline">close</span>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <span className="text-lg">≡</span>
                <span className="text-xs hidden sm:inline">menu</span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile terminal-style menu */}
      <div
        className={`
          md:hidden fixed inset-x-0 top-16 bg-black/95 backdrop-blur-md border-t border-gray-800 z-40 select-none
          transform transition-all duration-300 ease-out shadow-2xl
          ${mobileOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}
        `}
      >
        {/* Terminal window header for mobile */}
        <div className="bg-gray-900/90 backdrop-blur-sm px-4 py-2 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="font-mono text-sm text-gray-400 ml-2">terminal_nav.sh</span>
            </div>
            <div className="font-mono text-xs text-gray-500">
              <span className="text-green-400">●</span> connected
            </div>
          </div>
        </div>

        {/* Terminal Profile Section */}
        <div className="px-4 py-3 border-b border-gray-800 bg-gray-950/50">
          <div className="font-mono text-sm space-y-1">
            <div className="flex items-center gap-2 text-gray-500">
              <span className="text-green-400">$</span>
              <span>whoami</span>
            </div>
            <div className="pl-4 space-y-1">
              <div className="text-white">muneeb@devmachine</div>
              <div className="text-cyan-400 text-xs">Full-Stack Developer</div>
              <div className="text-gray-400 text-xs">~/portfolio/mobile_nav</div>
            </div>
          </div>
        </div>

        {/* Navigation Commands */}
        <div className="px-4 py-3 space-y-3 bg-gradient-to-b from-transparent to-black/20 max-h-96 overflow-y-auto">
          <div className="font-mono text-xs text-gray-500 mb-3">
            <span className="text-green-400">$</span> ls -la navigation/
          </div>
          
          {NAV_LINKS.map((label, index) => (
            <div key={label} className="font-mono">
              <button
                onClick={() => scrollTo(label.toLowerCase())}
                className="w-full text-left py-2 px-3 text-white hover:text-green-400 hover:bg-gray-900/50 rounded transition-all duration-200 flex items-center gap-2 border border-transparent hover:border-gray-700 group"
              >
                <span className="text-gray-600 group-hover:text-green-400">→</span>
                <span className="text-gray-500">./</span>
                <span>{label.toLowerCase()}</span>
                <span className="text-gray-500">.sh</span>
                <div className="ml-auto flex items-center gap-2">
                  <span className="text-xs text-gray-600">0{index + 1}</span>
                  <span className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </div>
              </button>
            </div>
          ))}
          
          {/* Mobile Contact Section */}
          <div className="pt-3 border-t border-gray-800 space-y-2">
            <div className="font-mono text-xs text-gray-500">
              <span className="text-green-400">$</span> ./contact.sh --init
            </div>
            <button
              onClick={() => scrollTo('contact')}
              className="w-full px-3 py-2.5 font-mono text-sm border border-green-400 text-green-400 bg-transparent hover:bg-green-400 hover:text-black transition-all duration-200 flex items-center justify-center gap-2 rounded hover:shadow-lg hover:shadow-green-400/20 group"
            >
              <span>execute contact</span>
              <span className="text-xs opacity-60 group-hover:opacity-100">[ENTER]</span>
            </button>
          </div>

          {/* Terminal Footer */}
          <div className="pt-3 border-t border-gray-800">
            <div className="font-mono text-xs text-gray-500 text-center">
              <span className="text-green-400">●</span> Session active • 
              <span className="text-cyan-400 ml-1">mobile_terminal</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
