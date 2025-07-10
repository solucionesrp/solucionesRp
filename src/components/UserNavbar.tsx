import React from 'react';
import { FaBell } from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import UserDropdown from './UserDropdown';

const UserNavbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const displayUser = user || { name: 'Ana', email: 'ana@solucionesrp.com' };
  return (
    <nav className="md:ml-64 bg-gray-900/30 backdrop-blur-md text-white shadow-lg border-b border-gray-800/50 sticky top-0 z-30">
      <div className="flex items-center h-20 px-6 justify-between">
        {/* Saludo y bienvenida centrados verticalmente */}
        <div className="flex-1 flex flex-col justify-center md:items-start items-center">
          <span className="text-xl font-bold text-white leading-tight">¡Hola, {displayUser.name}!</span>
          <span className="text-gray-400 text-sm leading-tight">Bienvenido/a a tu centro de control.</span>
        </div>
        {/* Íconos alineados a la derecha */}
        <div className="flex items-center space-x-3 ml-6">
          <button className="relative p-2 rounded-full bg-gray-800/40 hover:bg-gray-700/60 transition-all">
            <FaBell className="w-5 h-5 text-gray-300" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-gray-900/30"></span>
          </button>
          <UserDropdown onlyLogout />
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar; 