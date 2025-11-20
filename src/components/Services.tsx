import Image from "next/image";

// Importação estática das imagens para gerar o blur automático
// O caminho volta duas pastas (../..) para sair de 'components' e 'src' e chegar em 'public'
import imgResidencial from "../../public/servicos/limpeza_2.jpeg";
import imgComercial from "../../public/servicos/limpeza_3.jpeg";
import imgPosObra from "../../public/servicos/limpeza_1.jpeg";

export function Services() {
  const services = [
    {
      img: imgResidencial,
      title: "Limpeza Residencial",
      desc: "Serviços completos de limpeza para sua casa, com atenção a cada detalhe."
    },
    {
      img: imgComercial,
      title: "Limpeza Comercial",
      desc: "Soluções profissionais para escritórios, lojas e estabelecimentos comerciais."
    },
    {
      img: imgPosObra,
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
              {/* Container da Imagem */}
              <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6 shadow-md bg-zinc-100">
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  // Otimização para tamanhos de tela
                  sizes="(max-width: 768px) 100vw, 33vw"
                  // Prioridade apenas para a primeira imagem (LCP)
                  priority={i === 0}
                  // Efeito de desfoque mágico
                  placeholder="blur"
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