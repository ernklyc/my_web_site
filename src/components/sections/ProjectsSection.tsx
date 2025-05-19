"use client";

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Example projects data
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB.',
    image: '/projects/ecommerce.jpg',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/erenkalaycii/ecommerce-platform',
    demo: 'https://ecommerce-platform.vercel.app',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A task management application with drag-and-drop functionality and user authentication.',
    image: '/projects/task-app.jpg',
    tags: ['React', 'TypeScript', 'Firebase', 'CSS'],
    github: 'https://github.com/erenkalaycii/task-manager',
    demo: 'https://task-manager-app.vercel.app',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current and forecasted weather data for any location.',
    image: '/projects/weather.jpg',
    tags: ['JavaScript', 'API', 'HTML', 'CSS'],
    github: 'https://github.com/erenkalaycii/weather-dashboard',
    demo: 'https://weather-dashboard-app.vercel.app',
  },
];

const ProjectsSection = () => {
  return (
    <Section variants={staggerContainer}>
      <motion.div className="text-center mb-16" variants={fadeInUp}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Featured <span className="text-primary-600">Projects</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project is crafted with attention to detail,
          focusing on both functionality and user experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            variants={fadeInUp}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-primary-100 text-primary-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary-600 transition-colors flex items-center"
                >
                  <FaGithub className="mr-1" />
                  <span>Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary-600 transition-colors flex items-center"
                >
                  <span>Live Demo</span>
                  <FaExternalLinkAlt className="ml-1" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-12"
        variants={fadeInUp}
        transition={{ delay: 0.4 }}
      >
        <Button href="/projects" variant="outline">
          View All Projects
        </Button>
      </motion.div>
    </Section>
  );
};

export { ProjectsSection };
