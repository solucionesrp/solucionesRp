import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

const TestLogin: React.FC = () => {
  const { login, isAuthenticated, user } = useAuth();

  const handleTestLogin = () => {
    const testUser = {
      id: '1',
      name: 'Usuario de Prueba',
      email: 'test@example.com',
      avatar: undefined
    };
    login(testUser);
  };

  if (isAuthenticated) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <motion.div 
          className="bg-green-600/90 backdrop-blur-sm rounded-lg p-4 border border-green-500/50 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-white text-sm font-medium">
            ✅ Conectado como: {user?.name}
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.button
        onClick={handleTestLogin}
        className="bg-purple-600/90 backdrop-blur-sm hover:bg-purple-500/90 text-white px-4 py-2 rounded-lg border border-purple-500/50 shadow-lg transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        🔑 Login de Prueba
      </motion.button>
    </div>
  );
};

export default TestLogin; 