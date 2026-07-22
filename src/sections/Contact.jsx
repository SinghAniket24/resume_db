import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaCheckCircle } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { config } from '@/data/config';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // POST to Formspree endpoint
      const response = await fetch('https://formspree.io/f/xqakldba', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Submission failed', err);
      setStatus('error'); 
    }
  };

  return (
    <Section id="contact" className="relative overflow-hidden py-24 sm:py-32 lg:py-48 bg-gradient-to-b from-[#030712] to-[#080d1a]">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-sky-500/10 blur-[120px] pointer-events-none"></div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <Heading as="h2" className="m-0">Let's Connect</Heading>
              <div className="h-px flex-1 bg-gradient-to-r from-indigo-900/50 to-transparent"></div>
            </div>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              I'm always open to discussing product design work, software engineering roles, or partnership opportunities. Feel free to reach out directly.
            </p>
            
            <div className="grid grid-cols-1 gap-6 max-w-sm">
              <a href="mailto:aniket.singh.st1@gmail.com" className="glass-card p-6 rounded-3xl flex items-center gap-5 group hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-900/30 text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-500 shadow-sm shrink-0">
                  <FaEnvelope className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-base font-bold text-slate-100 group-hover:text-indigo-400 transition-colors truncate">
                    aniket.singh.st1@gmail.com
                  </p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/singhaniket24/" target="_blank" rel="noopener noreferrer" className="glass-card p-6 rounded-3xl flex items-center gap-5 group hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-sky-900/30 text-sky-400 group-hover:scale-110 group-hover:bg-sky-500/20 transition-all duration-500 shadow-sm shrink-0">
                  <FaLinkedin className="w-7 h-7" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">LinkedIn</p>
                  <p className="text-base font-bold text-slate-100 group-hover:text-sky-400 transition-colors truncate">
                    linkedin.com/in/singhaniket24
                  </p>
                </div>
              </a>

              <a href="https://github.com/SinghAniket24" target="_blank" rel="noopener noreferrer" className="glass-card p-6 rounded-3xl flex items-center gap-5 group hover:border-slate-300/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0f172a] text-white group-hover:scale-110 group-hover:bg-slate-800 transition-all duration-500 shadow-sm border border-white/5 shrink-0">
                  <FaGithub className="w-7 h-7" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">GitHub</p>
                  <p className="text-base font-bold text-slate-100 group-hover:text-slate-300 transition-colors truncate">
                    github.com/SinghAniket24
                  </p>
                </div>
              </a>

              <a href="https://leetcode.com/u/Aniket_singh_123/" target="_blank" rel="noopener noreferrer" className="glass-card p-6 rounded-3xl flex items-center gap-5 group hover:border-orange-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-900/30 text-orange-400 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all duration-500 shadow-sm shrink-0">
                  <SiLeetcode className="w-7 h-7" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">LeetCode</p>
                  <p className="text-base font-bold text-slate-100 group-hover:text-orange-400 transition-colors truncate">
                    leetcode.com/u/Aniket_singh_123
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:max-w-md ml-auto"
          >
            <div className="glass-card rounded-[2rem] p-8 sm:p-10 shadow-2xl shadow-indigo-500/5 relative overflow-hidden transition-all duration-500 hover:shadow-indigo-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none z-0"></div>
              
              {status === 'success' ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4 relative z-10">
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-24 h-24 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-400 mb-6 shadow-lg shadow-emerald-500/20"
                  >
                    <FaCheckCircle className="w-12 h-12" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-slate-50 font-heading">Message Sent!</h3>
                  <p className="text-slate-300 max-w-[250px] leading-relaxed text-lg">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  <Button onClick={() => setStatus('idle')} variant="outline" className="mt-8 rounded-full px-8 border-slate-800">Send another</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-300 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-[18px] rounded-2xl bg-[#030712]/50 backdrop-blur-xl border border-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all text-slate-50 placeholder-slate-500 shadow-inner"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-300 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-[18px] rounded-2xl bg-[#030712]/50 backdrop-blur-xl border border-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all text-slate-50 placeholder-slate-500 shadow-inner"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-300 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-5 py-[18px] rounded-2xl bg-[#030712]/50 backdrop-blur-xl border border-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all text-slate-50 placeholder-slate-500 shadow-inner resize-none"
                      placeholder="How can I help you?"
                    ></textarea>
                  </div>
                  
                  {status === 'error' && (
                    <p className="text-red-500 text-sm mt-2 font-bold">There was an issue sending your message. Please try again later.</p>
                  )}
                  
                  <Button 
                    type="submit" 
                    variant="primary"
                    className="w-full justify-center rounded-2xl py-7 transition-all duration-300 text-lg font-bold mt-2"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'Sending...' : (
                      <>
                        Send Message <FaPaperPlane className="ml-3" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
