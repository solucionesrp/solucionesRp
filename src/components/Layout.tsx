import React from 'react';
import Sidebar from './Sidebar';
import UserNavbar from './UserNavbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Background Pattern Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-800/20 via-transparent to-gray-900/30"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-black via-transparent to-gray-800/10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(64,64,64,0.1),transparent_50%)]"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(32,32,32,0.15),transparent_50%)]"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Sidebar />
        <UserNavbar />
        <main className="min-h-screen md:ml-64">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout; 