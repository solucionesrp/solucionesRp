import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    { value: '', label: 'Selecciona un servicio' },
    { value: 'servicio-tecnico', label: 'Servicio Técnico PC' },
    { value: 'formateo', label: 'Formateo de Equipos' },
    { value: 'software', label: 'Instalación de Software' },
    { value: 'hardware', label: 'Reparación de Hardware' },
    { value: 'limpieza', label: 'Limpieza Interna/Externa' },
    { value: 'upgrade', label: 'Upgrade de Componentes' },
    { value: 'recuperacion', label: 'Recuperación de Datos' },
    { value: 'reparaciones', label: 'Reparaciones Electrónicas' },
    // { value: 'pagina-web', label: 'Desarrollo de Página Web' }, // Oculto para primera etapa
    // { value: 'app-movil', label: 'Desarrollo de Aplicación Móvil' }, // Oculto para primera etapa
    { value: 'consulta', label: 'Consulta General' }
  ];

  useEffect(() => {
    const service = location.state?.service;
    if (service) {
      setFormData(prev => ({
        ...prev,
        service: service
      }));
    }
  }, [location.state]);

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    }

    if (!formData.service) {
      newErrors.service = 'Por favor selecciona un servicio';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Configuración de EmailJS
      const templateParams = {
        nombre: formData.name,
        email: formData.email,
        telefono: formData.phone,
        servicio: formData.service,
        mensaje: formData.message,
        to_name: 'Soluciones RP',
        reply_to: formData.email,
      };

      console.log('Variables enviadas a EmailJS:', templateParams);

      // Enviar email usando EmailJS
       const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email enviado exitosamente:', result);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      alert('Error al enviar el formulario. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: 'Teléfono',
      content: '+56 9 9388 8939',
      link: 'tel:+56993888939'
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: 'Email',
      content: 'solucionesrp.info@gmail.com',
      link: '/contacto'
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: 'Ubicación',
      content: 'Santiago, Chile',
      link: null
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: 'Horarios',
      content: '24/7',
      link: null
    }
  ];

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
        <Navbar />
        
        <main>
          {/* Header Section */}
          <section className="pt-24 pb-12 text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold text-gray-400 mb-6">
                <span className="bg-gradient-to-r from-mostaza to-azul bg-clip-text text-transparent">Contáctanos</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                ¿Tienes una idea o necesitas ayuda técnica? <span className="text-azul">Estamos aquí para ayudarte</span>. 
                Envíanos tu consulta y te responderemos en menos de 24 horas.
              </p>
              {location.state?.serviceName && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-4 inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-azul/20 text-azul border border-azul/30"
                >
                  🎯 Servicio seleccionado: {location.state.serviceName}
                </motion.div>
              )}
            </motion.div>
          </section>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Envíanos tu consulta</h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="text-2xl font-bold text-green-400 mb-4">¡Mensaje enviado!</h3>
                    <p className="text-gray-300 mb-6">
                      Gracias por contactarnos. Te responderemos en menos de 24 horas.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-azul hover:bg-azul/80 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                      Enviar otro mensaje
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg bg-gray-800/50 border ${
                            errors.name ? 'border-red-500' : 'border-gray-700'
                          } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-azul focus:border-transparent transition-all duration-300`}
                          placeholder="Tu nombre completo"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg bg-gray-800/50 border ${
                            errors.email ? 'border-red-500' : 'border-gray-700'
                          } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-azul focus:border-transparent transition-all duration-300`}
                          placeholder="tu@email.com"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg bg-gray-800/50 border ${
                            errors.phone ? 'border-red-500' : 'border-gray-700'
                          } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-azul focus:border-transparent transition-all duration-300`}
                          placeholder="+56 9 1234 5678"
                        />
                        {errors.phone && (
                          <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Servicio de interés *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg bg-gray-800/50 border ${
                            errors.service ? 'border-red-500' : 'border-gray-700'
                          } text-white focus:outline-none focus:ring-2 focus:ring-azul focus:border-transparent transition-all duration-300`}
                        >
                          {serviceOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        {errors.service && (
                          <p className="text-red-400 text-sm mt-1">{errors.service}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className={`w-full px-4 py-3 rounded-lg bg-gray-800/50 border ${
                          errors.message ? 'border-red-500' : 'border-gray-700'
                        } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-azul focus:border-transparent transition-all duration-300 resize-none`}
                        placeholder="Cuéntanos sobre tu proyecto o problema técnico..."
                      />
                      {errors.message && (
                        <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-mostaza to-azul text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-mostaza/90 hover:to-azul/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </span>
                      ) : (
                        'Enviar mensaje'
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Información de contacto</h2>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Estamos disponibles para ayudarte con cualquier consulta sobre nuestros servicios. 
                    No dudes en contactarnos por cualquiera de estos medios.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-azul to-mostaza rounded-lg flex items-center justify-center text-white">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-300 hover:text-azul transition-colors duration-300"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-300">{info.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Botón Volver */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1 }}
                  className="text-center"
                >
                  <motion.button
                    onClick={() => navigate('/')}
                    className="inline-flex items-center space-x-3 bg-gradient-to-r from-gray-700/50 to-gray-800/50 hover:from-gray-600/50 hover:to-gray-700/50 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 border border-gray-600/50 hover:border-gray-500/50 backdrop-blur-sm"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      transition: { duration: 0.1 }
                    }}
                  >
                    <FaArrowLeft className="w-4 h-4" />
                    <span>Volver a página principal</span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </main>
        
        <Footer />
        <WhatsAppButton phoneNumber="+56993888939" />
      </div>
    </div>
  );
};

export default ContactPage; 