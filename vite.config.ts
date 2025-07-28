import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'animation-vendor': ['framer-motion'],
          'icons-vendor': ['react-icons'],
          // Feature chunks
          'auth': ['./src/pages/LoginPage', './src/pages/RegisterPage'],
          'services': [
            './src/pages/ServicioTecnicoPCPage',
            './src/pages/ReparacionesElectronicasPage',
            './src/pages/AppMovilPage',
            './src/pages/PaginasWebPage'
          ],
          'company': ['./src/pages/SobreNosotrosPage', './src/pages/ContactPage']
        }
      }
    },
    chunkSizeWarningLimit: 1000, // Aumentar el límite de advertencia
  },
})
