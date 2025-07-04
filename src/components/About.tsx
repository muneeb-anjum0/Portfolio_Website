// src/components/About.tsx
import { useState } from 'react';

const About = () => {
  const [isGlitching, setIsGlitching] = useState(false);

  const handleEasterEgg = () => {
    setIsGlitching(true);
    
    // Reset glitch effect after animation
    setTimeout(() => {
      setIsGlitching(false);
    }, 2000);
  };

  const cardComponents = [
    // System Info Card
    <div key="system-info" className={`bg-black border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group ${
      isGlitching 
        ? 'border-red-500 shadow-red-500/50 animate-pulse' 
        : 'border-gray-900 hover:border-blue-400 hover:shadow-blue-400/20' 
    }`}>
      <div className={`px-4 py-2 transition-colors duration-300 ${
        isGlitching 
          ? 'bg-red-950/50 group-hover:bg-red-900/50' 
          : 'bg-gray-900 group-hover:bg-gray-800'
      }`}>
        <span className={`font-mono text-xs transition-colors duration-300 ${
          isGlitching 
            ? 'text-red-400 group-hover:text-red-300' 
            : 'text-gray-400 group-hover:text-blue-400'
        }`}>
          {isGlitching ? 'SYSTEM_COMPROMISED.exe' : 'system_info.sh'}
        </span>
      </div>
      <div className="p-4 font-mono text-sm space-y-3">
        <div className="flex justify-between hover:bg-gray-950 rounded px-2 py-1 transition-colors duration-200">
          <span className="text-gray-400">Location:</span>
          <span className={`transition-colors duration-200 ${
            isGlitching 
              ? 'text-red-400 hover:text-red-300' 
              : 'text-green-400 hover:text-green-300'
          }`}>
            {isGlitching ? '404_NOT_FOUND' : 'Islamabad, Pakistan'}
          </span>
        </div>
        <div className="flex justify-between hover:bg-gray-950 rounded px-2 py-1 transition-colors duration-200">
          <span className="text-gray-400">University:</span>
          <span className={`transition-colors duration-200 ${
            isGlitching 
              ? 'text-yellow-400 hover:text-yellow-300' 
              : 'text-blue-400 hover:text-blue-300'
          }`}>
            {isGlitching ? 'HACKER_ACADEMY' : 'SZABIST'}
          </span>
        </div>
        <div className="flex justify-between hover:bg-gray-950 rounded px-2 py-1 transition-colors duration-200">
          <span className="text-gray-400">Focus:</span>
          <span className={`transition-colors duration-200 ${
            isGlitching 
              ? 'text-green-400 hover:text-green-300' 
              : 'text-purple-400 hover:text-purple-300'
          }`}>
            {isGlitching ? 'BREAKING_THINGS' : '.NET Framework'}
          </span>
        </div>
        <div className="flex justify-between hover:bg-gray-950 rounded px-2 py-1 transition-colors duration-200">
          <span className="text-gray-400">Status:</span>
          <span className={`transition-colors duration-200 ${
            isGlitching 
              ? 'text-red-400 hover:text-red-300' 
              : 'text-yellow-400 hover:text-yellow-300'
          }`}>
            {isGlitching ? 'SYSTEM_HACKED' : 'Backend Intern'}
          </span>
        </div>
      </div>
    </div>,

    // Status Terminal Card
    <div key="status" className={`bg-black border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group ${
      isGlitching 
        ? 'border-yellow-500 shadow-yellow-500/50 animate-pulse' 
        : 'border-green-900 hover:border-green-400 hover:shadow-green-400/30'
    }`}>
      <div className={`px-4 py-2 flex items-center gap-2 transition-colors duration-300 ${
        isGlitching 
          ? 'bg-yellow-950/50 group-hover:bg-yellow-900/50' 
          : 'bg-green-950/50 group-hover:bg-green-900/50'
      }`}>
        <div className={`w-2 h-2 rounded-full transition-transform duration-300 ${
          isGlitching 
            ? 'bg-yellow-400 animate-bounce group-hover:scale-125' 
            : 'bg-green-400 animate-pulse group-hover:scale-125'
        }`}></div>
        <span className={`font-mono text-xs transition-colors duration-300 ${
          isGlitching 
            ? 'text-yellow-400 group-hover:text-yellow-300' 
            : 'text-green-400 group-hover:text-green-300'
        }`}>
          {isGlitching ? 'chaos.log' : 'status.log'}
        </span>
      </div>
      <div className="p-4 font-mono text-sm hover:scale-100 transition-transform duration-300">
        <div className={`mb-2 transition-colors duration-200 ${
          isGlitching 
            ? 'text-yellow-400 hover:text-yellow-300' 
            : 'text-green-400 hover:text-green-300'
        }`}>
          {isGlitching ? '$ whoami --hacker' : '$ status --availability'}
        </div>
        <div className={`transition-colors duration-200 ${
          isGlitching 
            ? 'text-red-400 hover:text-red-300' 
            : 'text-white hover:text-green-100'
        }`}>
          {isGlitching ? 'EASTER_EGG_HUNTER' : 'AVAILABLE'}
        </div>
        <div className="text-gray-400 text-xs mt-2 hover:text-gray-300 transition-colors duration-200">
          {isGlitching 
            ? 'Currently hunting for more Easter eggs 🥚' 
            : 'Open for new opportunities, collaborations, and full-time positions'
          }
        </div>
      </div>
    </div>,

    // Quick Commands Card - Keep the Easter Egg functional
    <div key="commands" className={`bg-black border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group ${
      isGlitching 
        ? 'border-purple-500 shadow-purple-500/50 animate-pulse' 
        : 'border-gray-900 hover:border-cyan-400 hover:shadow-cyan-400/20'
    }`}>
      <div className={`px-4 py-2 transition-colors duration-300 ${
        isGlitching 
          ? 'bg-purple-950/50 group-hover:bg-purple-900/50' 
          : 'bg-gray-900 group-hover:bg-gray-800'
      }`}>
        <span className={`font-mono text-xs transition-colors duration-300 ${
          isGlitching 
            ? 'text-purple-400 group-hover:text-purple-300' 
            : 'text-gray-400 group-hover:text-cyan-400'
        }`}>
          {isGlitching ? 'hacker_tools.exe' : 'quick_commands.sh'}
        </span>
      </div>
      <div className="p-4 font-mono text-xs space-y-2">
        <div className={`transition-colors duration-300 cursor-default ${
          isGlitching 
            ? 'text-purple-500 hover:text-purple-400' 
            : 'text-gray-500 hover:text-cyan-400'
        }`}>
          {isGlitching ? '# Hacker mode activated' : '# Quick access commands'}
        </div>
        <div className="hover:text-green-300 hover:translate-x-2 hover:bg-gray-950 rounded px-2 py-1 transition-all duration-200 cursor-pointer">
          <span className="text-green-400">./</span>
          {isGlitching ? 'hack_the_matrix.sh' : 'view_projects.sh'}
        </div>
        <a
          href="#contact"
          className="hover:text-green-300 hover:translate-x-2 hover:bg-gray-950 rounded px-2 py-1 transition-all duration-200 cursor-pointer flex items-center"
        >
          <span className="text-green-400">./</span>
          {isGlitching ? 'send_memes.sh' : 'contact_me.sh'}
        </a>
        <div className="hover:text-green-300 hover:translate-x-2 hover:bg-gray-950 rounded px-2 py-1 transition-all duration-200 cursor-pointer">
          <span className="text-green-400">./</span>
          {isGlitching ? 'steal_resume.sh' : 'download_resume.sh'}
        </div>
        <button
          type="button"
          className="hover:text-green-300 hover:translate-x-2 hover:bg-gray-950 rounded px-2 py-1 transition-all duration-200 cursor-pointer flex items-center"
          onClick={handleEasterEgg}
        >
          <span className="text-green-400">./</span>
          {isGlitching ? 'more_chaos.sh' : 'easter_Egg.sh'}
        </button>
      </div>
    </div>
  ];

  return (
    <section id="about" className="relative py-6 md:py-12 lg:py-16 xl:py-20 bg-black text-white overflow-hidden select-none">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Terminal grid pattern */}
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
        
        {/* Floating about commands - hidden on mobile */}
        <div className="hidden lg:block absolute top-20 left-10 font-mono text-green-400 opacity-10 animate-pulse">
          <div>$ ls -la /about</div>
          <div className="text-gray-500">drwxr-xr-x 2 muneeb muneeb 4096 Jul 3 2025 .</div>
        </div>
        
        <div className="hidden lg:block absolute bottom-20 right-10 font-mono text-blue-400 opacity-10 animate-pulse">
          <div>$ git status</div>
          <div className="text-gray-500">On branch main</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Mobile: Compact About */}
        <div className="md:hidden">
          {/* Compact Terminal Header */}
          <div className="text-center mb-4">
            <div className="bg-black border border-gray-900 rounded-lg max-w-sm mx-auto hover:border-green-400 transition-all duration-300">
              <div className="bg-gray-900 px-3 py-1.5 flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="font-mono text-xs text-gray-400 flex-1 text-center">about.json</span>
              </div>
              <div className="p-3 font-mono text-xs text-center">
                <span className="text-green-400">$ cat about.json</span>
              </div>
            </div>
          </div>

          {/* Mobile: Single Column Compact Cards */}
          <div className="space-y-3">
            {/* System Info - Mobile Compact */}
            <div className="bg-black border border-gray-900 rounded-lg hover:border-blue-400 transition-all duration-300">
              <div className="bg-gray-900 px-3 py-1.5 flex items-center gap-2">
                <span className="text-blue-400">💻</span>
                <span className="font-mono text-xs text-gray-400">system_info</span>
              </div>
              <div className="p-3 font-mono text-xs space-y-2">
                <div><span className="text-blue-400">name:</span> <span className="text-white">"Muneeb Anjum"</span></div>
                <div><span className="text-blue-400">role:</span> <span className="text-green-400">"Full-Stack Developer"</span></div>
                <div><span className="text-blue-400">location:</span> <span className="text-cyan-400">"Pakistan"</span></div>
                <div><span className="text-blue-400">experience:</span> <span className="text-yellow-400">"1+ years"</span></div>
              </div>
            </div>

            {/* Status - Mobile Compact */}
            <div className="bg-black border border-green-900 rounded-lg hover:border-green-400 transition-all duration-300">
              <div className="bg-green-950/50 px-3 py-1.5 flex items-center gap-2">
                <span className="text-green-400">●</span>
                <span className="font-mono text-xs text-gray-400">status</span>
              </div>
              <div className="p-3 font-mono text-xs">
                <div className="text-green-400">✓ Available for opportunities</div>
                <div className="text-cyan-400">✓ Open to collaborations</div>
                <div className="text-yellow-400">✓ Learning new technologies</div>
              </div>
            </div>

            {/* Skills Preview - Mobile Compact */}
            <div className="bg-black border border-gray-900 rounded-lg hover:border-cyan-400 transition-all duration-300">
              <div className="bg-gray-900 px-3 py-1.5 flex items-center gap-2">
                <span className="text-cyan-400">⚡</span>
                <span className="font-mono text-xs text-gray-400">quick_skills</span>
              </div>
              <div className="p-3 font-mono text-xs">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-green-400">• React</div>
                  <div className="text-blue-400">• TypeScript</div>
                  <div className="text-yellow-400">• Node.js</div>
                  <div className="text-purple-400">• Python</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Original Layout */}
        <div className="hidden md:block">
          {/* Terminal Header */}
          <div className="text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-12">
          <div className="bg-black border border-gray-900 rounded-lg max-w-2xl mx-auto hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 group overflow-hidden">
            {/* Minimal header bar */}
            <div className="bg-gray-900 px-3 sm:px-4 py-2 flex items-center gap-2 sm:gap-3 group-hover:bg-gray-800 transition-colors duration-300">
              <div className="flex gap-1 sm:gap-1.5">
                <div className="w-2 h-2 bg-red-500 rounded-full group-hover:animate-pulse"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover:animate-pulse"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full group-hover:animate-pulse"></div>
              </div>
              <span className="font-mono text-xs text-gray-400 group-hover:text-green-400 transition-colors duration-300">
                ~/portfolio/about
              </span>
            </div>
            
            {/* Simple about indicator */}
            <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-400">$</span>
                <span className="text-white group-hover:text-green-300 transition-colors duration-300">
                  cat about.md
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Terminal Content */}
        <div className="grid lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {/* Main Terminal Window */}
          <div className="lg:col-span-2 h-fit order-2 lg:order-1">
            <div className="bg-black border border-gray-900 rounded-lg overflow-hidden hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 group h-full">
              {/* Terminal header */}
              <div className="bg-gray-900 px-4 py-2 flex items-center gap-2 group-hover:bg-gray-800 transition-colors duration-300">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full group-hover:animate-pulse"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover:animate-pulse"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full group-hover:animate-pulse"></div>
                </div>
                <span className="font-mono text-xs text-gray-400 ml-2 group-hover:text-green-400 transition-colors duration-300">about_muneeb.md</span>
              </div>
              
              {/* Terminal content */}
              <div className="p-6 font-mono text-sm space-y-6 flex-grow">
                {/* Main Header */}
                
                
                {/* Current Role Section */}
                <div className="space-y-3 hover:scale-105 transition-transform duration-300 cursor-default">
                  <div className="hover:bg-gray-950 rounded px-2 py-1 transition-colors duration-200 border-l-2 border-cyan-400">
                    <span className="text-green-400">$ </span>
                    <span className="text-white font-semibold text-base">current_role</span>
                  </div>
                  <div className="text-cyan-400 ml-6 font-medium hover:text-cyan-300 transition-colors duration-200">
                    Backend Developer Intern at App In Snap PVT Limited
                  </div>
                  <div className="text-gray-300 ml-6 hover:text-gray-200 transition-colors duration-200">
                    Working on AI Pay team building financial solutions
                  </div>
                </div>
                
                {/* Tech Stack Section */}
                <div className="space-y-3 hover:scale-105 transition-transform duration-300 cursor-default">
                  <div className="hover:bg-gray-950 rounded px-2 py-1 transition-colors duration-200 border-l-2 border-blue-400">
                    <span className="text-green-400">$ </span>
                    <span className="text-white font-semibold text-base">tech_stack --primary</span>
                  </div>
                  <div className="text-blue-400 ml-6 font-medium hover:text-blue-300 hover:translate-x-2 transition-all duration-200">
                    .NET Framework, ASP.NET MVC, C#
                  </div>
                  <div className="text-purple-400 ml-6 font-medium hover:text-purple-300 hover:translate-x-2 transition-all duration-200">
                    React, TypeScript, Tailwind CSS
                  </div>
                  <div className="text-yellow-400 ml-6 font-medium hover:text-yellow-300 hover:translate-x-2 transition-all duration-200">
                    AI Integration, Problem Solving
                  </div>
                </div>
                
                {/* Passion Section */}
                <div className="space-y-3 hover:scale-105 transition-transform duration-300 cursor-default">
                  <div className="hover:bg-gray-950 rounded px-2 py-1 transition-colors duration-200 border-l-2 border-green-400">
                    <span className="text-green-400">$ </span>
                    <span className="text-white font-semibold text-base">cat passion.txt</span>
                  </div>
                  <div className="text-gray-100 ml-6 leading-relaxed hover:text-gray-200 transition-colors duration-200">
                    I'm passionate about fullstack development, combining robust 
                    backend architecture with intuitive frontend experiences. 
                    What drives me is leveraging AI-powered tools to identify 
                    challenges and craft solutions that make a real difference.
                  </div>
                </div>
                
                {/* Projects Section */}
                <div className="space-y-3 hover:scale-105 transition-transform duration-300 cursor-default">
                  <div className="hover:bg-gray-950 rounded px-2 py-1 transition-colors duration-200 border-l-2 border-yellow-400">
                    <span className="text-green-400">$ </span>
                    <span className="text-white font-semibold text-base">ls -la projects/</span>
                  </div>
                  <div className="text-gray-300 ml-6 space-y-1">
                    <div className="hover:text-green-400 hover:translate-x-2 transition-all duration-200 cursor-pointer">drwxr-xr-x sorting-visualizer/</div>
                    <div className="hover:text-green-400 hover:translate-x-2 transition-all duration-200 cursor-pointer">drwxr-xr-x ai-pay-solutions/</div>
                    <div className="hover:text-green-400 hover:translate-x-2 transition-all duration-200 cursor-pointer">drwxr-xr-x portfolio-website/</div>
                  </div>
                </div>
                
                {/* Motivation Section */}
                <div className="space-y-3 hover:scale-105 transition-transform duration-300 cursor-default">
                  <div className="hover:bg-gray-950 rounded px-2 py-1 transition-colors duration-200 border-l-2 border-green-400">
                    <span className="text-green-400">$ </span>
                    <span className="text-white font-semibold text-base">echo "Always learning, always building..."</span>
                  </div>
                  <div className="text-green-400 ml-6 font-medium hover:text-green-300 transition-colors duration-200">
                    Always learning, always building...
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Info Panel */}
          <div className={`space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6 xl:space-y-8 transition-all duration-500 order-1 lg:order-2 ${isGlitching ? 'animate-pulse' : ''}`}>
            {cardComponents.map((card, index) => (
              <div 
                key={`card-${index}`}
                className={`transition-all duration-500 transform ${
                  isGlitching 
                    ? 'scale-100 md:scale-105 hover:scale-105 md:hover:scale-110' 
                    : 'scale-100'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {card}
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
      
      {/* Simple Terminal Divider */}
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
