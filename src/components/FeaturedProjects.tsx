// src/components/FeaturedProjects.tsx
import React from 'react'

const projects = [
  {
    title: 'Sorting Visualizer',
    subtitle: 'Open Source Project (~40 hours)',
    date: 'February 2025 – April 2025',
    tag: 'Visualizing algorithms in action',
    imgWebp: new URL('../assets/pic2.webp', import.meta.url).href,
    imgJpg: new URL('../assets/pic2.jpg', import.meta.url).href,
    description:
      'Made a C++ and OpenGL based desktop Application allowing users to See how the alogrithms they use in their daily life actually sort a given list of xyz things.',
    achievements: [
      'Leveraged OpenGLs Imgui to make responsive UI so that it is easier for the user to navigate and use the application',
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
    imgWebp: new URL('../assets/pic1.webp', import.meta.url).href,
    imgJpg: new URL('../assets/pic2.webp', import.meta.url).href,
    description:
      'Built Mazer Runner, a maze generation and solving application using C++ and OpenGL.',
    achievements: [
      'Implemented various maze generation algorithms like Recursive Backtracking, Prim\'s Algorithm, and Kruskal\'s Algorithm',
      'Developed a user-friendly interface with OpenGL and ImGui for interactive maze exploration',
      'Optimized maze rendering for smooth performance with large mazes',
      'Created a Maze using A* algorithm and find the shortest path through the maze using BFS and DFS algorithms',
    ],
    techStack: ['C++','OpenGL','ImGui','GLFW'],
    link: '#',
  },
]

const cardMarkup = (p: typeof projects[0]) => (
  <div
    key={p.title}
    className="relative bg-black border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-green-400 hover:shadow-2xl hover:shadow-green-400/10 group"
  >
    {/* Status bar */}
    <div className="bg-black border-b border-gray-800 px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-between group-hover:bg-black transition-colors duration-300">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="font-mono text-sm text-gray-300 truncate">
          {p.title}
        </span>
      </div>
      <div className="font-mono text-sm text-gray-500 hidden sm:block">
        {p.date.split(' ')[0]} {p.date.split(' ')[1]}
      </div>
    </div>

    {/* Main content */}
    <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
      {/* Terminal command execution */}
      <div className="font-mono text-sm space-y-1 border-b border-gray-800 pb-2">
        <div className="flex items-center gap-2">
          <span className="text-green-400">$</span>
          <span className="text-white truncate">./run {p.title.toLowerCase().replace(/ /g, '_')}</span>
        </div>
        <div className="text-green-400 pl-4">
          ✓ Process initialized successfully
        </div>
      </div>

      {/* Project image with terminal overlay */}
      <div className="relative rounded-lg overflow-hidden border border-gray-800">
        <picture>
          <source srcSet={p.imgWebp} type="image/webp" />
          <img 
            src={p.imgJpg} 
            alt={`${p.title} screenshot`} 
            className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-black/80 backdrop-blur-sm rounded px-2 py-1 border border-gray-800">
          <span className="font-mono text-xs text-green-400">[PREVIEW]</span>
        </div>
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-black/80 backdrop-blur-sm rounded px-2 py-1 border border-gray-800 hidden sm:block">
          <span className="font-mono text-xs text-green-400">{p.subtitle}</span>
        </div>
        <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-green-400">Status:</span>
            <span className="text-white">RUNNING</span>
            <span className="text-green-400 animate-pulse ml-auto">●</span>
          </div>
        </div>
      </div>

      {/* System info style description */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 font-mono text-sm">
          <span className="text-green-400">{'>'}</span>
          <span className="text-gray-400">Description:</span>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed ml-4">
          {p.description}
        </p>
      </div>

      {/* Terminal-style achievements */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 font-mono text-sm">
          <span className="text-green-400">{'>'}</span>
          <span className="text-gray-400">Key Features:</span>
        </div>
        <div className="space-y-1 ml-4">
          {p.achievements.map((achievement, idx) => (
            <div key={idx} className="flex items-start gap-2 font-mono text-sm text-gray-300">
              <span className="text-gray-600 mt-1">├─</span>
              <span className="leading-relaxed">{achievement}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dependencies as terminal list */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 font-mono text-sm">
          <span className="text-green-400">{'>'}</span>
          <span className="text-gray-400">Tech Stack:</span>
        </div>
        <div className="flex flex-wrap gap-2 ml-4">
          {p.techStack.map((tech, idx) => (
            <span key={idx} className="bg-gray-900 border border-gray-700 px-2 py-1 rounded font-mono text-sm text-cyan-400 hover:border-cyan-400 transition-colors duration-200">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Project link */}
      <div className="space-y-2 pt-2 border-t border-gray-800">
        <a 
          href={p.link} 
          className="flex items-center gap-2 font-mono text-sm text-green-400 hover:text-green-300 transition-colors duration-200"
        >
          <span>{'>'}</span>
          <span>View Project</span>
          <span className="text-gray-500">→</span>
        </a>
      </div>
    </div>
  </div>
)

const FeaturedProjects: React.FC = () => (
  <section id="projects" className="relative py-16 sm:py-20 bg-black text-white overflow-hidden select-none">
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
      
      {/* Floating project commands - hidden on mobile */}
      <div className="hidden lg:block absolute top-20 left-10 font-mono text-green-400 opacity-10 animate-pulse">
        <div>$ git clone projects</div>
        <div className="text-gray-500">Cloning repositories...</div>
      </div>
      
      {/* Floating build command - repositioned */}
      <div className="hidden lg:block absolute bottom-20 right-10 font-mono text-blue-400 opacity-10 animate-pulse">
        <div>$ npm run build</div>
        <div className="text-gray-500">Build successful</div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
      {/* Terminal Header */}
      <div className="text-center mb-6 sm:mb-8">
        <div className="bg-black border border-gray-900 rounded-lg max-w-2xl mx-auto hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 group overflow-hidden">
          <div className="bg-gray-900 px-3 sm:px-4 py-2 flex items-center gap-2 sm:gap-3 group-hover:bg-gray-800 transition-colors duration-300">
            <div className="flex gap-1 sm:gap-1.5">
              <div className="w-2 h-2 bg-red-500 rounded-full group-hover:animate-pulse"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover:animate-pulse"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full group-hover:animate-pulse"></div>
            </div>
            <span className="font-mono text-xs text-gray-400 group-hover:text-green-400 transition-colors duration-300">
              ~/portfolio/projects
            </span>
          </div>
          <div className="p-3 font-mono text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-400">$</span>
              <span className="text-white group-hover:text-green-300 transition-colors duration-300">
                ls -la featured/
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Overview */}
      <div className="text-center mb-8 sm:mb-10">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 font-mono text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-400">●</span>
              <span className="text-gray-300">2 Featured</span>
              <span className="text-gray-500">projects</span>
            </div>
            <div className="w-px h-4 bg-gray-600 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">●</span>
              <span className="text-gray-300">C++ & OpenGL</span>
              <span className="text-gray-500">focused</span>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {projects.map(cardMarkup)}
      </div>
    </div>

    {/* Terminal Divider */}
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-8 pt-12">
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-gray-800"></div>
        <div className="font-mono text-xs text-gray-500 flex items-center gap-2">
          <span className="text-green-400">$</span>
          <span>cd ../education</span>
        </div>
        <div className="flex-1 h-px bg-gray-800"></div>
      </div>
    </div>
  </section>
)

export default FeaturedProjects
