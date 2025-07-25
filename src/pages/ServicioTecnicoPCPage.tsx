import React from 'react';
import { motion } from 'framer-motion';
import { FaTools, FaDesktop, FaHdd, FaMemory, FaDownload, FaShieldAlt, FaWhatsapp, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  price?: string;
}

const ServicioTecnicoPCPage: React.FC = () => {
  const navigate = useNavigate();

  const services: ServiceData[] = [
    {
      id: 'formateo',
      title: 'Formateo de Equipos',
      description: 'Formateo completo y reinstalación del sistema operativo para optimizar el rendimiento de tu computador.',
      icon: <FaDesktop className="w-8 h-8" />,
      features: [
        'Formateo completo del disco duro',
        'Instalación limpia del sistema operativo',
        'Instalación de drivers actualizados',
        'Configuración básica del sistema',
        'Respaldo de datos importantes (opcional)'
      ],
      price: 'Desde $25.000'
    },
    {
      id: 'software',
      title: 'Instalación de Software',
      description: 'Instalación y configuración de programas, aplicaciones y software especializado.',
      icon: <FaDownload className="w-8 h-8" />,
      features: [
        'Instalación de programas básicos',
        'Software de oficina (Office, LibreOffice)',
        'Antivirus y software de seguridad',
        'Programas especializados',
        'Configuración y activación'
      ],
      price: 'Desde $15.000'
    },
    {
      id: 'hardware',
      title: 'Reparación de Hardware',
      description: 'Diagnóstico y reparación de componentes físicos del computador.',
      icon: <FaTools className="w-8 h-8" />,
      features: [
        'Diagnóstico de problemas',
        'Reparación de tarjeta madre',
        'Cambio de fuente de poder',
        'Reparación de pantalla',
        'Reemplazo de componentes'
      ],
      price: 'Desde $30.000'
    },
    {
      id: 'limpieza',
      title: 'Limpieza Interna/Externa',
      description: 'Limpieza profunda del equipo para mejorar el rendimiento y prolongar su vida útil.',
      icon: <FaShieldAlt className="w-8 h-8" />,
      features: [
        'Limpieza de polvo interno',
        'Limpieza de ventiladores',
        'Cambio de pasta térmica',
        'Limpieza externa del equipo',
        'Optimización del sistema'
      ],
      price: 'Desde $20.000'
    },
    {
      id: 'upgrade',
      title: 'Upgrade de Componentes',
      description: 'Mejora del rendimiento mediante la actualización de RAM, SSD, y otros componentes.',
      icon: <FaMemory className="w-8 h-8" />,
      features: [
        'Instalación de RAM adicional',
        'Cambio a SSD',
        'Upgrade de procesador',
        'Instalación de tarjeta gráfica',
        'Optimización del sistema'
      ],
      price: 'Desde $35.000'
    },
    {
      id: 'recuperacion',
      title: 'Recuperación de Datos',
      description: 'Recuperación de archivos perdidos o eliminados accidentalmente.',
      icon: <FaHdd className="w-8 h-8" />,
      features: [
        'Recuperación de archivos eliminados',
        'Recuperación de particiones',
        'Recuperación de discos dañados',
        'Recuperación de fotos y videos',
        'Respaldo de datos recuperados'
      ],
      price: 'Desde $40.000'
    }
  ];

  const handleServiceRequest = (serviceId: string) => {
    navigate('/contacto', { 
      state: { 
        selectedService: serviceId,
        serviceName: services.find(s => s.id === serviceId)?.title 
      } 
    });
  };

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Background Pattern Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-800/20 via-transparent to-gray-900/30"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-black via-transparent to-gray-800/10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(64,64,64,0.1),transparent_50%)]"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(32,32,32,0.15),transparent_50%)]"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        <main>
          {/* Header Section */}
          <section className="pt-24 pb-12 text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold text-gray-400 mb-6">
                <span className="bg-gradient-to-r from-mostaza to-azul bg-clip-text text-transparent">Servicio Técnico</span>{" "}
                <span className="text-azul">PC</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
                Reparación, mantenimiento y optimización de computadores. <span className="text-azul">Solucionamos cualquier problema</span> y dejamos tu equipo funcionando como nuevo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  onClick={() => navigate('/contacto')}
                  className="bg-gradient-to-r from-mostaza to-azul text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-mostaza/90 hover:to-azul/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Solicitar Servicio
                </motion.button>
                <motion.button
                  onClick={() => window.open('https://wa.me/56993888939?text=Hola,%20necesito%20servicio%20técnico%20para%20mi%20PC', '_blank')}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>WhatsApp</span>
                </motion.button>
              </div>
            </motion.div>
          </section>

          {/* Services Grid */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Nuestros Servicios</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Ofrecemos una amplia gama de servicios técnicos para mantener tu computador en óptimas condiciones.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-azul to-mostaza rounded-xl mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    {service.price && (
                      <div className="text-mostaza font-semibold text-lg mb-4">
                        {service.price}
                      </div>
                    )}
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-azul mb-3">Incluye:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-300 flex items-start">
                          <span className="text-mostaza mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    onClick={() => handleServiceRequest(service.id)}
                    className="w-full bg-gradient-to-r from-gray-700/50 to-gray-800/50 hover:from-gray-600/50 hover:to-gray-700/50 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 border border-gray-600/50 hover:border-gray-500/50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Solicitar {service.title}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center"
            >
              <h2 className="text-2xl font-bold text-white mb-4">¿No encuentras lo que buscas?</h2>
              <p className="text-gray-300 mb-6">
                Contáctanos y te ayudaremos a encontrar la solución perfecta para tu computador.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={() => navigate('/contacto')}
                  className="bg-mostaza hover:bg-mostaza/90 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Consulta Personalizada
                </motion.button>
                <motion.button
                  onClick={() => navigate('/')}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaArrowLeft className="w-4 h-4" />
                  <span>Volver al Inicio</span>
                </motion.button>
              </div>
            </motion.div>
          </section>
        </main>
        
        <Footer />
        <WhatsAppButton phoneNumber="+56993888939" />
      </div>
    </div>
  );
};

export default ServicioTecnicoPCPage; 