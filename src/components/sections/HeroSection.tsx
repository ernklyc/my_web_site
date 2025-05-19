"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { staggerContainer, fadeInUp, defaultTransition } from '@/lib/utils/animations';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <Section
      fullHeight
      className="relative overflow-hidden flex flex-col justify-center"
      variants={staggerContainer}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-400 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary-400 rounded-full filter blur-3xl" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          className="order-2 lg:order-1"
          variants={fadeInUp}
          transition={defaultTransition}
        >
          <motion.p 
            className="text-primary-600 font-medium mb-4"
            variants={fadeInUp}
          >
            Hello, I'm
          </motion.p>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
            variants={fadeInUp}
          >
            Eren Kalaycı
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">.</span>
          </motion.h1>
          <motion.h2 
            className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            variants={fadeInUp}
          >
            Computer Engineering Student & <span className="text-primary-600">Web Developer</span> passionate about creating meaningful digital experiences.
          </motion.h2>
          <motion.div 
            className="flex flex-wrap gap-4"
            variants={fadeInUp}
          >
            <Button href="/projects" size="lg">
              View My Work
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        {/* Image/Illustration */}
        <motion.div 
          className="order-1 lg:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.5,
            ease: [0.43, 0.13, 0.23, 0.96] 
          }}
        >
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src="/profile-illustration.svg"
              alt="Eren Kalaycı"
              fill
              priority
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center hidden md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-gray-500 text-sm mb-2">Scroll to discover</span>
        <motion.div 
          className="w-1 h-8 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </motion.div>
    </Section>
  );
};

export { HeroSection };
