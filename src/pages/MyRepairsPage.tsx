import React from 'react';
import { motion } from 'framer-motion';

const mockRepairs = [
  {
    id: 'rep001',
    device: 'Apple iPhone 13 Pro',
    problem: 'La pantalla está rota y no responde al tacto en la esquina superior derecha.',
    status: 4, // En Reparación
    steps: [
      'Recibido',
      'En Diagnóstico',
      'Esperando Aprobación de Presupuesto',
      'Esperando Repuesto',
      'En Reparación',
      'Pruebas de Calidad',
      'Listo para Retirar/Envío',
      'Entregado',
    ],
    date: '2024-06-01',
  },
  {
    id: 'rep002',
    device: 'Samsung Galaxy S22 Ultra',
    problem: 'La batería se descarga muy rápido, no dura más de 4 horas con uso moderado.',
    status: 2, // Esperando Aprobación de Presupuesto
    steps: [
      'Recibido',
      'En Diagnóstico',
      'Esperando Aprobación de Presupuesto',
      'Esperando Repuesto',
      'En Reparación',
      'Pruebas de Calidad',
      'Listo para Retirar/Envío',
      'Entregado',
    ],
    date: '2024-06-03',
  },
];

const statusColors = [
  'bg-green-500', // Recibido
  'bg-green-500', // En Diagnóstico
  'bg-yellow-400', // Esperando Aprobación
  'bg-gray-400', // Esperando Repuesto
  'bg-blue-500', // En Reparación
  'bg-gray-400', // Pruebas de Calidad
  'bg-gray-400', // Listo para Retirar
  'bg-gray-400', // Entregado
];

const MyRepairsPage: React.FC = () => {
  return (
    <div className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Reparaciones Activas</h1>
      <div className="space-y-8">
        {mockRepairs.map((repair) => (
          <motion.div
            key={repair.id}
            className="bg-[#181f2a] rounded-2xl p-6 border border-[#232c3b] shadow-xl max-w-sm md:max-w-full mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">{repair.device}</h2>
                <p className="text-gray-300 text-sm mb-1">{repair.problem}</p>
                <span className="text-xs text-gray-400">Orden <span className="font-bold">#{repair.id}</span> • Ingresado: {repair.date}</span>
              </div>
              <div className="mt-4 md:mt-0 flex gap-2">
                <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all">Ver Detalle</button>
                <button className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-200 text-sm font-semibold transition-all">Descargar Informe</button>
                <button className="px-4 py-2 rounded-lg bg-purple-700 hover:bg-purple-600 text-white text-sm font-semibold transition-all">Contactar Soporte</button>
              </div>
            </div>
            {/* Timeline */}
            <div className="overflow-x-auto">
              <div className="flex items-center gap-4 md:gap-8 py-4">
                {repair.steps.map((step, idx) => {
                  const isCompleted = idx < repair.status;
                  const isCurrent = idx === repair.status;
                  return (
                    <div key={step} className="flex items-center gap-2 min-w-[120px]">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs border-2
                            ${isCurrent ? 'border-blue-400 ' + statusColors[idx] : isCompleted ? 'border-green-400 ' + statusColors[idx] : 'border-gray-600 bg-gray-700 text-gray-400'}`}
                        >
                          {isCompleted || isCurrent ? (
                            <span className="text-white">✓</span>
                          ) : (
                            <span className="text-gray-400">{idx + 1}</span>
                          )}
                        </div>
                        <span className={`mt-2 text-xs text-center ${isCurrent ? 'text-blue-400 font-bold' : isCompleted ? 'text-green-400' : 'text-gray-400'}`}>{step}</span>
                      </div>
                      {idx < repair.steps.length - 1 && (
                        <div className={`h-1 w-8 md:w-16 rounded-full ${isCompleted ? 'bg-green-400' : isCurrent ? 'bg-blue-400' : 'bg-gray-700'}`}></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyRepairsPage; 