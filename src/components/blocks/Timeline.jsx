import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';

export function Timeline({ items }) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <motion.div 
          key={item.id || index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-8 sm:pl-32 py-8 group rounded-3xl transition-all duration-500 hover:bg-slate-900/40 hover:shadow-xl hover:shadow-indigo-500/5 glass-card border border-white/5"
        >
          {/* Timeline Line */}
          <div className="absolute left-[20px] sm:left-24 top-10 bottom-0 w-px bg-gradient-to-b from-indigo-500/30 via-slate-800 to-transparent group-last:hidden" />
          
          {/* Timeline Dot */}
          <div className="absolute left-[16px] sm:left-[92px] top-10 h-2.5 w-2.5 rounded-full bg-slate-700 ring-4 ring-[#080d1a] transition-all duration-300 group-hover:bg-indigo-400 group-hover:scale-150 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
          
          {/* Date Column (Desktop) */}
          <div className="hidden sm:block absolute left-0 top-9 w-20 text-right">
             <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-indigo-400 transition-colors">{item.duration}</span>
          </div>

          <div className="flex flex-col flex-start mb-3 sm:hidden px-4">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1">{item.duration}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4 px-4 sm:px-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors font-heading tracking-tight">
              {item.role || item.degree}
            </h3>
            <span className="text-sm font-semibold text-slate-300 mt-1 sm:mt-0 flex items-center gap-2 bg-slate-900/50 px-3 py-1 rounded-full border border-white/5">
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
              {item.company || item.institution}
            </span>
          </div>
          
          <div className="px-4 sm:px-6">
            {item.minor && (
              <p className="text-sm font-medium text-slate-300 mb-4">Minor: <span className="font-semibold">{item.minor}</span></p>
            )}

            {item.score && (
              <Badge variant="outline" className="mb-5 bg-[#0a0f1c] font-semibold tracking-wide border-indigo-900/30 text-indigo-300">{item.score}</Badge>
            )}

            {item.description && (
               <ul className="mt-4 list-none text-base leading-relaxed text-slate-300 space-y-3">
                 {item.description.map((desc, i) => (
                   <li key={i} className="flex items-start gap-2.5">
                     <div className="w-1.5 h-1.5 rounded-full bg-slate-700 mt-2 shrink-0 group-hover:bg-indigo-400 transition-colors"></div>
                     {desc}
                   </li>
                 ))}
               </ul>
            )}

            {item.skills && (
               <div className="mt-6 flex flex-wrap gap-2">
                 {item.skills.map((skill) => (
                   <Badge key={skill} variant="secondary" className="bg-[#0f172a] hover:bg-slate-800 transition-colors border border-white/10 px-3 py-1 text-slate-300">{skill}</Badge>
                 ))}
               </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
