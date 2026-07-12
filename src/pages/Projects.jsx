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
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.10),_transparent_32%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_45%,_#eef2ff_100%)]'>
      <div className='pointer-events-none absolute left-0 top-24 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl' />
      <div className='pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl' />

      <motion.section
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        className='relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 lg:px-8'
      >
        <div className='mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur'>
          <Sparkles size={16} /> Real GitHub Projects
        </div>

        <h1 className='text-5xl font-bold tracking-tight text-slate-900 md:text-6xl'>
          Projects & Portfolio
        </h1>
        <p className='mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl'>
          Four real projects from my GitHub work, presented with their actual
          technologies, features, and the skills they demonstrate.
        </p>

        <div className='mt-10 flex flex-wrap items-center justify-center gap-3'>
          <a
            href='https://github.com/jobelGolde12'
            target='_blank'
            rel='noopener noreferrer'
            className='group inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800'
          >
            View GitHub Profile
            <ArrowUpRight size={16} className='transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
          </a>
        </div>

     
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='relative mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8'
      >
        <div className='grid gap-6 md:grid-cols-2'>
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className='group overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-[0_20px_70px_rgba(15,23,42,0.12)]'
            >
              <div className='h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400' />

              <div className='p-6 sm:p-8'>
                <div className='mb-6 flex items-start justify-between gap-4'>
                  <div className='flex items-start gap-4'>
                    <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-3xl shadow-lg shadow-slate-900/10 transition-transform duration-300 group-hover:scale-105'>
                      {project.icon}
                    </div>
                    <div>
                      <div className='mb-2 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700'>
                        Project {String(index + 1).padStart(2, '0')}
                      </div>
                      <h2 className='text-2xl font-bold leading-tight text-slate-900'>
                        {project.title}
                      </h2>
                    </div>
                  </div>
                </div>

                <p className='text-base leading-7 text-slate-600'>
                  {project.description}
                </p>

                <ProjectSection title='Technologies Used' icon={Layers3} items={project.technologies} />
                <ProjectSection title='Features' icon={Sparkles} items={project.features} />
                <ProjectSection title='Skills Demonstrated' icon={Code2} items={project.skills} />
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
    <div className='mt-6'>
      <div className='mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500'>
        <Icon size={14} /> {title}
      </div>
      <div className='flex flex-wrap gap-2'>
        {items.map((item) => (
          <span
            key={item}
            className='rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors duration-200 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-700'
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
