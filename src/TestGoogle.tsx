// 🧪 TEST TEMPORAL: Prueba mínima de Google Login aislado
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

export default function TestGoogle() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div style={{ minHeight: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ marginBottom: 16 }}>🧪 Prueba mínima Google Login</h2>
        <GoogleLogin
          onSuccess={cred => {
            alert('Login exitoso!');
            console.log('SUCCESS', cred);
          }}
          onError={() => {
            alert('Hubo un error');
            console.error('ERROR');
          }}
        />
      </div>
    </GoogleOAuthProvider>
  );
} 