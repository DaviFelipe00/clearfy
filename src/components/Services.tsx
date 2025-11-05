// Em: src/components/Services.tsx

import { Home, Building, Sparkles } from 'lucide-react';

export function Services() {
  return (
    <section id="servicos" className="w-full py-20 md:py-28 bg-sky-50/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Títulos */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-sky-500">
            Serviços que fazem a diferença
          </h2>
          <p className="mt-4 text-lg text-zinc-600 max-w-2xl">
            Oferecemos soluções completas de limpeza para deixar seu ambiente impecável.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Limpeza Residencial */}
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-start">
            <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-5">
              <Home className="w-6 h-6 text-sky-600" />
            </div>
            <h3 className="text-2xl font-semibold text-zinc-900 mb-3">
              Limpeza Residencial
            </h3>
            <p className="text-zinc-600">
              Serviços completos de limpeza para sua casa, com atenção a cada detalhe.
            </p>
          </div>

          {/* Card 2: Limpeza Comercial */}
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-start">
            <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-5">
              <Building className="w-6 h-6 text-sky-600" />
            </div>
            <h3 className="text-2xl font-semibold text-zinc-900 mb-3">
              Limpeza Comercial
            </h3>
            <p className="text-zinc-600">
              Soluções profissionais para escritórios, lojas e estabelecimentos comerciais.
            </p>
          </div>

          {/* Card 3: Limpeza Pós-Obra */}
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-start">
            <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-5">
              <Sparkles className="w-6 h-6 text-sky-600" />
            </div>
            <h3 className="text-2xl font-semibold text-zinc-900 mb-3">
              Limpeza Pós-Obra
            </h3>
            <p className="text-zinc-600">
              Remoção completa de resíduos e sujeiras após reformas e construções.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}