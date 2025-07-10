import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

interface LoginWithGoogleProps {
  onSuccess?: (response: any) => void;
  onError?: (error: any) => void;
  className?: string;
}

const LoginWithGoogle: React.FC<LoginWithGoogleProps> = ({
  onSuccess,
  onError,
  className = ''
}) => {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const handleSuccess = (credentialResponse: any) => {
    console.log('✅ Login con Google exitoso:', credentialResponse);
    
    // Decodificar el token JWT para obtener información del usuario
    if (credentialResponse.credential) {
      try {
        const payload = JSON.parse(atob(credentialResponse.credential.split('.')[1]));
        console.log('👤 Información del usuario:', {
          name: payload.name,
          email: payload.email,
          picture: payload.picture
        });
      } catch (error) {
        console.error('❌ Error al decodificar el token JWT:', error);
      }
    }
    
    // Llamar callback personalizado si existe
    if (onSuccess) {
      onSuccess(credentialResponse);
    }
  };

  const handleError = (error: any) => {
    console.error('❌ Error en login con Google:', error);
    
    // Llamar callback personalizado si existe
    if (onError) {
      onError(error);
    }
  };

  if (!clientId) {
    console.error('❌ VITE_GOOGLE_CLIENT_ID no está configurado');
    return (
      <div className={`text-red-500 text-sm ${className}`}>
        Error: Google Client ID no configurado
      </div>
    );
  }

  return (
    <div className={`flex justify-center ${className}`}>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        useOneTap
        theme="filled_blue"
        size="large"
        text="signin_with"
        shape="rectangular"
        locale="es"
      />
    </div>
  );
};

export default LoginWithGoogle; 