import { motion } from 'framer-motion';

export default function AboutIntro({ itemVariants, aboutContent }) {
  return (
    <motion.div variants={itemVariants} className="mb-16 text-gray-700">
      <div className="text-lg leading-relaxed space-y-4">
        {aboutContent.intro}
      </div>
    </motion.div>
  );
}
