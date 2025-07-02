import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-mostaza/50 transition-all duration-300 hover:shadow-xl shadow-lg group">
      <div className="text-4xl mb-4 text-center text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-purple-100 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-300 text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const WhyChooseUsSection: React.FC = () => {
  const features = [
    {
      title: "Desarrollo Rápido",
      description: "Entregamos soluciones a tiempo sin perder calidad.",
      icon: "⚡"
    },
    {
      title: "Código Seguro",
      description: "Aplicamos buenas prácticas de seguridad desde el inicio.",
      icon: "🔒"
    },
    {
      title: "Alto Rendimiento",
      description: "Optimizamos cada parte para mayor velocidad y estabilidad.",
      icon: "🚀"
    },
    {
      title: "Diseño Moderno",
      description: "Interfaces atractivas y cómodas para el usuario.",
      icon: "🎨"
    },
    {
      title: "Reparación Profesional",
      description: "Diagnóstico y reparación precisa de equipos y placas.",
      icon: "🔧"
    },
    {
      title: "Soporte 24/7",
      description: "Estamos disponibles cuando más lo necesites.",
      icon: "🕒"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
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
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Descubre las ventajas que nos hacen únicos en el mercado tecnológico
          </p>
        </motion.div>
        
        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection; 