import { motion } from 'framer-motion';

export default function AboutTechnicalExpertise({ itemVariants, aboutContent }) {
  const skills = [
    { name: 'React', level: 90, color: '#61DAFB' },
    { name: 'Vue.js', level: 85, color: '#42B883' },
    { name: 'Laravel', level: 80, color: '#FF2D20' },
    { name: 'TypeScript', level: 75, color: '#3178C6' },
    { name: 'Tailwind CSS', level: 95, color: '#06B6D4' },
    { name: 'Node.js', level: 70, color: '#339933' },
  ];

  return (
    <motion.div variants={itemVariants} className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        <h2 className="text-2xl font-light text-gray-900 tracking-tight">
          Technical <span className="font-semibold">Expertise</span>
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">{skill.name}</span>
              <span className="text-xs text-gray-400">{skill.level}%</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: skill.color }}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Description */}
      <div className="text-gray-600 leading-relaxed text-sm border-l-2 border-blue-600 pl-4">
        {aboutContent.technicalExpertise}
      </div>
    </motion.div>
  );
}