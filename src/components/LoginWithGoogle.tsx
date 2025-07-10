// Login con Google real
import { useGoogleLogin } from '@react-oauth/google';

interface LoginWithGoogleProps {
  label?: string;
  mode?: 'login' | 'register';
}

const LoginWithGoogle: React.FC<LoginWithGoogleProps> = ({ label = 'Acceder con Google', mode = 'login' }) => {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const login = useGoogleLogin({
    onSuccess: () => {
      alert(mode === 'register' ? '¡Registro exitoso con Google!' : 'Login exitoso!');
      // Comentar o eliminar el uso de credentialResponse.credential si no es compatible con el tipo actual
      // if (credentialResponse.credential) {
      //   const decoded: GoogleUser = jwtDecode(credentialResponse.credential);
      //   console.log('Usuario:', decoded);
      //   setUser(decoded);
      // }
    },
    onError: () => {
      alert('Hubo un error');
      console.error('Hubo un error en GoogleLogin');
    },
    flow: 'implicit',
  });

  if (!clientId) {
    return (
      <div className="flex flex-col items-center gap-4 p-4 bg-red-900/20 border border-red-500/50 rounded-lg">
        <div className="text-red-400 text-center">
          <h3 className="font-bold mb-2">⚠️ Configuración Requerida</h3>
          <p className="text-sm mb-2">
            Para probar el login con Google, necesitas configurar tu Client ID en el archivo <code>.env</code> y reiniciar el servidor.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <button
        type="button"
        onClick={() => login()}
        className="w-full flex items-center justify-center gap-3 py-3 px-6 rounded-lg font-semibold text-white text-base shadow-lg transition-all duration-300 bg-transparent border border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange-400"
        style={{ minHeight: 48 }}
      >
        <svg width="24" height="24" viewBox="0 0 48 48" className="mr-2">
          <g><path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.85-6.85C36.68 2.39 30.77 0 24 0 14.82 0 6.73 5.06 2.69 12.44l7.98 6.2C13.13 13.09 18.18 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.42-4.74H24v9.01h12.42c-.54 2.9-2.18 5.36-4.65 7.02l7.19 5.6C43.93 37.13 46.1 31.36 46.1 24.55z"/><path fill="#FBBC05" d="M10.67 28.65A14.5 14.5 0 019.5 24c0-1.62.28-3.19.78-4.65l-7.98-6.2A23.97 23.97 0 000 24c0 3.77.9 7.34 2.5 10.5l8.17-5.85z"/><path fill="#EA4335" d="M24 48c6.48 0 11.92-2.14 15.89-5.82l-7.19-5.6c-2.01 1.35-4.59 2.15-8.7 2.15-5.82 0-10.77-3.59-12.83-8.55l-8.17 5.85C6.73 42.94 14.82 48 24 48z"/></g>
        </svg>
        {label}
      </button>
    </div>
  );
};

export default LoginWithGoogle; 