import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10"
    >
      {/* Lighting effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff3366]/10 via-transparent to-[#33ccff]/10 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff3366] to-transparent opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center ml-4">
          <img
            src="https://i.postimg.cc/qvjj3zNx/Gemini-Generated-Image-j7x4e3j7x4e3j7x4-(1).png"
            alt="Logo"
            className="h-16 w-16 object-cover rounded-full"
          />
        </div>

        {/* Contact Link */}
        <a
          href="mailto:razf541@gmail.com"
          className="text-white hover:text-[#ff3366] transition-colors duration-300 text-lg font-medium mr-4"
        >
          Contact
        </a>
      </div>
    </motion.header>
  );
}