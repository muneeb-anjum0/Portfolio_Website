import { useRef } from 'react'
import React, { useEffect, useState, useCallback } from 'react'

const contactData = {
  email: 'muneeb.anjum@hotmail.com',
  location: 'Islamabad, Pakistan',
  socials: [
    { key: 'linkedin', name: 'LinkedIn', url: 'https://linkedin.com/in/muneebanjum335' },
    { key: 'github',   name: 'GitHub',   url: 'https://github.com/muneeb-anjum0' },
    { key: 'medium',   name: 'Medium',   url: 'https://medium.com/@muneebanjum335' },
  ],
}

// ---- Crisp, transparent, single-color SVGs (scale + recolor via Tailwind) ----
const Icon = {
  mail: (cls='w-5 h-5') => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.6"/>
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // LinkedIn: glyph only (no square), currentColor
  linkedin: (cls = 'w-5 h-5') => (
  <svg
    className={cls}
    viewBox="0 0 448 512"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M100.28 448H7.4V148.9h92.88V448zM53.79 108.1C24.09 108.1 0 83.5 0 53.8 0 24.1 24.1 0 53.79 0c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.4V306.4c0-33.7-.7-77.1-47-77.1-47 0-54.2 36.7-54.2 74.6V448h-92.4V148.9h88.7v40.8h1.3c12.4-23.5 42.7-48.3 87.8-48.3 93.9 0 111.2 61.9 111.2 142.3V448z"/>
  </svg>
),

  // GitHub: Octocat silhouette, currentColor
  github: (cls='w-5 h-5') => (
    <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.24c0 4.51 2.87 8.33 6.86 9.68.5.09.68-.22.68-.48v-1.7c-2.79.62-3.38-1.2-3.38-1.2-.46-1.2-1.12-1.52-1.12-1.52-.92-.64.07-.62.07-.62 1.02.08 1.55 1.06 1.55 1.06.9 1.6 2.36 1.14 2.94.87.09-.67.35-1.14.64-1.4-2.23-.26-4.57-1.14-4.57-5.09 0-1.13.39-2.05 1.04-2.77-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.76 1.05.8-.22 1.65-.33 2.5-.33s1.7.11 2.5.33c1.92-1.33 2.76-1.05 2.76-1.05.55 1.43.2 2.49.1 2.75.65.72 1.04 1.64 1.04 2.77 0 3.96-2.35 4.83-4.59 5.09.36.32.69.94.69 1.9v2.81c0 .27.18.58.69.48 3.99-1.35 6.86-5.17 6.86-9.68C22 6.58 17.52 2 12 2Z"/>
    </svg>
  ),
  // Medium: tri-glyph, currentColor
  medium: (cls='w-5 h-5') => (
    <svg className={cls} viewBox="0 0 1044 593" fill="currentColor" aria-hidden="true">
      <path d="M589 296c0 164-132 297-294 297S1 460 1 296 133 0 295 0s294 133 294 296Z"/>
      <path d="M740 296c0 154-66 279-147 279S446 450 446 296 512 17 593 17s147 125 147 279Z"/>
      <path d="M1044 296c0 145-28 263-63 263s-63-118-63-263S946 33 981 33s63 118 63 263Z"/>
    </svg>
  ),
  location: (cls='w-4 h-4') => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  ),
  external:(cls='w-4 h-4') => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 5h5v5M20 4l-7 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 12v6a2 2 0 0 1-2 2h-9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M4 14V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  ),
}

const GetInTouch: React.FC = () => {
  const [now, setNow] = useState(new Date())
  const [copied, setCopied] = useState<'email' | null>(null)

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  // Keyboard shortcuts: E/L/G/M
  const keyHandler = useCallback((e: KeyboardEvent) => {
    const k = e.key.toLowerCase()
    if (k === 'e') window.location.href = `mailto:${contactData.email}?subject=Hello%20Muneeb&body=Hi%20Muneeb%2C%0A`
    if (k === 'l') window.open(contactData.socials.find(s => s.key === 'linkedin')!.url, '_blank')
    if (k === 'g') window.open(contactData.socials.find(s => s.key === 'github')!.url, '_blank')
    if (k === 'm') window.open(contactData.socials.find(s => s.key === 'medium')!.url, '_blank')
  }, [])
  useEffect(() => {
    window.addEventListener('keydown', keyHandler)
    return () => window.removeEventListener('keydown', keyHandler)
  }, [keyHandler])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactData.email)
      setCopied('email')
      setTimeout(() => setCopied(null), 1200)
    } catch {}
  }

  // Mobile menu state for CV actions
  const [cvMenuOpen, setCvMenuOpen] = useState(false)
  const cvBtnRef = useRef<HTMLAnchorElement>(null)

  // Close menu on outside click (mobile)
  useEffect(() => {
    if (!cvMenuOpen) return;
    const handler = (e: MouseEvent) => {
      if (cvBtnRef.current && !cvBtnRef.current.contains(e.target as Node)) {
        setCvMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [cvMenuOpen])

  // Helper: is mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section id="contact" className="relative py-6 md:py-12 lg:py-16 xl:py-20 bg-black text-white overflow-hidden select-none">
      {/* Grid background + playful terminal hints */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,211,238,.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,211,238,.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        <div className="hidden lg:block absolute top-20 left-10 font-mono text-green-400 opacity-10 animate-pulse">
          <div>$ ping {contactData.email}</div>
          <div className="text-gray-500">icmp_seq=1 time=1ms status=alive</div>
        </div>
        <div className="hidden lg:block absolute bottom-20 right-10 font-mono text-blue-400 opacity-10 animate-pulse">
          <div>$ whoami && date</div>
          <div className="text-gray-500">guest • {now.toLocaleTimeString()}</div>
        </div>
      </div>

      {/* Desktop terminal header */}
      <div className="hidden md:block text-center mb-6 md:mb-8 xl:mb-12 relative z-10">
        <div className="w-full max-w-2xl mx-auto mb-4">
          <div className="group w-full">
            <div className="backdrop-blur-md bg-black/70 border border-gray-800 rounded-t-2xl px-4 py-2 flex items-center gap-3 shadow-lg transition-all duration-300 group-hover:bg-black/90 group-hover:border-green-400 group-hover:shadow-green-400/30">
              <div className="flex gap-1.5 mr-2">
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-green-400"></span>
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-yellow-400"></span>
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-red-400"></span>
              </div>
              <div className="flex-1 text-center font-mono text-sm text-gray-200">
                <span className="text-gray-400">muneeb</span>
                <span className="text-blue-400 font-bold text-lg">＠</span>
                <span className="text-green-400 font-bold text-lg">devmachine</span>
                <span className="text-gray-400">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-400">/portfolio</span>
                <span className="text-blue-400 font-bold text-lg">/contact</span>
              </div>
              <div className="flex gap-1.5">
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-green-400"></span>
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-yellow-400"></span>
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-red-400"></span>
              </div>
            </div>
            <div className="backdrop-blur-md bg-black/80 border-x border-b border-gray-800 rounded-b-2xl px-6 py-4 font-mono text-base text-green-400 shadow-lg relative overflow-hidden transition-all duration-300 group-hover:bg-black/90 group-hover:border-green-400 group-hover:shadow-green-400/30">
              <div className="flex items-center gap-2">
                <span className="text-green-400 font-bold">$</span>
                <span className="text-white font-semibold">npx contact --open (E/L/G/M)</span>
                <span className="inline-block w-[1ch] animate-[blink_1s_steps(2,start)_infinite]">|</span>
              </div>
              <div className="absolute bottom-2 right-4 text-xs text-green-400 opacity-90 select-none">
                {now.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Card */}
  <div className="relative group bg-black border border-gray-900 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-blue-400/20 p-2 sm:p-4 text-sm sm:text-base">
          {/* Halo */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl transition-all duration-500 group-hover:shadow-[0_0_40px_8px_rgba(59,130,246,0.15)] group-hover:border-blue-400 border border-transparent"></div>

          {/* Top status */}
          <div className="flex items-center gap-2 px-2 sm:px-4 md:px-6 py-1.5 sm:py-2 border-b border-gray-800 bg-black/80 text-xs sm:text-sm">
            <span className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" style={{ animationDelay: '0.25s' }}></span>
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" style={{ animationDelay: '0.5s' }}></span>
            </span>
            <span className="ml-2 md:ml-3 font-mono text-[10px] md:text-xs text-gray-400 tracking-widest uppercase">CONTACT CHANNELS</span>
            <span className="ml-auto font-mono text-[10px] md:text-xs text-gray-600">{now.toLocaleDateString()}</span>
          </div>

          {/* Body */}
          <div className="p-2 sm:p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 md:gap-8">
              {/* Left: Direct contact */}
              <div className="space-y-3 md:space-y-4">
                <div className="font-mono text-xs text-gray-400">// Direct</div>

                {/* Email row (transparent bg) */}
                <div className="flex items-center justify-between bg-transparent border border-gray-800 rounded-xl px-3 py-3 transition-all duration-300 group/email hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 hover:scale-105 hover:-translate-y-1">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-blue-400 transition-transform duration-300 group-hover/email:animate-bounce">{Icon.mail()}</span>
                    <div className="min-w-0">
                      <a
                        href={`mailto:${contactData.email}?subject=Hello%20Muneeb&body=Hi%20Muneeb%2C%0A`}
                        className="text-blue-300 hover:text-blue-200 font-semibold break-all"
                      >
                        {contactData.email}
                      </a>
                      <div className="text-gray-500 text-xs flex items-center gap-2">
                        {Icon.location('w-3.5 h-3.5')}
                        <span>{contactData.location}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="font-mono text-xs px-2 py-1 rounded-lg border border-gray-700 bg-black hover:bg-green-400 hover:text-black hover:border-green-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/30"
                    aria-label="Copy email"
                  >
                    {copied === 'email' ? 'Copied' : 'Copy'}
                  </button>
                </div>

                {/* CTA */}
                <div className="flex gap-2 flex-wrap">
                  <a
                    href={`mailto:${contactData.email}?subject=Project%20Inquiry&body=Hi%20Muneeb%2C%0A`}
                    className="group relative inline-flex items-center gap-2 font-mono text-sm border-2 border-green-400 rounded-lg px-3 py-2 text-green-400 bg-black hover:bg-green-400 hover:text-black hover:border-green-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/30 overflow-hidden"
                  >
                    <span className="transition-colors duration-300 group-hover:animate-bounce">{'>'}</span>
                    <span className="group-hover:tracking-wider transition-all duration-300">Send Message</span>
                  </a>
                  <div className="relative group/cv inline-block">
                    {/* Download/View CV button and menu */}
                    <div className="relative w-full min-w-[140px]">
                      <a
                        ref={cvBtnRef}
                        href={isMobile ? undefined : "/CV.pdf"}
                        download={isMobile ? undefined : true}
                        className="relative inline-flex items-center gap-2 font-mono text-sm border-2 border-blue-400 rounded-lg px-3 py-2 text-blue-400 bg-black hover:bg-blue-400 hover:text-black hover:border-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-400/30 overflow-hidden w-full justify-center select-none cursor-pointer"
                        onClick={e => {
                          if (isMobile) {
                            e.preventDefault();
                            setCvMenuOpen(v => !v);
                          }
                        }}
                        tabIndex={0}
                      >
                        <span className="transition-colors duration-300 group-hover/cv:animate-bounce">↓</span>
                        <span className="group-hover/cv:tracking-wider transition-all duration-300">Download CV</span>
                      </a>
                      {/* Menu: show on hover (desktop) or open (mobile) */}
                      <div className={`absolute left-1/2 -translate-x-1/2 top-full z-20 pointer-events-none ${isMobile ? (cvMenuOpen ? 'block' : 'hidden') : 'hidden group-hover/cv:block group-focus-within/cv:block'}`}>
                        <div className="flex flex-col gap-1 w-full min-w-[140px] pointer-events-auto">
                          <a
                            href="/CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-2.5 py-1 rounded-lg border-2 border-blue-400 text-blue-400 bg-black hover:bg-blue-400 hover:text-black hover:border-blue-400 font-mono text-xs transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-400/30 w-full text-center"
                            tabIndex={0}
                            onClick={() => setCvMenuOpen(false)}
                          >
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#home"
                    className="group relative inline-flex items-center gap-2 font-mono text-sm border-2 border-gray-700 rounded-lg px-2 py-2 min-w-0 sm:px-3 sm:min-w-[80px] text-gray-300 bg-black hover:bg-blue-400 hover:text-black hover:border-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-400/30 overflow-hidden"
                  >
                    <span className="transition-colors duration-300 group-hover:animate-bounce">Exit</span>
                  </a>
                </div>
              </div>

              {/* Right: Socials (transparent bg + strict palettes) */}
              <div className="space-y-3 md:space-y-4">
                <div className="font-mono text-xs text-gray-400">// Socials</div>

                {contactData.socials.map((s) => {
                  const icon =
                    s.key === 'linkedin' ? Icon.linkedin() :
                    s.key === 'github'   ? Icon.github()   :
                    Icon.medium()

                  // Strict brand classes:
                  // LinkedIn → blue or black; GitHub → white or black; Medium → green or black
                  const brand =
                    s.key === 'linkedin'
                      ? 'text-blue-400 group-hover/social:text-black'    // blue to black on hover
                    : s.key === 'github'
                      ? 'text-white group-hover/social:text-black'       // white to black on hover
                    : /* medium */
                      'text-green-400 group-hover/social:text-black'    // green to black on hover

                  const bgHover =
                    s.key === 'linkedin'
                      ? 'hover:bg-blue-400 hover:border-blue-400'
                    : s.key === 'github'
                      ? 'hover:bg-gray-200 hover:border-gray-200'
                    : /* medium */
                      'hover:bg-green-400 hover:border-green-400'

                  return (
                    <a
                      key={s.key}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/social flex items-center justify-between bg-black border-2 border-gray-800 rounded-xl px-3 py-3 transition-all duration-300 ${bgHover} hover:scale-105 hover:shadow-lg hover:-translate-y-1`}
                    >
                      <span className={`flex items-center gap-3 ${brand}`}>
                        <span className="transition-transform duration-300 group-hover/social:animate-bounce">{icon}</span>
                        <span className="font-semibold">{s.name}</span>
                      </span>
                      <span className="text-gray-400 group-hover/social:text-black transition-colors duration-300 group-hover/social:animate-bounce">{Icon.external()}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Bottom status */}
          <div className="flex items-center justify-between px-4 md:px-6 py-2 border-t border-gray-800 bg-black/80">
            <div className="flex items-center gap-2 font-mono text-[10px] md:text-xs text-gray-500">
              <span className="animate-pulse text-green-400">●</span>
              <span className="tracking-widest uppercase">Contact ready</span>
            </div>
            <div className="font-mono text-[10px] md:text-xs text-green-400">
              {now.toLocaleTimeString()}
            </div>
          </div>
        </div>

        {/* Footer mini-help */}
        <div className="mt-3 text-center font-mono text-xs text-gray-500">
          Shortcuts: <span className="text-green-400">E</span> (Email), <span className="text-blue-400">L</span> (LinkedIn), <span className="text-white">G</span> (GitHub), <span className="text-green-300">M</span> (Medium)
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          20% { transform: translateY(-0.5px); }
          40% { transform: translateY(-1px); }
          60% { transform: translateY(-0.5px); }
          80% { transform: translateY(0); }
        }
        .animate-bounce {
          animation: bounce 0.7s;
        }
      `}</style>
    </section>
  )
}

export default GetInTouch
