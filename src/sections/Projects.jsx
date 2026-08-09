import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { ProjectCard } from '@/components/blocks/ProjectCard';
import { projects } from '@/data/projects';
import { config } from '@/data/config';
import { FaArrowRight } from 'react-icons/fa';

export function Projects() {
  return (
    <Section id="projects" className="relative py-16 sm:py-24 lg:py-32 bg-slate-900/20 overflow-hidden border-y border-white/5">
      {/* Soft angular background glow */}
      <div className="absolute top-1/4 -left-1/4 w-[1000px] h-[500px] bg-gradient-to-r from-indigo-500/10 to-transparent rotate-12 blur-3xl pointer-events-none -z-10"></div>
      
      <Container className="relative z-10 lg:!max-w-[90rem]">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <Heading as="h2" className="m-0">Featured Projects</Heading>
            <div className="h-px flex-1 bg-gradient-to-r from-indigo-900/50 to-transparent"></div>
          </div>
          <p className="text-lg text-slate-300">
            A selection of my strongest engineering work, focusing on robust backend architecture, integrations, and performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 xl:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* Subtle CTA directly following projects */}
        <div className="mt-12 flex justify-center">
          <Button 
            href={config.socials.find(s => s.name === 'GitHub')?.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            className="rounded-full px-8 py-3.5 bg-gradient-to-r from-indigo-900/10 to-sky-900/10 border border-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.1)] hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] hover:-translate-y-1 hover:border-indigo-500/40 text-slate-200 hover:text-white transition-all duration-300 group"
          >
            <span className="flex items-center font-semibold tracking-wide">
              View More Projects on GitHub
              <FaArrowRight className="ml-3 w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
