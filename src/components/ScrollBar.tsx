// src/components/ScrollBar.tsx
import { useEffect } from 'react'

const ScrollBar = () => {
  useEffect(() => {
    // Custom scrollbar styles for mobile
    const style = document.createElement('style')
    style.textContent = `
      /* Webkit browsers (Chrome, Safari, Edge) */
      ::-webkit-scrollbar {
        width: 8px;
      }

      ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.8);
        border-radius: 4px;
      }

      ::-webkit-scrollbar-thumb {
        background: #d1d5db !important; /* Tailwind gray-300 */
        border-radius: 4px;
        box-shadow: 0 0 10px #d1d5db80;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #9ca3af !important; /* Tailwind gray-400 */
        box-shadow: 0 0 15px #9ca3afb3;
      }

      /* Firefox */
      html {
        scrollbar-width: thin;
        scrollbar-color: #d1d5db rgba(0, 0, 0, 0.8);
      }

      /* Mobile specific styles */
      @media (max-width: 768px) {
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #d1d5db !important;
          border-radius: 3px;
          box-shadow: 0 0 8px #d1d5db99;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.9);
          border-radius: 3px;
        }
      }
    `
    
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return null
}

export default ScrollBar
