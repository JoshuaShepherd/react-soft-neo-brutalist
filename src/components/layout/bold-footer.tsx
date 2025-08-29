'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

export function BoldFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: '#', color: 'bg-accent-blue border-blue-400' },
    { icon: Github, label: 'GitHub', href: '#', color: 'bg-text-primary border-gray-800' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'bg-primary border-indigo-600' },
    { icon: Mail, label: 'Email', href: '#', color: 'bg-accent-pink border-pink-400' },
  ];

  const quickLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ];

  return (
    <footer className="bg-text-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="font-clash font-black text-4xl text-white mb-6">
              BRUTALIST
            </div>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-md">
              We make bold, chunky, and unapologetically awesome stuff that makes people smile. 
              Join thousands of happy users worldwide!
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`w-14 h-14 ${social.color} rounded-xl flex items-center justify-center border-4 shadow-brutal hover:shadow-brutal-lg hover:scale-105 transition-all duration-300 group`}
                  aria-label={social.label}
                >
                  <social.icon 
                    size={24} 
                    className={`${social.color.includes('text-primary') ? 'text-white' : 'text-black'} group-hover:scale-110 transition-transform`}
                  />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-clash font-black text-2xl text-white mb-8">
              QUICK LINKS
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-accent-yellow font-medium text-lg transition-colors duration-300 hover:translate-x-2 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-clash font-black text-2xl text-white mb-8">
              GET IN TOUCH
            </h3>
            <div className="space-y-6">
              <div className="color-block bg-accent-yellow/20 border-yellow-400 p-6">
                <h4 className="font-bold text-accent-yellow text-lg mb-2">
                  SUPPORT
                </h4>
                <p className="text-white/80">
                  help@brutalist.com
                </p>
              </div>
              
              <div className="color-block bg-accent-blue/20 border-blue-400 p-6">
                <h4 className="font-bold text-accent-blue text-lg mb-2">
                  SALES
                </h4>
                <p className="text-white/80">
                  sales@brutalist.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-4 border-white/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-white/80">
                © 2024 Brutalist. Made with{' '}
                <Heart size={18} className="inline text-secondary mx-1" fill="currentColor" />{' '}
                and lots of coffee.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-6">
              {legalLinks.map((link, index) => (
                <span key={link.label} className="flex items-center">
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="text-white/40 ml-6">•</span>
                  )}
                </span>
              ))}
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-12 h-12 bg-accent-yellow rounded-xl flex items-center justify-center border-4 border-yellow-400 shadow-brutal hover:shadow-brutal-lg hover:scale-105 transition-all duration-300 group"
              aria-label="Back to top"
            >
              <ArrowUp 
                size={20} 
                className="text-yellow-900 group-hover:-translate-y-1 transition-transform" 
                strokeWidth={3}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Fun Footer Message */}
      <div className="bg-secondary text-center py-4">
        <p className="text-white font-bold text-sm">
          🎉 Thanks for scrolling all the way down! You're awesome! 🎉
        </p>
      </div>
    </footer>
  );
}
