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
  // Skills organized by category with terminal-style metadata
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
        {/* Section Header - Desktop Only (matches About.tsx) */}
        <div className="hidden md:block text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-12">
          <div className="w-full max-w-2xl mx-auto mb-4">
            {/* Redesigned Terminal Header (copied from About.tsx) */}
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
                  {/* Replicate Hero/About terminal user@host:path style */}
                  <span className="text-gray-400 font-mono text-sm">muneeb</span>
                  <span className="text-blue-400 font-mono font-bold text-lg align-middle" style={{ fontFamily: 'monospace' }}>＠</span>
                  <span className="text-green-400 font-mono font-bold text-lg align-middle" style={{ fontFamily: 'monospace' }}>devmachine</span>
                  <span className="text-gray-400 font-mono text-sm">:</span>
                    <span className="text-blue-400 font-mono text-sm">~</span>
                    <span className="text-gray-400 font-mono text-sm">/portfolio</span>
                    <span className="text-blue-400 font-mono font-bold text-lg align-middle">/skills</span>
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
                  <span className="text-white font-semibold group-hover:text-green-200">npx skills --list</span>
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

        {/* Mobile: Terminal-style Skills Layout (matches desktop) */}
        <div className="md:hidden">
          <div className="space-y-4">
            {skillCategories.map((category) => (
              <div
                key={category.name}
                className={`bg-black border border-gray-800 rounded-3xl overflow-hidden transition-all duration-300 group cursor-pointer p-1.5 min-h-0 h-auto text-xs gap-0.5 relative skill-card skill-card-${category.color}`}
              >
                {/* Terminal window header */}
                <div className="bg-black px-2 py-1 flex items-center gap-1.5 transition-colors duration-200 z-10">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-red-500 rounded-full group-hover:animate-pulse"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover:animate-pulse"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full group-hover:animate-pulse"></div>
                  </div>
                  <span className="font-mono text-xs text-gray-400 ml-2 transition-colors duration-300">{category.name}.sh</span>
                </div>
                {/* Terminal content */}
                <div className="p-2 space-y-1.5 z-10">
                  {/* Command line */}
                  <div className="font-mono text-xs flex items-center gap-1 mb-1">
                    <span className="text-green-400">$</span>
                    <span className={`text-gray-400 group-hover:text-${category.color}-300 transition-colors duration-200`}>{category.command}</span>
                  </div>
                  {/* Category icon and description */}
                  <div className="flex items-center gap-1 mb-1">
                    <category.icon className={`text-base text-${category.color}-400 group-hover:text-${category.color}-300 transition-colors duration-200`} />
                    <span className={`font-mono text-${category.color}-400 font-bold text-sm group-hover:text-${category.color}-300 transition-colors duration-200`}>{category.name}</span>
                    <span className="text-gray-500 text-sm font-mono ml-1"># {category.description}</span>
                  </div>
                  {/* Skills list */}
                  <div className="space-y-0.5">
                    {category.skills.map((skill, skillIndex) => {
                      let bullet = '├─';
                      if (skillIndex === 0) bullet = '┌─';
                      else if (skillIndex === category.skills.length - 1) bullet = '└─';
                      return (
                        <div
                          key={skill}
                          className="font-mono text-xs flex items-center gap-1 rounded px-0.5 py-0.5 transition-all duration-150 animate-fade-in"
                          style={{ animationDelay: `${skillIndex * 0.08}s` }}
                        >
                          <span className="text-gray-600">{bullet}</span>
                          <span className="text-white transition-colors duration-200">{skill}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Desktop: Original Layout (minus header) */}
        <div className="hidden md:block">

        {/* Quick Overview */}
        {/* Borderless Quick Overview: Minimalist Gradient Text */}
        <div className="mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-6">
          <div className="max-w-2xl mx-auto">
            <div className="font-mono text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-2 select-none">
              <span className="flex items-center gap-1 bg-gradient-to-r from-green-400/80 via-white/80 to-transparent bg-clip-text text-transparent animate-fade-in">
                <span className="text-green-400">6+</span>
                <span className="text-white">technologies mastered</span>
              </span>
              <span className="hidden sm:inline-block text-gray-700 mx-2">/</span>
              <span className="flex items-center gap-1 bg-gradient-to-r from-blue-400/80 via-white/80 to-transparent bg-clip-text text-transparent animate-fade-in">
                <span className="text-blue-400">Full-Stack</span>
                <span className="text-white">capabilities</span>
              </span>
            </div>
          </div>
        </div>

        {/* Skills Grid - Terminal Windows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className={`
                bg-black border border-gray-800 rounded-3xl overflow-hidden
                transition-all duration-300
                group cursor-pointer
                p-1.5 sm:p-1.5 md:p-2 lg:p-2
                min-h-0 h-auto
                text-xs sm:text-sm md:text-sm lg:text-base
                gap-0.5
                relative
                skill-card skill-card-${category.color}
              `}
            >
              {/* Terminal window header */}
              <div className={`
                bg-black px-2 py-1 flex items-center gap-1.5
                transition-colors duration-200
                z-10
              `}>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 bg-red-500 rounded-full group-hover:animate-pulse"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover:animate-pulse"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full group-hover:animate-pulse"></div>
                </div>
                <span className={`
                  font-mono text-xs text-gray-400 ml-2
                  transition-colors duration-300
                `}>
                  {category.name}.sh
                </span>
              </div>

              {/* Terminal content */}
              <div className="p-2 space-y-1.5 z-10">
                {/* Command line */}
                <div className="font-mono text-xs sm:text-sm flex items-center gap-1 mb-1">
                  <span className="text-green-400">$</span>
                  <span className={`text-gray-400 group-hover:text-${category.color}-300 transition-colors duration-200`}>{category.command}</span>
                </div>

                {/* Category icon and description */}
                <div className="flex items-center gap-1 mb-1">
                  <category.icon className={`text-base text-${category.color}-400 group-hover:text-${category.color}-300 transition-colors duration-200`} />
                  <span className={`font-mono text-${category.color}-400 font-bold text-sm group-hover:text-${category.color}-300 transition-colors duration-200`}>{category.name}</span>
                  <span className="text-gray-500 text-sm font-mono ml-1"># {category.description}</span>
                </div>

                {/* Skills list */}
                <div className="space-y-0.5">
                  {category.skills.map((skill, skillIndex) => {
                    // Determine bullet style
                    let bullet = '├─';
                    if (skillIndex === 0) bullet = '┌─';
                    else if (skillIndex === category.skills.length - 1) bullet = '└─';
                    return (
                      <div
                        key={skill}
                        className={`font-mono text-xs sm:text-sm flex items-center gap-1 rounded px-0.5 py-0.5 transition-all duration-150 animate-fade-in`}
                        style={{ animationDelay: `${skillIndex * 0.08}s` }}
                      >
                        <span className="text-gray-600">{bullet}</span>
                        <span className={`text-white transition-colors duration-200`}>{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Configuration */}
        <div className="mt-6 sm:mt-8 max-w-[60rem] mx-auto">
            <div className="bg-black border border-gray-800 rounded-3xl overflow-hidden transition-all duration-300 group cursor-pointer skill-card">
            {/* Compact Config Display */}
            <div className="p-3 space-y-2 z-10">
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
      </div>

      {/* Terminal Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-6 pt-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-800"></div>
          <div className="font-mono text-xs text-gray-500 flex items-center gap-2">
            <span className="text-green-400">$</span>
            <a href="#experience" className="hover:text-green-300 transition-colors">cd ../experience</a>
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

        /* Redesigned skill card hover effect - no weird gradient */
        .skill-card {
          overflow: hidden;
          position: relative;
          transition: box-shadow 0.35s cubic-bezier(0.4,0,0.2,1), border-color 0.35s cubic-bezier(0.4,0,0.2,1), transform 0.25s cubic-bezier(0.4,0,0.2,1);
        }
        .skill-card-green:hover {
          border-color: #22c55e !important;
          box-shadow: 0 4px 24px 0 #22c55e33;
          transform: translateY(-4px) scale(1.035) rotate(-0.5deg);
        }
        .skill-card-blue:hover {
          border-color: #3b82f6 !important;
          box-shadow: 0 4px 24px 0 #3b82f633;
          transform: translateY(-4px) scale(1.035) rotate(-0.5deg);
        }
        .skill-card-cyan:hover {
          border-color: #22d3ee !important;
          box-shadow: 0 4px 24px 0 #22d3ee33;
          transform: translateY(-4px) scale(1.035) rotate(-0.5deg);
        }
        .skill-card-purple:hover {
          border-color: #a855f7 !important;
          box-shadow: 0 4px 24px 0 #a855f733;
          transform: translateY(-4px) scale(1.035) rotate(-0.5deg);
        }
        .skill-card-orange:hover {
          border-color: #f59e42 !important;
          box-shadow: 0 4px 24px 0 #f59e4233;
          transform: translateY(-4px) scale(1.035) rotate(-0.5deg);
        }
        .skill-card-pink:hover {
          border-color: #ec4899 !important;
          box-shadow: 0 4px 24px 0 #ec489933;
          transform: translateY(-4px) scale(1.035) rotate(-0.5deg);
        }
        .skill-card-yellow:hover {
          border-color: #fde047 !important;
          box-shadow: 0 4px 24px 0 #fde04755;
          transform: translateY(-4px) scale(1.035) rotate(-0.5deg);
        }
        .skill-card:active {
          transform: scale(0.98);
        }
        .skill-card .font-mono span {
          transition: color 0.3s;
        }
        .skill-card-green:hover .font-mono span {
          color: #22c55e !important;
        }
        .skill-card-blue:hover .font-mono span {
          color: #3b82f6 !important;
        }
        .skill-card-cyan:hover .font-mono span {
          color: #22d3ee !important;
        }
        .skill-card-purple:hover .font-mono span {
          color: #a855f7 !important;
        }
        .skill-card-orange:hover .font-mono span {
          color: #f59e42 !important;
        }
        .skill-card-pink:hover .font-mono span {
          color: #ec4899 !important;
        }
        .skill-card-yellow:hover .font-mono span {
          color: #fde047 !important;
        }
        .skill-card-yellow:hover .font-mono span.text-white {
          color: #fff !important;
        }
      `}</style>
    </section>
  );
}

export default Skills