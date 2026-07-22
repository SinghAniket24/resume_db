import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Timeline } from '@/components/blocks/Timeline';
import { experience } from '@/data/experience';

export function Experience() {
  return (
    <Section id="experience" className="relative py-16 sm:py-24 lg:py-40 bg-[#080d1a] overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-20 mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)"></div>
      
      <Container className="relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <Heading as="h2" className="m-0">Experience</Heading>
            <div className="h-px flex-1 bg-gradient-to-r from-indigo-900/50 to-transparent"></div>
          </div>
          <p className="text-lg text-slate-300">
            Professional roles where I've delivered impactful engineering solutions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
           <Timeline items={experience} />
        </div>
      </Container>
    </Section>
  );
}
