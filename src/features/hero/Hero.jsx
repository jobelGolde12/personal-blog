import { motion } from 'framer-motion';
import { ArrowDown, GitFork, Mail, MapPin } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="hero-section relative flex min-h-screen items-center overflow-hidden pt-8 pb-20">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-16 left-[-4rem] h-72 w-72 rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute right-[-3rem] bottom-24 h-80 w-80 rounded-full bg-muted/20 blur-[110px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="editorial-container relative z-10"
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-16">
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div variants={itemVariants} className="editorial-eyebrow">
              Available for opportunities
            </motion.div>

            <h1 className="editorial-title text-5xl sm:text-6xl md:text-7xl font-light leading-tight">
              <span className="block text-text-secondary">Hi, I&apos;m</span>
              <span className="block mt-1">Jobel V. Golde</span>
            </h1>

            <p className="flex flex-wrap items-center gap-2 text-sm tracking-wide text-text-secondary">
              <span className="h-px w-6 bg-accent/60" />
              <span className="font-medium text-text">IT Graduate</span>
              <span className="text-muted">|</span>
              <span>Building beautiful & functional web experiences</span>
            </p>

            <p className="mt-4 max-w-lg text-base leading-8 text-text-secondary sm:text-lg">
              A passionate developer from <span className="font-medium text-text">Sorsogon State University - BC</span> with expertise in React, Vue.js, Laravel, and Next.js. I create solutions that combine elegant design with practical functionality.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="editorial-btn editorial-btn-primary"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="editorial-btn editorial-btn-ghost ml-4"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-2 text-sm text-muted">
              <a
                href="https://github.com/jobelGolde12"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 transition-colors duration-300 hover:text-accent"
              >
                <GitFork className="h-5 w-5" strokeWidth={1.5} />
                GitHub
              </a>
              <a
                href="https://www.facebook.com/jobelGolde"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 transition-colors duration-300 hover:text-accent"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                Facebook
              </a>
              <a
                href="mailto:jobelgolde43@gmail.com"
                className="group flex items-center gap-2 transition-colors duration-300 hover:text-accent"
              >
                <Mail className="h-5 w-5" strokeWidth={1.5} />
                Email
              </a>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" strokeWidth={1.5} />
                <span>Sorsogon, Philippines</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -inset-6 rounded-full bg-accent/8 blur-3xl" />

            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-px rounded-sm bg-gradient-to-br from-accent/40 via-border to-transparent opacity-70" />
              <div
                className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-card"
              >
                <img
                  src="/images/me.jpg"
                  alt="Jobel V. Golde profile"
                  width="400"
                  height="500"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"%3E%3Crect fill="%232D1C14" width="400" height="500"/%3E%3Ctext x="50%25" y="50%25" font-size="18" text-anchor="middle" dy=".3em" fill="%23D5B26A"%3EProfile Image%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
              </div>

              <div className="pointer-events-none absolute -right-3 top-8 h-24 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
              <div className="pointer-events-none absolute -left-3 bottom-16 h-20 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="mt-16 flex flex-col items-center gap-2 text-muted"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.28em]">
          Scroll
        </span>
        <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
