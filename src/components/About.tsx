
import React from 'react';

const About = () => {
  const [currentTime, setCurrentTime] = React.useState(() => new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative py-6 md:py-12 lg:py-16 xl:py-20 bg-black text-white overflow-hidden select-none">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* ...existing code... */}
        {/* Floating command snippets - hidden on mobile, themed for About, placed like Skills */}
        <div className="hidden lg:block absolute top-20 left-8 font-mono text-green-400 opacity-80 animate-pulse-slow select-none">
          <div className="text-green-300/95">$ npx about-me --intro</div>
          <div className="text-gray-100/95">Crafting code & coffee</div>
        </div>
        <div className="hidden lg:block absolute bottom-24 right-8 font-mono text-blue-400 opacity-80 animate-pulse-slow select-none">
          <div className="text-blue-300/95">$ cat about.txt</div>
          <div className="text-gray-100/95">Full-Stack Developer</div>
        </div>
        <style>{`
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.25; }
            50% { opacity: 0.45; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 2.5s cubic-bezier(0.4,0,0.6,1) infinite;
          }
        `}</style>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Mobile-optimized compact layout */}
        <div className="md:hidden">
          <div className="text-center mb-4">
            <div className="bg-black border border-gray-900 rounded-lg max-w-xs mx-auto hover:border-green-400 transition-all duration-300 transform hover:scale-105">
              <div className="bg-gray-900 px-3 py-1 flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span className="font-mono text-xs text-gray-400 flex-1 text-center">about.json</span>
              </div>
              <div className="p-2 font-mono text-xs text-center">
                <span className="text-green-400 animate-pulse"> cat about.json</span>
              </div>
            </div>
          </div>

          {/* Compact information cards for mobile */}
          <div className="space-y-3">
            {/* Personal information summary */}
            <div className="bg-black border border-gray-900 rounded-lg hover:border-blue-400 transition-all duration-300 group">
              <div className="bg-gray-900 px-3 py-1 flex items-center gap-2">
                <span className="text-blue-400 font-mono text-xs animate-pulse">{'>'}</span>
                <span className="font-mono text-xs text-gray-400">system_info</span>
              </div>
              <div className="p-3 font-mono text-xs space-y-2">
                <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                  <span className="text-gray-600">├─</span>
                  <span className="text-blue-400">name:</span>
                  <span className="text-white hover:text-green-400 transition-colors duration-200">"Muneeb Anjum"</span>
                </div>
                <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                  <span className="text-gray-600">├─</span>
                  <span className="text-blue-400">role:</span>
                  <span className="text-green-400 hover:text-green-300 transition-colors duration-200">"Full-Stack Developer"</span>
                </div>
                <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                  <span className="text-gray-600">├─</span>
                  <span className="text-blue-400">location:</span>
                  <span className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">"Pakistan"</span>
                </div>
                <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                  <span className="text-gray-600">└─</span>
                  <span className="text-blue-400">experience:</span>
                  <span className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200">"1+ years"</span>
                </div>
              </div>
            </div>

            {/* Current availability status */}
            <div className="bg-black border border-green-900 rounded-lg hover:border-green-400 transition-all duration-300 group">
              <div className="bg-green-950/30 px-3 py-1 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-mono text-xs text-gray-400">status</span>
              </div>
              <div className="p-3 font-mono text-xs space-y-1">
                <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                  <span className="text-gray-600">├─</span>
                  <span className="text-green-400 hover:text-green-300 transition-colors duration-200">Available for opportunities</span>
                </div>
                <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                  <span className="text-gray-600">├─</span>
                  <span className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">Open to collaborations</span>
                </div>
                <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                  <span className="text-gray-600">└─</span>
                  <span className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200">Learning new technologies</span>
                </div>
              </div>
            </div>

            {/* Quick skills overview */}
            <div className="bg-black border border-gray-900 rounded-lg hover:border-cyan-400 transition-all duration-300 group">
              <div className="bg-gray-900 px-3 py-1 flex items-center gap-2">
                <span className="text-cyan-400 font-mono text-xs animate-pulse">{'>'}</span>
                <span className="font-mono text-xs text-gray-400">quick_skills</span>
              </div>
              <div className="p-3 font-mono text-xs space-y-1">
                <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                  <span className="text-gray-600">├─</span>
                  <span className="text-green-400 hover:text-green-300 transition-colors duration-200">React</span>
                </div>
                <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                  <span className="text-gray-600">├─</span>
                  <span className="text-blue-400 hover:text-blue-300 transition-colors duration-200">TypeScript</span>
                </div>
                <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                  <span className="text-gray-600">├─</span>
                  <span className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200">Node.js</span>
                </div>
                <div className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                  <span className="text-gray-600">└─</span>
                  <span className="text-purple-400 hover:text-purple-300 transition-colors duration-200">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop full-featured layout */}
        <div className="hidden md:block">
          <div className="text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-12">
            <div className="w-full max-w-2xl mx-auto mb-4">
              {/* Redesigned Terminal Header with hover effect */}
              <div className="group terminal-header-container w-full">
                <div className="backdrop-blur-md bg-black/70 border border-gray-800 rounded-t-2xl px-4 py-2 flex items-center gap-3 shadow-lg relative overflow-hidden transition-all duration-300 group-hover:bg-black/90 group-hover:border-green-400 group-hover:shadow-green-400/30">
                  {/* Left dots (now same as right) */}
                  <div className="flex gap-1.5 mr-2">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full transition-colors duration-200 group-hover:bg-green-400"></span>
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full transition-colors duration-200 group-hover:bg-yellow-400"></span>
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full transition-colors duration-200 group-hover:bg-red-400"></span>
                  </div>
                  {/* Path and user info */}
                  <div className="flex-1 text-center font-mono text-sm text-gray-200 select-text transition-colors duration-300 group-hover:text-green-200">
                    {/* Replicate Hero.tsx terminal user@host:path style, slightly larger */}
                    <span className="text-gray-400 font-mono text-sm">muneeb</span>
                    <span className="text-blue-400 font-mono font-bold text-lg align-middle" style={{ fontFamily: 'monospace' }}>＠</span>
                    <span className="text-green-400 font-mono font-bold text-lg align-middle" style={{ fontFamily: 'monospace' }}>devmachine</span>
                    <span className="text-gray-400 font-mono text-sm">:</span>
                    <span className="text-blue-400 font-mono text-sm">~</span>
                    <span className="text-gray-400 font-mono text-sm">/portfolio</span>
                    <span className="text-blue-400 font-mono font-bold text-lg align-middle">/about</span>
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
                    <span className="text-white font-semibold group-hover:text-green-200">npx about-me --intro</span>
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

          {/* Main content grid layout */}
          <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center">
            {/* Experience-style About Card */}
            <div className="relative group bg-black border border-gray-900 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.025] hover:border-blue-500 hover:shadow-blue-400/30 max-w-5xl mx-auto" style={{ minHeight: '320px' }}>
              {/* Animated glowing border on hover (blue glow) */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl z-10 transition-all duration-500 group-hover:shadow-[0_0_40px_8px_rgba(59,130,246,0.25)] group-hover:border-blue-400 border-1 border-transparent"></div>

              {/* Top status bar with animated dots */}
              <div className="flex items-center gap-2 px-6 py-2 border-b border-gray-800 bg-black/80">
                <span className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" style={{ animationDelay: '0.3s' }}></span>
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" style={{ animationDelay: '0.6s' }}></span>
                </span>
                <span className="ml-3 font-mono text-xs text-gray-400 tracking-widest uppercase letter-spacing-2">ABOUT ME</span>
                <span className="ml-auto font-mono text-xs text-green-400">ACTIVE</span>
              </div>

              {/* Content area with two columns */}
              <div className="relative z-20 px-8 pt-1 pb-8 flex flex-col gap-3 transition-all duration-500">
                {/* Terminal command style heading */}
                <div className="font-mono text-xl md:text-2xl flex items-center gap-2 text-green-400 mb-0 pb-0">
                  <span className="select-none">$</span>
                  <span className="text-white font-bold">about-me</span>  <span className="text-gray-400 font-bold">|</span>
                  <span className="text-blue-400 font-bold">Full-Stack Developer</span>
                </div>
                <div className="font-mono text-base text-green-400 flex items-center gap-2 mb-1">
                  <span className="italic">npx about-me --intro</span>
                  <span className="font-bold text-blue-300">'Crafting code & coffee'</span>
                </div>
                {/* Two-column sub-boxes */}
                <div className="flex flex-col gap-6 mt-2">
                  {/* Right column: Location, University, Focus, Status (now on top) */}
                  <div className="flex flex-col gap-2">
                  <div className="bg-black/80 border border-gray-800 rounded-lg p-4 shadow-inner">
                      <div className="font-mono text-xs text-gray-400 mb-2">// Details</div>
                      <div className="font-mono text-base text-gray-200 flex items-center gap-2">
                        <span className="text-green-400">┌─</span>
                        <span>Location: <span className="text-cyan-300 font-medium">Islamabad, Pakistan</span></span>
                      </div>
                      <div className="font-mono text-base text-gray-200 flex items-center gap-2">
                        <span className="text-green-400">├─</span>
                        <span>University: <span className="text-blue-300 font-medium">SZABIST</span></span>
                      </div>
                      <div className="font-mono text-base text-gray-200 flex items-center gap-2">
                        <span className="text-green-400">├─</span>
                        <span>Focus: <span className="text-purple-300 font-medium">.NET Framework</span></span>
                      </div>
                      <div className="font-mono text-sm text-gray-200 flex items-center gap-2">
                        <span className="text-green-400">└─</span>
                        <span>Status: <span className="text-green-300 font-medium animate-statuspulse">AVAILABLE</span></span>
                      </div>
                    </div>
                  </div>
                  {/* Left column: Experience, Current Role, Tech Stack, Passion, Philosophy, Projects (now below) */}
                  <div className="flex flex-col gap-4">
                  <div className="bg-black/80 border border-gray-800 rounded-lg p-4 shadow-inner">
                      <div className="font-mono text-xs text-gray-400 mb-2">// Experience</div>
                      <div className="font-mono text-base text-gray-400 flex items-center gap-2">
                        <span className="text-green-400">┌─</span>
                        <span>Experience: <span className="text-yellow-400 font-medium">1+ years</span></span>
                      </div>
                      <div className="font-mono text-base text-gray-400 flex items-center gap-2">
                        <span className="text-green-400">├─</span>
                        <span>Current Role: <span className="text-green-300 font-medium">Backend Developer Intern at App In Snap PVT Limited</span></span>
                      </div>
                      <div className="font-mono text-base text-gray-400 flex items-center gap-2">
                        <span className="text-green-400">├─</span>
                        <span>Tech Stack: <span className="text-cyan-300 font-medium">.NET, ASP.NET MVC, C#, React, TypeScript, Tailwind CSS, AI Integration</span></span>
                      </div>
                      <div className="font-mono text-base text-gray-400 flex items-center gap-2">
                        <span className="text-green-400">├─</span>
                        <span>Passion: <span className="text-gray-100 leading-relaxed">Fullstack development, AI-powered solutions, robust backend & intuitive frontend.</span></span>
                      </div>
                      <div className="font-mono text-base text-gray-400 flex items-center gap-2">
                        <span className="text-green-400">├─</span>
                        <span>Philosophy: <span className="text-green-300 font-medium">Always learning, always building...</span></span>
                      </div>
                      <div className="font-mono text-sm text-gray-400 flex items-center gap-2">
                        <span className="text-green-400">└─</span>
                        <span>Projects: <span className="text-gray-200 hover:text-green-400 cursor-pointer transition-colors duration-200">sorting-visualizer/</span>, 
                        <span className="text-gray-200 hover:text-green-400 cursor-pointer transition-colors duration-200"> ai-pay-solutions/</span>, 
                        <span className="text-gray-200 hover:text-green-400 cursor-pointer transition-colors duration-200"> portfolio-website/</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated bottom status bar */}
              <div className="flex items-center justify-between px-6 py-2 border-t border-gray-800 bg-black/80">
                <div className="flex items-center gap-2 font-mono text-xs text-gray-500">
                  <span className="animate-pulse text-green-400">●</span>
                  <span className="tracking-widest uppercase">Profile synced</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-green-400">
                  <span className="animate-pulse">{`Last update: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section navigation divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-2 sm:pb-4 md:pb-6 lg:pb-8 pt-2 sm:pt-4 md:pt-6 lg:pt-8">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-800"></div>
          <div className="font-mono text-xs text-gray-500 flex items-center gap-2">
            <span className="text-green-400">$</span>
            <span>cd ../skills</span>
          </div>
          <div className="flex-1 h-px bg-gray-800"></div>
        </div>
      </div>
    </section>
  )
}

export default About
