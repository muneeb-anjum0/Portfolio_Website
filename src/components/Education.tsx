// src/components/Education.tsx
import React, { useState, useEffect } from 'react'

const Education: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [linesProcessed, setLinesProcessed] = useState(0)
  const [bytesProcessed, setBytesProcessed] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setLoadingProgress(prev => prev >= 100 ? 0 : prev + 1)
    }, 100)
    return () => clearInterval(progressTimer)
  }, [])

  useEffect(() => {
    const linesTimer = setInterval(() => {
      setLinesProcessed(prev => prev >= 18 ? 0 : prev + 1)
    }, 200)
    return () => clearInterval(linesTimer)
  }, [])

  useEffect(() => {
    const bytesTimer = setInterval(() => {
      setBytesProcessed(prev => prev >= 1024 ? 0 : prev + 7)
    }, 150)
    return () => clearInterval(bytesTimer)
  }, [])

  const coreSubjects = [
    'Object-Oriented Programming',
    'Data Structures',
    'Database Systems',
    'Software Design & Architecture',
    'Web Development'
  ]

  const advancedTopics = [
    'Operating Systems',
    'Software Requirements Engineering',
    'Computer Science Fundamentals',
    'Mathematics for Computer Science',
    'Applied Physics'
  ]

  return (
    <section id="education" className="relative py-6 md:py-12 lg:py-16 xl:py-20 bg-black text-white overflow-hidden select-none">
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
        
        {/* Floating education commands - hidden on mobile */}
        <div className="hidden lg:block absolute top-20 left-10 font-mono text-green-400 opacity-10 animate-pulse">
          <div>$ cat /etc/education.conf</div>
          <div className="text-gray-500">Bachelor in Software Engineering</div>
        </div>
        
        <div className="hidden lg:block absolute bottom-20 right-10 font-mono text-blue-400 opacity-10 animate-pulse">
          <div>$ grep -i "degree" academic.log</div>
          <div className="text-gray-500">progress: 75% completed</div>
        </div>
      </div>

      {/* Mobile Version - Terminal Themed */}
      <div className="md:hidden px-4 relative z-10">
        {/* Terminal Header */}
        <div className="mb-4">
          <div className="bg-black border border-gray-900 rounded-lg hover:border-green-400 transition-all duration-300">
            <div className="bg-gray-900 px-3 py-1.5 flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="font-mono text-xs text-gray-400">~/education</span>
            </div>
            <div className="p-2 font-mono text-xs">
              <div className="flex items-center gap-1">
                <span className="text-green-400">$</span>
                <span className="text-white">cat education.json</span>
              </div>
              <div className="text-gray-500 ml-2">Bachelor in Software Engineering</div>
            </div>
          </div>
        </div>

        {/* Mobile Education Terminal */}
        <div className="bg-black border border-gray-800 rounded-lg hover:border-green-400 transition-all duration-300">
          {/* Code editor header */}
          <div className="bg-gray-900 px-3 py-1.5 border-b border-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="font-mono text-xs text-gray-400">education.json</span>
            </div>
            <div className="font-mono text-xs text-gray-500">{currentTime.toLocaleTimeString()}</div>
          </div>
          
          {/* Code content */}
          <div className="p-3 font-mono text-xs space-y-2">
            <div><span className="text-purple-400">class</span> <span className="text-yellow-400">Education</span> <span className="text-white">{'{'}</span></div>
            
            <div className="ml-2 space-y-1">
              <div><span className="text-blue-400">degree</span>: <span className="text-green-400">"Bachelor in Software Engineering"</span>,</div>
              <div><span className="text-blue-400">university</span>: <span className="text-green-400">"SZABIST University"</span>,</div>
              <div><span className="text-blue-400">location</span>: <span className="text-green-400">"Islamabad, Pakistan"</span>,</div>
              <div><span className="text-blue-400">duration</span>: <span className="text-green-400">"2023 - 2027"</span>,</div>
              <div><span className="text-blue-400">cgpa</span>: <span className="text-orange-400">3.1</span>,</div>
              <div><span className="text-blue-400">status</span>: <span className="text-yellow-400">"In Progress"</span>,</div>
              
              <div className="pt-1">
                <span className="text-blue-400">core_subjects</span>: [
                <div className="ml-2 space-y-0.5">
                  {coreSubjects.map((subject, idx) => (
                    <div key={idx} className="flex items-center gap-1">
                      <span className="text-gray-600">
                        {idx === coreSubjects.length - 1 ? '└─' : '├─'}
                      </span>
                      <span className="text-green-400">"{subject}"{idx < coreSubjects.length - 1 ? ',' : ''}</span>
                    </div>
                  ))}
                </div>
                ],
              </div>
              
              <div className="pt-1">
                <span className="text-blue-400">advanced_topics</span>: [
                <div className="ml-2 space-y-0.5">
                  {advancedTopics.slice(0, 3).map((topic, idx) => (
                    <div key={idx} className="flex items-center gap-1">
                      <span className="text-gray-600">
                        {idx === 2 ? '└─' : '├─'}
                      </span>
                      <span className="text-cyan-400">"{topic}"{idx < 2 ? ',' : ''}</span>
                    </div>
                  ))}
                </div>
                ]
              </div>
            </div>
            
            <div><span className="text-white">{'}'}</span></div>
          </div>
          
          {/* Status bar */}
          <div className="bg-gray-900 px-3 py-1 border-t border-gray-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400">Education Active</span>
            </div>
            <div className="text-green-400">✓ 75% completed</div>
          </div>
        </div>
      </div>

      {/* Desktop Version - Original Design */}
      <div className="hidden md:block max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Terminal Header */}
        <div className="text-center mb-2 sm:mb-4 md:mb-6 lg:mb-8">
          <div className="bg-black border border-gray-900 rounded-lg max-w-2xl mx-auto hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 group overflow-hidden">
            {/* Terminal window header */}
            <div className="bg-gray-900 px-3 sm:px-4 py-2 flex items-center justify-between group-hover:bg-gray-800 transition-colors duration-300">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex gap-1 sm:gap-1.5">
                  <div className="w-2 h-2 bg-red-500 rounded-full group-hover:animate-pulse"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover:animate-pulse"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full group-hover:animate-pulse"></div>
                </div>
                <span className="font-mono text-xs text-gray-400 group-hover:text-green-400 transition-colors duration-300">
                  ~/portfolio/education
                </span>
              </div>
              <div className="font-mono text-xs text-gray-400">
                {currentTime.toLocaleTimeString()}
              </div>
            </div>
            
            {/* Terminal content */}
            <div className="p-3 font-mono text-xs sm:text-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-green-400">$</span>
                <span className="text-white group-hover:text-green-300 transition-colors duration-300">
                  cat education.json
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-gray-500 gap-2 sm:gap-4">
                <span>Progress: 75% completed</span>
                <span className="text-green-400">Bachelor of Software Engineering</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education Code Editor Style */}
        <div className="bg-black border border-gray-800 rounded-lg overflow-hidden hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 group">
          {/* Code editor header */}
          <div className="bg-gray-900 px-3 sm:px-4 py-1.5 border-b border-gray-800 group-hover:bg-gray-800 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex gap-1 sm:gap-1.5">
                  <div className="w-2 h-2 bg-red-500 rounded-full group-hover:animate-pulse"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover:animate-pulse"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full group-hover:animate-pulse"></div>
                </div>
                <span className="font-mono text-xs sm:text-sm text-gray-400 group-hover:text-green-400 transition-colors duration-300">
                  education.json
                </span>
              </div>
              <div className="font-mono text-xs text-gray-500">Lines: 18</div>
            </div>
          </div>
          
          {/* Code content with line numbers */}
          <div className="flex font-mono text-sm sm:text-base">
            {/* Line numbers */}
            <div className="bg-gray-900 px-2 py-3 border-r border-gray-800 text-gray-500 text-xs sm:text-sm select-none">
              <div className="space-y-0.5">
                {Array.from({length: 18}, (_, i) => (
                  <div key={i} className="text-right">{i + 1}</div>
                ))}
              </div>
            </div>
            
            {/* Code content */}
            <div className="flex-1 p-3 space-y-0.5 text-sm sm:text-base overflow-x-auto">
              <div className="leading-6">
                <span className="text-purple-400">class</span>{' '}
                <span className="text-yellow-400">Education</span>{' '}
                <span className="text-white">{'{'}</span>
              </div>
              <div className="leading-6 ml-4">
                <span className="text-blue-400">degree</span>:{' '}
                <span className="text-green-400">"Bachelor in Software Engineering"</span>,
              </div>
              <div className="leading-6 ml-4">
                <span className="text-blue-400">university</span>:{' '}
                <span className="text-green-400">"SZABIST University"</span>,
              </div>
              <div className="leading-6 ml-4">
                <span className="text-blue-400">location</span>:{' '}
                <span className="text-green-400">"Islamabad, Pakistan"</span>,
              </div>
              <div className="leading-6 ml-4">
                <span className="text-blue-400">duration</span>:{' '}
                <span className="text-green-400">"2023 - 2027"</span>,
              </div>
              <div className="leading-6 ml-4">
                <span className="text-blue-400">cgpa</span>:{' '}
                <span className="text-orange-400">3.1</span>,
              </div>
              <div className="leading-6 ml-4">
                <span className="text-blue-400">status</span>:{' '}
                <span className="text-yellow-400">"In Progress"</span>,
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-2">
                <div className="leading-6 ml-4">
                  <span className="text-blue-400">core_subjects</span>: [
                  <div className="ml-4 space-y-0.5">
                    {coreSubjects.map((subject, idx) => (
                      <div key={idx} className="text-green-400">"{subject}"{idx < coreSubjects.length - 1 ? ',' : ''}</div>
                    ))}
                  </div>
                  ],
                </div>
                <div className="leading-6 ml-4">
                  <span className="text-blue-400">advanced_topics</span>: [
                  <div className="ml-4 space-y-0.5">
                    {advancedTopics.map((topic, idx) => (
                      <div key={idx} className="text-cyan-400">"{topic}"{idx < advancedTopics.length - 1 ? ',' : ''}</div>
                    ))}
                  </div>
                  ]
                </div>
              </div>
              <div className="leading-6">
                <span className="text-white">{'}'}</span>
              </div>
            </div>
          </div>
          
          {/* Status bar */}
          <div className="bg-gray-900 px-3 sm:px-4 py-1 border-t border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs gap-2 sm:gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400">Education Active</span>
              </div>
              
              <div className="text-gray-500">
                Progress: {loadingProgress}%
              </div>
              
              <div className="text-gray-500">
                Lines: {linesProcessed}/18
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
              <div className="text-gray-500">
                Memory: {bytesProcessed}KB
              </div>
              <div className="text-green-400">
                ✓ Compiled successfully
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
