'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationItems } from '@/data/content';
import { cn } from '@/lib/utils';

export function ChunkyNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary border-b-4 border-indigo-600">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="font-clash font-black text-3xl text-white">
            BRUTALIST
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-6 py-3 text-white font-bold tracking-wide rounded-full hover:bg-white/10 transition-all duration-200 hover:scale-105"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block chunky-button bg-accent-yellow text-black border-yellow-400 shadow-brutal-yellow hover:shadow-brutal-lg font-black">
            GET STARTED
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 text-white hover:bg-white/10 rounded-xl transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-primary">
          <div className="flex flex-col h-full p-8">
            <div className="flex items-center justify-between mb-12">
              <div className="font-clash font-black text-3xl text-white">
                BRUTALIST
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-3 text-white hover:bg-white/10 rounded-xl transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 mb-12">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-black text-white hover:text-accent-yellow transition-colors py-4 border-b-2 border-white/20"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button 
              className="chunky-button bg-accent-yellow text-black border-yellow-400 shadow-brutal-yellow font-black text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              GET STARTED
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
