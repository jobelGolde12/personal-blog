import { motion } from 'framer-motion';

export default function AboutIntro({ itemVariants, aboutContent }) {
  return (
    <motion.div variants={itemVariants} className="mb-20">
      <div className="editorial-content text-lg">
        {aboutContent.intro}
      </div>
    </motion.div>
  );
}
