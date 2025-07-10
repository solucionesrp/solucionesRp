import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const AuthModals: React.FC = () => {
  const { showLoginModal, showRegisterModal, closeAuth, openLogin, openRegister } = useAuth();

  const handleSwitchToRegister = () => {
    closeAuth();
    openRegister();
  };

  const handleSwitchToLogin = () => {
    closeAuth();
    openLogin();
  };

  return (
    <>
      <LoginModal
        isOpen={showLoginModal}
        onClose={closeAuth}
        onSwitchToRegister={handleSwitchToRegister}
      />
      <RegisterModal
        isOpen={showRegisterModal}
        onClose={closeAuth}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </>
  );
};

export default AuthModals; 