import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile';

interface ServiceDetailCardProps {
  title: string;
  description: string;
  technologies: string;
  features: string;
  icon: string;
  buttonColor: string;
}

const ServiceDetailCard: React.FC<ServiceDetailCardProps> = ({ 
  title, 
  description, 
  technologies, 
  features, 
  icon, 
  buttonColor 
}) => {
  const navigate = useNavigate();

  const handleMoreInfo = () => {
    if (title === "Electrónica y Servicio Técnico") {
      navigate('/servicio-tecnico-pc');
    } else if (title === "Apps Móviles") {
      navigate('/apps-moviles');
    } else if (title === "Desarrollo Web") {
      navigate('/paginas-web');
    }
    // Para otros servicios, se puede agregar más lógica aquí
  };

  return (
    <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-xl shadow-lg min-h-[500px] flex flex-col">
      <div className="text-4xl mb-6 text-center text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-purple-100 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-300 mb-6 text-center flex-grow">{description}</p>
      
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-mostaza mb-3">Tecnologías:</h4>
        <p className="text-sm text-gray-400 mb-4">{technologies}</p>
      </div>
      
      <div className="mb-8">
        <h4 className="text-sm font-semibold text-azul mb-3">Características:</h4>
        <p className="text-sm text-gray-400 mb-4">{features}</p>
      </div>
      
      <button 
        onClick={handleMoreInfo}
        className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${buttonColor} mt-auto shadow-lg hover:shadow-xl active:scale-95`}
      >
        Más información
      </button>
    </div>
  );
};

const ServicesDetailedSection: React.FC = () => {
  const isMobile = useIsMobile();
  const services = [
    {
      title: "Desarrollo Web",
      description: "Aplicaciones modernas, personalizadas y seguras para tu negocio.",
      technologies: "HTML, CSS, JS, PHP, React, Laravel",
      features: "Paneles administrativos, tiendas online, integración con bases de datos y APIs.",
      icon: "🌐",
      buttonColor: "bg-mostaza hover:bg-yellow-600 text-negro"
    },
    {
      title: "Apps Móviles",
      description: "Creamos apps para Android e iOS adaptadas a tus ideas.",
      technologies: "React Native, Flutter",
      features: "Funciones como GPS, cámara, escáner y publicación en Google Play.",
      icon: "📱",
      buttonColor: "bg-azul hover:bg-blue-700 text-blanco"
    },
    {
      title: "Electrónica y Servicio Técnico",
      description: "Reparación de notebooks, PCs y diagnóstico electrónico.",
      technologies: "Hardware, Software, Redes",
      features: "Formateo, instalación de software, cambios de componentes y redes.",
      icon: "🔧",
      buttonColor: "bg-negro hover:bg-gray-800 text-blanco border border-gray-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.1,
        delayChildren: isMobile ? 0.02 : 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: isMobile ? 10 : 50, scale: 0.98 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: isMobile ? 0.25 : 0.4
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
          <h2 className="text-4xl font-bold text-gray-400 mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ofrecemos soluciones <span className="text-mostaza">integrales en software</span> y <span className="text-azul">electrónica</span> para cubrir todas tus necesidades tecnológicas.
          </p>
        </motion.div>
        
        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                scale: isMobile ? 1.01 : 1.03,
                y: isMobile ? -2 : -5,
                transition: { duration: isMobile ? 0.1 : 0.2 }
              }}
            >
              <ServiceDetailCard
                title={service.title}
                description={service.description}
                technologies={service.technologies}
                features={service.features}
                icon={service.icon}
                buttonColor={service.buttonColor}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesDetailedSection; 