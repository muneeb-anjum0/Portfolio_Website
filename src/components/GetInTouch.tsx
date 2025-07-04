// src/components/GetInTouch.tsx
import React from 'react'

const GetInTouch: React.FC = () => (
  <section id="contact" className="relative py-16 sm:py-20 bg-black text-white overflow-hidden select-none">
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
      {/* Floating contact commands - hidden on mobile */}
      <div className="hidden lg:block absolute top-20 left-10 font-mono text-green-400 opacity-10 animate-pulse">
        <div>$ mail muneeb.anjum@hotmail.com</div>
        <div className="text-gray-500">Ready to connect</div>
      </div>
      <div className="hidden lg:block absolute bottom-20 right-10 font-mono text-blue-400 opacity-10 animate-pulse">
        <div>$ whois muneebanjum335</div>
        <div className="text-gray-500">LinkedIn, GitHub, Medium</div>
      </div>
    </div>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
      {/* Terminal Header */}
      <div className="text-center mb-6 sm:mb-8">
        <div className="bg-black border border-gray-900 rounded-lg max-w-2xl mx-auto hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 group overflow-hidden">
          {/* Minimal header bar */}
          <div className="bg-gray-900 px-3 sm:px-4 py-2 flex items-center gap-2 sm:gap-3 group-hover:bg-gray-800 transition-colors duration-300">
            <div className="flex gap-1 sm:gap-1.5">
              <div className="w-2 h-2 bg-red-500 rounded-full group-hover:animate-pulse"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover:animate-pulse"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full group-hover:animate-pulse"></div>
            </div>
            <span className="font-mono text-xs text-gray-400 group-hover:text-green-400 transition-colors duration-300">
              ~/portfolio/contact
            </span>
          </div>
          {/* Simple contact indicator */}
          <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-400">$</span>
              <span className="text-white group-hover:text-green-300 transition-colors duration-300">
                cat contact.md
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Terminal Content */}
      <div className="bg-black border border-gray-900 rounded-lg overflow-hidden hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20 transition-all duration-300 group">
        {/* Terminal header */}
        <div className="bg-gray-900 px-3 sm:px-4 py-2 flex items-center gap-2 group-hover:bg-gray-800 transition-colors duration-300">
          <div className="flex gap-1 sm:gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full group-hover:animate-pulse"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover:animate-pulse"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full group-hover:animate-pulse"></div>
          </div>
          <span className="font-mono text-xs text-gray-400 ml-2 group-hover:text-blue-400 transition-colors duration-300">get_in_touch.sh</span>
        </div>
        {/* Terminal content */}
        <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm space-y-4">
          {/* Terminal command output */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-green-400">$</span>
              <span className="text-white">cat /dev/contact</span>
            </div>
            <div className="text-gray-500 pl-4">
              Displaying contact information...
            </div>
          </div>

          {/* Contact Grid - Terminal style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pl-4">
            {/* Social Links Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-green-400">{'>'}</span>
                <span className="text-gray-400">Social Links:</span>
              </div>
              <div className="pl-4 space-y-2">
                <a href="https://linkedin.com/in/muneebanjum335" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 font-mono text-sm">
                  <span className="text-gray-600">├─</span>
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/muneebanjum" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 font-mono text-sm">
                  <span className="text-gray-600">├─</span>
                  <span>GitHub</span>
                </a>
                <a href="https://medium.com/@muneebanjum335" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-200 font-mono text-sm">
                  <span className="text-gray-600">├─</span>
                  <span>Medium</span>
                </a>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-green-400">{'>'}</span>
                <span className="text-gray-400">Direct Contact:</span>
              </div>
              <div className="pl-4 space-y-2">
                <a href="mailto:muneeb.anjum@hotmail.com" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-mono text-sm">
                  <span className="text-gray-600">├─</span>
                  <span>muneeb.anjum@hotmail.com</span>
                </a>
                <div className="flex items-center gap-2 text-gray-300 font-mono text-sm">
                  <span className="text-gray-600">├─</span>
                  <span>Islamabad, Pakistan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal prompt for action */}
          <div className="pt-4 space-y-2 text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-400">$</span>
              <span className="text-white">echo</span>
              <span className="text-blue-400">"Ready to collaborate?"</span>
            </div>
            <div className="text-gray-300">
              Ready to collaborate? Let's connect!
            </div>
            <div className="pt-2">
              <a 
                href="mailto:muneeb.anjum@hotmail.com" 
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 font-mono text-xs sm:text-sm bg-green-400 text-black hover:bg-green-300 transition-colors duration-200 border-2 border-green-400 hover:border-green-300"
              >
                <span>./send_email.sh</span>
                <span className="text-xs opacity-70">[ENTER]</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Terminal Divider */}
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-8 pt-8">
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-gray-800"></div>
        <div className="font-mono text-xs text-gray-500 flex items-center gap-2">
          <span className="text-green-400">$</span>
          <span>exit</span>
        </div>
        <div className="flex-1 h-px bg-gray-800"></div>
      </div>
    </div>
  </section>
)

export default GetInTouch
