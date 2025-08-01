import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaShoppingCart, FaUsers, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { useIsMobile } from '../hooks/useIsMobile';

interface WebFormData {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  websiteType: string;
  features: string[];
  description: string;
}

const PaginasWebPage: React.FC = () => {
  const isMobile = useIsMobile();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<WebFormData>({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    websiteType: '',
    features: [],
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const websiteTypes = [
    {
      id: 'landing',
      name: 'Landing Page',
      description: 'Página de aterrizaje para capturar leads y promocionar productos.',
      icon: <FaGlobe className="w-8 h-8" />,
      features: ['Diseño atractivo', 'Formulario de contacto', 'Optimización SEO', 'Responsive design']
    },
    {
      id: 'business',
      name: 'Sitio Web Empresarial',
      description: 'Página web completa para mostrar tu empresa y servicios.',
      icon: <FaGlobe className="w-8 h-8" />,
      features: ['Múltiples páginas', 'Panel administrativo', 'Blog integrado', 'SEO optimizado']
    },
    {
      id: 'ecommerce',
      name: 'Tienda Online',
      description: 'Plataforma completa para vender productos online.',
      icon: <FaShoppingCart className="w-8 h-8" />,
      features: ['Catálogo de productos', 'Carrito de compras', 'Pasarela de pagos', 'Panel de gestión']
    },
    {
      id: 'portfolio',
      name: 'Portfolio Profesional',
      description: 'Sitio web para mostrar tu trabajo y servicios profesionales.',
      icon: <FaUsers className="w-8 h-8" />,
      features: ['Galería de proyectos', 'Testimonios', 'Formulario de contacto', 'Diseño personalizado']
    }
  ];

  const benefits = [
    {
      title: 'Presencia Online 24/7',
      description: 'Tu negocio siempre disponible para tus clientes',
      icon: '🌐'
    },
    {
      title: 'Credibilidad Profesional',
      description: 'Una web bien diseñada genera confianza',
      icon: '💼'
    },
    {
      title: 'Alcance Global',
      description: 'Llega a clientes de cualquier parte del mundo',
      icon: '🌍'
    },
    {
      title: 'ROI Medible',
      description: 'Analytics para medir el rendimiento de tu inversión',
      icon: '📊'
    }
  ];

  const features = [
    'Diseño Responsive',
    'Optimización SEO',
    'Panel Administrativo',
    'Integración con Redes Sociales',
    'Formularios de Contacto',
    'Blog Integrado',
    'Galería de Imágenes',
    'Mapa de Ubicación',
    'Chat en Vivo',
    'Analytics de Google'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFeatureChange = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Resetear formulario después de 3 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        websiteType: '',
        features: [],
        description: ''
      });
      setShowForm(false);
    }, 3000);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola! Me interesa desarrollar una página web. ¿Podrían ayudarme?');
    window.open(`https://wa.me/56993888939?text=${message}`, '_blank');
  };

  // Configuraciones de animación optimizadas para móvil
  const getAnimationConfig = () => ({
    initial: { opacity: 0, y: isMobile ? 5 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: isMobile ? 0.2 : 0.4 },
    viewport: { amount: isMobile ? 0.05 : 0.2 }
  });

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Background Pattern Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-800/20 via-transparent to-gray-900/30"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-black via-transparent to-gray-800/10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(64,64,64,0.1),transparent_50%)]"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(32,32,32,0.15),transparent_50%)]"></div>
      
      <Navbar />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 5 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.3 : 0.5, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-mostaza to-azul bg-clip-text text-transparent">
                  Páginas Web
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Creamos páginas web profesionales que convierten visitantes en clientes. 
                Diseño moderno, funcional y optimizado para resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-mostaza hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
                >
                  Solicitar Cotización
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Consultar por WhatsApp
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              {...getAnimationConfig()}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">¿Por qué necesitas una página web?</h2>
              <p className="text-xl text-gray-300">Beneficios que transformarán tu negocio</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: isMobile ? 5 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: isMobile ? 0.05 : 0.2 }}
                  transition={{ duration: isMobile ? 0.2 : 0.4, delay: isMobile ? index * 0.03 : index * 0.05 }}
                  className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-mostaza transition-all duration-200"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Website Types Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Tipos de Páginas Web</h2>
              <p className="text-xl text-gray-300">Elige el tipo que mejor se adapte a tus necesidades</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {websiteTypes.map((website, index) => (
                <motion.div
                  key={website.id}
                  initial={{ opacity: 0, y: isMobile ? 5 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: isMobile ? 0.05 : 0.2 }}
                  transition={{ duration: isMobile ? 0.2 : 0.4, delay: isMobile ? index * 0.03 : index * 0.05 }}
                  className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-azul transition-all duration-200"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-mostaza">{website.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold">{website.name}</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{website.description}</p>
                  <ul className="space-y-2">
                    {website.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <FaCheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Características Incluidas</h2>
              <p className="text-xl text-gray-300">Todas nuestras páginas web incluyen estas funcionalidades</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: isMobile ? 3 : 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: isMobile ? 0.05 : 0.2 }}
                  transition={{ duration: isMobile ? 0.15 : 0.3, delay: isMobile ? index * 0.02 : index * 0.03 }}
                  className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 text-center hover:border-mostaza transition-all duration-200"
                >
                  <div className="text-mostaza mb-2">✓</div>
                  <p className="text-gray-300 text-sm">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">¿Listo para crear tu página web?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Convierte tu idea en una página web profesional que impulse tu negocio
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-azul hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Solicitar Cotización
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Consultar por WhatsApp
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gray-900 rounded-lg p-6 w-full max-w-2xl border border-gray-800 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Solicitar Cotización - Página Web</h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nombre completo *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-mostaza"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-mostaza"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Teléfono *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-mostaza"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Tipo de negocio *</label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-mostaza"
                    >
                      <option value="">Selecciona...</option>
                      <option value="restaurante">Restaurante</option>
                      <option value="retail">Retail</option>
                      <option value="servicios">Servicios</option>
                      <option value="educacion">Educación</option>
                      <option value="salud">Salud</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Tipo de página web *</label>
                    <select
                      name="websiteType"
                      value={formData.websiteType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-mostaza"
                    >
                      <option value="">Selecciona...</option>
                      <option value="landing">Landing Page</option>
                      <option value="business">Sitio Web Empresarial</option>
                      <option value="ecommerce">Tienda Online</option>
                      <option value="portfolio">Portfolio Profesional</option>
                      <option value="personalizada">Personalizada</option>
                    </select>
                  </div>
                  

                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Características deseadas</label>
                  <div className="grid md:grid-cols-2 gap-2">
                    {features.map((feature, index) => (
                      <label key={index} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={formData.features.includes(feature)}
                          onChange={() => handleFeatureChange(feature)}
                          className="rounded border-gray-600 text-mostaza focus:ring-mostaza"
                        />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Descripción del proyecto *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-mostaza"
                    placeholder="Describe tu idea, funcionalidades principales, público objetivo..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-mostaza hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
                </button>
              </form>
            ) : (
              <div className="text-center">
                <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">¡Solicitud Enviada!</h3>
                <p className="text-gray-300">
                  Nos pondremos en contacto contigo en las próximas 24 horas.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}

      <Footer />
      <WhatsAppButton phoneNumber="+56993888939" />
    </div>
  );
};

export default PaginasWebPage; 