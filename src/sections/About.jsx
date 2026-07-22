import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { motion } from 'framer-motion';

export function About() {
  return (
    <Section id="about" className="relative overflow-hidden py-16 sm:py-24 lg:py-32 bg-[#030712]">
      {/* Decorative accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-transparent pointer-events-none -z-10"></div>
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <Heading as="h2" className="m-0">About Me</Heading>
              <div className="h-px flex-1 bg-gradient-to-r from-indigo-900/50 to-transparent"></div>
            </div>
            
            <div className="relative pl-6 sm:pl-10 border-l-2 border-indigo-900/50 space-y-8 text-lg leading-[1.8] text-slate-300">
              <div className="absolute -top-4 -left-[27px] text-6xl text-indigo-800 font-serif leading-none select-none pointer-events-none">"</div>
              
              <p className="relative z-10 text-xl font-medium text-slate-200">
                I am a <strong className="text-indigo-400 font-bold">Full Stack Software Developer</strong> with a strong interest in building scalable, user-focused web applications. I enjoy working across both frontend and backend development, turning ideas into reliable and maintainable software.
              </p>
              
              <div className="h-px w-16 bg-indigo-900/50 my-6"></div>
              
              <p className="relative z-10">
                My experience includes developing applications using <strong className="text-white font-semibold">React</strong>, <strong className="text-white font-semibold">Node.js</strong>, <strong className="text-white font-semibold">Java with Spring Boot</strong>, and <strong className="text-white font-semibold">Python</strong>. I have worked with <strong className="text-white font-semibold">REST APIs</strong>, <strong className="text-white font-semibold">SQL</strong> and <strong className="text-white font-semibold">NoSQL</strong> databases, and modern web technologies to build efficient and responsive applications.
              </p>

              <p className="relative z-10">
                I am also exploring cloud technologies with <strong className="text-white font-semibold">AWS</strong> and expanding my knowledge in <strong className="text-indigo-400 font-semibold">AI and Retrieval-Augmented Generation (RAG)</strong> applications to understand how intelligent systems can be integrated into modern software.
              </p>

              <p className="relative z-10">
                I enjoy solving technical problems, improving application performance, and continuously learning new technologies. I'm always looking for opportunities to build practical solutions while growing as a software engineer.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
