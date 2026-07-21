import { motion } from 'framer-motion';

export default function AboutStrengths({ itemVariants, aboutContent }) {
  return (
    <motion.div variants={itemVariants} className="mb-20">
      <h2 className="editorial-section-title">My Strengths</h2>
      <div className="editorial-content">
        {aboutContent.strengths}
      </div>
    </motion.div>
  );
}
