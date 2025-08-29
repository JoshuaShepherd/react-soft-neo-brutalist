'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, CheckCircle, Lightbulb, MessageSquare, Star } from 'lucide-react';
import { features } from '@/data/content';

const iconMap = {
  Zap: Zap,
  Shield: Shield, 
  CheckCircle: CheckCircle,
  Lightbulb: Lightbulb,
  MessageSquare: MessageSquare,
  Star: Star,
};

export function FeatureBlocks() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label">FEATURES</p>
          <h2 className="font-clash font-black text-5xl md:text-7xl text-text-primary mb-6">
            WHY WE'RE
            <br />
            <span className="text-secondary">AWESOME</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            We didn't just build features, we crafted experiences that make you go "WOW!"
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            const colorClasses = {
              yellow: 'color-block-yellow',
              blue: 'color-block-blue', 
              pink: 'color-block-pink',
            };

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${colorClasses[feature.color as keyof typeof colorClasses]} min-h-[250px] group cursor-pointer`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center border-4 ${
                    feature.color === 'yellow' ? 'bg-yellow-400 border-yellow-500' :
                    feature.color === 'blue' ? 'bg-blue-400 border-blue-500' :
                    'bg-pink-400 border-pink-500'
                  }`}>
                    <IconComponent 
                      size={28} 
                      className={`${
                        feature.color === 'yellow' ? 'text-yellow-900' :
                        feature.color === 'blue' ? 'text-blue-900' :
                        'text-pink-900'
                      }`}
                      fill="currentColor"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-clash font-black text-2xl text-text-primary mb-4 group-hover:scale-105 transition-transform">
                  {feature.title}
                </h3>
                
                <p className="text-text-secondary font-medium text-lg leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-8 h-8 bg-text-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">→</span>
                  </div>
                </div>
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
          <button className="chunky-button-primary">
            <span>EXPLORE ALL FEATURES</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
