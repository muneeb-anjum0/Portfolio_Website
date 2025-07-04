// src/components/KeyboardNavigation.tsx
import { useEffect } from 'react'

const KeyboardNavigation = () => {
  const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact']

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Only activate if no input is focused
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return
      }

      const currentSection = getCurrentSection()
      const currentIndex = sections.indexOf(currentSection)

      switch (event.key) {
        case 'ArrowDown':
        case 'j':
          event.preventDefault()
          if (currentIndex < sections.length - 1) {
            scrollToSection(sections[currentIndex + 1])
          }
          break
        case 'ArrowUp':
        case 'k':
          event.preventDefault()
          if (currentIndex > 0) {
            scrollToSection(sections[currentIndex - 1])
          }
          break
        case 'Home':
          event.preventDefault()
          scrollToSection('home')
          break
        case 'End':
          event.preventDefault()
          scrollToSection('contact')
          break
      }
    }

    const getCurrentSection = (): string => {
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            return section
          }
        }
      }
      return 'home'
    }

    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <div className="hidden md:block fixed bottom-4 left-4 bg-black/80 backdrop-blur-sm border border-gray-800 rounded px-3 py-2 font-mono text-xs text-gray-400 z-[60] shadow-lg select-none">
      <div className="space-y-1">
        <div className="text-green-400">Navigation:</div>
        <div>↑/k: Previous</div>
        <div>↓/j: Next</div>
        <div>Home/End: Jump</div>
      </div>
    </div>
  )
}

export default KeyboardNavigation
