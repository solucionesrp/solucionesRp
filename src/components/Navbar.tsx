import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      className="bg-gray-900/30 backdrop-blur-md text-white shadow-lg border-b border-gray-800/50 sticky top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a href="/" className="logo-gradient hover:opacity-80 transition-opacity duration-300 flex items-center space-x-2">
              <img src="/images/logo.png" alt="Soluciones RP Logo" className="h-14 w-14 rounded-full" />
              <span>Soluciones RP</span>
            </a>
          </motion.div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#servicios-tecnicos" className="text-gray-300 hover:bg-gray-700/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">Servicio Técnico PC</a>
              <a href="#reparaciones" className="text-gray-300 hover:bg-gray-700/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">Reparaciones Electrónicas</a>
              <a href="#paginas-web" className="text-gray-300 hover:bg-gray-700/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">Páginas Web</a>
              <a href="#apps-moviles" className="text-gray-300 hover:bg-gray-700/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">Aplicaciones Móviles</a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 