import { motion } from 'framer-motion';

export default function AboutStrengths({ itemVariants, aboutContent }) {
  return (
    <motion.div variants={itemVariants} className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">My Strengths</h2>
      <div className="text-gray-700 space-y-4">
        {aboutContent.strengths}
      </div>
    </motion.div>
  );
}
