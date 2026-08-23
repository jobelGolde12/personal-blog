import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="editorial-page relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist."
        canonical="https://jobelgolde.com/404"
      />

      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-muted/15 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-2xl px-4 text-center"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="mb-8"
        >
          <div className="font-display text-9xl font-medium text-accent md:text-[150px]">
            404
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.45 }}
          className="editorial-title mb-4 text-4xl md:text-5xl"
        >
          Page Not Found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.45 }}
          className="mb-10 text-lg leading-8 text-text-secondary"
        >
          Oops! It looks like the page you&apos;re looking for doesn&apos;t exist. Don&apos;t worry, let&apos;s get you back on track.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Link to="/" className="editorial-btn editorial-btn-primary cursor-pointer">
            <ArrowLeft size={16} strokeWidth={1.5} />
            Go Home
          </Link>

          <Link to="/contact" className="editorial-btn editorial-btn-ghost cursor-pointer">
            Report Issue
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
