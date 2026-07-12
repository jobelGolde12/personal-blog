import { motion } from 'framer-motion';
import { Code2, Mail, Phone } from 'lucide-react';

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const contactLinks = [
    {
      icon: Phone,
      label: 'Phone',
      href: 'tel:+639930543293',
      value: '09930543293',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:jobelgolde43@gmail.com',
      value: 'jobelgolde43@gmail.com',
    },
    {
      icon: Code2,
      label: 'GitHub',
      href: 'https://github.com/jobelGolde12',
      value: 'github.com/jobelGolde12',
    },
    {
      icon: FacebookIcon,
      label: 'Facebook',
      href: 'https://www.facebook.com/jobelGolde',
      value: 'facebook.com/jobelGolde',
    },
    {
      icon: InstagramIcon,
      label: 'Instagram',
      href: 'https://www.instagram.com/jobelgolde/',
      value: 'instagram.com/jobelgolde',
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jobel-golde-6a8822411/',
      value: 'linkedin.com/in/jobel-golde',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className='bg-gray-900 text-white mt-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid md:grid-cols-3 gap-8 mb-8'
        >
          <motion.div variants={itemVariants}>
            <h3 className='text-lg font-bold mb-4'>Jobel V. Golde</h3>
            <p className='text-gray-400'>
              IT Graduate | Web Developer | Problem Solver
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className='text-lg font-bold mb-4'>Quick Links</h3>
            <ul className='space-y-2 text-gray-400'>
              <li>
                <a href='/' className='hover:text-white transition-colors'>
                  Home
                </a>
              </li>
              <li>
                <a href='/about' className='hover:text-white transition-colors'>
                  About
                </a>
              </li>
              <li>
                <a href='/projects' className='hover:text-white transition-colors'>
                  Projects
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className='text-lg font-bold mb-4'>Connect</h3>
            <div className='space-y-3'>
              {contactLinks.map((link) => {
                const Icon = link.icon;
                const isExternal = link.href.startsWith('http');

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className='group flex items-center gap-3 rounded-xl px-3 py-2 text-gray-400 transition-all duration-200 hover:bg-gray-800 hover:text-white hover:translate-x-1'
                    aria-label={link.label}
                  >
                    <span className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition-colors duration-200 group-hover:bg-white group-hover:text-gray-900'>
                      <Icon size={18} />
                    </span>
                    <span className='flex flex-col'>
                      <span className='text-xs uppercase tracking-[0.2em] text-gray-500 group-hover:text-gray-300'>
                        {link.label}
                      </span>
                      <span className='text-sm font-medium text-gray-300 group-hover:text-white'>
                        {link.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='border-t border-gray-800 pt-8 text-center text-gray-400'
        >
          <p>
            © {currentYear} Jobel V. Golde. All rights reserved. Built with React,
            Vite, and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
