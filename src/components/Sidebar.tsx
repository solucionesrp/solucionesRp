import React from 'react';
import { FaHome, FaTools, FaCalendarAlt, FaMobileAlt, FaClipboardList, FaFileInvoiceDollar, FaUser, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const sidebarItems = [
  { href: '/dashboard', label: 'Dashboard', icon: <FaHome /> },
  { href: '/reparaciones', label: 'Mis Reparaciones', icon: <FaTools /> },
  { href: '/agendar', label: 'Agendar Servicio', icon: <FaCalendarAlt /> },
  { href: '/dispositivos', label: 'Mis Dispositivos', icon: <FaMobileAlt /> },
  { href: '/presupuestos', label: 'Mis Presupuestos', icon: <FaClipboardList /> },
  { href: '/facturas', label: 'Facturas y Pagos', icon: <FaFileInvoiceDollar /> },
  { href: '/perfil', label: 'Mi Perfil', icon: <FaUser /> },
  { href: '/soporte', label: 'Ayuda y Soporte', icon: <FaQuestionCircle /> },
];

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { logout } = useAuth();
  const navigate = useNavigate();
  return (
    <aside className="hidden md:flex flex-col w-64 h-screen fixed top-0 left-0 bg-gray-900/30 border-r border-gray-800/60 z-40">
      <div className="flex items-center h-20 px-6 border-b border-gray-800/60">
        <img src="/images/logo.png" alt="Soluciones RP Logo" className="h-12 w-12 rounded-full mr-3" />
        <span className="text-xl font-bold text-white tracking-wide">Soluciones RP</span>
      </div>
      <nav className="flex-1 px-2 py-6 space-y-1">
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-all duration-200
              ${location.pathname === item.href
                ? 'bg-[#5b5bd6] text-white shadow'
                : 'text-gray-300 hover:bg-gray-800/60 hover:text-white'}`}
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </Link>
        ))}
        {/* Botón cerrar sesión */}
        <button
          onClick={() => { logout(); navigate('/'); }}
          className="flex items-center gap-3 px-4 py-2 mt-4 rounded-lg font-medium bg-red-600 hover:bg-red-700 text-white w-full transition-all duration-200"
        >
          <FaSignOutAlt className="w-5 h-5" />
          Cerrar sesión
        </button>
      </nav>
      <div className="px-4 pb-6 mt-auto">
        <div className="bg-[#232c47] rounded-xl p-4 text-gray-300 text-sm text-center border border-gray-700/60">
          <div className="font-semibold mb-1">Oferta Exclusiva</div>
          15% de descuento en tu próxima reparación con el código: <span className="text-[#5b5bd6] font-bold">NEXT15</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 