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
          <ServicesSection />
          <ServicesDetailedSection />
          <TechnologiesSection />
          <WhyChooseUsSection />
          <CTASection />
        </main>
        <Footer />
        <WhatsAppButton phoneNumber="+1234567890" />
      </div>
    </div>
  );
};

export default HomePage; 