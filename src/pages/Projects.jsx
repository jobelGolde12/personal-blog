import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Personal Blog & Portfolio',
    description:
      'A premium interactive personal blog built with React, Vite, and Tailwind CSS. Features smooth animations, responsive design, and dynamic content loading.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    image: '🚀',
    featured: true,
  },
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with product catalog, shopping cart, and payment integration. Built with Vue.js and Laravel backend.',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Stripe API'],
    image: '🛍️',
  },
  {
    title: 'Task Management App',
    description:
      'Collaborative task management tool with real-time updates and user authentication. Features drag-and-drop interface and project organization.',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'React Query'],
    image: '✓',
  },
  {
    title: 'Blog CMS System',
    description:
      'Content management system for creating and managing blog posts. Includes rich text editor, scheduling, and analytics dashboard.',
    technologies: ['Laravel', 'MySQL', 'Bootstrap', 'PHP'],
    image: '📝',
  },
  {
    title: 'Weather Dashboard',
    description:
      'Real-time weather application with location-based forecasts and detailed meteorological data visualization.',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS Grid'],
    image: '🌤️',
  },
  {
    title: 'Social Media Analytics',
    description:
      'Analytics dashboard for tracking social media metrics with interactive charts and performance insights.',
    technologies: ['React', 'D3.js', 'Tailwind CSS', 'Express.js'],
    image: '📊',
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Projects & Portfolio
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Showcase of my recent work and technical projects
        </p>
      </motion.section>

      {/* Projects Grid */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        {/* Featured Project */}
        <motion.div
          variants={itemVariants}
          className="mb-12 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            <div className="text-6xl text-center md:text-left">
              {projects[0].image}
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Featured
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {projects[0].title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {projects[0].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[0].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink size={18} /> View Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  <ExternalLink size={18} /> Code
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(1).map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="text-5xl mb-4">{project.image}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <ExternalLink size={16} /> View
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  <ExternalLink size={16} /> Code
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
