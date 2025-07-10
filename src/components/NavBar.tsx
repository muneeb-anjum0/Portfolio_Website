
import { useState, useEffect, useRef } from 'react';

const NAV_LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Education'] as const;

interface NavbarProps {
  currentSection?: string;
}


export default function Navbar({ currentSection }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

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

  // Use hash-based navigation for GitHub Pages compatibility
  const scrollTo = (id: string) => {
    window.location.hash = `#${id}`;
    setMobileOpen(false);
  };
  return (
    <nav
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 select-none ${scrolled
        ? 'bg-black/95 backdrop-blur-md border-b border-black'
        : 'bg-transparent backdrop-transparent border-b border-transparent'
      }`}
    >
      {/* Terminal-style navbar container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Terminal-style brand */}
        <button
          onClick={() => scrollTo('home')}
          className="font-mono text-lg sm:text-xl group flex items-center gap-1 sm:gap-2 hover:scale-105 transform transition-all duration-200"
        >
          <span>
            <span className="text-green-400" style={{ fontFamily: 'monospace, \"Fira Mono\", \"JetBrains Mono\", \"Menlo\", \"Consolas\", \"Liberation Mono\", \"Courier New\", monospace' }}></span>
            <span className="text-gray-100 group-hover:text-gray-400 transition-colors">muneeb</span>
            <span className="text-blue-400 group-hover:text-green-300 transition-colors hidden sm:inline">＠</span>
            <span className="text-gray-400 group-hover:text-white transition-colors hidden sm:inline">devmachine</span>
          </span>
        </button>

        {/* Center nav links - terminal style (desktop only) */}
        <ul className="hidden md:flex items-center space-x-1">
          {NAV_LINKS.map((label) => {
            const sectionId = label.toLowerCase();
            const isActive = currentSection === sectionId;
            return (
              <li key={label}>
                <button
                  onClick={() => scrollTo(sectionId)}
                  className={`px-4 py-1 font-mono text-base flex items-center gap-2 rounded-md transition-colors duration-200
                    ${isActive
                      ? 'bg-black text-gray-100 font-bold border border-gray-700/60 ring-1 ring-gray-500/40 ring-offset-1 ring-offset-black shadow-sm'
                      : 'text-gray-300 hover:text-gray-00 hover:bg-black'}
                  `}
                  style={isActive ? { boxShadow: '0 1px 6px 0 #0003, 0 0 0 1.5px #4448', transition: 'box-shadow 0.2s, border-color 0.2s, background 0.2s, color 0.2s' } : { transition: 'box-shadow 0.2s, border-color 0.2s, background 0.2s, color 0.2s' }}
                >
                  <span>
                    <span className="text-blue-400">.</span>
                    <span className="text-gray-600">/</span>
                  </span>
                  <span>
                    {sectionId}
                    <span className="text-green-400">.</span>sh
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right-side: Terminal-style CTA + mobile toggle */}
        <div className="flex items-center space-x-4">
          {/* Desktop Contact CTA - terminal button style */}
          <a
            href="#contact"
            onClick={() => scrollTo('contact')}
            className="hidden md:flex group relative items-center px-4 py-2 font-mono text-sm border-2 border-gray-400 text-white bg-black hover:bg-gray-200 hover:text-black hover:border-gray-600 transition-all duration-300 gap-2 overflow-hidden hover:scale-105 hover:shadow-lg hover:shadow-gray-400/30 hover:-translate-y-1"
            style={{ minWidth: '120px', justifyContent: 'center' }}
          >
            <span className="absolute -inset-1 bg-gray-400 opacity-10 group-hover:bg-gray-200 group-hover:opacity-20 group-hover:animate-pulse transition-all duration-300 border-2 border-gray-400 rounded-lg"></span>
            <span className="relative flex items-center gap-2">
              <span className="animate-bounce group-hover:animate-pulse text-white group-hover:text-black">$</span>
              <span className="group-hover:tracking-wider transition-all duration-300 text-white group-hover:text-black">./contact</span>
              <span className="text-white group-hover:text-black opacity-100 group-hover:animate-bounce transition-colors duration-300">↗</span>
            </span>
          </a>

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

      {/* Mobile themed fly-out menu overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-[999] bg-white/10 backdrop-blur-xl flex flex-col items-center justify-start pt-20 px-4 select-none animate-fade-in border-l border-r border-white/20" style={{boxShadow:'0 8px 32px 0 rgba(31,38,135,0.37)'}}>
          {/* Glass effect header with close button */}
          <div className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-xl px-3 py-3 border-b border-white/20 rounded-t-lg flex items-center justify-end shadow-lg" style={{boxShadow:'0 4px 24px 0 rgba(31,38,135,0.17)'}}>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-black hover:text-white font-mono text-lg px-2 py-1 rounded transition-colors duration-200 bg-white/20 hover:bg-black/60"
              aria-label="Close menu"
            >✕</button>
          </div>
          {/* muneeb@devmachine as a header in the flyout, styled like desktop */}
          <div className="flex items-center justify-center mb-6 mt-2 w-full">
            <span className="flex items-center gap-1 font-mono text-xl group select-none">
              <span className="text-green-400" style={{ fontFamily: 'monospace, \"Fira Mono\", \"JetBrains Mono\", \"Menlo\", \"Consolas\", \"Liberation Mono\", \"Courier New\", monospace' }}></span>
              <span className="text-black group-hover:text-gray-400 transition-colors">muneeb</span>
              <span className="text-blue-400 group-hover:text-green-300 transition-colors">＠</span>
              <span className="text-gray-700 group-hover:text-black transition-colors">devmachine</span>
            </span>
          </div>
          {/* Navigation Commands */}
          <div className="w-full max-w-md mx-auto flex-1 flex flex-col justify-center gap-2 py-6">
            {NAV_LINKS.map((label, index) => {
              const sectionId = label.toLowerCase();
              const isActive = currentSection === sectionId;
              return (
                <button
                  key={label}
                  onClick={() => { scrollTo(sectionId); setMobileOpen(false); }}
                  className={`w-full text-left py-3 px-4 rounded-lg font-mono text-lg flex items-center gap-3 border border-transparent group transition-all duration-200
                    ${isActive ? 'bg-white/20 text-blue-500 font-bold border border-blue-400 ring-1 ring-blue-400/40 ring-offset-1 ring-offset-white shadow-sm' : 'text-black hover:text-blue-500 hover:bg-white/30 hover:border-blue-400'}`}
                  style={{ letterSpacing: '0.02em', boxShadow: isActive ? '0 1px 6px 0 #0003, 0 0 0 1.5px #1e90ff88' : undefined, transition: 'box-shadow 0.2s, border-color 0.2s, background 0.2s, color 0.2s' }}
                >
                  <span className="text-blue-400">.</span>
                  <span className="text-gray-600">/</span>
                  <span className="text-base">{sectionId}</span>
                  <span className="ml-auto text-xs text-gray-500">0{index + 1}</span>
                </button>
              );
            })}
            {/* Contact Section */}
            <a
              href="#contact"
              onClick={() => { scrollTo('contact'); setMobileOpen(false); }}
              className="w-full group relative px-4 py-3 mt-4 font-mono text-lg border-2 border-blue-400 text-blue-400 bg-white/10 hover:bg-white hover:text-black hover:border-green-400 transition-all duration-300 flex items-center justify-center gap-2 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-blue-400/20 hover:-translate-y-1 overflow-hidden"
              style={{ minWidth: '120px' }}
            >
              <span className="absolute -inset-1 bg-blue-400 opacity-10 group-hover:bg-green-400 group-hover:opacity-20 group-hover:animate-pulse transition-all duration-300 border-2 border-blue-400 rounded-lg"></span>
              <span className="relative flex items-center gap-2">
                <span className="animate-bounce group-hover:animate-pulse">$</span>
                <span className="group-hover:tracking-wider transition-all duration-300">contact</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-bounce">↗</span>
              </span>
            </a>
          </div>
          {/* Terminal Footer */}
          <div className="w-full max-w-md mx-auto pb-4">
            <div className="font-mono text-xs text-gray-500 text-center">
              <span className="text-blue-400">●</span> mobile
            </div>
          </div>
        </div>
      )}
      {/* KEYFRAMES & UTILITIES for button animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-bounce { animation: bounce 1s infinite; }
        .animate-pulse { animation: pulse 2s infinite; }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease; }
        /* Prevent scroll glitch on mobile menu open/close */
        body[style*='overflow: hidden'] {
          touch-action: none;
        }
      `}</style>
    </nav>
  );
}
