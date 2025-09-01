// src/components/SEOHead.tsx
import { useEffect } from 'react'

const SEOHead = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Muneeb Anjum - Full-Stack Developer | Terminal Portfolio'
    
    // Add meta descriptions if they don't exist
    const addMetaTag = (name: string, content: string) => {
      if (!document.querySelector(`meta[name="${name}"]`)) {
        const meta = document.createElement('meta')
        meta.name = name
        meta.content = content
        document.head.appendChild(meta)
      }
    }

    addMetaTag('description', 'Full-Stack Developer specializing in .NET, React, and AI integration. Backend Developer Intern at App In Snap. Explore my terminal-themed portfolio.')
    addMetaTag('keywords', 'Full-Stack Developer, .NET, React, TypeScript, Backend Developer, Portfolio, Terminal, Software Engineer')
    addMetaTag('author', 'Muneeb Anjum')
    addMetaTag('robots', 'index, follow')
    
    // Add Open Graph tags
    const addOGTag = (property: string, content: string) => {
      if (!document.querySelector(`meta[property="${property}"]`)) {
        const meta = document.createElement('meta')
        meta.setAttribute('property', property)
        meta.content = content
        document.head.appendChild(meta)
      }
    }

    addOGTag('og:title', 'Muneeb Anjum - Full-Stack Developer')
    addOGTag('og:description', 'Terminal-themed portfolio showcasing full-stack development skills')
    addOGTag('og:type', 'website')
    addOGTag('og:url', window.location.href)
  }, [])

  return null
}

export default SEOHead
