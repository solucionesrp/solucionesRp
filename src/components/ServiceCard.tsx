import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, color }) => {
  return (
    <div className={`bg-[#f4a124]/80 rounded-xl p-3 hover:bg-[#f4a124]/90 transition-all duration-300 border border-[#f4a124]/50 hover:border-[#f4a124] flex flex-col justify-center h-[200px] max-w-[200px] shadow-lg hover:shadow-xl`}>
      <div className="text-xl mb-2 text-center">{icon}</div>
      <h3 className="text-sm font-semibold mb-2 text-black text-center">{title}</h3>
      <p className="text-gray-800 text-xs text-center">{description}</p>
    </div>
  );
};

export default ServiceCard; 