import React from 'react';
import { Container } from '@/components/ui/Container';
import { config } from '@/data/config';

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#030712]/50 py-8 relative z-10 backdrop-blur-lg">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-400 text-xs font-medium">
          © {new Date().getFullYear()} {config.name}
        </div>
        <div className="flex gap-6">
          {config.socials.map((social) => {
            const Icon = social.icon;
            return (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <span className="sr-only">{social.name}</span>
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </Container>
    </footer>
  );
}
