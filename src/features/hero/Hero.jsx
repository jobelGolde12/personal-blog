import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <motion.p
                className="text-blue-600 font-semibold text-lg"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Welcome to my portfolio
              </motion.p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                <motion.span
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ['0%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Jobel V. Golde
                </motion.span>
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="text-xl text-gray-700">
              <span className="font-semibold">IT Graduate</span> | Building beautiful and functional web experiences
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed">
              A passionate 22-year-old developer from Sorsogon State University with expertise in React, Vue.js, Laravel, and modern web technologies. I create solutions that combine elegant design with practical functionality.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-4"
            >
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                View My Work
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div variants={imageVariants} className="relative">
            <motion.div
              className="relative w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl overflow-hidden"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <img
                src="/images/me.jpg"
                alt="Jobel V. Golde"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23e0e7ff" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="20" text-anchor="middle" dy=".3em" fill="%235b6fb5"%3EProfile Image%3C/text%3E%3C/svg%3E';
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-gray-400 w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
