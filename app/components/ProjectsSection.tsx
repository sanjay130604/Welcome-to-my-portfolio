'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Budget-App',
    description:
      'A personal finance tracker that helps users plan, manage, and visualize their monthly and yearly budgets effortlessly.',
    image: '/code.jpg',
    liveUrl: 'https://your-budget-app-url.com',
    githubUrl: 'https://github.com/sanjay130604/Budget-App',
  },
  {
    id: 2,
    title: 'FounderTherapy',
    description:
      'An anonymous journaling and AI-powered mood tracking app designed to support founders mental well-being through insights and prompts.',
    image: '/ai.jpeg',
    liveUrl: 'https://your-foundertherapy-url.com',
    githubUrl: 'https://github.com/sanjay130604/backend_founderTherary',
  },
  {
    id: 3,
    title: 'Book-store',
    description:
      'A full-featured online platform to browse, search, and purchase books with secure checkout and user-friendly design.',
    image: '/bookstore.jpeg',
    liveUrl: 'https://sanjay130604.github.io/book-store/',
    githubUrl: 'https://github.com/sanjay130604/book-store',
  },
  {
    id: 4,
    title: 'Explore the World',
    description:
      'A travel discovery app that helps users explore destinations, plan trips, and get inspired by stunning places around the globe',
    image: '/laptop.jpg',
    liveUrl: ' https://sanjay130604.github.io/explorethwworld/',
    githubUrl: 'https://github.com/sanjay130604/explorethwworld',
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: project.id * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  View Project
                </Link>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
