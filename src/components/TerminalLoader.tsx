// src/components/TerminalLoader.tsx
import { useState, useEffect } from 'react'

const TerminalLoader = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [currentLine, setCurrentLine] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const bootSequence = [
    '$ initializing portfolio system...',
    '✓ Loading user profile: muneeb@devmachine',
    '✓ Mounting file systems: /about /skills /experience',
    '✓ Starting terminal interface...',
    '✓ Loading project repositories...',
    '✓ Establishing network connections...',
    '✓ Portfolio system ready!',
    '$ Welcome to Muneeb\'s Terminal Portfolio'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine(prev => {
        if (prev < bootSequence.length - 1) {
          return prev + 1
        } else {
          setTimeout(() => setIsLoading(false), 500)
          return prev
        }
      })
    }, 300)

    // Cursor blink effect
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 400)

    return () => {
      clearInterval(timer)
      clearInterval(cursorTimer)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center select-none">
      <div className="max-w-2xl w-full p-8">
        <div className="bg-black border border-green-400 rounded-lg overflow-hidden">
          {/* Terminal header */}
          <div className="bg-gray-900 px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="font-mono text-sm text-gray-400 ml-4">Terminal - Boot Sequence</span>
          </div>
          
          {/* Terminal content */}
          <div className="p-6 font-mono text-sm space-y-2 min-h-[300px]">
            {bootSequence.slice(0, currentLine + 1).map((line, index) => (
              <div key={index} className={`${
                line.startsWith('✓') ? 'text-green-400' : 
                line.startsWith('$') ? 'text-cyan-400' : 'text-gray-300'
              }`}>
                {line}
                {index === currentLine && showCursor && (
                  <span className="text-green-400 animate-pulse">|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TerminalLoader
