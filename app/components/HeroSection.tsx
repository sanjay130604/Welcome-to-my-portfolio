'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HeroSection() {
  const [isHoveringName, setIsHoveringName] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 py-10 bg-black bg-grid-small-white/[0.05]"
    >
      {/* Background gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,1))]" />
      </div>

      {/* Hero Text */}
      <div className="relative z-10 text-center max-w-3xl">
        <motion.h1
          onMouseEnter={() => setIsHoveringName(true)}
          onMouseLeave={() => setIsHoveringName(false)}
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-4xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent ${
            isHoveringName
              ? 'bg-gradient-to-r from-white via-white to-white'
              : 'bg-gradient-to-r from-blue-400 to-purple-600'
          } transition-all duration-500`}
        >
          Sanjay S
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white font-semibold mb-4"
        >
          Full Stack Developer
        </motion.p>

        {/* About Summary */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-300 text-base md:text-lg mb-6 px-4"
        >
          Passionate about building intuitive and scalable web applications with the MERN stack. I focus on blending
          technical skills with creativity both frontend and backend development.
        </motion.p>

        {/* Tech badges (floating + pulsing) */}
        <div className="flex flex-wrap justify-center gap-3 mt-4 mb-8">
          {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Bootstrap', 'Framer Motion'].map(
            (tech, index) => (
              <motion.span
                key={tech}
                initial={{ y: 0, scale: 1 }}
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  delay: index * 0.2,
                  ease: 'easeInOut',
                }}
                whileHover={{
                  scale: 1.3,
                  y: -12,
                }}
                className="bg-white/10 text-white px-4 py-1 rounded-full text-sm border border-white/20 cursor-pointer shadow-md"
              >
                {tech}
              </motion.span>
            )
          )}
        </div>
      </div>

      {/* Skills Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-6xl px-4">
        {/* Frontend */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="bg-white/5 p-6 rounded-xl text-left shadow-sm border border-white/10"
        >
          <h3 className="text-lg font-bold text-blue-400 mb-2">Frontend Development</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>⚡ React .js Architecture</li>
            <li>⚡ Responsive UI & Accessibility</li>
            <li>⚡ Performance Optimization</li>
          </ul>
        </motion.div>

        {/* Backend */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="bg-white/5 p-6 rounded-xl text-left shadow-sm border border-white/10"
        >
          <h3 className="text-lg font-bold text-purple-400 mb-2">Backend Development</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>🧠 REST API & Express.js</li>
            <li>🧠 MongoDB & Mongoose</li>
            <li>🧠 Authentication & JWT</li>
          </ul>
        </motion.div>

        {/* DevOps */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="bg-white/5 p-6 rounded-xl text-left shadow-sm border border-white/10"
        >
          <h3 className="text-lg font-bold text-teal-300 mb-2">DevOps & Cloud</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>☁️ Deployment (Vercel, Render)</li>
            <li>☁️ Git & CI/CD Basics</li>
          </ul>
        </motion.div>
      </div>

      {/* Scroll Down Icon */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </motion.section>
  );
}
