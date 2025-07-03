import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { IoPersonCircle } from 'react-icons/io5';
import { useAuth } from '../hooks/useAuth';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { openLogin, openRegister } = useAuth();

  // Cerrar con ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevenir scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const menuItems = [
    { href: '#servicios-tecnicos', label: 'Servicio Técnico PC' },
    { href: '#reparaciones', label: 'Reparaciones Electrónicas' },
    { href: '#paginas-web', label: 'Páginas Web' },
    { href: '#apps-moviles', label: 'Aplicaciones Móviles' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={handleBackdropClick}
          />

          {/* Mobile Menu Panel */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ 
              type: "spring",
              damping: 25,
              stiffness: 200
            }}
            className="fixed left-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-lg border-r border-white/10 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <img src="/images/logo.png" alt="Soluciones RP Logo" className="h-8 w-8 rounded-full" />
                <span className="text-white font-semibold">Soluciones RP</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {/* Navigation Links */}
              <nav className="p-6">
                <div className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1 
                      }}
                      className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>

                {/* User Access Section */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: menuItems.length * 0.1 + 0.1
                  }}
                  className="mt-6 pt-6 border-t border-white/10"
                >
                  <div className="space-y-3">
                    <h3 className="text-gray-400 text-sm font-medium px-4">Acceso de usuario</h3>
                    
                    {/* Login Button */}
                    <motion.button
                      onClick={() => {
                        onClose();
                        openLogin();
                      }}
                      className="w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 flex items-center space-x-3"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IoPersonCircle className="w-5 h-5" />
                      <span>Iniciar Sesión</span>
                    </motion.button>

                    {/* Register Button */}
                    <motion.button
                      onClick={() => {
                        onClose();
                        openRegister();
                      }}
                      className="w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 flex items-center space-x-3"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                      <span>Registrarse</span>
                    </motion.button>
                  </div>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu; 