import { motion } from 'framer-motion';
import webCurious from '../../assets/images/web_curious.png';

export default function AboutJourney({ itemVariants, aboutContent }) {
  return (
    <motion.section variants={itemVariants} className="mb-24">
      <h2 className="editorial-section-title mb-10">
        My Journey
      </h2>

      {/* Main Content */}
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
        {/* Journey Intro */}
        <div className="space-y-6">
          <div className="editorial-content">
            {aboutContent.journeyIntro}
          </div>
        </div>

        {/* Image */}
        <motion.figure
          whileHover={{ y: -5 }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group"
        >
          <div className="relative overflow-hidden rounded-sm border border-border bg-card shadow-[0_18px_55px_rgba(0,0,0,0.28)]">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={webCurious}
                alt="Early curiosity about web development"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>

            {/* Image Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>

          {/* Editorial Label */}
          <figcaption className="mt-4 border-l-2 border-accent pl-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
              The Beginning
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Every developer starts with curiosity. Mine began by exploring
              how websites are designed and eventually grew into building
              complete web applications.
            </p>
          </figcaption>
        </motion.figure>
      </div>

      {/* Journey Closing */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-16"
      >
        <div className="relative overflow-hidden rounded-sm border border-border bg-card/40 px-8 py-8 backdrop-blur-sm">
          {/* Accent */}
          <div className="absolute left-0 top-0 h-full w-1 bg-accent" />

          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
              Continuing Forward
            </span>
          </div>

          <div className="editorial-content relative z-10">
            {aboutContent.journeyClosing}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}