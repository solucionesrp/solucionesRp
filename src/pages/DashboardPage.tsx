import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

const DashboardPage: React.FC = () => {
  const { user, isAuthenticated } = useAuth();

  // Usar datos de prueba si no hay usuario autenticado
  const displayUser = user || {
    id: 'demo-1',
    name: 'Usuario de Prueba',
    email: 'demo@solucionesrp.com',
    avatar: undefined
  };

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-gray-400 mb-6">
            Dashboard
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Bienvenido a tu panel de control, {displayUser.name}
          </p>
          {!isAuthenticated && (
            <motion.div 
              className="mt-4 inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              🧪 Modo de Prueba - Datos simulados
            </motion.div>
          )}
        </motion.div>

        {/* Dashboard Content */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Stats Card */}
          <motion.div 
            className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-4xl mb-4 text-center text-purple-300">
              📊
            </div>
            <h3 className="text-xl font-bold text-white mb-3 text-center">
              Estadísticas
            </h3>
            <p className="text-gray-300 text-center mb-4">
              Visualiza el rendimiento de tus servicios
            </p>
            <div className="text-center">
              <span className="text-2xl font-bold text-green-400">+15%</span>
              <p className="text-sm text-gray-400">Este mes</p>
            </div>
          </motion.div>

          {/* Services Card */}
          <motion.div 
            className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-4xl mb-4 text-center text-purple-300">
              🔧
            </div>
            <h3 className="text-xl font-bold text-white mb-3 text-center">
              Servicios Activos
            </h3>
            <p className="text-gray-300 text-center mb-4">
              Gestiona tus servicios técnicos
            </p>
            <div className="text-center">
              <span className="text-2xl font-bold text-blue-400">8</span>
              <p className="text-sm text-gray-400">Servicios</p>
            </div>
          </motion.div>

          {/* Profile Card */}
          <motion.div 
            className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-4xl mb-4 text-center text-purple-300">
              👤
            </div>
            <h3 className="text-xl font-bold text-white mb-3 text-center">
              Clientes
            </h3>
            <p className="text-gray-300 text-center mb-4">
              Gestiona tu base de clientes
            </p>
            <div className="text-center">
              <span className="text-2xl font-bold text-orange-400">24</span>
              <p className="text-sm text-gray-400">Clientes</p>
            </div>
          </motion.div>
        </motion.div>

        {/* User Info Section */}
        <motion.div 
          className="mt-16 bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Información del Usuario
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">
                Nombre
              </label>
              <p className="text-white text-lg">{displayUser.name}</p>
            </div>
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">
                Email
              </label>
              <p className="text-white text-lg">{displayUser.email}</p>
            </div>
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">
                ID de Usuario
              </label>
              <p className="text-white text-lg">{displayUser.id}</p>
            </div>
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">
                Estado
              </label>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-300 border border-green-500/30">
                Activo
              </span>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Acciones Rápidas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.button
              className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 text-left"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-lg font-semibold text-white mb-2">Nuevo Servicio</h3>
              <p className="text-gray-300 text-sm">Crear un nuevo servicio técnico</p>
            </motion.button>

            <motion.button
              className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 text-left"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-lg font-semibold text-white mb-2">Agregar Cliente</h3>
              <p className="text-gray-300 text-sm">Registrar un nuevo cliente</p>
            </motion.button>

            <motion.button
              className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 text-left"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-semibold text-white mb-2">Ver Reportes</h3>
              <p className="text-gray-300 text-sm">Analizar estadísticas</p>
            </motion.button>

            <motion.button
              className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 text-left"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Configuración</h3>
              <p className="text-gray-300 text-sm">Ajustar preferencias</p>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage; 