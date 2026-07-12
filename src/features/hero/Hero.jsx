import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, GitFork, Mail, MapPin } from 'lucide-react';

export default function Hero() {
  // Function to compute age starting from May 7, 2026 (age 22)
  const computeAge = () => {
    const startDate = new Date(2026, 4, 7);
    const currentDate = new Date();
    const startAge = 22;
    
    let age = startAge;
    let yearDiff = currentDate.getFullYear() - startDate.getFullYear();
    
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    const startMonth = startDate.getMonth();
    const startDay = startDate.getDate();
    
    if (currentMonth > startMonth || (currentMonth === startMonth && currentDay >= startDay)) {
      age = startAge + yearDiff;
    } else {
      age = startAge + yearDiff - 1;
    }
    
    return age;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { 
        type: 'spring', 
        stiffness: 80,
        damping: 15,
        duration: 1.2,
      },
    },
  };

  const age = computeAge();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMgMCA2LTIuNyA2LTZzLTIuNy02LTYtNi02IDIuNy02IDYgMi43IDYgNiA2em0wIDI0YzMuMyAwIDYtMi43IDYtNnMtMi43LTYtNi02LTYgMi43LTYgNiAyLjcgNiA2IDZ6bS0yNCAwYzMuMyAwIDYtMi43IDYtNnMtMi43LTYtNi02LTYgMi43LTYgNiAyLjcgNiA2IDZ6IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9Ii4wNCIvPjwvZz48L3N2Zz4=')] opacity-50"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-3">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 backdrop-blur-sm rounded-full text-blue-700 text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for opportunities
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
              >
                <span className="block">Hi, I'm</span>
                <motion.span
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent bg-[length:200%_auto]"
                  animate={{ 
                    backgroundPosition: ['0%', '100%', '0%'],
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  Jobel V. Golde
                </motion.span>
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="flex items-center gap-2 text-lg text-gray-700"
              >
                <span className="w-1 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
                <span className="font-small">IT Graduate</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">Building beautiful & functional web experiences</span>
              </motion.p>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-gray-600 leading-relaxed text-lg max-w-lg"
            >
              A passionate <span className="font-semibold text-blue-600">{age}</span>-year-old developer from 
              <span className="font-medium text-gray-700"> Sorsogon State University - BC</span> with expertise in 
              <span className="text-blue-600"> React</span>, 
              <span className="text-purple-600"> Vue.js</span>, 
              <span className="text-red-600"> Laravel</span>, 
              <span className="text-gray-800"> Next.js</span> and modern web technologies. 
              I create solutions that combine elegant design with practical functionality.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-3.5 overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-300"
              >
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 border-2 border-gray-200 hover:border-blue-500 text-gray-700 hover:text-blue-600 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 pt-4"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
              >
                <GitFork className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>Sorsogon, Philippines</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image - Enhanced */}
          <motion.div
            variants={imageContainerVariants}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl animate-pulse-slow"></div>
            
            <div className="relative">
              {/* Main Image Container */}
              <motion.div
                className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {/* Image with overlay */}
                <div className="relative w-full h-full">
                  <img
                    src="/images/me.jpg"
                    alt="Jobel V. Golde"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23e0e7ff" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="20" text-anchor="middle" dy=".3em" fill="%235b6fb5"%3EProfile Image%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  
                  {/* Animated Overlays */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"
                    animate={{ 
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 blur-2xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-pink-500 to-orange-500 rounded-full opacity-20 blur-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />

              {/* Floating Badges */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white/80 backdrop-blur-lg px-4 py-2 rounded-xl shadow-lg border border-white/50"
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
               
              </motion.div>

             
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Scroll</span>
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ArrowDown className="text-gray-400 w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}