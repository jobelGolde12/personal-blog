import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Building a Modern Web Application with React 19',
    excerpt:
      'Explore the latest features in React 19 and how to build scalable web applications with the newest tools and best practices.',
    author: 'Jobel V. Golde',
    date: '2024-12-15',
    category: 'React',
    readTime: '8 min read',
  },
  {
    title: 'Mastering Tailwind CSS: From Basics to Advanced',
    excerpt:
      'A comprehensive guide to using Tailwind CSS efficiently, including custom utilities, animations, and responsive design patterns.',
    author: 'Jobel V. Golde',
    date: '2024-12-10',
    category: 'CSS',
    readTime: '6 min read',
  },
  {
    title: 'The Art of Writing Clean, Maintainable Code',
    excerpt:
      'Best practices for writing code that is easy to understand, maintain, and scale. Learn about naming conventions, architecture, and more.',
    author: 'Jobel V. Golde',
    date: '2024-12-05',
    category: 'Best Practices',
    readTime: '10 min read',
  },
  {
    title: 'Full-Stack Development with Laravel and Vue.js',
    excerpt:
      'Building complete web applications with Laravel backend and Vue.js frontend. From setup to deployment with Inertia.js.',
    author: 'Jobel V. Golde',
    date: '2024-11-30',
    category: 'Full Stack',
    readTime: '12 min read',
  },
  {
    title: 'Performance Optimization Tips for React Applications',
    excerpt:
      'Techniques to optimize your React apps including code splitting, memoization, lazy loading, and performance monitoring.',
    author: 'Jobel V. Golde',
    date: '2024-11-25',
    category: 'Performance',
    readTime: '7 min read',
  },
  {
    title: 'Understanding API Design and REST Principles',
    excerpt:
      'Learn how to design robust and scalable APIs using REST principles, proper status codes, error handling, and documentation.',
    author: 'Jobel V. Golde',
    date: '2024-11-20',
    category: 'Backend',
    readTime: '9 min read',
  },
];

export default function Blog() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const formatDate = (dateStr) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
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
          Blog & Articles
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Insights, tutorials, and thoughts on web development
        </p>
      </motion.section>

      {/* Blog Posts */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="space-y-6">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={idx}
              variants={itemVariants}
              whileHover={{ x: 8 }}
              className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100 group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>

                  <h2 className="text-2xl md:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                </div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex-shrink-0 flex items-center gap-2 text-blue-600 font-semibold"
                >
                  Read More
                  <ArrowRight size={20} />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
          >
            Load More Articles
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
}
