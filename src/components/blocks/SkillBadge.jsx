import React from 'react';
import { motion } from 'framer-motion';

const getCategoryDescription = (category) => {
  switch (category) {
    case "Languages": return "Core programming languages for building scalable systems and applications.";
    case "Backend & Frameworks": return "Server-side logic, APIs, and modern front-end architectures.";
    case "Cloud & Databases": return "Scalable infrastructure, serverless services, and data persistence.";
    case "Core Concepts": return "Fundamental software engineering principles and essential developer tools.";
    default: return "Key technical skills and competencies.";
  }
};

const getCategoryIcon = (category) => {
  switch (category) {
    case "Languages":
      return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>;
    case "Backend & Frameworks":
      return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>;
    case "Cloud & Databases":
      return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>;
    case "Core Concepts":
      return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>;
    default:
      return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>;
  }
};

export function SkillBadge({ category, items }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col lg:flex-row gap-6 lg:gap-16 p-6 sm:p-8 rounded-3xl transition-all duration-500 hover:bg-white/[0.03]"
    >
      <div className="lg:w-1/3 flex flex-col gap-4 relative z-10">
        <div className="flex items-center gap-4">
           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-500 shadow-[0_0_20px_rgba(99,102,241,0.05)] border border-indigo-500/20">
             {getCategoryIcon(category)}
           </div>
           <h4 className="text-2xl font-bold text-white font-heading tracking-tight">{category}</h4>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          {getCategoryDescription(category)}
        </p>
      </div>
      
      <div className="lg:w-2/3 flex flex-wrap gap-3 items-center relative z-10">
        {items.map((item) => (
          <div 
            key={item} 
            className="flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-white/[0.06] to-white/[0.02] px-5 py-2.5 text-sm font-semibold text-slate-200 border border-white/15 hover:border-indigo-500/50 hover:text-indigo-200 transition-all cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] group/pill hover:-translate-y-0.5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover/pill:bg-indigo-400 transition-colors"></div>
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
