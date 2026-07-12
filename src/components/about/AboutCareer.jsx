import { motion } from 'framer-motion';

export default function AboutCareer({ itemVariants, aboutContent }) {
  return (
    <motion.div variants={itemVariants}>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Career Objectives</h2>
      <div className="text-gray-700 space-y-4">
        {aboutContent.career}
      </div>
    </motion.div>
  );
}
