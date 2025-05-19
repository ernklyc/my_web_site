"use client";

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { FaDownload } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <>
      <Section className="pt-16 md:pt-24" variants={staggerContainer}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp} className="order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              About <span className="text-primary-600">Me</span>
            </h1>
            <div className="prose prose-lg max-w-none">
              <p>
                Hello! I'm <strong>Eren Kalaycı</strong>, a passionate computer engineering student with a love for web development 
                and creating meaningful digital experiences.
              </p>
              <p>
                As a student, I'm constantly learning and exploring new technologies to expand my skillset. 
                I'm particularly interested in frontend development, where I can combine my technical skills with 
                creativity to build beautiful and functional user interfaces.
              </p>
              <p>
                When I'm not coding, you can find me exploring the latest tech trends, reading about software 
                architecture, or contributing to open-source projects. I believe in continuous learning and 
                pushing the boundaries of what's possible with technology.
              </p>
              <p>
                I'm currently seeking opportunities to apply my skills in real-world projects and collaborate 
                with other developers. If you're interested in working together or just want to chat, feel 
                free to reach out!              </p>
            </div>
            <div className="mt-8">
              <Button href="/eren-kalayci-resume.pdf" isExternal className="flex items-center">
                <FaDownload className="mr-2" />
                Download Resume
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp} 
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden border-4 border-primary-100 shadow-xl">
              <Image
                src="/profile.jpg"
                alt="Eren Kalaycı"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-gray-50" variants={staggerContainer}>
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Education & <span className="text-primary-600">Experience</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Timeline */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Education</h3>
            <div className="space-y-8">
              <div className="relative pl-8 pb-8 border-l-2 border-primary-200">
                <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900">Bachelor of Science in Computer Engineering</h4>
                  <p className="text-primary-600 mb-2">2020 - Present</p>
                  <p className="text-gray-700">Istanbul Technical University</p>
                  <p className="text-gray-600 mt-2">
                    Focusing on software engineering, algorithms, and web development.
                  </p>
                </div>
              </div>
              
              <div className="relative pl-8 pb-8 border-l-2 border-primary-200">
                <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900">High School Diploma</h4>
                  <p className="text-primary-600 mb-2">2016 - 2020</p>
                  <p className="text-gray-700">Istanbul Anatolian High School</p>
                  <p className="text-gray-600 mt-2">
                    Graduated with honors. Participated in science and programming competitions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Experience</h3>
            <div className="space-y-8">
              <div className="relative pl-8 pb-8 border-l-2 border-primary-200">
                <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900">Web Development Intern</h4>
                  <p className="text-primary-600 mb-2">Summer 2023</p>
                  <p className="text-gray-700">Tech Solutions Inc.</p>
                  <p className="text-gray-600 mt-2">
                    Assisted in frontend development using React and Next.js. Implemented responsive UI components and participated in code reviews.
                  </p>
                </div>
              </div>
              
              <div className="relative pl-8 pb-8 border-l-2 border-primary-200">
                <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900">Freelance Web Developer</h4>
                  <p className="text-primary-600 mb-2">2022 - Present</p>
                  <p className="text-gray-700">Self-employed</p>
                  <p className="text-gray-600 mt-2">
                    Building websites and web applications for small businesses and startups using modern web technologies.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
