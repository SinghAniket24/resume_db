import React, { useState, useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'experience', 'projects', 'skills', 'education', 'contact'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <Container>
        <div className={`mx-auto flex items-center justify-between rounded-full px-6 transition-all duration-500 ${
          isScrolled 
            ? 'glass-card shadow-lg shadow-indigo-500/10 py-3 max-w-4xl border border-white/5 bg-[#0f172a]/90 backdrop-blur-xl' 
            : 'bg-transparent py-2 max-w-5xl'
        }`}>
          <div className="flex items-center gap-2 z-10">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-2xl font-bold tracking-tighter text-slate-50 hover:text-indigo-400 transition-colors font-heading">
              Aniket Singh<span className="text-indigo-500">.</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 z-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'text-indigo-300 bg-indigo-500/10' 
                      : 'text-slate-300 hover:text-slate-50 hover:bg-slate-800/80'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 w-8 h-0.5 -translate-x-1/2 bg-indigo-400 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2 z-10">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-300 hover:bg-slate-800 rounded-full transition-colors">
              {mobileMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-[#0f172a] rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-xl"
          >
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)} 
                    className={`px-6 py-4 rounded-2xl text-base font-semibold transition-colors ${
                      isActive 
                        ? 'text-indigo-300 bg-indigo-500/10' 
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
