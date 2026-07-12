import { motion } from 'framer-motion';
import { useInfo } from '../hooks/useInfo';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css';
import { Code, Lightbulb, Target, Award } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'PHP', 'Java', 'C++'],
    icon: Code,
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Vue.js', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
    icon: Award,
  },
  {
    title: 'Backend',
    skills: ['Laravel', 'PHP', 'REST APIs', 'Authentication'],
    icon: Target,
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'XAMPP'],
    icon: Lightbulb,
  },
];

export default function About() {
  const { info, loading } = useInfo();

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600">
            Discover my journey, skills, and passion for technology
          </p>
        </div>
      </motion.section>

      {/* Content Section */}
      {loading ? (
        <div className="text-center py-20">
          <p className="text-gray-600">Loading...</p>
        </div>
      ) : info ? (
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
          {/* Introduction */}
          <motion.div
            variants={itemVariants}
            className="prose prose-lg max-w-none mb-16 text-gray-700"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                h2: ({ node, ...props }) => (
                  <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="text-gray-700 leading-relaxed mb-4" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="text-gray-700" {...props} />
                ),
                strong: ({ node, ...props }) => (
                  <strong className="font-semibold text-gray-900" {...props} />
                ),
                a: ({ node, ...props }) => (
                  <a className="text-blue-600 hover:text-blue-800 underline" {...props} />
                ),
              }}
            >
              {info.intro}
            </ReactMarkdown>
          </motion.div>

          {/* Journey Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                  p: ({ node, ...props }) => (
                    <p className="text-gray-700 leading-relaxed mb-4" {...props} />
                  ),
                  strong: ({ node, ...props }) => (
                    <strong className="font-semibold text-gray-900" {...props} />
                  ),
                }}
              >
                {info.journey}
              </ReactMarkdown>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.title}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="text-blue-600" size={24} />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Strengths Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Strengths</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                  p: ({ node, ...props }) => (
                    <p className="text-gray-700 leading-relaxed mb-4" {...props} />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700" {...props} />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="text-gray-700" {...props} />
                  ),
                  strong: ({ node, ...props }) => (
                    <strong className="font-semibold text-gray-900" {...props} />
                  ),
                }}
              >
                {info.strengths}
              </ReactMarkdown>
            </div>
          </motion.div>
        </motion.section>
      ) : null}
    </div>
  );
}
