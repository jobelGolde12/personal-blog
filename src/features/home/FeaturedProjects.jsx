import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredProjects = [
  {
    title: 'DUGTONG - Blood Donor System',
    description: 'A blood donor profiling and management system built with React Native and Expo, helping streamline blood donation management for the Province of Sorsogon.',
    technologies: ['React Native', 'Expo', 'Turso', 'TypeScript'],
    icon: '🩸',
    github: 'https://github.com/jobelGolde12/dugtong_app',
  },
  {
    title: 'PRI Inventory System',
    description: 'A school inventory management system built with Next.js and Turso, featuring real-time updates and comprehensive reporting.',
    technologies: ['Next.js', 'Tailwind CSS', 'Turso'],
    icon: '📚',
    github: 'https://github.com/jobelGolde12',
  },
  {
    title: 'Bulan Lost and Found',
    description: 'A web-based lost & found management system built with Laravel and Vue.js, helping communities manage lost items efficiently.',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Bootstrap'],
    icon: '📦',
    github: 'https://github.com/jobelGolde12/bulan_lost_and_found3',
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-16 md:py-20 border-t border-border">
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
        >
          <div>
            <div className="editorial-eyebrow mb-4">Featured Work</div>
            <h2 className="editorial-section-title">Selected Projects</h2>
            <p className="editorial-lead">
              Real projects solving real problems, built with modern technologies
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-accent transition-all duration-200 hover:gap-3 hover:text-[#e6c98a] cursor-pointer"
          >
            View All Projects <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="editorial-card group overflow-hidden cursor-pointer"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-border bg-bg text-xl transition-transform duration-300 group-hover:scale-105">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium leading-tight text-text group-hover:text-accent transition-colors duration-200">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm leading-7 text-text-secondary mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="editorial-chip text-[0.7rem]">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-accent transition-all duration-200 hover:text-[#e6c98a] cursor-pointer"
                >
                  <ExternalLink size={12} strokeWidth={1.5} />
                  View Source
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
