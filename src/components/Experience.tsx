// src/components/Experience.tsx
import React, { useState, useEffect } from 'react'

const experiences = [
  {
    title: 'Backend Developer Intern',
    company: 'App In Snap',
    date: 'June 2025 – Present',
    status: 'ACTIVE',
    pid: '2025',
    cpu: '89.2%',
    memory: '245MB',
    details: [
      'Secured ASP.NET Core with Identity & JWT (−30% unauthorized access)',
      'Optimized EF Core & LINQ queries (−25% retrieval time)',
      'Documented APIs with Swagger (20% faster front-end onboarding)',
      'Centralized logging (Serilog & App Insights) (−40% MTTR)',
      'Automated Azure DevOps & Docker deployments (zero downtime, −50% deploy time)',
      'Boosted xUnit/Moq test coverage to 85% (−20% critical bugs)',
    ],
  },
]

const Experience: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="experience" className="relative py-8 md:py-16 lg:py-20 bg-black text-white overflow-hidden select-none">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* System grid pattern */}
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
        
        {/* Floating system info - hidden on mobile */}
        <div className="hidden lg:block absolute top-20 left-10 font-mono text-green-400 opacity-10 animate-pulse">
          <div>$ ps aux | grep experience</div>
          <div className="text-gray-500">muneeb  2025  0.0  0.1  experience</div>
        </div>
        
        <div className="hidden lg:block absolute bottom-20 right-10 font-mono text-blue-400 opacity-10 animate-pulse">
          <div>$ uptime</div>
          <div className="text-gray-500">load average: 0.15, 0.10, 0.05</div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Terminal Header */}
        <div className="text-center mb-3 sm:mb-6 md:mb-8">
          <div className="bg-black border border-gray-900 rounded-lg max-w-2xl mx-auto hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 group overflow-hidden">
            {/* Minimal header bar */}
            <div className="bg-gray-900 px-3 sm:px-4 py-2 flex items-center justify-between group-hover:bg-gray-800 transition-colors duration-300">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex gap-1 sm:gap-1.5">
                  <div className="w-2 h-2 bg-red-500 rounded-full group-hover:animate-pulse"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover:animate-pulse"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full group-hover:animate-pulse"></div>
                </div>
                <span className="font-mono text-xs text-gray-400 group-hover:text-green-400 transition-colors duration-300">
                  ~/portfolio/experience
                </span>
              </div>
              <div className="font-mono text-xs text-gray-400">
                {currentTime.toLocaleTimeString()}
              </div>
            </div>
            
            {/* Simple experience indicator */}
            <div className="p-3 font-mono text-xs sm:text-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-green-400">$</span>
                <span className="text-white group-hover:text-green-300 transition-colors duration-300">
                  cat experience.log
                </span>
              </div>
              {/* Subtle system status */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-gray-500 gap-2 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-4">
                  <span>Active processes: 1</span>
                  <span className="hidden sm:inline">|</span>
                  <span>Status: Running</span>
                </div>
                <span className="text-green-400">✓ System operational</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Overview */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 font-mono text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-400">●</span>
                <span className="text-gray-300">Backend Developer</span>
                <span className="text-gray-500">Intern</span>
              </div>
              <div className="w-px h-4 bg-gray-600 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">●</span>
                <span className="text-gray-300">App In Snap</span>
                <span className="text-gray-500">PVT Limited</span>
              </div>
            </div>
          </div>
        </div>

        {/* Process Monitor Style Experience */}
        <div className="space-y-3 sm:space-y-4 md:space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="bg-black border border-gray-800 rounded-lg overflow-hidden hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 group"
            >
              {/* Compact Process header bar */}
              <div className="bg-gray-900 px-4 py-1.5 border-b border-gray-800 group-hover:bg-gray-800 transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-mono text-xs text-green-400">PID: {exp.pid}</span>
                    </div>
                    <div className="font-mono text-xs text-gray-400">
                      STATUS: <span className="text-green-400">{exp.status}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-xs text-gray-400">
                    <span>CPU: <span className="text-yellow-400">{exp.cpu}</span></span>
                    <span>MEM: <span className="text-blue-400">{exp.memory}</span></span>
                  </div>
                </div>
              </div>

              {/* Compact Process details */}
              <div className="p-3 space-y-2">
                {/* Process info - more compact */}
                <div className="bg-gray-900 rounded px-3 py-1.5 font-mono text-base">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-white font-bold">{exp.title}</span>
                      <span className="text-blue-400 ml-2">@ {exp.company}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{exp.date}</span>
                  </div>
                </div>

                {/* Compact execution log - key achievements only */}
                <div className="space-y-1">
                  <div className="font-mono text-sm flex items-center gap-2 text-gray-400">
                    <span className="text-green-400">$</span>
                    <span>tail -n 6 achievements.log</span>
                  </div>
                  <div className="bg-gray-950 rounded border border-gray-800 p-2 space-y-1">
                    {exp.details.map((detail, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 hover:bg-gray-800 rounded px-2 py-0.5 transition-colors duration-200 font-mono text-base"
                      >
                        <span className="text-gray-600 min-w-fit">├─</span>
                        <span className="text-gray-300 leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compact metrics */}
                <div className="flex items-center gap-3 text-sm font-mono">
                  <div className="flex items-center gap-1">
                    <span className="text-gray-400">Performance:</span>
                    <span className="text-green-400 font-bold">Optimized</span>
                  </div>
                  <div className="w-px h-3 bg-gray-600"></div>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-400">Impact:</span>
                    <span className="text-blue-400 font-bold">High</span>
                  </div>
                  <div className="w-px h-3 bg-gray-600"></div>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-400">Status:</span>
                    <span className="text-yellow-400 font-bold">Active</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Terminal Divider */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-4 sm:pb-6 md:pb-8 pt-6 sm:pt-8 md:pt-12">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-800"></div>
          <div className="font-mono text-xs text-gray-500 flex items-center gap-2">
            <span className="text-green-400">$</span>
            <span>cd ../projects</span>
          </div>
          <div className="flex-1 h-px bg-gray-800"></div>
        </div>
      </div>
    </section>
  )
}

export default Experience
