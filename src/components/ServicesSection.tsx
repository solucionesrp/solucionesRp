import React from 'react';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Servicio Técnico PC",
      description: "Reparación y mantenimiento de computadoras, laptops y equipos informáticos.",
      icon: "💻",
      color: "border-mostaza"
    },
    {
      title: "Reparaciones Electrónicas",
      description: "Servicio especializado en reparación de dispositivos electrónicos y componentes.",
      icon: "🔧",
      color: "border-azul"
    },
    {
      title: "Páginas Web",
      description: "Desarrollo de sitios web modernos, responsivos y optimizados para SEO.",
      icon: "🌐",
      color: "border-mostaza"
    },
    {
      title: "Aplicaciones Móviles",
      description: "Creación de aplicaciones móviles nativas y multiplataforma.",
      icon: "📱",
      color: "border-azul"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  color={service.color}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 