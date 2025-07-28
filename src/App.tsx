import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { lazy, Suspense } from 'react';
// import Layout from './components/Layout';
// import PrivateRoute from './components/PrivateRoute';
// import MyRepairsPage from './pages/MyRepairsPage';
// import DashboardPage from './pages/DashboardPage';

// Páginas críticas (carga inmediata)
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ContactPage from './pages/ContactPage';

// Páginas con lazy loading (carga diferida)
const ServicioTecnicoPCPage = lazy(() => import('./pages/ServicioTecnicoPCPage'));
const ReparacionesElectronicasPage = lazy(() => import('./pages/ReparacionesElectronicasPage'));
const AppMovilPage = lazy(() => import('./pages/AppMovilPage'));
const SobreNosotrosPage = lazy(() => import('./pages/SobreNosotrosPage'));
const PaginasWebPage = lazy(() => import('./pages/PaginasWebPage'));

import AuthManager from './components/AuthManager';
// import AuthModals from './components/AuthModals';

// Componente de loading
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-12 h-12 border-4 border-mostaza border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-300 text-lg">Cargando...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <AuthProvider>
        <AuthManager>
          <Routes>
            {/* Rutas públicas críticas (carga inmediata) */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/" element={<HomePage />} />
            
            {/* Rutas públicas con lazy loading */}
            <Route path="/servicio-tecnico-pc" element={
              <Suspense fallback={<LoadingSpinner />}>
                <ServicioTecnicoPCPage />
              </Suspense>
            } />
            <Route path="/reparaciones-electronicas" element={
              <Suspense fallback={<LoadingSpinner />}>
                <ReparacionesElectronicasPage />
              </Suspense>
            } />
            <Route path="/apps-moviles" element={
              <Suspense fallback={<LoadingSpinner />}>
                <AppMovilPage />
              </Suspense>
            } />
            <Route path="/paginas-web" element={
              <Suspense fallback={<LoadingSpinner />}>
                <PaginasWebPage />
              </Suspense>
            } />
            <Route path="/sobre-nosotros" element={
              <Suspense fallback={<LoadingSpinner />}>
                <SobreNosotrosPage />
              </Suspense>
            } />
            
            {/* Rutas protegidas - Ocultas hasta tener BD */}
            {/* 
            <Route path="/reparaciones" element={
              <PrivateRoute>
                <Layout>
                  <MyRepairsPage />
                </Layout>
              </PrivateRoute>
            } />
            <Route path="/dashboard" element={
              <PrivateRoute>
                <Layout>
                  <DashboardPage />
                </Layout>
              </PrivateRoute>
            } />
            */}
          </Routes>
          {/* Modales de autenticación - Ocultos hasta tener BD */}
          {/* <AuthModals /> */}
        </AuthManager>
      </AuthProvider>
    </Router>
  );
}

export default App;
