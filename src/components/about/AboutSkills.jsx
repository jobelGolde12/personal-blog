import { motion } from 'framer-motion';

export default function AboutSkills({ itemVariants, skillCategories }) {
  return (
    <motion.div variants={itemVariants} className="mb-20">
      <h2 className="editorial-section-title">Technical Skills</h2>
      <div className="grid gap-5 md:grid-cols-2">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="editorial-card group p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-border text-accent transition-colors duration-300 group-hover:border-accent/40">
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <h3 className="font-display text-xl font-medium text-text">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="editorial-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
