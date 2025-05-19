"use client";

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Project data
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB. Features include product listings, user authentication, shopping cart, and payment processing.',
    image: '/projects/ecommerce.jpg',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Stripe'],
    github: 'https://github.com/erenkalaycii/ecommerce-platform',
    demo: 'https://ecommerce-platform.vercel.app',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A task management application with drag-and-drop functionality and user authentication. Users can create projects, add tasks, set deadlines, and track progress.',
    image: '/projects/task-app.jpg',
    tags: ['React', 'TypeScript', 'Firebase', 'CSS', 'React DnD'],
    github: 'https://github.com/erenkalaycii/task-manager',
    demo: 'https://task-manager-app.vercel.app',
    featured: true,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current and forecasted weather data for any location. Users can search for cities and save their favorite locations.',
    image: '/projects/weather.jpg',
    tags: ['JavaScript', 'Weather API', 'HTML', 'CSS', 'LocalStorage'],
    github: 'https://github.com/erenkalaycii/weather-dashboard',
    demo: 'https://weather-dashboard-app.vercel.app',
    featured: true,
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'My personal portfolio website built with Next.js and Tailwind CSS. Features a responsive design, animations, and contact form.',
    image: '/projects/portfolio.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/erenkalaycii/portfolio',
    demo: 'https://erenkalaycii.com',
    featured: false,
  },
  {
    id: 5,
    title: 'Recipe Finder',
    description: 'A web application that allows users to search for recipes based on ingredients they have. Features include recipe filtering, saving favorites, and nutritional information.',
    image: '/projects/recipe.jpg',
    tags: ['React', 'Recipe API', 'CSS Modules', 'Context API'],
    github: 'https://github.com/erenkalaycii/recipe-finder',
    demo: 'https://recipe-finder-app.vercel.app',
    featured: false,
  },
  {
    id: 6,
    title: 'Movie Database',
    description: 'A movie database application that displays information about movies and TV shows. Users can search, filter, and get detailed information about each title.',
    image: '/projects/movie.jpg',
    tags: ['React', 'TMDB API', 'Styled Components', 'React Router'],
    github: 'https://github.com/erenkalaycii/movie-database',
    demo: 'https://movie-database-app.vercel.app',
    featured: false,
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <>
      <Section className="pt-16 md:pt-24" variants={staggerContainer}>
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            My <span className="text-primary-600">Projects</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here's a collection of projects I've worked on. Each project represents my skills, 
            interests, and growth as a developer.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <motion.h2 
            className="text-2xl font-bold mb-8 text-gray-900 border-b pb-2"
            variants={fadeInUp}
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
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
        </div>

        {/* Other Projects */}
        <div>
          <motion.h2 
            className="text-2xl font-bold mb-8 text-gray-900 border-b pb-2"
            variants={fadeInUp}
          >
            More Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
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
        </div>
      </Section>
    </>
  );
}
