'use client';

import Image from "next/image";
import { useState } from "react";

// Importação estática das imagens
import imgResidencial from "../../public/servicos/limpeza_2.jpeg";
import imgComercial from "../../public/servicos/limpeza_3.jpeg";
import imgPosObra from "../../public/servicos/limpeza_1.jpeg";

export function Services() {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));

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

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  return (
    <section id="servicos" className="w-full py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Títulos */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent">
            Serviços que fazem a diferença
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-zinc-600 max-w-2xl px-4">
            Oferecemos soluções completas de limpeza para deixar seu ambiente impecável.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {services.map(({ img, title, desc }, i) => (
            <article
              key={i}
              className="group bg-white p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-md border border-sky-100 hover:border-sky-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Container da Imagem */}
              <div className="relative w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden mb-4 md:mb-6 shadow-sm bg-gradient-to-br from-sky-50 to-sky-100">
                {/* Skeleton loader */}
                {!loadedImages.has(i) && (
                  <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-sky-100 via-sky-200 to-sky-100" />
                )}
                
                <Image
                  src={img}
                  alt={title}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    loadedImages.has(i) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  } group-hover:scale-105`}
                  sizes="(max-width: 640px) 95vw, (max-width: 768px) 48vw, (max-width: 1024px) 45vw, 380px"
                  loading={i === 0 ? "eager" : "lazy"}
                  priority={i === 0}
                  placeholder="blur"
                  quality={75}
                  onLoad={() => handleImageLoad(i)}
                />
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-sky-700 mb-2 md:mb-3">
                {title}
              </h3>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                {desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}