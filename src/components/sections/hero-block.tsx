'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroBlock() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-bg-primary overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent-yellow rounded-2xl opacity-20 animate-float" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-accent-pink rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-40 h-20 bg-accent-blue rounded-xl opacity-25 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-primary rounded-2xl opacity-20 animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Headline */}
          <h1 className="font-clash font-black text-6xl md:text-8xl lg:text-9xl text-text-primary mb-8 text-shadow-brutal-lg leading-tight">
            WE MAKE
            <br />
            <span className="text-primary">AMAZING</span>
            <br />
            STUFF
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-secondary mb-12 font-medium max-w-3xl mx-auto"
          >
            Bold, chunky, and unapologetically awesome. 
            We build stuff that makes people smile while getting things done.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="chunky-button-primary group">
              <span>GET STARTED NOW</span>
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={24} />
            </button>
            
            <button className="chunky-button-yellow group">
              <Sparkles className="mr-2" size={24} />
              <span>SEE THE MAGIC</span>
            </button>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-yellow rounded-xl mx-auto mb-4 flex items-center justify-center border-4 border-yellow-400">
                <span className="text-2xl font-black">⚡</span>
              </div>
              <p className="font-bold text-sm uppercase tracking-widest">SUPER FAST</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-blue rounded-xl mx-auto mb-4 flex items-center justify-center border-4 border-blue-400">
                <span className="text-2xl font-black">🛡️</span>
              </div>
              <p className="font-bold text-sm uppercase tracking-widest">MEGA SECURE</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-pink rounded-xl mx-auto mb-4 flex items-center justify-center border-4 border-pink-400">
                <span className="text-2xl font-black">⭐</span>
              </div>
              <p className="font-bold text-sm uppercase tracking-widest">ULTRA COOL</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
