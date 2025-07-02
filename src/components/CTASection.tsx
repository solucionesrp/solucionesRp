import React from 'react';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl font-bold text-gray-400 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ¿Listo para Comenzar?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Convierte tu idea en una solución completa: <span className="text-azul">desarrollo de aplicación web</span> o <span className="text-mostaza">móvil o reparar tu equipo</span>.
          </motion.p>
        </motion.div>
        
        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button 
            className="bg-mostaza/80 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-mostaza/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[200px]"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
          >
            Solicitar Cotización
          </motion.button>
          
          <motion.button 
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-gray-600 hover:border-gray-500 min-w-[200px]"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
          >
            Agendar Consulta
          </motion.button>
        </motion.div>
        
        {/* Additional Info */}
        <motion.div 
          className="mt-12 text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-sm">
            Respuesta en menos de 24 horas • Consulta gratuita • Presupuesto sin compromiso
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection; 