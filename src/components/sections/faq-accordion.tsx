'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/data/content';

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          <p className="section-label">FAQ</p>
          <h2 className="font-clash font-black text-5xl md:text-7xl text-text-primary mb-6">
            GOT
            <br />
            <span className="text-secondary">QUESTIONS?</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            We've got answers! Check out these frequently asked questions.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const colors = ['yellow', 'blue', 'pink'];
            const currentColor = colors[index % colors.length];
            
            const colorClasses = {
              yellow: 'bg-bg-yellow border-yellow-400',
              blue: 'bg-bg-blue border-blue-400',
              pink: 'bg-bg-pink border-pink-400',
            };

            const iconColors = {
              yellow: 'bg-yellow-400 border-yellow-500 text-yellow-900',
              blue: 'bg-blue-400 border-blue-500 text-blue-900',
              pink: 'bg-pink-400 border-pink-500 text-pink-900',
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${colorClasses[currentColor as keyof typeof colorClasses]} rounded-2xl border-4 overflow-hidden shadow-brutal hover:shadow-brutal-lg transition-all duration-300`}
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-black/5 transition-colors duration-200"
                >
                  <h3 className="font-clash font-black text-xl md:text-2xl text-text-primary pr-8 leading-tight">
                    {faq.question}
                  </h3>
                  
                  <div className={`w-12 h-12 rounded-xl ${iconColors[currentColor as keyof typeof iconColors]} border-4 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? <Minus size={24} strokeWidth={3} /> : <Plus size={24} strokeWidth={3} />}
                  </div>
                </button>

                {/* Answer Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 border-t-4 border-black/10">
                        <div className="pt-6">
                          <p className="text-text-secondary text-lg font-medium leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto color-block-yellow">
            <h3 className="font-clash font-black text-3xl text-text-primary mb-4">
              STILL HAVE QUESTIONS?
            </h3>
            <p className="text-text-secondary text-lg mb-8">
              Our awesome support team is here to help! We typically respond within minutes.
            </p>
            <button className="chunky-button-primary">
              <span>CONTACT SUPPORT</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
