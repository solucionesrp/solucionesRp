import { useContext } from 'react';
import { AuthContext } from '../components/AuthManager';

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthManager');
  }
  
  return context;
}; 