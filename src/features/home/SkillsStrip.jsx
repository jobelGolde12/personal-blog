import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 90 },
  { name: 'Vue.js', level: 85 },
  { name: 'Next.js', level: 80 },
  { name: 'Laravel', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Node.js', level: 70 },
  { name: 'MySQL', level: 75 },
];

export default function SkillsStrip() {
  return (
    <section className="py-16 md:py-20">
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <div className="editorial-eyebrow mx-auto mb-4">Core Technologies</div>
          <h2 className="editorial-section-title">Skills & Expertise</h2>
          <p className="editorial-lead mx-auto">
            Technologies I use to build modern, scalable web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="editorial-card p-4 text-center cursor-pointer"
            >
              <div className="text-lg font-medium text-text mb-2">{skill.name}</div>
              <div className="h-1 bg-border rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.05 }}
                />
              </div>
              <div className="text-xs text-muted mt-2">{skill.level}%</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
