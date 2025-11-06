// Em: src/components/CallToAction.tsx
"use client"; // Adicionado para consistência com animações futuras, se desejar
import Link from 'next/link';
import { ArrowRight } from 'lucide-react'; // Importei a seta

export function CallToAction() {
  return (
    <section id="solicitar" className="w-full py-20 md:py-28 bg-sky-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-3xl">
          Pronto para ter um ambiente impecável?
        </h2>

        <p className="mt-6 text-lg md:text-xl text-sky-50 max-w-2xl">
          Junte-se a centenas de clientes satisfeitos que já transformaram seus ambientes com a Clearfy. Solicite seu orçamento hoje mesmo.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="#solicitar-form"
            // MELHORIA: Trocado de 'font-semibold' para 'font-extrabold'
            className="flex items-center justify-center gap-2 bg-white text-sky-600 px-7 py-3 rounded-lg font-extrabold text-lg hover:bg-zinc-100 shadow-md"
          >
            Solicitar Orçamento
          </Link>
          <Link
            href="https://wa.me/SEUNUMERO" 
            target="_blank"
            rel="noopener noreferrer"
            // MELHORIA: Trocado de 'font-semibold' para 'font-extrabold'
            className="flex items-center justify-center bg-sky-500 text-white px-7 py-3 rounded-lg font-extrabold text-lg border-2 border-white hover:bg-sky-400"
          >
            Falar no WhatsApp
          </Link>
        </div>
        
        <p className="mt-8 text-sm text-sky-100">
          Orçamento gratuito • Atendimento rápido • Profissionais qualificados
        </p>
      </div>
    </section>
  );
}