import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaHeart, FaShieldAlt, FaHandshake, FaWhatsapp } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const SobreNosotrosPage: React.FC = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola! Me gustaría conocer más sobre Soluciones RP.');
    window.open(`https://wa.me/56993888939?text=${message}`, '_blank');
  };

  const values = [
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Innovación",
      description: "Buscamos constantemente nuevas tecnologías y soluciones creativas para resolver los desafíos de nuestros clientes."
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Pasión",
      description: "Amamos lo que hacemos y ponemos todo nuestro entusiasmo en cada proyecto que emprendemos."
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Confianza",
      description: "Construimos relaciones duraderas basadas en la transparencia, honestidad y resultados confiables."
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Compromiso",
      description: "Nos comprometemos a entregar soluciones de calidad que superen las expectativas de nuestros clientes."
    }
  ];

  const team = [
    {
      name: "Roberto Peña",
      role: "Fundador & Técnico Multifuncional",
      description: "Especialista en reparación electrónica, desarrollo web y aplicaciones móviles. Técnico, programador y solucionador de problemas tecnológicos.",
      skills: ["Electrónica", "Hardware", "React", "Node.js", "React Native", "Flutter", "Servicio Técnico"]
    }
  ];

  const stats = [
    { number: "25+", label: "Reparaciones Completadas" },
    { number: "20+", label: "Clientes Satisfechos" },
    { number: "1+", label: "Año de Experiencia" },
    { number: "24/7", label: "Soporte Técnico" }
  ];

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
                <span className="bg-gradient-to-r from-mostaza to-azul bg-clip-text text-transparent">
                  Sobre Nosotros
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Somos una empresa joven y dinámica que une el mundo digital con la técnica. 
                Desde reparación de equipos electrónicos hasta desarrollo de aplicaciones web y móviles, 
                ofrecemos soluciones integrales para impulsar tu negocio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleWhatsApp}
                  className="bg-azul hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Contáctanos
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-mostaza mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Misión */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-900/50 p-8 rounded-lg border border-gray-800"
              >
                <div className="text-4xl mb-6 text-center text-mostaza">🎯</div>
                <h2 className="text-3xl font-bold mb-4 text-center">Nuestra Misión</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Facilitar el acceso a la tecnología para empresas y emprendedores, 
                  proporcionando soluciones integrales: desde reparación de equipos electrónicos 
                  hasta desarrollo de aplicaciones web y móviles, que impulsen el crecimiento 
                  y la eficiencia de sus negocios.
                </p>
              </motion.div>

              {/* Visión */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-900/50 p-8 rounded-lg border border-gray-800"
              >
                <div className="text-4xl mb-6 text-center text-azul">🚀</div>
                <h2 className="text-3xl font-bold mb-4 text-center">Nuestra Visión</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Ser reconocidos como el socio tecnológico de confianza para pequeñas y 
                  medianas empresas, liderando la transformación digital con soluciones 
                  innovadoras y servicio excepcional.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Nuestros Valores</h2>
              <p className="text-xl text-gray-300">Los principios que guían nuestro trabajo</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-mostaza transition-all duration-300 text-center"
                >
                  <div className="text-mostaza mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Nuestro Equipo</h2>
              <p className="text-xl text-gray-300">Conoce al fundador de Soluciones RP</p>
            </motion.div>
            
            <div className="flex justify-center">
              <div className="max-w-md">
                {team.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-azul transition-all duration-300"
                  >
                    <div className="text-center mb-6">
                      <div className="w-24 h-24 bg-gradient-to-r from-mostaza to-azul rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-black">
                        {member.name.charAt(0)}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                      <p className="text-mostaza font-semibold mb-4">{member.role}</p>
                      <p className="text-gray-300 mb-6">{member.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-azul mb-3">Habilidades:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">Nuestra Historia</h2>
              <p className="text-xl text-gray-300">Cómo comenzó todo</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-900/50 p-8 rounded-lg border border-gray-800"
            >
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Soluciones RP nació de la pasión por la tecnología y el deseo de ayudar a 
                pequeñas empresas a digitalizarse. Todo comenzó cuando Roberto, nuestro 
                fundador, se dio cuenta de que muchas empresas locales tenían ideas 
                increíbles pero carecían de las herramientas tecnológicas para llevarlas a cabo.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Con experiencia en desarrollo de software y reparación de equipos electrónicos, 
                ya hemos completado más de 25 reparaciones exitosas y ayudado a más de 20 
                clientes satisfechos. Ahora decidimos expandirnos para ofrecer soluciones 
                integrales: desde el desarrollo de aplicaciones web y móviles hasta el 
                mantenimiento y reparación de equipos informáticos.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Estamos en crecimiento y comprometidos con nuestra misión: hacer la 
                tecnología accesible y útil para todos, proporcionando soluciones 
                personalizadas que realmente marquen la diferencia en el negocio 
                de nuestros clientes.
              </p>
            </motion.div>
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
              <h2 className="text-4xl font-bold mb-6">¿Listo para trabajar juntos?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Conoce más sobre nuestros servicios y cómo podemos ayudarte a alcanzar tus objetivos
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.href = '/contacto'}
                  className="bg-mostaza hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Contáctanos
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  WhatsApp
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton phoneNumber="+56993888939" />
    </div>
  );
};

export default SobreNosotrosPage; 