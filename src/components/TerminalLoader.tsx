
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
    let finished = false;
    const timer = setInterval(() => {
      setCurrentLine(prev => {
        if (prev < bootSequence.length - 1) {
          return prev + 1
        } else {
          if (!finished) {
            finished = true;
            setTimeout(() => setIsLoading(false), 250)
          }
          return prev
        }
      })
    }, 90) // Faster animation

    // Faster, smoother cursor blink
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 200)

    return () => {
      clearInterval(timer)
      clearInterval(cursorTimer)
    }
  }, [])

  if (!isLoading) return null
  return (
    <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center select-none">
      <div className="max-w-2xl w-full p-3 sm:p-8">
        <div className="bg-black border border-black rounded-lg overflow-hidden shadow-2xl animate-[terminalPop_0.4s_ease]">
          {/* Terminal header */}
          <div className="bg-black px-3 py-2 sm:px-4 flex items-center gap-2 border-b border-black">
            <div className="w-3 h-3 bg-red-500 rounded-full shadow-red-700/50 shadow-sm"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-yellow-700/50 shadow-sm"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full shadow-green-700/50 shadow-sm"></div>
            <span className="font-mono text-xs sm:text-sm text-green-300 ml-2 sm:ml-4 tracking-wide">Terminal - Boot Sequence</span>
          </div>

          {/* Terminal content */}
          <div className="p-3 sm:p-6 font-mono text-[0.92rem] sm:text-[1rem] space-y-2 min-h-[220px] sm:min-h-[300px] bg-black">
            {bootSequence.slice(0, currentLine + 1).map((line, index) => (
              <div
                key={index}
                className={`transition-all duration-75 will-change-transform
                  ${line.startsWith('✓') ? 'text-green-400' :
                    line.startsWith('$') ? 'text-blue-400' :
                    'text-gray-400'}
                  ${index === currentLine ? 'scale-105 font-bold' : ''}
                `}
                style={{
                  letterSpacing: index === currentLine ? '0.04em' : undefined
                }}
              >
                {line}
                {index === currentLine && showCursor && (
                  <span className="text-blue-400 animate-pulse ml-1">|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes terminalPop {
          0% { transform: scale(0.95) translateY(30px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default TerminalLoader
