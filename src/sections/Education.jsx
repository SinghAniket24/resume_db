import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Badge } from '@/components/ui/Badge';
import { motion } from 'framer-motion';
import { education, certifications } from '@/data/education';

export function Education() {
  return (
    <Section id="education" className="relative py-16 sm:py-24 lg:py-32 bg-[#080d1a] border-y border-white/5 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-transparent pointer-events-none -z-10"></div>

      <Container className="relative z-10 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <Heading as="h2" className="m-0 text-4xl sm:text-5xl">Education & Certifications</Heading>
          <div className="h-px flex-1 bg-gradient-to-r from-indigo-900/50 to-transparent"></div>
        </div>

        <div className="relative">
          
          {/* Continuous Unified Timeline Line */}
          <div className="absolute left-[40px] sm:left-[120px] top-16 bottom-16 w-px bg-gradient-to-b from-indigo-500/80 via-slate-800 to-transparent" />
          
          <div className="space-y-16 relative z-10">
            
            {/* Education Sub-heading */}
            <div className="relative pl-[64px] sm:pl-[160px]">
              <div className="absolute left-[34px] sm:left-[114px] top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-indigo-400 ring-4 ring-[#0b1120] shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight uppercase text-indigo-400">Academic Background</h3>
            </div>
            
            <div className="space-y-12">
              {education.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-[64px] sm:pl-[160px] group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[35px] sm:left-[115px] top-2 h-2.5 w-2.5 rounded-full bg-slate-700 ring-4 ring-[#0b1120] transition-all duration-300 group-hover:bg-indigo-400 group-hover:scale-150" />
                  
                  {/* Date Column (Desktop) */}
                  <div className="hidden sm:block absolute left-0 top-1 w-24 text-right">
                     <span className="text-sm font-bold uppercase tracking-wider text-slate-400 group-hover:text-indigo-400 transition-colors">{item.duration}</span>
                  </div>

                  {/* Date Column (Mobile) */}
                  <div className="flex sm:hidden mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">{item.duration}</span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors font-heading tracking-tight mb-2">
                    {item.degree}
                  </h4>
                  
                  <p className="text-base font-semibold text-slate-300 mb-3">{item.institution}</p>
                  
                  {item.minor && (
                    <p className="text-sm font-medium text-slate-400 mb-4">Minor: <span className="font-semibold text-slate-200">{item.minor}</span></p>
                  )}

                  {item.score && (
                    <Badge variant="outline" className="bg-slate-900/50 font-semibold tracking-wide border-indigo-900/50 text-indigo-300 px-3 py-1">{item.score}</Badge>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Certifications Sub-heading */}
            <div className="relative pl-[64px] sm:pl-[160px] pt-4">
              <div className="absolute left-[34px] sm:left-[114px] top-[calc(50%+8px)] -translate-y-1/2 h-3 w-3 rounded-full bg-sky-400 ring-4 ring-[#0b1120] shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight uppercase text-sky-400">Certifications</h3>
            </div>

            <div className="space-y-12">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-[64px] sm:pl-[160px] group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[35px] sm:left-[115px] top-2 h-2.5 w-2.5 rounded-full bg-slate-700 ring-4 ring-[#0b1120] transition-all duration-300 group-hover:bg-sky-400 group-hover:scale-150" />
                  
                  {/* Date Column (Desktop) */}
                  <div className="hidden sm:block absolute left-0 top-1 w-24 text-right">
                     <span className="text-sm font-bold uppercase tracking-wider text-slate-400 group-hover:text-sky-400 transition-colors">{cert.date}</span>
                  </div>

                  {/* Date Column (Mobile) */}
                  <div className="flex sm:hidden mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-400">{cert.date}</span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-400 transition-colors font-heading tracking-tight mb-2">
                    {cert.name}
                  </h4>
                  
                  <p className="text-base font-semibold text-slate-300">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </Container>
    </Section>
  );
}
