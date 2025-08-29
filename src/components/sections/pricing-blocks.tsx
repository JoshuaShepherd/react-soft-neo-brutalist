'use client';

import { motion } from 'framer-motion';
import { Check, Crown } from 'lucide-react';
import { pricingPlans } from '@/data/content';

export function PricingBlocks() {
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
          <p className="section-label">PRICING</p>
          <h2 className="font-clash font-black text-5xl md:text-7xl text-text-primary mb-6">
            PICK YOUR
            <br />
            <span className="text-primary">PLAN</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Choose your adventure! Every plan comes with our legendary support and a smile guarantee.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const colorClasses = {
              yellow: 'color-block-yellow',
              blue: 'color-block-blue border-8 border-blue-500 shadow-brutal-lg transform scale-105',
              pink: 'color-block-pink',
            };

            const buttonClasses = {
              yellow: 'chunky-button-yellow',
              blue: 'chunky-button-primary',
              pink: 'chunky-button-pink',
            };

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${colorClasses[plan.color as keyof typeof colorClasses]} relative group cursor-pointer min-h-[600px] flex flex-col`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest border-4 border-white shadow-brutal flex items-center">
                    <Crown size={16} className="mr-2" />
                    MOST POPULAR
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="font-clash font-black text-3xl text-text-primary mb-4">
                    {plan.name}
                  </h3>
                  
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="font-clash font-black text-6xl text-text-primary">
                      {plan.price}
                    </span>
                    <span className="text-xl text-text-secondary ml-2">
                      {plan.period}
                    </span>
                  </div>
                  
                  <p className="text-text-secondary font-medium">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="flex-grow mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 border-2 ${
                          plan.color === 'yellow' ? 'bg-yellow-400 border-yellow-500' :
                          plan.color === 'blue' ? 'bg-blue-400 border-blue-500' :
                          'bg-pink-400 border-pink-500'
                        }`}>
                          <Check 
                            size={18} 
                            className={`${
                              plan.color === 'yellow' ? 'text-yellow-900' :
                              plan.color === 'blue' ? 'text-blue-900' :
                              'text-pink-900'
                            }`}
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-text-primary font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className={`${buttonClasses[plan.color as keyof typeof buttonClasses]} w-full group-hover:scale-105 transition-transform`}>
                  <span>CHOOSE {plan.name}</span>
                </button>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-text-secondary">
            All plans include our <strong>30-day money-back guarantee</strong> and legendary customer support!
          </p>
          <div className="mt-4">
            <button className="text-primary font-bold hover:underline">
              Need a custom plan? Let's talk! →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
