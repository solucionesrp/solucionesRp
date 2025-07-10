import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import UserDropdown from './UserDropdown';
import MobileMenu from './MobileMenu';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { href: '#servicios-tecnicos', label: 'Servicio Técnico PC' },
    { href: '#reparaciones', label: 'Reparaciones Electrónicas' },
    { href: '#paginas-web', label: 'Páginas Web' },
    { href: '#apps-moviles', label: 'Aplicaciones Móviles' },
  ];

  return (
    <>
      <motion.nav 
        className="bg-gray-900/30 backdrop-blur-md text-white shadow-lg border-b border-gray-800/50 sticky top-0 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/" className="logo-gradient hover:opacity-80 transition-opacity duration-300 flex items-center space-x-2">
                <img src="/images/logo.png" alt="Soluciones RP Logo" className="h-14 w-14 rounded-full" />
                <span className="hidden sm:block">Soluciones RP</span>
              </Link>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-300 hover:bg-gray-700/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              {/* Botón Zona de Usuario siempre visible */}
              <button
                onClick={() => window.location.href = '/reparaciones'}
                className="hidden md:inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow transition-all duration-300"
                style={{ marginRight: '0.5rem' }}
              >
                Zona de Usuario
              </button>
              {/* Desktop User Dropdown */}
              <div className="hidden md:block">
                <UserDropdown />
              </div>
              {/* Mobile Menu Button */}
              <motion.button
                onClick={handleMobileMenuToggle}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Menú"
              >
                <FaBars className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        items={menuItems.map(item => ({ ...item, icon: null }))}
      />
    </>
  );
};

export default Navbar; 