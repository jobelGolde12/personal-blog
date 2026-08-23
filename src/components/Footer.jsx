import { motion } from 'framer-motion';
import { Code2, Download, Mail, Phone, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

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

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <footer className="mt-24 border-t border-border bg-bg-secondary/80">
      <div className="editorial-container py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="font-display text-2xl font-medium tracking-tight text-text">
              Jobel V. Golde
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-7 text-text-secondary">
              IT Graduate | Web Developer | Problem Solver
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-muted">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li>
                <Link to="/" className="transition-colors duration-200 hover:text-accent cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors duration-200 hover:text-accent cursor-pointer">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="transition-colors duration-200 hover:text-accent cursor-pointer">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" className="transition-colors duration-200 hover:text-accent cursor-pointer">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors duration-200 hover:text-accent cursor-pointer">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="/resume-jobel-golde.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-accent cursor-pointer"
                >
                  <Download size={14} strokeWidth={1.5} />
                  Resume (PDF)
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-muted">
              Stay Updated
            </h3>
            <p className="mb-4 text-sm text-text-secondary">
              Get latest updates and insights delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="editorial-input pr-12"
                  aria-label="Email address for newsletter"
                  required
                />
                <button
                  type="submit"
                  disabled={!email || submitted}                    className="absolute right-2 top-1/2 -translate-y-1/2 text-muted hover:text-accent transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  aria-label="Subscribe to newsletter"
                >
                  <Send size={18} strokeWidth={1.5} />
                </button>
              </div>
              {submitted && (
                <p className="text-sm text-accent">Thanks for subscribing!</p>
              )}
            </form>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-muted">
              Connect
            </h3>
            <div className="space-y-2">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                const isExternal = link.href.startsWith('http');

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-3 rounded-sm px-2 py-2 text-text-secondary transition-all duration-200 hover:bg-card/70 hover:text-text cursor-pointer"
                    aria-label={link.label}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-border text-muted transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent">
                      <Icon size={16} strokeWidth={1.5} />
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                        {link.label}
                      </span>
                      <span className="truncate text-sm text-text-secondary transition-colors group-hover:text-text">
                        {link.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        <div className="editorial-divider mb-8" />

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-sm text-muted"
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