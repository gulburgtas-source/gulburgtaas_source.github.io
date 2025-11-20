'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
  { value: 50, suffix: '+', label: 'Happy Clients', color: '#ff3366' },
  { value: 150, suffix: '+', label: 'Projects Completed', color: '#33ccff' },
  { value: 3, suffix: '+', label: 'Years Experience', color: '#ff3366' },
  { value: 15, suffix: '+', label: 'Awards Won', color: '#33ccff' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function ImpactSection() {
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Impact in <span className="text-[#33ccff]">Numbers</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Delivering exceptional results through creative excellence and strategic thinking
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="text-center">
                <motion.div
                  className="text-5xl md:text-7xl font-bold mb-4"
                  style={{ color: stat.color }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                </motion.div>
                <p className="text-gray-400 text-sm md:text-base font-medium">
                  {stat.label}
                </p>
              </div>

              <motion.div
                className="absolute -inset-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${stat.color}15, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 text-center"
        >
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to create something amazing?
          </h3>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate and bring your vision to life with stunning visual design
          </p>
          <a 
            href="https://wa.me/qr/XPLJPZOAG4SHP1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-gradient-to-r from-[#ff3366] to-[#33ccff] text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-[#ff3366]/50 transition-all duration-300 hover:scale-105"
          >
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}