// Em: src/components/Services.tsx

import Image from "next/image";

export function Services() {
  const services = [
    {
      img: "/servicos/limpeza_2.jpeg",
      title: "Limpeza Residencial",
      desc: "Serviços completos de limpeza para sua casa, com atenção a cada detalhe."
    },
    {
      img: "/servicos/limpeza_3.jpeg",
      title: "Limpeza Comercial",
      desc: "Soluções profissionais para escritórios, lojas e estabelecimentos comerciais."
    },
    {
      img: "/servicos/limpeza_1.jpeg",
      title: "Limpeza Pós-Obra",
      desc: "Remoção completa de resíduos e sujeiras após reformas e construções."
    },
  ];

  return (
    <section id="servicos" className="w-full py-24 md:py-32 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Títulos */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent">
            Serviços que fazem a diferença
          </h2>
          <p className="mt-4 text-lg text-zinc-600 max-w-2xl">
            Oferecemos soluções completas de limpeza para deixar seu ambiente impecável.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map(({ img, title, desc }, i) => (
            <div
              key={i}
              className="group bg-white p-10 rounded-3xl shadow-lg border border-sky-100 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-200/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Imagem */}
              <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6 shadow-md">
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={i === 0}    // garante carregamento rápido da primeira
                  loading={i === 0 ? "eager" : "lazy"} 
                />
              </div>

              <h3 className="text-2xl font-semibold text-sky-700 mb-3">
                {title}
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
