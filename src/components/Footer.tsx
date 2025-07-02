import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm text-white border-t border-gray-800/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo + Lema */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="logo-gradient text-2xl">Soluciones RP</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Tecnología y soporte a tu alcance
            </p>
            <p className="text-sm text-gray-400">
              Unimos lo digital con lo técnico para ofrecerte soluciones integrales en desarrollo de software y reparación electrónica.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <a href="#desarrollo-web" className="text-gray-300 hover:text-mostaza transition-colors duration-300">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="#apps-moviles" className="text-gray-300 hover:text-mostaza transition-colors duration-300">
                  Apps Móviles
                </a>
              </li>
              <li>
                <a href="#servicio-tecnico" className="text-gray-300 hover:text-mostaza transition-colors duration-300">
                  Servicio Técnico
                </a>
              </li>
              <li>
                <a href="#reparacion-electronica" className="text-gray-300 hover:text-mostaza transition-colors duration-300">
                  Reparación Electrónica
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <a href="#sobre-nosotros" className="text-gray-300 hover:text-azul transition-colors duration-300">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-azul transition-colors duration-300">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-azul mr-2">📧</span>
                <a href="mailto:contacto@solucionesrp.com" className="text-gray-300 hover:text-azul transition-colors duration-300">
                  contacto@solucionesrp.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-azul mr-2">📞</span>
                <a href="tel:+56912345678" className="text-gray-300 hover:text-azul transition-colors duration-300">
                  +56 9 1234 5678
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-azul mr-2">📍</span>
                <span className="text-gray-300">
                  Santiago, Chile
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Soluciones RP. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#terminos" className="text-gray-400 hover:text-mostaza text-sm transition-colors duration-300">
                Términos y Condiciones
              </a>
              <a href="#privacidad" className="text-gray-400 hover:text-mostaza text-sm transition-colors duration-300">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 