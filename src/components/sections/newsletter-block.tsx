'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Sparkles } from 'lucide-react';

export function NewsletterBlock() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically handle the email submission
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Floating Elements */}
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-accent-yellow rounded-2xl opacity-30 animate-float" />
            <div className="absolute -top-4 -right-12 w-12 h-12 bg-accent-pink rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute -bottom-6 left-12 w-20 h-8 bg-accent-blue rounded-xl opacity-25 animate-float" style={{ animationDelay: '2s' }} />
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-accent-yellow rounded-2xl flex items-center justify-center border-4 border-yellow-400 shadow-brutal-lg">
                <Mail size={36} className="text-yellow-900" />
              </div>
            </div>
            
            <h2 className="font-clash font-black text-5xl md:text-7xl text-white mb-6">
              JOIN THE
              <br />
              <span className="text-accent-yellow">PARTY!</span>
            </h2>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Get exclusive updates, insider tips, and awesome freebies delivered straight to your inbox. 
              We send cool stuff, promise! 
              <span className="inline-flex items-center ml-2">
                <Sparkles size={20} className="text-accent-yellow" />
              </span>
            </p>
          </div>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="YOUR EMAIL ADDRESS"
                    required
                    className="w-full chunky-input bg-white text-text-primary placeholder-text-secondary border-white focus:border-accent-yellow text-center sm:text-left"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="chunky-button bg-accent-yellow text-black border-yellow-400 shadow-brutal-yellow hover:shadow-brutal-lg group whitespace-nowrap"
                >
                  <Send size={20} className="mr-2 group-hover:translate-x-1 transition-transform" />
                  <span>SIGN ME UP!</span>
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-2xl p-8 border-4 border-white shadow-brutal-lg"
              >
                <div className="w-16 h-16 bg-green-400 rounded-xl mx-auto mb-4 flex items-center justify-center border-4 border-green-500">
                  <span className="text-2xl">🎉</span>
                </div>
                <h3 className="font-clash font-black text-3xl text-text-primary mb-2">
                  AWESOME!
                </h3>
                <p className="text-text-secondary text-lg">
                  You're now part of the coolest newsletter gang ever!
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80"
          >
            <div className="flex items-center">
              <div className="w-8 h-8 bg-accent-yellow rounded-lg mr-3 flex items-center justify-center">
                <span className="text-yellow-900 font-bold">✓</span>
              </div>
              <span className="font-medium">50,000+ subscribers</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 bg-accent-pink rounded-lg mr-3 flex items-center justify-center">
                <span className="text-pink-900 font-bold">✓</span>
              </div>
              <span className="font-medium">No spam, ever</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 bg-accent-blue rounded-lg mr-3 flex items-center justify-center">
                <span className="text-blue-900 font-bold">✓</span>
              </div>
              <span className="font-medium">Unsubscribe anytime</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
