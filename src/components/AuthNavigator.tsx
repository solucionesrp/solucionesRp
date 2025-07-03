import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const AuthNavigator: React.FC = () => {
  const [currentView, setCurrentView] = useState<'login' | 'register'>('login');

  return (
    <div>
      {currentView === 'login' ? (
        <Login onSwitchToRegister={() => setCurrentView('register')} />
      ) : (
        <Register onSwitchToLogin={() => setCurrentView('login')} />
      )}
      
      {/* Floating Navigation Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setCurrentView(currentView === 'login' ? 'register' : 'login')}
          className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          {currentView === 'login' ? 'Registrarse' : 'Iniciar Sesión'}
        </button>
      </div>
    </div>
  );
};

export default AuthNavigator; 