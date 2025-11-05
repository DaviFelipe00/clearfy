// Em: src/components/Benefits.tsx

export function Benefits() {
  return (
    <section id="beneficios" className="w-full py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Títulos */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-sky-500">
            Benefícios que você merece
          </h2>
          <p className="mt-4 text-lg text-zinc-600 max-w-2xl">
            Clientes que escolhem a Clearfy experimentam tranquilidade e ambientes sempre limpos.
          </p>
        </div>

        {/* Grid de Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: 100% */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-left border border-zinc-100">
            <span className="text-6xl font-bold text-sky-500 mb-4 block">
              100%
            </span>
            <h3 className="text-2xl font-semibold text-zinc-900 mb-3">
              Economia de Tempo
            </h3>
            <p className="text-zinc-600">
              Deixe a limpeza conosco e aproveite seu tempo para o que realmente importa.
            </p>
          </div>

          {/* Card 2: 98% */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-left border border-zinc-100">
            <span className="text-6xl font-bold text-sky-500 mb-4 block">
              98%
            </span>
            <h3 className="text-2xl font-semibold text-zinc-900 mb-3">
              Satisfação Garantida
            </h3>
            <p className="text-zinc-600">
              Se não ficar satisfeito, voltamos para refazer o serviço sem custo adicional.
            </p>
          </div>

          {/* Card 3: 24h */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-left border border-zinc-100">
            <span className="text-6xl font-bold text-sky-500 mb-4 block">
              24h
            </span>
            <h3 className="text-2xl font-semibold text-zinc-900 mb-3">
              Agilidade no Atendimento
            </h3>
            <p className="text-zinc-600">
              Resposta rápida e agendamento facilitado para sua comodidade.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}