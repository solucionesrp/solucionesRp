import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTimes, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: { href: string; label: string; icon: React.ReactNode }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, items }) => {
  const location = useLocation();
  const { user, isAuthenticated, logout, openLogin, openRegister } = useAuth();
  const displayUser = user || { name: 'Ana', email: 'ana@solucionesrp.com' };

  return (
    <div
      className={`fixed inset-0 z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
      style={{ background: 'rgba(16,20,30,0.96)' }}
    >
      <div className="flex items-center justify-between px-6 h-16 border-b border-gray-800/60">
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Soluciones RP Logo" className="h-9 w-9 rounded-full" />
          <span className="text-lg font-bold text-white">Soluciones RP</span>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-white p-2 rounded-lg transition-all">
          <FaTimes className="w-6 h-6" />
        </button>
      </div>
      {/* Usuario info o login/register - OCULTO PARA PRIMERA ETAPA */}
      {/*
      {isAuthenticated ? (
        <div className="px-4 pt-4 pb-2 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white text-lg">
            {displayUser.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="font-semibold text-white text-sm">{displayUser.name}</div>
            <div className="text-gray-400 text-xs">{displayUser.email}</div>
          </div>
        </div>
      ) : (
        <div className="px-4 pt-4 pb-2 flex gap-3">
          <button
            onClick={() => { onClose(); openLogin(); }}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-all duration-200"
          >
            Iniciar Sesión
          </button>
          <button
            onClick={() => { onClose(); openRegister(); }}
            className="flex-1 bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 rounded-lg transition-all duration-200"
          >
            Registrarse
          </button>
        </div>
      )}
      */}
      <nav className="flex flex-col gap-1 px-4 py-6">
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            onClick={onClose}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 text-base
              ${location.pathname === item.href
                ? 'bg-purple-700/30 text-purple-300 border border-purple-500/40 shadow'
                : 'text-gray-300 hover:bg-gray-800/60 hover:text-white'}`}
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
      {/* Zona de Usuario - OCULTO PARA PRIMERA ETAPA */}
      {/*
      <div className="px-4 pt-2 flex flex-col gap-3">
        <button
          onClick={() => { onClose(); window.location.href = '/reparaciones'; }}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-all duration-200"
        >
          Zona de Usuario
        </button>
      </div>
      */}
      <div className="px-4 pb-6 mt-auto flex flex-col gap-3">
        {/* Cerrar sesión - OCULTO PARA PRIMERA ETAPA */}
        {/*
        {isAuthenticated ? (
          <button
            onClick={() => { onClose(); logout(); }}
            className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-red-600/80 hover:bg-red-700/90 text-white font-semibold text-base transition-all border border-red-500/40"
          >
            <FaSignOutAlt className="w-5 h-5" />
            Cerrar sesión
          </button>
        ) : null}
        */}
        <div className="bg-gray-800/80 rounded-xl p-4 text-gray-300 text-sm text-center border border-gray-700/60">
          <div className="font-semibold mb-1">Oferta Exclusiva</div>
          15% de descuento en tu próxima reparación con el código: <span className="text-purple-400 font-bold">NEXT15</span>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu; 