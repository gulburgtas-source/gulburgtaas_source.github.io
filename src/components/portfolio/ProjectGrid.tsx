'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Brand Identity',
    category: 'Branding',
    image: 'https://i.postimg.cc/dVhCTnRK/behance-project-1761238837544.jpg',
  },
  {
    id: 2,
    title: 'Digital Campaign',
    category: 'Marketing',
    image: 'https://i.postimg.cc/Hn4wKf9q/1-20251028-072507-0000.png',
  },
  {
    id: 3,
    title: 'Editorial Design',
    category: 'Print',
    image: 'https://i.postimg.cc/8zRYH1cj/2-20250426-212610-0001.png',
  },
  {
    id: 4,
    title: 'Motion Graphics',
    category: 'Animation',
    image: 'https://i.postimg.cc/hv8C0s42/TIME-20250804-222850-0000.png',
  },
  {
    id: 5,
    title: 'Packaging Design',
    category: 'Product',
    image: 'https://i.postimg.cc/QdZ7DDbH/4-20250825-160427-0000.png',
  },
  {
    id: 6,
    title: 'Web Design',
    category: 'Digital',
    image: 'https://i.postimg.cc/FRcswjcM/1-20251028-153552-0000.png',
  },
];

export default function ProjectGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Featured <span className="text-[#ff3366]">Works</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A selection of projects that showcase creativity and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="relative group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={hoveredId === project.id ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-[#33ccff] text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-2xl font-bold">
                    {project.title}
                  </h3>
                </motion.div>

                <div className="absolute top-4 right-4">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-[#ff3366] flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={hoveredId === project.id ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}