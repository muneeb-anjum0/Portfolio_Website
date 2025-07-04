// src/components/Hero.tsx
import { useState, useEffect } from 'react'

type TerminalLine = {
  command: string
  output?: string
  color: string
  delay: string
}

type FloatingElement = {
  char: string
  color: string
  size: string
  top: string
  left: string
  delay: string
}

// Terminal command history floating in background
const terminalHistory: TerminalLine[] = [
  { command: 'npm install', output: '✓ Dependencies installed', color: 'text-green-400', delay: '0s' },
  { command: 'git commit -m "feat: new feature"', color: 'text-blue-400', delay: '1.5s' },
  { command: 'yarn build', output: '✓ Build successful', color: 'text-yellow-400', delay: '3s' },
  { command: 'docker run -p 3000:3000', color: 'text-cyan-400', delay: '4.5s' },
  { command: 'npm test', output: '✓ All tests passed', color: 'text-green-400', delay: '6s' },
]

// Floating terminal symbols
const floatingElements: FloatingElement[] = [
  { char: '$', color: 'text-green-400', size: '2rem', top: '20%', left: '10%', delay: '0s' },
  { char: '>', color: 'text-blue-400', size: '1.5rem', top: '70%', left: '80%', delay: '1s' },
  { char: '~', color: 'text-cyan-400', size: '1.8rem', top: '40%', left: '85%', delay: '2s' },
  { char: '#', color: 'text-purple-400', size: '1.6rem', top: '60%', left: '15%', delay: '3s' },
  { char: '/', color: 'text-yellow-400', size: '1.4rem', top: '30%', left: '75%', delay: '4s' },
  { char: '|', color: 'text-red-400', size: '1.7rem', top: '80%', left: '20%', delay: '5s' },
  { char: '&', color: 'text-indigo-400', size: '1.3rem', top: '25%', left: '65%', delay: '6s' },
  { char: '*', color: 'text-pink-400', size: '1.5rem', top: '75%', left: '70%', delay: '7s' },
]

// Terminal window lines
const terminalLines = [
  { text: 'Last login: Thu Jul 3 09:42:31 2025', color: 'text-gray-500' },
  { text: 'muneeb@devmachine:~/portfolio$ whoami', color: 'text-green-400' },
  { text: 'Full-Stack Developer & Digital Architect', color: 'text-white' },
  { text: 'muneeb@devmachine:~/portfolio$ ls -la skills/', color: 'text-green-400' },
  { text: 'React, TypeScript, Node.js, Python, AWS', color: 'text-blue-400' },
  { text: 'muneeb@devmachine:~/portfolio$ cat mission.txt', color: 'text-green-400' },
  { text: 'Building innovative solutions through code', color: 'text-cyan-400' },
]

const roles = [
  'Full-Stack Developer',
  'Digital Architect', 
  'Problem Solver',
  'Code Craftsman',
]

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [currentLine, setCurrentLine] = useState(0)

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((r) => (r + 1) % roles.length)
    }, 3000)
    return () => clearInterval(roleInterval)
  }, [])

  useEffect(() => {
    const lineInterval = setInterval(() => {
      setCurrentLine((l) => (l + 1) % terminalLines.length)
    }, 4000)
    return () => clearInterval(lineInterval)
  }, [])

  return (
    <section id="home" className="relative h-[85vh] md:min-h-screen overflow-hidden bg-black text-white select-none">
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle grid pattern */}
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

        {/* Floating terminal symbols */}
        {floatingElements.map((element, i) => (
          <span
            key={i}
            className={`absolute font-mono ${element.color} opacity-20 animate-float`}
            style={{
              top: element.top,
              left: element.left,
              fontSize: element.size,
              animationDelay: element.delay,
            }}
          >
            {element.char}
          </span>
        ))}

        {/* Terminal history floating in background - hidden on mobile */}
        <div className="hidden lg:block absolute top-20 left-8 font-mono text-xs opacity-10 space-y-2">
          {terminalHistory.map((history, i) => (
            <div
              key={i}
              className="animate-fade-in"
              style={{ animationDelay: `${i * 0.8}s` }}
            >
              <div className={`${history.color}`}>$ {history.command}</div>
              {history.output && (
                <div className="text-gray-400 ml-2">{history.output}</div>
              )}
            </div>
          ))}
        </div>

        {/* System info in top right - hidden on mobile */}
        <div className="hidden lg:block absolute top-12 right-8 font-mono text-xs text-gray-600 opacity-30">
          <div>System: Ubuntu 22.04.3 LTS</div>
          <div>Memory: 16GB</div>
          <div>CPU: 8 cores</div>
          <div>Uptime: 147 days</div>
        </div>
      </div>

      {/* MAIN TERMINAL WINDOW */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 py-4 md:py-0 md:min-h-screen">
        {/* Terminal Window Header */}
        <div className="w-full max-w-4xl mb-2 sm:mb-4 md:mb-6 lg:mb-8">
          <div className="bg-gray-800 rounded-t-lg px-3 sm:px-4 py-2 flex items-center gap-2">
            <div className="flex gap-1 sm:gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 text-center text-xs sm:text-sm text-gray-400 font-mono">
              <span className="hidden sm:inline">muneeb@devmachine: ~/portfolio</span>
              <span className="sm:hidden">~/portfolio</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="bg-black border border-gray-800 rounded-b-lg p-1.5 sm:p-3 md:p-4 lg:p-6 font-mono text-xs sm:text-sm space-y-1 sm:space-y-2 md:space-y-3">
            {/* Current active line */}
            <div className="space-y-2">
              <div className={`${terminalLines[currentLine].color} transition-all duration-500 break-words`}>
                {terminalLines[currentLine].text}
              </div>
            </div>

            {/* Active prompt */}
            <div className="flex items-center gap-1 sm:gap-2 mt-2 sm:mt-4 md:mt-6 flex-wrap">
              <span className="text-green-400">muneeb@devmachine</span>
              <span className="text-white">:</span>
              <span className="text-blue-400">~/portfolio</span>
              <span className="text-white">$</span>
              <span className="typing-cursor text-white break-words">echo "Welcome to my portfolio"</span>
            </div>
          </div>
        </div>

        {/* HERO CONTENT */}
        <div className="text-center space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6 max-w-4xl px-2 sm:px-0">
          {/* Name and Role */}
          <div className="space-y-0.5 sm:space-y-1 md:space-y-2 lg:space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-white leading-tight">
              <span className="text-green-400">{'>'}</span> Muneeb Anjum
            </h1>
            <p className="text-lg sm:text-xl text-green-400 font-mono">
              {roles[currentRole]}
            </p>
          </div>

          {/* Terminal-style mission */}
          <div className="bg-black border border-gray-700 rounded-lg p-1.5 sm:p-2 md:p-3 lg:p-4 font-mono text-left max-w-2xl mx-auto text-xs sm:text-sm">
            <div className="text-white">
              <span className="text-yellow-400">const</span>{' '}
              <span className="text-blue-400">mission</span> = {'{'}
            </div>
            <div className="text-white ml-2 sm:ml-4 break-words">
              <span className="text-red-400">passion</span>: <span className="text-green-400">"Building innovative solutions"</span>,
            </div>
            <div className="text-white ml-2 sm:ml-4 break-words">
              <span className="text-red-400">approach</span>: <span className="text-green-400">"Clean code & thoughtful design"</span>,
            </div>
            <div className="text-white ml-2 sm:ml-4 break-words">
              <span className="text-red-400">mindset</span>: <span className="text-green-400">"Endless curiosity"</span>
            </div>
            <div className="text-white">{'}'}</div>
          </div>

          {/* Terminal-style action buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center pt-1 sm:pt-2">
            <a
              href="#projects"
              className="group relative px-4 sm:px-6 py-2 sm:py-3 font-mono text-sm sm:text-base text-black bg-green-400 border-2 border-green-400 hover:bg-black hover:text-green-400 hover:border-black transition-colors duration-300 w-full sm:w-auto text-center"
            >
              <span className="absolute -inset-1 bg-green-400 opacity-20 group-hover:bg-black group-hover:opacity-100 group-hover:border-black transition-all duration-300 border-2 border-green-400 rounded-lg"></span>
              <span className="relative">./view_projects.sh</span>
            </a>
            <a
              href="#contact"
              className="px-4 sm:px-6 py-2 sm:py-3 font-mono text-sm sm:text-base text-green-400 border-2 border-green-400 hover:bg-green-400 hover:text-black transition-colors duration-300 w-full sm:w-auto text-center"
            >
              ./contact_me.sh
            </a>
          </div>
        </div>
      </div>

      {/* Terminal cursor at bottom */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-10 font-mono text-green-400 animate-pulse">
        <span className="text-2xl">▼</span>
      </div>

      {/* KEYFRAMES & UTILITIES */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-5px, -5px) rotate(1deg); }
          50% { transform: translate(5px, -10px) rotate(-1deg); }
          75% { transform: translate(-3px, 5px) rotate(0.5deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float { 
          animation: float 8s ease-in-out infinite; 
        }
        
        .animate-fade-in { 
          animation: fade-in 1s ease-out forwards; 
        }

        @keyframes typing-cursor {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .typing-cursor {
          position: relative;
        }
        
        .typing-cursor::after {
          content: '|';
          animation: typing-cursor 1s infinite;
          margin-left: 2px;
        }
      `}</style>
    </section>
  )
}
