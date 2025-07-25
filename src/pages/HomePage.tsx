import React from 'react';
import Navbar from '../components/Navbar';
import ServicesSection from '../components/ServicesSection';
import ServicesDetailedSection from '../components/ServicesDetailedSection';
import TechnologiesSection from '../components/TechnologiesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const HomePage: React.FC = () => {
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
          <section className="pt-24 pb-12 flex justify-center">
            <div className="bg-gray-900/80 rounded-2xl shadow-2xl px-3 py-8 max-w-xs md:max-w-2xl lg:max-w-4xl w-full text-center border border-gray-800 md:px-8 md:py-16">
              <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 text-center">
                <span className="bg-gradient-to-r from-mostaza to-azul bg-clip-text text-transparent">Soluciones</span>{" "}
                <span className="text-azul">RP</span>
              </h1>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                <span className="font-bold">¿Tienes una idea o un problema técnico?</span> <span className="font-bold">Lo solucionamos.</span>
                <span className="text-azul"> Desarrollamos tus aplicaciones web</span> y también <span className="text-mostaza">móvil o reparar tu equipo</span>. <span className="font-bold">Une lo digital con lo técnico</span> para ayudarte mejor.
              </p>
            </div>
          </section>
          <ServicesSection />
          <ServicesDetailedSection />
          <TechnologiesSection />
          <WhyChooseUsSection />
          <CTASection />
        </main>
        <Footer />
        <WhatsAppButton phoneNumber="+56993888939" />
      </div>
    </div>
  );
};

export default HomePage; 