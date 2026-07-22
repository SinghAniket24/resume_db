import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { SkillBadge } from '@/components/blocks/SkillBadge';
import { skills } from '@/data/skills';

export function Skills() {
  return (
    <Section id="skills" className="relative py-20 sm:py-32 lg:py-48 bg-[#030712] overflow-hidden">
      {/* Central focal glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-900/10 via-transparent to-transparent pointer-events-none -z-10 blur-3xl"></div>
      
      <Container className="relative z-10">
        <div className="max-w-3xl mb-16 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <Heading as="h2" className="m-0">Technical Skills</Heading>
            <div className="h-px flex-1 bg-gradient-to-r from-indigo-900/50 to-transparent"></div>
          </div>
          <p className="text-lg text-slate-300">
            My core engineering toolkit, ranging from systems languages to cloud infrastructure and architecture.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10 glass-card rounded-[2.5rem] p-4 sm:p-6 shadow-2xl shadow-indigo-900/10">
          <div className="flex flex-col gap-2">
            {skills.categories.map((category) => (
              <SkillBadge key={category.name} category={category.name} items={category.items} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
