import React from 'react';
import { motion } from 'framer-motion';

const TechnologiesSection: React.FC = () => {
  const technologies = [
    "React",
    "Vue.js", 
    "Angular",
    "Node.js",
    "Python",
    "Flutter",
    "React Native",
    "Swift",
    "Kotlin",
    "PHP",
    "PostgreSQL",
    "MongoDB"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-gray-400 mb-6">
            Tecnologías que Dominamos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Utilizamos las herramientas más modernas y eficientes del mercado.
          </p>
        </motion.div>
        
        {/* Technologies Grid */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/40 backdrop-blur-sm text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-700/50 border border-gray-700/50 hover:border-gray-600/50 cursor-pointer"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <span className="text-lg font-medium">{tech}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection; 