import { motion } from 'framer-motion';

export default function AboutProjects({ itemVariants, aboutContent }) {
  return (
    <motion.div variants={itemVariants} className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Academic Projects</h2>
      <div className="text-gray-700">
        {aboutContent.projects}
      </div>
    </motion.div>
  );
}
