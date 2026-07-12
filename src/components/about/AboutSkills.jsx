import { motion } from 'framer-motion';

export default function AboutSkills({ itemVariants, skillCategories }) {
  return (
    <motion.div variants={itemVariants} className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon className="text-blue-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
                  >
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
