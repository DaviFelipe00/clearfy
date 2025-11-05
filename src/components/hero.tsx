import { Sparkle } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="w-full py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          <Sparkle className="w-4 h-4" />
          Limpeza profissional que transforma ambientes
        </div>

        {/* Título Principal */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 max-w-4xl">
          Ambientes limpos e organizados para você
        </h1>

        {/* Subtítulo */}
        <p className="mt-6 text-lg md:text-xl text-zinc-600 max-w-2xl">
          A Clearfy oferece serviços de limpeza profissional para residências e
          empresas. Qualidade, confiança e excelência em cada detalhe.
        </p>

        {/* Botões */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="#solicitar"
            className="flex items-center justify-center gap-2 bg-sky-500 text-white px-7 py-3 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors shadow-md"
          >
            Solicitar Orçamento
            <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link
            href="#servicos"
            className="flex items-center justify-center bg-white text-zinc-700 px-7 py-3 rounded-lg font-semibold text-lg border border-zinc-300 hover:bg-zinc-100 transition-colors"
          >
            Nossos Serviços
          </Link>
        </div>
      </div>
    </section>
  );
}