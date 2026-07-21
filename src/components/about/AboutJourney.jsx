import { motion } from 'framer-motion';
import webCurious from '../../assets/images/web_curious.png';

export default function AboutJourney({ itemVariants, aboutContent }) {
  return (
    <motion.div variants={itemVariants} className="mb-20">
      <h2 className="editorial-section-title">My Journey</h2>
      <div className="flex flex-col items-start gap-10 lg:flex-row">
        <div className="editorial-content flex-1">
          {aboutContent.journeyIntro}
        </div>
        <div className="w-full shrink-0 lg:w-80">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="group relative"
          >
            <div className="absolute -inset-3 rounded-sm bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative overflow-hidden rounded-sm border border-border shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              <img
                src={webCurious}
                alt="Coding on laptop"
                className="relative h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="editorial-content mt-8">
        {aboutContent.journeyClosing}
      </div>
    </motion.div>
  );
}
