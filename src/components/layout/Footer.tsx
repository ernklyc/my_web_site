"use client";

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/erenkalaycii', icon: FaGithub },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/erenkalaycii', icon: FaLinkedin },
  { name: 'Twitter', href: 'https://twitter.com/erenkalaycii', icon: FaTwitter },
  { name: 'Email', href: 'mailto:contact@erenkalaycii.com', icon: FaEnvelope },
];

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Info */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
                Eren Kalaycı
              </span>
            </Link>
            <p className="text-gray-400 max-w-xs">
              Computer Engineering student passionate about creating amazing web experiences.
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Contact</h3>
            <address className="not-italic text-gray-400">
              <p>Istanbul, Turkey</p>
              <p className="mt-2">
                <a 
                  href="mailto:contact@erenkalaycii.com" 
                  className="hover:text-white transition-colors"
                >
                  contact@erenkalaycii.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © {currentYear} Eren Kalaycı. All rights reserved.
          </p>
          <p className="text-gray-400 mt-4 md:mt-0">
            Made with ❤️ using Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
