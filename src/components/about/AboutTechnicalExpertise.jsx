import { motion } from 'framer-motion';

export default function AboutTechnicalExpertise({ itemVariants, aboutContent }) {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'Vue.js', level: 85 },
    { name: 'Laravel', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Node.js', level: 70 },
  ];

  return (
    <motion.div variants={itemVariants} className="mb-20">
      <div className="mb-8 flex items-center gap-3">
        <div className="h-px w-10 bg-accent/70" />
        <h2 className="font-display text-2xl font-light tracking-tight text-text">
          Technical <span className="font-medium">Expertise</span>
        </h2>
      </div>

      <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.45 }}
            className="group"
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-text-secondary">{skill.name}</span>
              <span className="text-xs tracking-wider text-muted">{skill.level}%</span>
            </div>
            <div className="h-px overflow-hidden bg-border">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="editorial-content border-l border-accent/40 pl-5">
        {aboutContent.technicalExpertise}
      </div>
    </motion.div>
  );
}
