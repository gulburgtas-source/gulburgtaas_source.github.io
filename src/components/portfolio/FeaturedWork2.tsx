'use client';

import { motion } from 'framer-motion';

const additionalProjects = [
  {
    id: 7,
    title: 'Crypto Trading Platform',
    description: 'Sleek dashboard design for cryptocurrency trading and analytics',
    image: 'https://i.postimg.cc/SRwjDpJz/2-20251116-232058-0001.png',
    tags: ['Web Design', 'Dashboard', 'Fintech'],
    color: '#ff3366',
  },
  {
    id: 8,
    title: 'Sustainable Fashion Campaign',
    description: 'Eco-conscious visual identity for an ethical clothing brand',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
    tags: ['Campaign', 'Branding', 'Social Impact'],
    color: '#33ccff',
  },
];

export default function FeaturedWork2() {
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
            More <span className="text-[#ff3366]">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Additional showcase of creative excellence and innovation
          </p>
        </motion.div>

        <div className="space-y-32">
          {additionalProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              <div className="flex-1 relative group">
                <motion.div
                  className="relative overflow-hidden rounded-3xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[500px] object-cover"
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
                  className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full blur-3xl opacity-50"
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
              </div>

              <div className="flex-1 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <span
                    className="text-sm font-bold uppercase tracking-wider mb-4 inline-block"
                    style={{ color: project.color }}
                  >
                    Featured Project {String(project.id).padStart(2, '0')}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 rounded-full text-sm font-medium border"
                        style={{
                          borderColor: project.color,
                          color: project.color,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    className="group flex items-center gap-3 text-white font-semibold text-lg"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    View Case Study
                    <svg
                      className="w-6 h-6 transition-transform group-hover:translate-x-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
