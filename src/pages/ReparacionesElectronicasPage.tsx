import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMobile, FaLaptop, FaTablet, FaTv, FaGamepad, FaPrint, FaWhatsapp, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

interface DeviceData {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  commonIssues: string[];
  image?: string;
}

interface RepairFormData {
  name: string;
  email: string;
  phone: string;
  device: string;
  problem: string;
  photos?: File[];
}

const ReparacionesElectronicasPage: React.FC = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<RepairFormData>({
    name: '',
    email: '',
    phone: '',
    device: '',
    problem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const devices: DeviceData[] = [
    {
      id: 'notebook',
      name: 'Notebooks',
      description: 'Reparación y mantenimiento de laptops y notebooks de todas las marcas.',
      icon: <FaLaptop className="w-8 h-8" />,
      commonIssues: ['Pantalla rota', 'No enciende', 'Batería defectuosa', 'Teclado dañado', 'Problemas de carga']
    },
    {
      id: 'celular',
      name: 'Celulares',
      description: 'Reparación de smartphones Android e iPhone.',
      icon: <FaMobile className="w-8 h-8" />,
      commonIssues: ['Pantalla rota', 'Batería hinchada', 'No carga', 'Problemas de audio', 'Cámara defectuosa']
    },
    {
      id: 'tablet',
      name: 'Tablets',
      description: 'Reparación de tablets iPad y Android.',
      icon: <FaTablet className="w-8 h-8" />,
      commonIssues: ['Pantalla rota', 'No enciende', 'Problemas de carga', 'Botones defectuosos', 'Conexión WiFi']
    },
    {
      id: 'tv',
      name: 'Televisores',
      description: 'Reparación de Smart TV y televisores convencionales.',
      icon: <FaTv className="w-8 h-8" />,
      commonIssues: ['No enciende', 'Sin imagen', 'Sin sonido', 'Problemas de WiFi', 'Control remoto']
    },
    {
      id: 'consola',
      name: 'Consolas de Videojuegos',
      description: 'Reparación de PlayStation, Xbox y Nintendo.',
      icon: <FaGamepad className="w-8 h-8" />,
      commonIssues: ['No lee discos', 'Sobrecalentamiento', 'Control no funciona', 'Problemas de WiFi', 'No enciende']
    },
    {
      id: 'impresora',
      name: 'Impresoras',
      description: 'Reparación y mantenimiento de impresoras láser e inyección.',
      icon: <FaPrint className="w-8 h-8" />,
      commonIssues: ['No imprime', 'Atascos de papel', 'Problemas de conectividad', 'Cartuchos defectuosos', 'Calibración']
    }
  ];

  const handleDeviceSelect = (deviceId: string) => {
    setFormData(prev => ({ ...prev, device: deviceId }));
    setShowForm(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simular envío del formulario
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Solicitud de reparación enviada:', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        device: '',
        problem: ''
      });
      
    } catch (error) {
      console.error('Error al enviar solicitud:', error);
      alert('Error al enviar la solicitud. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
                <span className="bg-gradient-to-r from-mostaza to-azul bg-clip-text text-transparent">Reparaciones</span>{" "}
                <span className="text-azul">Electrónicas</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
                Reparación profesional de equipos electrónicos. <span className="text-azul">Notebooks, celulares, tablets, TV</span> y más. 
                Diagnóstico gratuito y garantía en todos nuestros trabajos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  onClick={() => setShowForm(true)}
                  className="bg-gradient-to-r from-mostaza to-azul text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-mostaza/90 hover:to-azul/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Agendar Reparación
                </motion.button>
                <motion.button
                  onClick={() => window.open('https://wa.me/56993888939?text=Hola,%20necesito%20reparar%20mi%20equipo%20electrónico', '_blank')}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>WhatsApp</span>
                </motion.button>
              </div>
            </motion.div>
          </section>

          {/* Devices Grid */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Equipos que Reparamos</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Especialistas en reparación de todo tipo de dispositivos electrónicos con garantía y repuestos originales.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devices.map((device, index) => (
                <motion.div
                  key={device.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-azul to-mostaza rounded-xl mb-4">
                      {device.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{device.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{device.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-azul mb-3">Problemas comunes:</h4>
                    <ul className="space-y-2">
                      {device.commonIssues.map((issue, issueIndex) => (
                        <li key={issueIndex} className="text-sm text-gray-300 flex items-start">
                          <span className="text-mostaza mr-2">•</span>
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    onClick={() => handleDeviceSelect(device.id)}
                    className="w-full bg-gradient-to-r from-gray-700/50 to-gray-800/50 hover:from-gray-600/50 hover:to-gray-700/50 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 border border-gray-600/50 hover:border-gray-500/50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Reparar {device.name}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Gallery Section - Comentado hasta tener las imágenes */}
          {/* 
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Trabajos Realizados</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Algunos ejemplos de nuestras reparaciones exitosas. Cada trabajo incluye garantía y repuestos de calidad.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 * item }}
                  className="bg-gray-800/40 rounded-xl p-4 border border-gray-700/50"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg mb-4 flex items-center justify-center">
                    <FaCamera className="w-12 h-12 text-gray-500" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-white font-semibold mb-2">Reparación #{item}</h3>
                    <p className="text-gray-400 text-sm">Antes y después</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
          */}

          {/* Repair Form Modal */}
          {showForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => !isSubmitted && setShowForm(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="bg-gray-900/95 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full border border-gray-700/50"
                onClick={(e) => e.stopPropagation()}
              >
                {!isSubmitted ? (
                  <>
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Agendar Reparación</h3>
                      <p className="text-gray-300 text-sm">Completa el formulario y nos pondremos en contacto contigo</p>
                    </div>

                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-azul focus:border-transparent transition-all duration-300"
                          placeholder="Tu nombre completo"
                        />
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
                          required
                          className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-azul focus:border-transparent transition-all duration-300"
                          placeholder="tu@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-azul focus:border-transparent transition-all duration-300"
                          placeholder="+56 9 1234 5678"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Dispositivo *
                        </label>
                        <select
                          name="device"
                          value={formData.device}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-azul focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Selecciona tu dispositivo</option>
                          {devices.map(device => (
                            <option key={device.id} value={device.id}>
                              {device.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Descripción del problema *
                        </label>
                        <textarea
                          name="problem"
                          value={formData.problem}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-azul focus:border-transparent transition-all duration-300 resize-none"
                          placeholder="Describe el problema de tu dispositivo..."
                        />
                      </div>

                      <div className="flex gap-3 pt-4">
                        <motion.button
                          type="button"
                          onClick={() => setShowForm(false)}
                          className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Cancelar
                        </motion.button>
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 bg-gradient-to-r from-mostaza to-azul text-black py-3 px-4 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        >
                          {isSubmitting ? 'Enviando...' : 'Agendar'}
                        </motion.button>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="text-2xl font-bold text-green-400 mb-4">¡Solicitud enviada!</h3>
                    <p className="text-gray-300 mb-6">
                      Gracias por contactarnos. Te llamaremos en las próximas 24 horas para coordinar tu reparación.
                    </p>
                    <motion.button
                      onClick={() => {
                        setIsSubmitted(false);
                        setShowForm(false);
                      }}
                      className="bg-azul hover:bg-azul/80 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Cerrar
                    </motion.button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}

          {/* CTA Section */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center"
            >
              <h2 className="text-2xl font-bold text-white mb-4">¿Tu dispositivo no está en la lista?</h2>
              <p className="text-gray-300 mb-6">
                Contáctanos directamente y te ayudaremos con cualquier equipo electrónico.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={() => navigate('/contacto')}
                  className="bg-mostaza hover:bg-mostaza/90 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Consulta Especializada
                </motion.button>
                <motion.button
                  onClick={() => navigate('/')}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaArrowLeft className="w-4 h-4" />
                  <span>Volver al Inicio</span>
                </motion.button>
              </div>
            </motion.div>
          </section>
        </main>
        
        <Footer />
        <WhatsAppButton phoneNumber="+56993888939" />
      </div>
    </div>
  );
};

export default ReparacionesElectronicasPage; 