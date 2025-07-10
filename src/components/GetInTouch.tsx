
import React, { useState, useEffect } from 'react'

const contactData = {
  email: 'muneeb.anjum@hotmail.com',
  location: 'Islamabad, Pakistan',
  socials: [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/muneebanjum335', color: 'text-blue-400', hover: 'hover:text-blue-300' },
    { name: 'GitHub', url: 'https://github.com/muneeb-anjum0', color: 'text-gray-300', hover: 'hover:text-white' },
    { name: 'Medium', url: 'https://medium.com/@muneebanjum335', color: 'text-green-400', hover: 'hover:text-green-300' },
  ],
}

const GetInTouch: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="contact" className="relative py-6 md:py-12 lg:py-16 xl:py-20 bg-black text-white overflow-hidden select-none">
      {/* Terminal-style background with grid pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        {/* Decorative contact-themed commands */}
        <div className="hidden lg:block absolute top-20 left-10 font-mono text-green-400 opacity-10 animate-pulse">
          <div>$ ping {contactData.email}</div>
          <div className="text-gray-500">Awaiting response from human operator</div>
        </div>
        <div className="hidden lg:block absolute bottom-20 right-10 font-mono text-blue-400 opacity-10 animate-pulse">
          <div>$ curl -s https://muneebanjum335.socials</div>
          <div className="text-gray-500">Fetching digital footprints...</div>
        </div>
      </div>

      {/* Terminal window header - styled like About/Skills/Experience/Projects/Education */}
      <div className="hidden md:block text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-12">
        <div className="w-full max-w-2xl mx-auto mb-4">
          {/* Redesigned Terminal Header (copied from About/Skills/Experience/Projects/Education) */}
          <div className="group terminal-header-container w-full">
            <div className="backdrop-blur-md bg-black/70 border border-gray-800 rounded-t-2xl px-4 py-2 flex items-center gap-3 shadow-lg relative overflow-hidden transition-all duration-300 group-hover:bg-black/90 group-hover:border-green-400 group-hover:shadow-green-400/30">
              {/* Left dots */}
              <div className="flex gap-1.5 mr-2">
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full transition-colors duration-200 group-hover:bg-green-400"></span>
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full transition-colors duration-200 group-hover:bg-yellow-400"></span>
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full transition-colors duration-200 group-hover:bg-red-400"></span>
              </div>
              {/* Path and user info */}
              <div className="flex-1 text-center font-mono text-sm text-gray-200 select-text transition-colors duration-300 group-hover:text-green-200">
                {/* Replicate Hero/About/Skills/Experience/Projects/Education terminal user@host:path style */}
                <span className="text-gray-400 font-mono text-sm">muneeb</span>
                <span className="text-blue-400 font-mono font-bold text-lg align-middle" style={{ fontFamily: 'monospace' }}>＠</span>
                <span className="text-green-400 font-mono font-bold text-lg align-middle" style={{ fontFamily: 'monospace' }}>devmachine</span>
                <span className="text-gray-400 font-mono text-sm">:</span>
                    <span className="text-blue-400 font-mono text-sm">~</span>
                    <span className="text-gray-400 font-mono text-sm">/portfolio</span>
                    <span className="text-blue-400 font-mono font-bold text-lg align-middle">/contact</span>
              </div>
              {/* Right dots */}
              <div className="flex gap-1.5">
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full transition-colors duration-200 group-hover:bg-green-400"></span>
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full transition-colors duration-200 group-hover:bg-yellow-400"></span>
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full transition-colors duration-200 group-hover:bg-red-400"></span>
              </div>
            </div>
            {/* Terminal body with prompt */}
            <div className="backdrop-blur-md bg-black/80 border-x border-b border-gray-800 rounded-b-2xl px-6 py-4 font-mono text-base text-green-400 shadow-lg relative overflow-hidden transition-all duration-300 group-hover:bg-black/90 group-hover:border-green-400 group-hover:shadow-green-400/30">
              <div className="flex items-center gap-2">
                <span className="text-green-400 font-bold group-hover:text-green-300">$</span>
                <span className="text-white font-semibold group-hover:text-green-200">npx contact --log</span>
                <span className="blinking-cursor ml-1">|</span>
              </div>
              <div className="absolute bottom-2 right-4 text-xs text-green-400 opacity-90 select-none group-hover:text-green-400">
                {currentTime.toLocaleTimeString()}
              </div>
            </div>
            {/* Blinking cursor animation */}
            <style>{`
              .blinking-cursor {
                display: inline-block;
                width: 1ch;
                animation: blink 1s steps(2, start) infinite;
              }
              @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
              }
            `}</style>
          </div>
        </div>
      </div>

      {/* Mobile-optimized contact layout - now matches desktop terminal look */}
      <div className="md:hidden">
        <div className="w-full max-w-md mx-auto mb-3">
          <div className="group terminal-header-container w-full">
            <div className="backdrop-blur-md bg-black/70 border border-gray-800 rounded-t-2xl px-2 py-1 flex items-center gap-1 shadow-lg relative overflow-hidden transition-all duration-300 group-hover:bg-black/90 group-hover:border-green-400 group-hover:shadow-green-400/30" style={{ minHeight: '32px' }}>
              {/* Left dots */}
              <div className="flex gap-1 mr-1">
                <span className="w-1 h-1 bg-gray-600 rounded-full transition-colors duration-200 group-hover:bg-green-400"></span>
                <span className="w-1 h-1 bg-gray-600 rounded-full transition-colors duration-200 group-hover:bg-yellow-400"></span>
                <span className="w-1 h-1 bg-gray-600 rounded-full transition-colors duration-200 group-hover:bg-red-400"></span>
              </div>
              {/* Path and user info */}
              <div className="flex-1 text-center font-mono text-[10px] text-gray-200 select-text transition-colors duration-300 group-hover:text-green-200">
                <span className="text-gray-400 font-mono">muneeb</span>
                <span className="text-blue-400 font-mono font-bold text-xs align-middle">＠</span>
                <span className="text-green-400 font-mono font-bold text-xs align-middle">devmachine</span>
                <span className="text-gray-400 font-mono">:</span>
                <span className="text-blue-400 font-mono">~</span>
                <span className="text-gray-400 font-mono">/portfolio</span>
                <span className="text-blue-400 font-mono font-bold text-xs align-middle">/contact</span>
              </div>
              {/* Right dots */}
              <div className="flex gap-1">
                <span className="w-1 h-1 bg-gray-600 rounded-full transition-colors duration-200 group-hover:bg-green-400"></span>
                <span className="w-1 h-1 bg-gray-600 rounded-full transition-colors duration-200 group-hover:bg-yellow-400"></span>
                <span className="w-1 h-1 bg-gray-600 rounded-full transition-colors duration-200 group-hover:bg-red-400"></span>
              </div>
            </div>
            <div className="backdrop-blur-md bg-black/80 border-x border-b border-gray-800 rounded-b-2xl px-2 py-2 font-mono text-xs text-green-400 shadow-lg relative overflow-hidden transition-all duration-300 group-hover:bg-black/90 group-hover:border-green-400 group-hover:shadow-green-400/30">
              <div className="flex items-center gap-1">
                <span className="text-green-400 font-bold group-hover:text-green-300">$</span>
                <span className="text-white font-semibold group-hover:text-green-200">npx contact --log</span>
                <span className="blinking-cursor ml-1">|</span>
              </div>
              <div className="absolute bottom-1 right-2 text-[10px] text-green-400 opacity-90 select-none group-hover:text-green-400">
                {currentTime.toLocaleTimeString()}
              </div>
              {/* Blinking cursor animation */}
              <style>{`
                .blinking-cursor {
                  display: inline-block;
                  width: 1ch;
                  animation: blink 1s steps(2, start) infinite;
                }
                @keyframes blink {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0; }
                }
              `}</style>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="relative group bg-black border border-gray-900 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.025] hover:border-blue-500 hover:shadow-blue-400/30 w-full max-w-md mx-auto mb-3 flex flex-col" style={{ minHeight: '220px', margin: '0 auto' }}>
            <div className="relative z-20 px-2 pt-1 pb-3 flex flex-col gap-2 transition-all duration-500">
              {/* Left: Direct Contact */}
              <div className="flex-1 flex flex-col min-w-0" style={{ marginTop: '4px' }}>
                <div className="font-mono text-[11px] flex items-center gap-1 mb-2 whitespace-nowrap">
                  <span className="italic text-blue-400">cat </span>
                  <span className="italic text-green-400">contact.json</span>
                  <span className="font-bold text-blue-300">'Let's connect!'</span>
                </div>
                <div className="bg-black/80 border border-gray-800 rounded-lg p-2 shadow-inner">
                  <ul className="space-y-1">
                    <li className="font-mono text-[11px] flex items-center gap-1 group-hover:text-blue-300 transition-colors duration-200">
                      <span className="text-blue-400 select-none group-hover:text-green-400 transition-colors duration-200">┌─</span>
                      <a href={`mailto:${contactData.email}`} className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Email</a>
                    </li>
                    <li className="font-mono text-[11px] flex items-center gap-1 group-hover:text-blue-300 transition-colors duration-200">
                      <span className="text-blue-400 select-none group-hover:text-green-400 transition-colors duration-200">└─</span>
                      <span className="text-gray-300">{contactData.location}</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Right: Social Links */}
              <div className="flex-1 flex flex-col min-w-0" style={{ marginTop: '8px' }}>
                <div className="bg-black/80 border border-gray-800 rounded-lg p-2 shadow-inner mt-2">
                  <ul className="space-y-1">
                    {contactData.socials.map((social, i) => {
                      let symbol = '├─';
                      if (i === 0) symbol = '┌─';
                      else if (i === contactData.socials.length - 1) symbol = '└─';
                      return (
                        <li key={social.name} className={`font-mono text-[15px] flex items-center gap-2 transition-colors duration-200`}>
                          <span className="text-blue-400 select-none transition-colors duration-200">{symbol}</span>
                          <a href={social.url} className={`${social.color} ${social.hover} transition-colors duration-200 text-[15px] font-semibold`} target="_blank" rel="noopener noreferrer">{social.name}</a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop full-featured contact interface - side by side sub containers */}
      <div className="hidden md:block">
        <div className="max-w-3xl mx-auto flex flex-col">
          <div className="relative group bg-black border border-gray-900 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.025] hover:shadow-gray-400/10 mb-0 flex flex-col" style={{ minHeight: '220px', margin: '0 auto' }}>
            <div className="relative z-20 px-8 pt-8 pb-8 flex flex-row gap-8 transition-all duration-500">
              {/* Left: Direct Contact */}
              <div className="flex-1 flex flex-col min-w-0" style={{ marginTop: '4px' }}>
                {/* Fun terminal easter egg: "cat contact.json" (single line) */}
                <div className="font-mono text-sm flex items-center gap-2 mb-4 whitespace-nowrap">
                  <span className="italic text-blue-400">cat </span>
                  <span className="italic text-green-400">contact.json</span>
                  <span className="font-bold text-blue-300">'Let\'s connect!'</span>
                </div>
                {/* Direct Contact as terminal output */}
                <div className="bg-black/80 border border-gray-800 rounded-lg p-4 shadow-inner">
                  <ul className="space-y-2">
                    <li className="font-mono text-sm flex items-center gap-2 group-hover:text-blue-300 transition-colors duration-200">
                      <span className="text-blue-400 select-none group-hover:text-green-400 transition-colors duration-200">┌─</span>
                      <a href={`mailto:${contactData.email}`} className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Email</a>
                    </li>
                    <li className="font-mono text-sm flex items-center gap-2 group-hover:text-blue-300 transition-colors duration-200">
                      <span className="text-blue-400 select-none group-hover:text-green-400 transition-colors duration-200">└─</span>
                      <span className="text-gray-300">{contactData.location}</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Right: Social Links */}
              <div className="flex-1 flex flex-col min-w-0" style={{ marginTop: '32px' }}>
                {/* Social Links as terminal output (matches left style) */}
                <div className="bg-black/80 border border-gray-800 rounded-lg p-4 shadow-inner mt-2">
                  <ul className="space-y-2">
                    {contactData.socials.map((social, i) => {
                      let symbol = '├─';
                      if (i === 0) symbol = '┌─';
                      else if (i === contactData.socials.length - 1) symbol = '└─';
                      return (
                        <li key={social.name} className={`font-mono text-sm flex items-center gap-2 transition-colors duration-200`}>
                          <span className="text-blue-400 select-none transition-colors duration-200">{symbol}</span>
                          <a href={social.url} className={`${social.color} ${social.hover} transition-colors duration-200`} target="_blank" rel="noopener noreferrer">{social.name}</a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section navigation divider */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-2 sm:pb-4 md:pb-6 lg:pb-8 pt-3 sm:pt-6 md:pt-8 lg:pt-12">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-800"></div>
          <div className="font-mono text-xs text-gray-500 flex items-center gap-2">
            <span className="text-blue-400">$</span>
            <a href="#home" className="hover:text-blue-300 transition-colors">exit</a>
          </div>
          <div className="flex-1 h-px bg-gray-800"></div>
        </div>
        {/* Status bar info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-gray-500 gap-2 sm:gap-4 mt-2">
          <div className="flex items-center gap-2 sm:gap-4">
            <span>Last update: {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}</span>
            <span className="hidden sm:inline">|</span>
            <span>Contact log synced</span>
          </div>
          <span className="text-blue-400">✓ System operational</span>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
