import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMobile, FaAndroid, FaApple, FaReact, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

interface AppFormData {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  appType: string;
  description: string;
}

const AppMovilPage: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<AppFormData>({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    appType: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const appTypes = [
    {
      id: 'ecommerce',
      name: 'E-commerce',
      description: 'Tiendas online con carrito de compras, pagos y gestión de inventario.',
      icon: <FaMobile className="w-8 h-8" />,
      features: ['Catálogo de productos', 'Carrito de compras', 'Pasarela de pagos', 'Panel administrativo'],
      basePrice: 'Desde $2.500.000'
    },
    {
      id: 'delivery',
      name: 'Delivery',
      description: 'Aplicaciones para restaurantes, delivery de comida y servicios.',
      icon: <FaMobile className="w-8 h-8" />,
      features: ['Geolocalización', 'Seguimiento en tiempo real', 'Sistema de pedidos', 'Notificaciones push'],
      basePrice: 'Desde $3.000.000'
    },
    {
      id: 'social',
      name: 'Red Social',
      description: 'Plataformas sociales con perfiles, mensajería y contenido.',
      icon: <FaMobile className="w-8 h-8" />,
      features: ['Perfiles de usuario', 'Feed de contenido', 'Mensajería', 'Notificaciones'],
      basePrice: 'Desde $4.000.000'
    },
    {
      id: 'business',
      name: 'Negocio',
      description: 'Apps para gestión interna, CRM y automatización de procesos.',
      icon: <FaMobile className="w-8 h-8" />,
      features: ['Gestión de clientes', 'Reportes y analytics', 'Sincronización con sistemas', 'Panel de control'],
      basePrice: 'Desde $2.000.000'
    }
  ];

  const benefits = [
    {
      title: 'Visibilidad 24/7',
      description: 'Tu negocio siempre disponible para tus clientes',
      icon: '📱'
    },
    {
      title: 'Fidelización',
      description: 'Mejora la retención de clientes con experiencias personalizadas',
      icon: '❤️'
    },
    {
      title: 'Automatización',
      description: 'Reduce tareas manuales y optimiza procesos',
      icon: '⚡'
    },
    {
      title: 'Ingresos Adicionales',
      description: 'Nuevas fuentes de ingresos a través de la app',
      icon: '💰'
    }
  ];

  const technologies = [
    { name: 'React Native', icon: <FaReact className="w-6 h-6" />, description: 'Desarrollo multiplataforma' },
    { name: 'Flutter', icon: <SiFlutter className="w-6 h-6" />, description: 'Apps nativas para Android e iOS' },
    { name: 'Android', icon: <FaAndroid className="w-6 h-6" />, description: 'Google Play Store' },
    { name: 'iOS', icon: <FaApple className="w-6 h-6" />, description: 'App Store' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
        appType: '',
        description: ''
      });
      setShowForm(false);
    }, 3000);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola! Me interesa desarrollar una aplicación móvil. ¿Podrían ayudarme?');
    window.open(`https://wa.me/56993888939?text=${message}`, '_blank');
  };

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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-azul to-mostaza bg-clip-text text-transparent">
                  Aplicaciones Móviles
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Convertimos tu idea en una aplicación móvil profesional. 
                Desarrollamos apps para Android e iOS que impulsan tu negocio.
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

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">¿Por qué desarrollar una app móvil?</h2>
              <p className="text-xl text-gray-300">Beneficios que transformarán tu negocio</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-azul transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* App Types Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Tipos de Aplicaciones</h2>
              <p className="text-xl text-gray-300">Desarrollamos diferentes tipos de apps según tus necesidades</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {appTypes.map((app, index) => (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-mostaza transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-azul">{app.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold">{app.name}</h3>
                      <p className="text-mostaza font-semibold">{app.basePrice}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{app.description}</p>
                  <ul className="space-y-2">
                    {app.features.map((feature, idx) => (
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

        {/* Technologies Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Tecnologías que Utilizamos</h2>
              <p className="text-xl text-gray-300">Desarrollamos con las mejores herramientas del mercado</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 text-center hover:border-azul transition-all duration-300"
                >
                  <div className="text-azul mb-4 flex justify-center">{tech.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                  <p className="text-gray-300">{tech.description}</p>
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
              <h2 className="text-4xl font-bold mb-6">¿Listo para crear tu app?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Convierte tu idea en una aplicación móvil profesional que impulse tu negocio
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-mostaza hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
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
            className="bg-gray-900 rounded-lg p-6 w-full max-w-md border border-gray-800"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Solicitar Cotización</h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre completo *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-azul"
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
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-azul"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Teléfono *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-azul"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Tipo de negocio *</label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-azul"
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
                
                <div>
                  <label className="block text-sm font-medium mb-2">Tipo de app *</label>
                  <select
                    name="appType"
                    value={formData.appType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-azul"
                  >
                    <option value="">Selecciona...</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="delivery">Delivery</option>
                    <option value="social">Red Social</option>
                    <option value="business">Negocio</option>
                    <option value="personalizada">Personalizada</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Descripción del proyecto *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-azul"
                    placeholder="Describe tu idea, funcionalidades principales, público objetivo..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-azul hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50"
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

export default AppMovilPage; 