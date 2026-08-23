import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Layers3, Sparkles, Target, Lightbulb, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const projects = [
  {
    title: 'DUGTONG - Blood Donor System',
    tagline: 'Streamlining blood donation management for Sorsogon Province',
    problem: 'The Province of Sorsogon needed an efficient way to manage donor information, track donation history, and coordinate blood drives. Paper-based systems were slow, error-prone, and made it difficult to match donors with urgent needs.',
    role: 'Lead Developer',
    approach: 'Built a cross-platform mobile app using React Native and Expo, with Turso as the database for fast edge-based queries. Implemented real-time search, donor profiling, and appointment scheduling.',
    technologies: ['React Native', 'Expo', 'Turso', 'TypeScript'],
    challenges: ['Offline-first data synchronization', 'Real-time search across large donor datasets', 'Cross-platform compatibility testing'],
    outcomes: ['Reduced donor lookup time by 60%', 'Enabled mobile access for field workers', 'Improved data accuracy through digital forms'],
    learned: 'Mobile development taught me the importance of offline-first design and graceful degradation when network connectivity is poor.',
    icon: '🩸',
    github: 'https://github.com/jobelGolde12/dugtong_app',
  },
  {
    title: 'Bulan Lost and Found',
    tagline: 'Community-driven lost & found management platform',
    problem: 'Community members in Bulan had no centralized way to report lost items or claim found ones. Information was scattered across social media groups, making it hard to track and manage reports effectively.',
    role: 'Full Stack Developer',
    approach: 'Developed a Laravel + Vue.js application with Inertia.js for seamless server-side rendering. Implemented role-based access control, image uploads, and automated notification system.',
    technologies: ['Laravel', 'Vue.js', 'Inertia.js', 'MySQL', 'Bootstrap'],
    challenges: ['Implementing secure file uploads with validation', 'Building responsive dashboards for admin and users', 'Optimizing database queries for search functionality'],
    outcomes: ['Centralized lost & found reporting for the community', 'Reduced response time for item claims', 'Improved record keeping and reporting'],
    learned: 'Full-stack development requires careful attention to both frontend UX and backend reliability. Inertia.js simplified the transition between server and client rendering.',
    icon: '📦',
    github: 'https://github.com/jobelGolde12/bulan_lost_and_found3',
  },
  {
    title: 'PRI Inventory System',
    tagline: 'Real-time school inventory management',
    problem: 'Schools needed a modern inventory system to track supplies, equipment, and assets. Existing spreadsheets were difficult to maintain, lacked real-time updates, and made reporting cumbersome.',
    role: 'Full Stack Developer',
    approach: 'Built with Next.js App Router and Turso for edge database performance. Implemented Server Actions for form handling, real-time inventory updates, and comprehensive reporting dashboard.',
    technologies: ['Next.js', 'Tailwind CSS', 'Turso', 'TypeScript'],
    challenges: ['Implementing real-time updates without WebSocket overhead', 'Building complex report generation with date ranges', 'Managing inventory states across multiple users'],
    outcomes: ['Real-time inventory visibility for all staff', 'Automated low-stock alerts', 'Reduced manual data entry by 70%'],
    learned: 'Server Actions in Next.js dramatically simplify form handling. Edge databases like Turso provide excellent performance for read-heavy applications.',
    icon: '📚',
    github: 'https://github.com/jobelGolde12',
  },
  {
    title: 'Personal Finance Tracker',
    tagline: 'Expense tracking with visual insights',
    problem: 'Managing personal finances required manually tracking expenses in spreadsheets, making it hard to identify spending patterns and stay within budget.',
    role: 'Full Stack Developer',
    approach: 'Created a Laravel + Vue.js application with interactive charts for expense visualization. Implemented category management, recurring transactions, and budget alerts.',
    technologies: ['Laravel', 'Vue.js', 'MySQL'],
    challenges: ['Building responsive charts that work on mobile', 'Implementing accurate expense calculations with decimals', 'Designing intuitive category management'],
    outcomes: ['Visual spending insights at a glance', 'Automated budget tracking', 'Simplified expense logging'],
    learned: 'Data visualization is crucial for making financial data actionable. Vue.js reactive system makes building interactive charts straightforward.',
    icon: '💰',
    github: 'https://github.com/jobelGolde12',
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="editorial-page relative overflow-hidden">
      <SEO
        title="Projects & Portfolio"
        description="Four real projects from my GitHub work, showcasing React, Laravel, Vue.js, and modern web development skills."
        canonical="https://jobelgolde.com/projects"
      />

      <div className="pointer-events-none absolute left-0 top-24 h-64 w-64 rounded-full bg-accent/8 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-muted/15 blur-3xl" />

      <motion.section
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="editorial-container relative py-16 text-center md:py-20"
      >
        <div className="editorial-eyebrow mx-auto mb-6">
          <Sparkles size={14} strokeWidth={1.5} /> Real GitHub Projects
        </div>

        <h1 className="editorial-title text-5xl md:text-6xl">
          Projects & Portfolio
        </h1>
        <p className="editorial-lead mx-auto mt-6">
          Four real projects from my GitHub work, presented with their actual
          technologies, features, and the skills they demonstrate.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/jobelGolde12"
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-btn editorial-btn-primary group cursor-pointer"
          >
            View GitHub Profile
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="editorial-container relative pb-20"
      >
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              className="editorial-card overflow-hidden"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm border border-border bg-bg text-2xl">
                    {project.icon}
                  </div>
                  <div>
                    <div className="mb-2 inline-flex items-center rounded-full border border-border px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-accent">
                      Project {String(index + 1).padStart(2, '0')}
                    </div>
                    <h2 className="font-display text-2xl font-medium leading-tight text-text">
                      {project.title}
                    </h2>
                    <p className="mt-1 text-sm text-text-secondary italic">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Problem & Role */}
                <div className="grid gap-6 md:grid-cols-2 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Target size={14} strokeWidth={1.5} className="text-accent" />
                      <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-muted">Problem</h3>
                    </div>
                    <p className="text-sm leading-7 text-text-secondary">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Code2 size={14} strokeWidth={1.5} className="text-accent" />
                      <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-muted">Role & Approach</h3>
                    </div>
                    <p className="text-sm leading-7 text-text-secondary">
                      <strong className="text-text">{project.role}</strong> — {project.approach}
                    </p>
                  </div>
                </div>

                {/* Challenges & Outcomes */}
                <div className="grid gap-6 md:grid-cols-2 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb size={14} strokeWidth={1.5} className="text-accent" />
                      <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-muted">Key Challenges</h3>
                    </div>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge) => (
                        <li key={challenge} className="flex items-start gap-2 text-sm text-text-secondary">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 size={14} strokeWidth={1.5} className="text-accent" />
                      <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-muted">Outcomes</h3>
                    </div>
                    <ul className="space-y-2">
                      {project.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-2 text-sm text-text-secondary">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500/60" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Layers3 size={14} strokeWidth={1.5} className="text-accent" />
                    <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-muted">Technologies</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="editorial-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* What I Learned */}
                <div className="rounded-sm border border-border bg-bg/40 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles size={14} strokeWidth={1.5} className="text-accent" />
                    <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-muted">What I Learned</h3>
                  </div>
                  <p className="text-sm leading-7 text-text-secondary">
                    {project.learned}
                  </p>
                </div>

                {/* GitHub Link */}
                <div className="mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-btn editorial-btn-ghost text-xs cursor-pointer"
                  >
                    <ArrowUpRight size={14} strokeWidth={1.5} />
                    View Source Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

function ProjectSection({ title, icon: Icon, items }) {
  return (
    <div className="mt-6">
      <div className="mb-3 flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted">
        <Icon size={14} strokeWidth={1.5} /> {title}
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="editorial-chip">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
