import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

export function ProjectCard({ project }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col items-start justify-between rounded-3xl glass-card p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 hover:border-indigo-500/30 overflow-hidden"
    >
      {/* Decorative hover glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-sky-500/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none z-0"></div>
      
      <div className="w-full relative z-10">
        {project.image ? (
          project.live ? (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="block mb-6 h-56 w-full overflow-hidden rounded-2xl border border-slate-800/50 relative shadow-sm group-hover:shadow-md transition-all duration-500 hover:border-indigo-500/50 bg-[#0b1120]">
              <div className="absolute inset-0 z-0">
                <img src={project.image} alt="" className="w-full h-full object-cover blur-2xl opacity-15 scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10 pointer-events-none"></div>
              <img 
                src={project.image} 
                alt={`${project.title} Preview`} 
                className="h-full w-full object-contain relative z-20 transition-transform duration-700 group-hover:scale-105 p-2"
              />
            </a>
          ) : (
            <div className="mb-6 h-56 w-full overflow-hidden rounded-2xl border border-slate-800/50 relative shadow-sm group-hover:shadow-md transition-all duration-500 bg-[#0b1120]">
              <div className="absolute inset-0 z-0">
                <img src={project.image} alt="" className="w-full h-full object-cover blur-2xl opacity-15 scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10 pointer-events-none"></div>
              <img 
                src={project.image} 
                alt={`${project.title} Preview`} 
                className="h-full w-full object-contain relative z-20 transition-transform duration-700 group-hover:scale-105 p-2"
              />
            </div>
          )
        ) : (
          <div className="mb-6 flex h-56 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b1120] to-[#030712] border border-slate-800/50 overflow-hidden relative shadow-sm group-hover:border-indigo-500/30 transition-all duration-500">
             {/* Vibrant animated background elements */}
             <div className="absolute -top-12 -left-12 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/30 transition-colors duration-500"></div>
             <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl group-hover:bg-sky-500/30 transition-colors duration-500"></div>
             
             {/* Tech Grid */}
             <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
             
             <div className="z-10 flex flex-col items-center justify-center p-6 text-center transform transition-transform duration-500 group-hover:scale-105 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl mx-4 w-[calc(100%-2rem)]">
               <svg className="w-10 h-10 text-indigo-400 mb-3 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
               <span className="text-base font-bold text-white tracking-wide block">{project.title}</span>
               <span className="font-mono text-xs font-medium text-indigo-200/70 uppercase tracking-widest block mt-2">System Architecture</span>
             </div>
          </div>
        )}

        <div className="flex items-center gap-x-4 text-xs mb-3">
          <time dateTime="2025" className="text-indigo-400 font-semibold tracking-wide uppercase">
            {project.subtitle}
          </time>
        </div>
        <div className="group/text relative">
          <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors font-heading">
            {project.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-base leading-relaxed text-slate-300">
            {project.description}
          </p>
          <ul className="mt-5 list-none text-sm text-slate-300 space-y-2">
             {project.bullets.map((bullet, idx) => (
                <li key={idx} className="leading-relaxed flex items-start gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                   {bullet}
                </li>
             ))}
          </ul>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary" className="bg-[#0f172a] hover:bg-slate-800 transition-colors border border-slate-800/50 px-3 py-1 text-slate-300">
              {t}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="mt-8 flex items-center gap-4 relative z-10 w-full pt-6 border-t border-slate-800/50">
        {project.github && (
          <Button variant="outline" size="sm" href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 justify-center transition-colors font-semibold">
            <FaGithub className="mr-2 h-4 w-4" />
            Source Code
          </Button>
        )}
        {project.live && (
          <Button size="sm" href={project.live} target="_blank" rel="noopener noreferrer" variant="primary" className="flex-1 justify-center shadow-sm font-semibold">
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            Visit Project
          </Button>
        )}
      </div>
    </motion.div>
  );
}
