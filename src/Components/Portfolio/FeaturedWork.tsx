'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const featuredProjects = [
  {
    id: 1,
    image: 'https://i.postimg.cc/SRwjDpJz/2-20251116-232058-0001.png',
    color: '#ff3366',
  },
  {
    id: 2,
    image: 'https://i.postimg.cc/C5ZXnYNH/IMG-20251120-WA0021.jpg',
    color: '#33ccff',
  },
  {
    id: 3,
    image: 'https://i.postimg.cc/v8tw9Hb6/IMG-20251118-WA0011.jpg',
    color: '#ff3366',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    color: '#33ccff',
  },
];

export default function FeaturedWork() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex >= featuredProjects.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Featured <span className="text-[#33ccff]">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Handpicked projects that define excellence in design and creativity
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: `-${currentIndex * 100}%`,
            }}
            transition={
              isTransitioning
                ? { duration: 0.8, ease: 'easeInOut' }
                : { duration: 0 }
            }
            onAnimationComplete={handleTransitionEnd}
          >
            {[...featuredProjects, featuredProjects[0]].map((project, index) => (
              <motion.div
                key={`${project.id}-${index}`}
                className="relative group flex-shrink-0 w-full px-4"
              >
                <motion.div
                  className="relative overflow-hidden rounded-3xl aspect-[5/4]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={project.image}
                    alt={`Project ${project.id}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                  
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}20, transparent)`,
                    }}
                  />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-3xl opacity-50"
                  style={{ backgroundColor: project.color }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-12">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === (currentIndex % featuredProjects.length)
                    ? 'bg-[#33ccff] w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}