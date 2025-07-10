import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoPersonCircle } from 'react-icons/io5';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

interface UserDropdownProps {
  onlyLogout?: boolean;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ onlyLogout = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user, isAuthenticated, openLogin, openRegister, logout } = useAuth();
  const navigate = useNavigate();

  // Cerrar dropdown al hacer clic afuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Cerrar dropdown con ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleLoginClick = () => {
    setIsOpen(false);
    openLogin();
  };

  const handleRegisterClick = () => {
    setIsOpen(false);
    openRegister();
  };

  const handleLogoutClick = () => {
    setIsOpen(false);
    logout();
    navigate('/');
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Avatar visual (inicial o imagen)
  const renderAvatar = () => {
    if (isAuthenticated && user?.avatar) {
      return <img src={user.avatar} alt={user.name} className="w-6 h-6 rounded-full" />;
    }
    if (isAuthenticated && user?.name) {
      return (
        <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center font-bold text-white text-base">
          {user.name.charAt(0).toUpperCase()}
        </div>
      );
    }
    return <IoPersonCircle className="w-6 h-6 text-white" />;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* User Icon Button */}
      <motion.button
        onClick={toggleDropdown}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title={isAuthenticated ? `Usuario: ${user?.name}` : "Menú de usuario"}
      >
        {renderAvatar()}
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-48 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-2xl z-50"
          >
            <div className="py-2">
              {onlyLogout ? (
                <motion.button
                  onClick={handleLogoutClick}
                  className="w-full px-4 py-3 text-left text-white bg-red-500/90 hover:bg-red-600 shadow-md rounded-lg flex items-center space-x-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                  whileHover={{ scale: 1.03, x: 4 }}
                  transition={{ duration: 0.18 }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="font-semibold">Cerrar Sesión</span>
                </motion.button>
              ) : isAuthenticated ? (
                <>
                  {/* User Info siempre visible si está autenticado */}
                  <div className="px-4 py-3 border-b border-white/10">
                    <div className="flex items-center space-x-3">
                      {user?.avatar ? (
                        <img 
                          src={user.avatar} 
                          alt={user.name}
                          className="w-8 h-8 rounded-full"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center font-bold text-white text-base">
                          {user?.name?.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <div>
                        <p className="text-white font-medium text-sm">{user?.name}</p>
                        <p className="text-gray-400 text-xs">{user?.email}</p>
                      </div>
                    </div>
                  </div>
                  {/* Logout Option */}
                  <motion.button
                    onClick={handleLogoutClick}
                    className="w-full px-4 py-3 text-left text-red-400 hover:text-white hover:bg-red-600/80 transition-all duration-200 flex items-center space-x-3"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                    <span>Cerrar Sesión</span>
                  </motion.button>
                </>
              ) : (
                !onlyLogout && (
                  <>
                    {/* Login Option */}
                    <motion.button
                      onClick={handleLoginClick}
                      className="w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center space-x-3"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      <span>Iniciar Sesión</span>
                    </motion.button>

                    {/* Register Option */}
                    <motion.button
                      onClick={handleRegisterClick}
                      className="w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center space-x-3"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                      <span>Registrarse</span>
                    </motion.button>
                  </>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserDropdown; 