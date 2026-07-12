import { motion } from 'framer-motion';
import webCurious from '../../assets/images/web_curious.png';

export default function AboutJourney({ itemVariants, aboutContent }) {
  return (
    <motion.div variants={itemVariants} className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h2>
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="text-gray-700 space-y-4 flex-1">
          {aboutContent.journeyIntro}
        </div>
        <div className="w-full lg:w-80 shrink-0">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              src={webCurious}
              alt="Coding on laptop"
              className="relative w-full h-auto rounded-xl shadow-lg border border-gray-200 group-hover:shadow-2xl transition-shadow duration-300"
            />
          </motion.div>
        </div>
      </div>
      <div className="text-gray-700 space-y-4 mt-6">
        {aboutContent.journeyClosing}
      </div>
    </motion.div>
  );
}
