"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { submitContactForm } from '@/lib/utils/contact';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | 'idle';
    message: string;
  }>({
    type: 'idle',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await submitContactForm({
        name: formData.name,
        email: formData.email,
        message: formData.message
      });
      
      if (result.success) {
        setStatus({
          type: 'success',
          message: result.message
        });
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus({
          type: 'error',
          message: result.message
        });
      }    } catch (error) {
      // Log the error but present a friendly message to users
      console.error('Form submission error:', error);
      setStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section className="bg-gray-50" variants={staggerContainer}>
      <motion.div className="text-center mb-16" variants={fadeInUp}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Get In <span className="text-primary-600">Touch</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I'm always open to new opportunities, collaborations, or just a friendly chat. 
          Feel free to reach out to me through any of the channels below.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div variants={fadeInUp}>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-primary-100 rounded-full text-primary-600">
                  <FaEnvelope className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-500">Email</h4>
                  <a 
                    href="mailto:contact@erenkalaycii.com" 
                    className="text-gray-800 hover:text-primary-600 transition-colors"
                  >
                    contact@erenkalaycii.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-primary-100 rounded-full text-primary-600">
                  <FaMapMarkerAlt className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-500">Location</h4>
                  <p className="text-gray-800">Istanbul, Turkey</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-3">Social Media</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com/in/erenkalaycii" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-gray-600 hover:text-primary-600 p-3 rounded-full shadow-md hover:shadow-lg transition"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://github.com/erenkalaycii" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-gray-600 hover:text-primary-600 p-3 rounded-full shadow-md hover:shadow-lg transition"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://twitter.com/erenkalaycii" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-gray-600 hover:text-primary-600 p-3 rounded-full shadow-md hover:shadow-lg transition"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>        {/* Contact Form */}
        <motion.div variants={fadeInUp}>
          <form className="bg-white rounded-lg shadow-lg p-8" onSubmit={handleSubmit}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Send Me a Message</h3>
            
            {status.type !== 'idle' && (
              <div className={`mb-6 p-4 rounded-md ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                {status.message}
              </div>
            )}
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                ></textarea>
              </div>
              
              <div>
                <Button 
                  type="submit" 
                  className="w-full justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export { ContactSection };
