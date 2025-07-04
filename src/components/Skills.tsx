// src/components/Skills.tsx
import React from 'react'
import { 
  FaCode, 
  FaPalette, 
  FaServer, 
  FaDatabase, 
  FaCloud, 
  FaTools
} from 'react-icons/fa'

const Skills: React.FC = () => {
  const skillCategories = [
    {
      name: 'languages',
      command: 'ls -la languages/',
      icon: FaCode,
      color: 'green',
      skills: ['JavaScript', 'Python', 'C++', 'TypeScript'],
      description: 'Core programming languages'
    },
    {
      name: 'frontend',
      command: 'cat frontend.config',
      icon: FaPalette,
      color: 'blue',
      skills: ['React', 'Next.js', 'HTML/CSS', 'Tailwind CSS'],
      description: 'Client-side technologies'
    },
    {
      name: 'backend',
      command: 'systemctl status backend',
      icon: FaServer,
      color: 'cyan',
      skills: ['Node.js', 'ASP.NET'],
      description: 'Server-side frameworks'
    },
    {
      name: 'databases',
      command: 'show databases',
      icon: FaDatabase,
      color: 'purple',
      skills: ['MongoDB'],
      description: 'Data storage solutions'
    },
    {
      name: 'devops',
      command: 'kubectl get pods',
      icon: FaCloud,
      color: 'orange',
      skills: ['To-Do'],
      description: 'Cloud & deployment tools'
    },
    {
      name: 'tools',
      command: 'which --all',
      icon: FaTools,
      color: 'pink',
      skills: ['Git', 'Langchain', 'Caddy', 'Traefik'],
      description: 'Development utilities'
    }
  ]

  return (
    <section id="skills" className="relative py-6 md:py-12 lg:py-16 xl:py-20 bg-black text-white overflow-hidden select-none">
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
        
        {/* Floating command snippets - hidden on mobile */}
        <div className="hidden lg:block absolute top-20 left-10 font-mono text-green-400 opacity-10 animate-pulse">
          <div>$ npm --version</div>
          <div className="text-gray-500">9.5.1</div>
        </div>
        
        <div className="hidden lg:block absolute bottom-20 right-10 font-mono text-blue-400 opacity-10 animate-pulse">
          <div>$ node --version</div>
          <div className="text-gray-500">v18.16.0</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Terminal Header */}
        <div className="text-center mb-2 sm:mb-4 md:mb-6 lg:mb-8">
          <div className="bg-black border border-gray-900 rounded-lg max-w-2xl mx-auto hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 group overflow-hidden">
            {/* Minimal header bar */}
            <div className="bg-gray-900 px-3 sm:px-4 py-2 flex items-center gap-2 sm:gap-3 group-hover:bg-gray-800 transition-colors duration-300">
              <div className="flex gap-1 sm:gap-1.5">
                <div className="w-2 h-2 bg-red-500 rounded-full group-hover:animate-pulse"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover:animate-pulse"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full group-hover:animate-pulse"></div>
              </div>
              <span className="font-mono text-xs text-gray-400 group-hover:text-green-400 transition-colors duration-300">
                ~/portfolio/skills
              </span>
            </div>
            
            {/* Simple skills indicator */}
            <div className="p-3 font-mono text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-400">$</span>
                <span className="text-white group-hover:text-green-300 transition-colors duration-300">
                  cat skills.json
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Overview */}
        <div className="text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 font-mono text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-400">●</span>
                <span className="text-gray-300">6+ Technologies</span>
                <span className="text-gray-500">mastered</span>
              </div>
              <div className="w-px h-4 bg-gray-600 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">●</span>
                <span className="text-gray-300">Full-Stack</span>
                <span className="text-gray-500">capabilities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid - Terminal Windows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className={`
                bg-black border border-gray-800 rounded-lg overflow-hidden
                transition-all duration-300 hover:border-${category.color}-400
                hover:shadow-lg hover:shadow-${category.color}-400/20
                group cursor-pointer
              `}
            >
              {/* Terminal window header */}
              <div className={`
                bg-gray-900 px-4 py-2 flex items-center gap-2
                group-hover:bg-gray-800 transition-colors duration-300
              `}>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 bg-red-500 rounded-full group-hover:animate-pulse"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover:animate-pulse"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full group-hover:animate-pulse"></div>
                </div>
                <span className={`
                  font-mono text-xs text-gray-400 ml-2
                  group-hover:text-${category.color}-400 transition-colors duration-300
                `}>
                  {category.name}.sh
                </span>
              </div>

              {/* Terminal content */}
              <div className="p-3 space-y-2">
                {/* Command line */}
                <div className="font-mono text-xs flex items-center gap-2">
                  <span className="text-green-400">$</span>
                  <span className={`
                    text-gray-400 group-hover:text-${category.color}-300
                    transition-colors duration-300
                  `}>
                    {category.command}
                  </span>
                </div>

                {/* Category icon and description */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <category.icon className={`
                      text-base text-${category.color}-400 
                      group-hover:text-${category.color}-300 
                      transition-colors duration-300
                    `} />
                    <span className={`
                      font-mono text-${category.color}-400 font-bold text-sm
                      group-hover:text-${category.color}-300 transition-colors duration-300
                    `}>
                      {category.name}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs font-mono">
                    # {category.description}
                  </p>
                </div>

                {/* Skills list */}
                <div className="space-y-1">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={`
                        font-mono text-xs flex items-center gap-2
                        hover:bg-gray-900 rounded px-2 py-1
                        transition-all duration-200
                        animate-fade-in
                      `}
                      style={{ animationDelay: `${skillIndex * 0.1}s` }}
                    >
                      <span className="text-gray-600">├─</span>
                      <span className={`
                        text-white group-hover:text-${category.color}-300
                        transition-colors duration-300
                      `}>
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Configuration */}
        <div className="mt-6 sm:mt-8 max-w-[60rem] mx-auto">
          <div className="bg-black border border-gray-800 rounded-lg overflow-hidden hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300 group">
            {/* Compact Config Display */}
            <div className="p-3 space-y-2">
              <div className="font-mono text-sm flex items-center gap-2">
                <span className="text-yellow-400">$</span>
                <span className="text-gray-400">cat</span>
                <span className="text-white">soft_skills.config</span>
              </div>
              <div className="font-mono text-sm pl-4 space-y-1">
                <div className="flex flex-wrap gap-2">
                  <span className="text-green-400">communication</span>
                  <span className="text-white">="advanced"</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-green-400">collaboration</span>
                  <span className="text-white">="agile_team"</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-green-400">problem_solving</span>
                  <span className="text-white">="analytical"</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-green-400">adaptability</span>
                  <span className="text-white">="fast_learner"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-6 pt-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-800"></div>
          <div className="font-mono text-xs text-gray-500 flex items-center gap-2">
            <span className="text-green-400">$</span>
            <span>cd ../experience</span>
          </div>
          <div className="flex-1 h-px bg-gray-800"></div>
        </div>
      </div>

      {/* Keyframes for animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in { 
          animation: fade-in 0.6s ease-out forwards; 
        }
      `}</style>
    </section>
  )
}

export default Skills