"use client";

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiPython } from 'react-icons/si';

const skills = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#000000' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
];

const SkillsSection = () => {
  return (
    <Section className="bg-gray-50" variants={staggerContainer}>
      <motion.div 
        className="text-center mb-16"
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          My <span className="text-primary-600">Skills</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I've worked with a variety of technologies in web development, from frontend to backend.
          Here are some of the tools and technologies I'm proficient with.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
        variants={staggerContainer}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center"
            variants={fadeInUp}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
              <skill.icon size={32} color={skill.color} />
            </div>
            <h3 className="text-gray-800 font-medium">{skill.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export { SkillsSection };
