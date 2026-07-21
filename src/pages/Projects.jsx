import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Layers3, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'DUGTONG - Blood Donor System',
    description: 'Blood donor profiling and management',
    technologies: ['React Native', 'Expo', 'Turso', 'TypeScript'],
    features: ['Authentication', 'CRUD', 'Search', 'API'],
    skills: ['Mobile Development', 'Database Design'],
    icon: '🩸',
  },
  {
    title: 'Bulan Lost and Found',
    description: 'Lost & Found Management System',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Bootstrap'],
    features: ['Authentication', 'Admin Dashboard', 'Reports'],
    skills: ['Full Stack Development'],
    icon: '📦',
  },
  {
    title: 'Personal Finance Tracker',
    description: 'Expense tracking',
    technologies: ['Laravel', 'Vue.js', 'MySQL'],
    features: ['Charts', 'Categories', 'CRUD'],
    skills: ['REST API', 'MVC'],
    icon: '💰',
  },
  {
    title: 'PRI Inventory System',
    description: 'School inventory management',
    technologies: ['Next.js', 'Tailwind CSS', 'Turso'],
    features: ['Inventory', 'Reports', 'Authentication'],
    skills: ['React', 'SQL', 'Server Actions'],
    icon: '📚',
  },
];

const heroStats = [
  { label: 'Projects', value: '4' },
  { label: 'Stacks', value: '4' },
  { label: 'Domains', value: '3' },
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
            className="editorial-btn editorial-btn-primary group"
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
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="editorial-card group overflow-hidden"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

              <div className="p-6 sm:p-8">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm border border-border bg-bg text-2xl transition-transform duration-300 group-hover:scale-105">
                      {project.icon}
                    </div>
                    <div>
                      <div className="mb-2 inline-flex items-center rounded-full border border-border px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-accent">
                        Project {String(index + 1).padStart(2, '0')}
                      </div>
                      <h2 className="font-display text-2xl font-medium leading-tight text-text">
                        {project.title}
                      </h2>
                    </div>
                  </div>
                </div>

                <p className="text-base leading-7 text-text-secondary">
                  {project.description}
                </p>

                <ProjectSection title="Technologies Used" icon={Layers3} items={project.technologies} />
                <ProjectSection title="Features" icon={Sparkles} items={project.features} />
                <ProjectSection title="Skills Demonstrated" icon={Code2} items={project.skills} />
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
