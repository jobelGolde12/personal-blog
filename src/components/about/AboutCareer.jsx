import { motion } from 'framer-motion';

export default function AboutCareer({ itemVariants, aboutContent }) {
  return (
    <motion.div variants={itemVariants}>
      <h2 className="editorial-section-title">Career Objectives</h2>
      <div className="editorial-content">
        {aboutContent.career}
      </div>
    </motion.div>
  );
}
