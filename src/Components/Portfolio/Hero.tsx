import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, 0.01, 0.9],
        delay: 0.5,
      },
    },
  };

  return (
    <section className="relative flex items-start justify-center px-6 md:px-12 lg:px-24 pt-20 md:pt-32 pb-12 md:pb-16">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-[#33ccff] text-sm md:text-base font-medium tracking-wider uppercase">
              Portfolio 2025
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight tracking-tight"
          >
            FAHEEM RAZA
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
          >
            Graphic Designer
          </motion.h2>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-[#ff3366] via-[#ff3366] to-[#33ccff] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
          >
            & UI/UX Designer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-base md:text-lg max-w-2xl mb-8 leading-relaxed"
          >
            Crafting compelling visual narratives that blend creativity with strategic thinking. 
            Transforming ideas into memorable brand experiences.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-6 mb-12">
            <a 
              href="https://www.behance.net/fahraz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#ff3366] text-white font-semibold rounded-full hover:bg-[#ff4477] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff3366]/50"
            >
              View Projects
            </a>
            <a 
              href="mailto:razf541@gmail.com"
              className="px-8 py-4 border-2 border-[#33ccff] text-[#33ccff] font-semibold rounded-full hover:bg-[#33ccff] hover:text-[#0a0a0a] transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-12 text-sm text-gray-500"
          >
            <div>
              <p className="text-white text-2xl font-bold mb-1">150+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-white text-2xl font-bold mb-1">50+</p>
              <p>Happy Clients</p>
            </div>
            <div>
              <p className="text-white text-2xl font-bold mb-1">3+</p>
              <p>Years Experience</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Portfolio Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#ff3366]/20">
            <img
              src="https://i.postimg.cc/tRdjRKWd/IMG-20251028-WA0001.png"
              alt="Faheem Raza Portfolio"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ff3366]/20 to-[#33ccff]/20 mix-blend-overlay" />
          </div>
          
          {/* Decorative floating element */}
          <motion.div
            className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#ff3366] rounded-full blur-[60px] opacity-40"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-64 h-64 bg-[#ff3366] rounded-full blur-[120px] opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-64 h-64 bg-[#33ccff] rounded-full blur-[120px] opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.25, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}