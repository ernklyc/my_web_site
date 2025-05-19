"use client";

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';
import { FaDownload, FaGraduationCap, FaBriefcase, FaCode, FaLanguage } from 'react-icons/fa';

export default function ResumePage() {
  return (
    <Section className="pt-16 md:pt-24" variants={staggerContainer}>
      <motion.div className="text-center mb-10" variants={fadeInUp}>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          My <span className="text-primary-600">Resume</span>
        </h1>        <p className="text-gray-600 max-w-2xl mx-auto">
          Here's an overview of my education, experience, and skills. 
          Feel free to download a copy of my full resume.
        </p>
        <div className="mt-6">
          <Button href="/eren-kalayci-resume.pdf" isExternal className="flex items-center mx-auto">
            <FaDownload className="mr-2" />
            Download Resume
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Education and Experience */}
        <div className="lg:col-span-2 space-y-8">
          {/* Education Section */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            variants={fadeInUp}
          >
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-primary-600 text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Education</h2>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-primary-200 pl-4 py-2">
                <h3 className="text-lg font-semibold text-gray-900">Bachelor of Science in Computer Engineering</h3>
                <p className="text-primary-600">2020 - Present</p>
                <p className="text-gray-700">Istanbul Technical University</p>
                <ul className="mt-2 text-gray-600 list-disc list-inside">
                  <li>GPA: 3.7/4.0</li>
                  <li>Relevant Coursework: Data Structures, Algorithms, Database Systems, Web Programming</li>
                  <li>Member of the University Coding Club</li>
                </ul>
              </div>
              <div className="border-l-2 border-primary-200 pl-4 py-2">
                <h3 className="text-lg font-semibold text-gray-900">High School Diploma</h3>
                <p className="text-primary-600">2016 - 2020</p>
                <p className="text-gray-700">Istanbul Anatolian High School</p>
                <ul className="mt-2 text-gray-600 list-disc list-inside">
                  <li>Graduated with honors</li>
                  <li>Participated in national science competitions</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            variants={fadeInUp}
          >
            <div className="flex items-center mb-4">
              <FaBriefcase className="text-primary-600 text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-primary-200 pl-4 py-2">
                <h3 className="text-lg font-semibold text-gray-900">Web Development Intern</h3>
                <p className="text-primary-600">Summer 2023</p>
                <p className="text-gray-700">Tech Solutions Inc., Istanbul</p>
                <ul className="mt-2 text-gray-600 list-disc list-inside">
                  <li>Assisted in developing frontend components using React and Next.js</li>
                  <li>Implemented responsive UI designs using Tailwind CSS</li>
                  <li>Participated in code reviews and agile development processes</li>
                  <li>Collaborated with backend developers to integrate API endpoints</li>
                </ul>
              </div>
              <div className="border-l-2 border-primary-200 pl-4 py-2">
                <h3 className="text-lg font-semibold text-gray-900">Freelance Web Developer</h3>
                <p className="text-primary-600">2022 - Present</p>
                <p className="text-gray-700">Self-employed</p>
                <ul className="mt-2 text-gray-600 list-disc list-inside">
                  <li>Developed websites for small businesses and startups</li>
                  <li>Created custom web applications using modern technologies</li>
                  <li>Maintained client relationships and provided technical support</li>
                  <li>Implemented SEO best practices for improved search rankings</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Skills and Additional Info */}
        <div className="space-y-8">
          {/* Technical Skills */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            variants={fadeInUp}
          >
            <div className="flex items-center mb-4">
              <FaCode className="text-primary-600 text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Technical Skills</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">JavaScript</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">TypeScript</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">Python</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">Java</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">C/C++</span>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">HTML5</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">CSS3</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">React</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">Next.js</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">Tailwind CSS</span>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Backend Development</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">Node.js</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">Express</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">MongoDB</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">SQL</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">Firebase</span>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">Git</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">Docker</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">VS Code</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">REST APIs</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">Figma</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            variants={fadeInUp}
          >
            <div className="flex items-center mb-4">
              <FaLanguage className="text-primary-600 text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Languages</h2>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">Turkish</span>
                  <span className="text-gray-600">Native</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary-600 h-2 rounded-full w-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">English</span>
                  <span className="text-gray-600">Fluent</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary-600 h-2 rounded-full w-[90%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">German</span>
                  <span className="text-gray-600">Intermediate</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary-600 h-2 rounded-full w-[60%]"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications/Awards */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Certifications</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Web Development Bootcamp (Udemy, 2022)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>React - The Complete Guide (Udemy, 2022)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>JavaScript Algorithms and Data Structures (freeCodeCamp, 2021)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Responsive Web Design (freeCodeCamp, 2021)</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
