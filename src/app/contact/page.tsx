"use client";

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <Section className="pt-16 md:pt-24" variants={staggerContainer}>
      <motion.div className="text-center mb-12" variants={fadeInUp}>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Get In <span className="text-primary-600">Touch</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I'm always open to new opportunities, collaborations, or just a friendly chat. 
          Feel free to reach out to me through any of the channels below or by filling out the contact form.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact Info Column */}
        <motion.div 
          className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-primary-100 rounded-full text-primary-600">
                <FaEnvelope className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <a 
                  href="mailto:contact@erenkalaycii.com" 
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  contact@erenkalaycii.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-primary-100 rounded-full text-primary-600">
                <FaMapMarkerAlt className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Location</h3>
                <p className="text-gray-600">Istanbul, Turkey</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-primary-100 rounded-full text-primary-600">
                <FaPhone className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                <p className="text-gray-600">Available upon request</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Connect with me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/erenkalaycii" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-gray-600 hover:text-primary-600 p-3 rounded-full shadow-md hover:shadow-lg transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/erenkalaycii" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-gray-600 hover:text-primary-600 p-3 rounded-full shadow-md hover:shadow-lg transition"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com/erenkalaycii" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-gray-600 hover:text-primary-600 p-3 rounded-full shadow-md hover:shadow-lg transition"
                aria-label="Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="mt-10 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Office Hours</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Contact Form Column */}
        <motion.div 
          className="lg:col-span-3 bg-white p-8 rounded-lg shadow-lg"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Me a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name<span className="text-primary-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address<span className="text-primary-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject<span className="text-primary-600">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What is this regarding?"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message<span className="text-primary-600">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Your message here..."
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              ></textarea>
            </div>
            
            <div className="flex items-center">
              <input
                id="privacy"
                name="privacy"
                type="checkbox"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                required
              />
              <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                I agree to the <a href="#" className="text-primary-600 hover:text-primary-700">Privacy Policy</a> and consent to being contacted.
              </label>
            </div>
            
            <div>
              <Button type="submit" className="w-full justify-center">
                Send Message
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
      
      {/* Google Map */}
      <motion.div 
        className="mt-12 rounded-lg overflow-hidden shadow-lg h-96"
        variants={fadeInUp}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192698.6596255894!2d28.85174737760978!3d41.005495883049996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2sus!4v1621451018148!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map showing Istanbul, Turkey"
        ></iframe>
      </motion.div>
    </Section>
  );
}
