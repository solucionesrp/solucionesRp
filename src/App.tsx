import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
// import Layout from './components/Layout';
// import PrivateRoute from './components/PrivateRoute';
// import MyRepairsPage from './pages/MyRepairsPage';
// import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ContactPage from './pages/ContactPage';
import ServicioTecnicoPCPage from './pages/ServicioTecnicoPCPage';
import ReparacionesElectronicasPage from './pages/ReparacionesElectronicasPage';
import AppMovilPage from './pages/AppMovilPage';
import AuthManager from './components/AuthManager';
import HomePage from './pages/HomePage';
// import AuthModals from './components/AuthModals';

function App() {
  return (
    <Router>
      <AuthProvider>
        <AuthManager>
          <Routes>
            {/* Rutas públicas */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/servicio-tecnico-pc" element={<ServicioTecnicoPCPage />} />
            <Route path="/reparaciones-electronicas" element={<ReparacionesElectronicasPage />} />
            <Route path="/apps-moviles" element={<AppMovilPage />} />
            {/* Rutas protegidas - Ocultas hasta tener BD */}
            <Route path="/" element={<HomePage />} />
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
