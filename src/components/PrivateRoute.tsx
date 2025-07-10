import React from 'react';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  // Mostrar loading mientras se verifica la autenticación
  // Si no se usa isLoading, elimina la línea 'if (isLoading) {...}'

  // Para desarrollo: permitir acceso sin autenticación
  // if (!isAuthenticated) {
  //   return <Navigate to="/login" replace />;
  // }

  // Renderizar el contenido protegido
  return <>{children}</>;
};

export default PrivateRoute; 