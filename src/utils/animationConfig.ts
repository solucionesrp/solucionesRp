import { useIsMobile } from '../hooks/useIsMobile';

export const useAnimationConfig = () => {
  const isMobile = useIsMobile();

  return {
    // Animaciones básicas
    fadeIn: {
      initial: { opacity: 0, y: isMobile ? 10 : 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: isMobile ? 0.3 : 0.6 }
    },
    
    // Animaciones con viewport
    fadeInView: {
      initial: { opacity: 0, y: isMobile ? 10 : 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { amount: isMobile ? 0.1 : 0.3 },
      transition: { duration: isMobile ? 0.3 : 0.6 }
    },
    
    // Animaciones escalonadas
    staggerContainer: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.1,
        delayChildren: isMobile ? 0.1 : 0.2
      }
    },
    
    // Animaciones de elementos individuales
    staggerItem: {
      initial: { opacity: 0, y: isMobile ? 10 : 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: isMobile ? 0.3 : 0.6 }
    },
    
    // Animaciones de hover optimizadas para móvil
    hover: {
      whileHover: { scale: isMobile ? 1.02 : 1.05 },
      whileTap: { scale: 0.95 },
      transition: { duration: isMobile ? 0.1 : 0.2 }
    }
  };
}; 