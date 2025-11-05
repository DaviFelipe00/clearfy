// Em: src/components/Features.tsx

import { Clock, ShieldCheck, Leaf } from 'lucide-react';

export function Features() {
  return (
    // Esta seção continua no fundo azul claro da seção de Serviços
    <section id="recursos" className="w-full pb-20 md:pb-28 bg-sky-50/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Grid de Recursos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Horários Flexíveis */}
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-start">
            <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-5">
              <Clock className="w-6 h-6 text-sky-600" />
            </div>
            <h3 className="text-2xl font-semibold text-zinc-900 mb-3">
              Horários Flexíveis
            </h3>
            <p className="text-zinc-600">
              Atendemos no horário que melhor se adequa à sua rotina.
            </p>
          </div>

          {/* Card 2: Profissionais Treinados */}
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-start">
            <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6 text-sky-600" />
            </div>
            <h3 className="text-2xl font-semibold text-zinc-900 mb-3">
              Profissionais Treinados
            </h3>
            <p className="text-zinc-600">
              Equipe qualificada, uniformizada e com todos os equipamentos necessários.
            </p>
          </div>

          {/* Card 3: Produtos Ecológicos */}
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-start">
            <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-5">
              <Leaf className="w-6 h-6 text-sky-600" />
            </div>
            <h3 className="text-2xl font-semibold text-zinc-900 mb-3">
              Produtos Ecológicos
            </h3>
            <p className="text-zinc-600">
              Utilizamos produtos de limpeza sustentáveis e seguros para sua família.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}