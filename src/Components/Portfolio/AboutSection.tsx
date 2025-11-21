'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              About <span className="text-[#ff3366]">Me</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              I'm a passionate graphic designer and visual storyteller with a keen eye for detail 
              and a love for creating impactful designs. My work spans across branding, digital 
              campaigns, and editorial design, always aiming to tell compelling stories through visuals.
            </p>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              With years of experience in the industry, I've had the privilege of working with 
              diverse clients, helping them bring their visions to life through creative excellence 
              and strategic thinking.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              My approach combines modern design trends with timeless principles, ensuring that 
              every project not only looks stunning but also achieves its intended purpose.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10"
            >
              <a 
                href="https://wa.me/qr/XPLJPZOAG4SHP1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#ff3366] to-[#33ccff] text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-[#ff3366]/50 transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://i.postimg.cc/zfHNq9Xm/Gemini-Generated-Image-pkvjyapkvjyapkvj-1.png"
                alt="About Faheem Raza"
                className="w-full h-auto object-cover mix-blend-lighten"
              />
            </div>
            
            {/* Decorative floating element */}
            <motion.div
              className="absolute -top-6 -left-6 w-32 h-32 bg-[#33ccff] rounded-full blur-[60px] opacity-40"
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
                delay: 2,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}