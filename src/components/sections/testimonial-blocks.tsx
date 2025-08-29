'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/content';
import Image from 'next/image';

export function TestimonialBlocks() {
  return (
    <section className="py-24 bg-bg-primary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label">TESTIMONIALS</p>
          <h2 className="font-clash font-black text-5xl md:text-7xl text-text-primary mb-6">
            PEOPLE
            <br />
            <span className="text-secondary">LOVE US</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Don't believe the hype? Here's what our amazing users have to say!
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const colorClasses = {
              yellow: 'color-block-yellow',
              blue: 'color-block-blue', 
              pink: 'color-block-pink',
            };

            const borderClasses = {
              yellow: 'border-yellow-400',
              blue: 'border-blue-400',
              pink: 'border-pink-400',
            };

            return (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${colorClasses[testimonial.color as keyof typeof colorClasses]} relative group cursor-pointer`}
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-text-primary rounded-xl flex items-center justify-center border-4 border-white shadow-brutal">
                  <Quote size={20} className="text-white" fill="currentColor" />
                </div>

                {/* Stars */}
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={24} 
                      className="text-yellow-500 mr-1" 
                      fill="currentColor" 
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="text-lg font-medium text-text-primary mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className={`relative w-16 h-16 rounded-xl overflow-hidden border-4 ${borderClasses[testimonial.color as keyof typeof borderClasses]} mr-4 shadow-brutal`}>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-text-primary text-lg">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm font-bold uppercase tracking-widest text-text-secondary">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <button className="chunky-button-secondary">
              <span>JOIN HAPPY CUSTOMERS</span>
            </button>
            <span className="text-text-secondary font-medium">
              or read more reviews →
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
