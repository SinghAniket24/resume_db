import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { config } from '@/data/config';
import { motion } from 'framer-motion';
import resumePdf from '../../resume/Aniket_Singh_Resume.pdf';

export function Hero() {
  return (
    <Section className="pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 flex min-h-[95vh] items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 -z-20 bg-grid opacity-20 mask-image:linear-gradient(to_bottom,white,transparent)"></div>
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-50 sm:text-7xl font-heading leading-tight">
              Hi, I'm <br className="hidden sm:block lg:hidden" />
              <span className="text-gradient">
                {config.name.split(' ')[0]}
              </span>.
            </h1>
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-200 sm:text-4xl">
              {config.role}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-xl">
              {config.tagline}
            </p>
            
            <div className="mt-10 flex flex-wrap gap-5">
              <Button href="#projects" size="lg" variant="primary" className="rounded-full px-8 text-base transition-all duration-300 hover:-translate-y-1">
                View My Work
              </Button>
              <Button href={resumePdf} target="_blank" rel="noopener noreferrer" size="lg" variant="secondary" className="rounded-full px-8 hover:-translate-y-1 transition-all duration-300 text-base">
                View Resume
              </Button>
            </div>
            
            <div className="mt-12 flex gap-8 items-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-slate-300">Connect</span>
              <div className="h-px w-12 bg-slate-700"></div>
              {config.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.name} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-400 hover:text-indigo-400 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                    title={social.name}
                  >
                    <span className="sr-only">{social.name}</span>
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>

            <div className="mt-8 flex items-center gap-2.5 group cursor-default">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0 transition-shadow duration-300 group-hover:shadow-[0_0_8px_rgba(52,211,153,0.8)] group-hover:bg-emerald-400"></div>
              <span className="text-[13px] font-medium text-slate-400 transition-colors duration-300 group-hover:text-emerald-400 tracking-wide">
                Open to Full-Stack & Backend Software Engineering Opportunities
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-md mx-auto lg:max-w-none flex justify-center"
          >
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] bg-indigo-500/15 rounded-full blur-[80px] -z-10 transition-all duration-700 group-hover:bg-indigo-500/25 group-hover:scale-105"></div>
            
            {/* Frosted Glass Frame */}
            <div className="relative p-2 sm:p-3 rounded-full bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(79,70,229,0.15)] group transition-all duration-700 hover:shadow-[0_0_60px_rgba(79,70,229,0.25)] hover:-translate-y-1 cursor-default">
              {/* Image Container with Vignette */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden bg-[#030712] z-10 border border-indigo-500/10">
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_25px_rgba(0,0,0,0.7)] z-20 pointer-events-none"></div>
                <img 
                  src="/profilepic.jpg" 
                  alt={config.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* Subtle grid accent behind image */}
            <div className="absolute -z-20 inset-0 -m-12 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
