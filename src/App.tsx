import './App.css'
import Navbar from './components/Navbar'
import ServicesSection from './components/ServicesSection'
import ServicesDetailedSection from './components/ServicesDetailedSection'
import TechnologiesSection from './components/TechnologiesSection'
import WhyChooseUsSection from './components/WhyChooseUsSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import AuthNavigator from './components/AuthNavigator'
import { motion } from 'framer-motion'

function App() {
  // Cambiar a true para ver los formularios de autenticación
  const showAuth = false;

  if (showAuth) {
    return <AuthNavigator />;
  }

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
          {/* Hero Section */}
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <motion.div 
                className="relative rounded-2xl h-96 flex flex-col items-center justify-center text-center border border-gray-800/50 shadow-2xl overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url(/images/fondo-home.jpg)" }}
                />
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
                <div className="relative z-10 px-4">
                  <motion.h1 
                    className="text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  >
                    <span className="text-gray-400">Bienvenido a</span> <span className="logo-gradient">Soluciones RP</span>
                  </motion.h1>
                  <motion.p 
                    className="text-lg text-gray-300 max-w-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  >
                    ¿Tienes una idea o un problema técnico? Lo solucionamos.
                    <span className="text-azul">Desarrollamos tus aplicaciones web</span> y también <span className="text-mostaza">móvil o reparar tu equipo</span>. 
                    Unimos lo digital con lo técnico para ayudarte mejor.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Services Section */}
          <ServicesSection />
          
          {/* Detailed Services Section */}
          <ServicesDetailedSection />
          
          {/* Technologies Section */}
          <TechnologiesSection />
          
          {/* Why Choose Us Section */}
          <WhyChooseUsSection />
          
          {/* CTA Section */}
          <CTASection />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>

      {/* WhatsApp Button */}
      <WhatsAppButton 
        phoneNumber="+56993888939"
        message="Hola! Vi tu página web y me interesa conocer más sobre tus servicios de desarrollo y reparación."
      />
    </div>
  )
}

export default App
