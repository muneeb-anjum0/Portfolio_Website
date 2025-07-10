import React from 'react'

// Project portfolio data
const projects = [
  {
    title: 'Sorting Visualizer',
    subtitle: 'Open Source Project (~40 hours)',
    date: 'February 2025 – April 2025',
    tag: 'Visualizing algorithms in action',
    // ...removed unused imgWebp, imgJpg fields...
    description:
      'Made a C++ and OpenGL based desktop Application allowing users to See how the alogrithms they use in their daily life actually sort a given list of xyz things.',
    achievements: [
      'Leveraged OpenGLs Imgui to make responsive UI so that it is easier for the user to navigate and use the application',
      'Smooth and Clean Visuals to help users understand how different sorting algorithms work',
      'Implemented real-time sorting visualization to show the process of each algorithm',
      'Used C++ as main brain to this application to implement various algorithms like Bubble Sort, Selection Sort, Merge Sort, Quick Sort, Heap Sort and many more',
    ],
    techStack: ['C++','OpenGL','ImGui','GLFW'],
    link: '#',
  },
  {
    title: 'Mazer Runner',
    subtitle: 'Open Source Project (~30 hours)',
    date: 'February 2025 – April 2025',
    tag: 'Maze generation and solving',
    // ...removed unused imgWebp, imgJpg fields...
    description:
      'Built Mazer Runner, a maze generation and solving application using C++ and OpenGL.',
    achievements: [
      'Implemented various maze generation algorithms like Recursive Backtracking, Prim\'s and Kruskal\'s Algorithm',
      'Developed a user-friendly interface with OpenGL and ImGui for interactive maze exploration',
      'Optimized maze rendering for smooth performance with large mazes',
      'Implemented pathfinding algorithms like A* and Dijkstra for efficient maze solving',
      'Created a Maze using A* algorithm and find the shortest path through the maze using BFS and DFS algorithms',
    ],
    techStack: ['C++','OpenGL','ImGui','GLFW'],
    link: '#',
  },
]

// Reusable project card component styled like Experience card, with image
const cardMarkup = (p: typeof projects[0]) => {
  // ...removed unused 'now' variable...
  return (
    <div
      key={p.title}
      className="relative group bg-black border border-gray-900 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.025] hover:shadow-blue-400/20 card-fade-glow"
      style={{ minHeight: '220px' }}
    >
      {/* Subtle glowing border on hover, black themed, with fade-in blue overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl z-10 transition-all duration-500 group-hover:shadow-[0_0_32px_0_rgba(34,211,238,0.10)] group-hover:border-blue-400 border-2 border-transparent"></div>
      {/* Fade-in blue overlay on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl z-0 bg-gradient-to-br from-gray-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <style>{`
        .card-fade-glow {
          background: #000;
        }
        .card-fade-glow:hover {
          /* No background color change, only overlay */
        }
      `}</style>

      {/* Top status bar with animated dots */}
      <div className="flex items-center gap-2 px-6 py-2 border-b border-gray-800 bg-black/80">
        <span className="flex gap-1">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" style={{ animationDelay: '0.3s' }}></span>
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" style={{ animationDelay: '0.6s' }}></span>
        </span>
        <span className="ml-3 font-mono text-xs text-gray-400 tracking-widest uppercase letter-spacing-2">ACTIVE PROJECT</span>
        <span className="ml-auto font-mono text-xs text-gray-600">{p.date}</span>
      </div>

      {/* Main content area: add short description and 1-2 key features */}
      <div className="relative z-20 flex flex-col gap-2 px-6 pt-4 pb-6 transition-all duration-500">
        <div className="font-mono text-xl md:text-2xl flex items-center gap-2 text-green-400">
          <span className="select-none">$</span>
          <span className="text-white font-bold">{p.title}</span>
          <span className="text-gray-400 font-bold"> | </span>
          <span className="text-blue-400 font-bold">{p.tag}</span>
        </div>
        <div className="font-mono text-sm text-gray-400">{p.subtitle}</div>
        <div className="text-gray-300 text-base font-mono mt-1 line-clamp-2">{p.description}</div>
        <ul className="font-mono text-sm text-blue-300 mt-1 space-y-1">
          {p.achievements.slice(0, 2).map((detail, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-green-400 select-none">{i === 0 ? '┌─' : '└─'}</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-2">
          {p.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-2 font-mono text-base text-gray-300 hover:text-blue-400 transition-colors duration-200"
              style={{ fontWeight: 600, letterSpacing: '0.01em' }}
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="tech-bullet">
                <circle cx="8" cy="8" r="6" stroke="#a3a3a3" strokeWidth="1.5" className="tech-bullet-circle"/>
                <circle cx="8" cy="8" r="3.5" fill="none" className="tech-bullet-inner"/>
              </svg>
              {tech}
            </span>
          ))}
        </div>
        <style>{`
          .tech-bullet-circle {
            transition: fill 0.2s;
          }
          .tech-bullet-inner {
            transition: fill 0.2s;
            fill: none;
          }
          .group:hover .tech-bullet-inner {
            fill: #3b82f6;
          }
        `}</style>
        <div className="pt-2">
          <a
            href={p.link}
            className="group/view-link inline-flex items-center gap-2 font-mono text-base text-green-400 hover:text-black hover:bg-green-400 border border-green-400 px-3 py-1 rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
            style={{ fontWeight: 700, letterSpacing: '0.03em' }}
          >
            <span className="transition-transform duration-200 group-hover/view-link:-translate-x-1">{'>'}</span>
            <span className="underline underline-offset-4 decoration-green-400 group-hover/view-link:no-underline">View Project</span>
            <span className="transition-transform duration-200 group-hover/view-link:translate-x-1 text-green-300">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const FeaturedProjects: React.FC = () => (
  <section id="projects" className="relative py-6 md:py-12 lg:py-16 xl:py-20 bg-black text-white overflow-hidden select-none">
    {/* Terminal-style background with decorative elements */}
    <div className="absolute inset-0 z-0 pointer-events-none">
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
      
      {/* Decorative terminal commands */}
      <div className="hidden lg:block absolute top-20 left-10 font-mono text-green-400 opacity-10 animate-pulse">
        <div>$ git clone projects</div>
        <div className="text-gray-500">Cloning repositories...</div>
      </div>
      
      <div className="hidden lg:block absolute bottom-20 right-10 font-mono text-blue-400 opacity-10 animate-pulse">
        <div>$ npm run build</div>
        <div className="text-gray-500">Build successful</div>
      </div>
    </div>

    {/* Mobile-optimized project showcase */}
    {/* Mobile: Replicate desktop terminal header and card style, but optimized for mobile */}
    <div className="md:hidden px-2 sm:px-4 relative z-10">
      {/* Terminal window header - mobile version */}
      <div className="text-center mb-3 sm:mb-4">
        <div className="w-full max-w-md mx-auto mb-3">
          <div className="group terminal-header-container w-full">
            <div className="backdrop-blur-md bg-black/70 border border-gray-800 rounded-t-2xl px-3 py-2 flex items-center gap-2 shadow-lg relative overflow-hidden transition-all duration-300 group-hover:bg-black/90 group-hover:border-green-400 group-hover:shadow-green-400/30">
              {/* Left dots */}
              <div className="flex gap-1.5 mr-2">
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full transition-colors duration-200 group-hover:bg-green-400"></span>
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full transition-colors duration-200 group-hover:bg-yellow-400"></span>
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full transition-colors duration-200 group-hover:bg-red-400"></span>
              </div>
              {/* Path and user info */}
              <div className="flex-1 text-center font-mono text-xs text-gray-200 select-text transition-colors duration-300 group-hover:text-green-200">
                <span className="text-gray-400 font-mono text-xs">muneeb</span>
                <span className="text-blue-400 font-mono font-bold text-base align-middle" style={{ fontFamily: 'monospace' }}>＠</span>
                <span className="text-green-400 font-mono font-bold text-base align-middle" style={{ fontFamily: 'monospace' }}>devmachine</span>
                <span className="text-gray-400 font-mono text-xs">:</span>
                <span className="text-blue-400 font-mono text-xs">~</span>
                <span className="text-gray-400 font-mono text-xs">/portfolio</span>
                <span className="text-blue-400 font-mono font-bold text-base align-middle">/projects</span>
              </div>
              {/* Right dots */}
              <div className="flex gap-1.5">
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full transition-colors duration-200 group-hover:bg-green-400"></span>
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full transition-colors duration-200 group-hover:bg-yellow-400"></span>
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full transition-colors duration-200 group-hover:bg-red-400"></span>
              </div>
            </div>
            <div className="backdrop-blur-md bg-black/80 border-x border-b border-gray-800 rounded-b-2xl px-4 py-3 font-mono text-sm text-green-400 shadow-lg relative overflow-hidden transition-all duration-300 group-hover:bg-black/90 group-hover:border-green-400 group-hover:shadow-green-400/30">
              <div className="flex items-center gap-2">
                <span className="text-green-400 font-bold group-hover:text-green-300">$</span>
                <span className="text-white font-semibold group-hover:text-green-200">npx projects --list</span>
                <span className="blinking-cursor ml-1">|</span>
              </div>
              <div className="absolute bottom-2 right-4 text-xs text-green-400 opacity-90 select-none group-hover:text-green-400">
                {new Date().toLocaleTimeString()}
              </div>
            </div>
            <style>{`
              .blinking-cursor {
                display: inline-block;
                width: 1ch;
                animation: blink 1s steps(2, start) infinite;
              }
              @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
              }
            `}</style>
          </div>
        </div>
      </div>

      {/* Project cards - mobile, but styled like desktop */}
      <div className="grid grid-cols-1 gap-4">
        {projects.map((p) => (
          <div
            key={p.title}
            className="relative group bg-black border border-gray-900 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.025] hover:shadow-blue-400/20 card-fade-glow"
            style={{ minHeight: '220px' }}
          >
            {/* Subtle glowing border on hover, black themed, with fade-in blue overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl z-10 transition-all duration-500 group-hover:shadow-[0_0_32px_0_rgba(34,211,238,0.10)] group-hover:border-blue-400 border-2 border-transparent"></div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl z-0 bg-gradient-to-br from-gray-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <style>{`
              .card-fade-glow {
                background: #000;
              }
              .card-fade-glow:hover {
                /* No background color change, only overlay */
              }
            `}</style>

            {/* Top status bar with animated dots */}
            <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-800 bg-black/80">
              <span className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" style={{ animationDelay: '0.3s' }}></span>
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" style={{ animationDelay: '0.6s' }}></span>
              </span>
              <span className="ml-3 font-mono text-xs text-gray-400 tracking-widest uppercase letter-spacing-2">ACTIVE PROJECT</span>
              <span className="ml-auto font-mono text-xs text-gray-600">{p.date}</span>
            </div>

            {/* Main content area: short description and 1-2 key features */}
            <div className="relative z-20 flex flex-col gap-2 px-4 pt-3 pb-5 transition-all duration-500">
              <div className="font-mono text-lg flex items-center gap-2 text-green-400">
                <span className="select-none">$</span>
                <span className="text-white font-bold">{p.title}</span>
                <span className="text-gray-400 font-bold"> | </span>
                <span className="text-blue-400 font-bold">{p.tag}</span>
              </div>
              <div className="font-mono text-xs text-gray-400">{p.subtitle}</div>
              <div className="text-gray-300 text-sm font-mono mt-1 line-clamp-2">{p.description}</div>
              <ul className="font-mono text-xs text-blue-300 mt-1 space-y-1">
                {p.achievements.slice(0, 2).map((detail, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-400 select-none">{i === 0 ? '┌─' : '└─'}</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-2">
                {p.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 font-mono text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    style={{ fontWeight: 600, letterSpacing: '0.01em' }}
                  >
                    <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="tech-bullet">
                      <circle cx="8" cy="8" r="6" stroke="#a3a3a3" strokeWidth="1.5" className="tech-bullet-circle"/>
                      <circle cx="8" cy="8" r="3.5" fill="none" className="tech-bullet-inner"/>
                    </svg>
                    {tech}
                  </span>
                ))}
              </div>
              <style>{`
                .tech-bullet-circle {
                  transition: fill 0.2s;
                }
                .tech-bullet-inner {
                  transition: fill 0.2s;
                  fill: none;
                }
                .group:hover .tech-bullet-inner {
                  fill: #3b82f6;
                }
              `}</style>
              <div className="pt-2">
                <a
                  href={p.link}
                  className="group/view-link inline-flex items-center gap-2 font-mono text-sm text-green-400 hover:text-black hover:bg-green-400 border border-green-400 px-3 py-1 rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                  style={{ fontWeight: 700, letterSpacing: '0.03em' }}
                >
                  <span className="transition-transform duration-200 group-hover/view-link:-translate-x-1">{'>'}</span>
                  <span className="underline underline-offset-4 decoration-green-400 group-hover/view-link:no-underline">View Project</span>
                  <span className="transition-transform duration-200 group-hover/view-link:translate-x-1 text-green-300">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Desktop full-featured project showcase */}
    <div className="hidden md:block max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
      {/* Terminal window header - styled like About/Skills/Experience */}
      <div className="text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-12">
        <div className="w-full max-w-2xl mx-auto mb-4">
          {/* Redesigned Terminal Header (copied from About.tsx/Skills.tsx/Experience.tsx) */}
          <div className="group terminal-header-container w-full">
            <div className="backdrop-blur-md bg-black/70 border border-gray-800 rounded-t-2xl px-4 py-2 flex items-center gap-3 shadow-lg relative overflow-hidden transition-all duration-300 group-hover:bg-black/90 group-hover:border-green-400 group-hover:shadow-green-400/30">
              {/* Left dots */}
              <div className="flex gap-1.5 mr-2">
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full transition-colors duration-200 group-hover:bg-green-400"></span>
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full transition-colors duration-200 group-hover:bg-yellow-400"></span>
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full transition-colors duration-200 group-hover:bg-red-400"></span>
              </div>
              {/* Path and user info */}
              <div className="flex-1 text-center font-mono text-sm text-gray-200 select-text transition-colors duration-300 group-hover:text-green-200">
                {/* Replicate Hero/About/Skills/Experience terminal user@host:path style */}
                <span className="text-gray-400 font-mono text-sm">muneeb</span>
                <span className="text-blue-400 font-mono font-bold text-lg align-middle" style={{ fontFamily: 'monospace' }}>＠</span>
                <span className="text-green-400 font-mono font-bold text-lg align-middle" style={{ fontFamily: 'monospace' }}>devmachine</span>
                <span className="text-gray-400 font-mono text-sm">:</span>
                    <span className="text-blue-400 font-mono text-sm">~</span>
                    <span className="text-gray-400 font-mono text-sm">/portfolio</span>
                    <span className="text-blue-400 font-mono font-bold text-lg align-middle">/projects</span>
              </div>
              {/* Right dots */}
              <div className="flex gap-1.5">
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full transition-colors duration-200 group-hover:bg-green-400"></span>
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full transition-colors duration-200 group-hover:bg-yellow-400"></span>
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full transition-colors duration-200 group-hover:bg-red-400"></span>
              </div>
            </div>
            {/* Terminal body with prompt */}
            <div className="backdrop-blur-md bg-black/80 border-x border-b border-gray-800 rounded-b-2xl px-6 py-4 font-mono text-base text-green-400 shadow-lg relative overflow-hidden transition-all duration-300 group-hover:bg-black/90 group-hover:border-green-400 group-hover:shadow-green-400/30">
              <div className="flex items-center gap-2">
                <span className="text-green-400 font-bold group-hover:text-green-300">$</span>
                <span className="text-white font-semibold group-hover:text-green-200">npx projects --list</span>
                <span className="blinking-cursor ml-1">|</span>
              </div>
              <div className="absolute bottom-2 right-4 text-xs text-green-400 opacity-90 select-none group-hover:text-green-400">
                {new Date().toLocaleTimeString()}
              </div>
            </div>
            {/* Blinking cursor animation */}
            <style>{`
              .blinking-cursor {
                display: inline-block;
                width: 1ch;
                animation: blink 1s steps(2, start) infinite;
              }
              @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
              }
            `}</style>
          </div>
        </div>
      </div>

      {/* Project portfolio overview */}
      {/* ...existing code... */}

      {/* Project showcase grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {projects.map(cardMarkup)}
      </div>
    </div>

    {/* Section navigation divider */}
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-2 sm:pb-4 md:pb-6 lg:pb-8 pt-3 sm:pt-6 md:pt-8 lg:pt-12">
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-gray-800"></div>
        <div className="font-mono text-xs text-gray-500 flex items-center gap-2">
          <span className="text-green-400">$</span>
          <a href="#education" className="hover:text-green-300 transition-colors">cd ../education</a>
        </div>
        <div className="flex-1 h-px bg-gray-800"></div>
      </div>
    </div>
  </section>
)

export default FeaturedProjects
