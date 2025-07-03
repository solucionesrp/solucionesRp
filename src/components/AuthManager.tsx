import React, { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

interface AuthManagerProps {
  children: React.ReactNode;
}

export const AuthContext = React.createContext<{
  openLogin: () => void;
  openRegister: () => void;
  closeAuth: () => void;
}>({
  openLogin: () => {},
  openRegister: () => {},
  closeAuth: () => {},
});

const AuthManager: React.FC<AuthManagerProps> = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const openLogin = () => {
    setShowLoginModal(true);
  };

  const openRegister = () => {
    setShowRegisterModal(true);
  };

  const closeAuth = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
  };

  const handleSwitchToRegister = () => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  };

  const handleSwitchToLogin = () => {
    setShowRegisterModal(false);
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };

  return (
    <AuthContext.Provider value={{ openLogin, openRegister, closeAuth }}>
      {children}
      
      {/* Modals */}
      <LoginModal 
        isOpen={showLoginModal}
        onClose={handleCloseLoginModal}
        onSwitchToRegister={handleSwitchToRegister}
      />
      
      <RegisterModal 
        isOpen={showRegisterModal}
        onClose={handleCloseRegisterModal}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </AuthContext.Provider>
  );
};

export default AuthManager; 