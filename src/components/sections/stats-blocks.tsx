'use client';

import { motion } from 'framer-motion';
import { stats } from '@/data/content';

export function StatsBlocks() {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label text-white/80">METRICS</p>
          <h2 className="font-clash font-black text-5xl md:text-7xl text-white mb-6">
            THE NUMBERS
            <br />
            <span className="text-accent-yellow">SPEAK LOUD</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Don't just take our word for it - check out these absolutely mind-blowing stats!
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const colorClasses = {
              yellow: 'bg-accent-yellow border-yellow-400',
              blue: 'bg-accent-blue border-blue-400',
              pink: 'bg-accent-pink border-pink-400',
            };

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`${colorClasses[stat.color as keyof typeof colorClasses]} rounded-2xl p-8 text-center border-4 shadow-brutal-lg hover:shadow-brutal-color transition-all duration-300 cursor-pointer group`}
              >
                {/* Number */}
                <div className="mb-4">
                  <span className="font-clash font-black text-6xl md:text-8xl text-black text-shadow-brutal group-hover:scale-110 transition-transform inline-block">
                    {stat.number}
                  </span>
                </div>

                {/* Label */}
                <p className="font-bold text-lg uppercase tracking-widest text-black/80">
                  {stat.label}
                </p>

                {/* Decorative Element */}
                <div className="mt-4 w-8 h-2 bg-black/20 rounded-full mx-auto group-hover:w-16 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Small Print */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/60 text-sm">
            *Okay, we got like 3 complaints, but who's counting? 😉
          </p>
        </motion.div>
      </div>
    </section>
  );
}
