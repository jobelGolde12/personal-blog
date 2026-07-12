import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      label: 'GitHub',
      href: 'https://github.com',
    },
    {
      icon: Mail,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:jobel@example.com',
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
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Jobel V. Golde</h3>
            <p className="text-gray-400">
              IT Graduate | Web Developer | Problem Solver
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center text-gray-400"
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
