"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section
      id="solicitar"
      className="w-full py-20 md:py-28 gradient-bg"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-sky-500 max-w-3xl">
          Pronto para ter um ambiente impecável?
        </h2>

        <p className="mt-6 text-lg md:text-xl text-sky-400 max-w-2xl">
          Junte-se a centenas de clientes satisfeitos que já transformaram seus ambientes com a Clearfy. Invista na sua praticidade e conforto hoje mesmo.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/orcamento" // ALTERADO: Redireciona para a página de orçamento
            className="flex items-center justify-center gap-2 bg-white text-sky-400 px-7 py-3 rounded-lg font-extrabold text-lg hover:bg-zinc-100 shadow-md"
          >
            Garantir Minha Profissional
          </Link>
          <a // Mudei de Link para a
            href="https://wa.me/558195124721"
            target="_blank"
            rel="noopener noreferrer"
          className="flex items-center justify-center bg-sky-600 text-white px-7 py-3 rounded-lg font-extrabold text-lg shadow-lg shadow-sky-600/20 hover:bg-sky-700 hover:shadow-sky-600/40 hover:-translate-y-0.5 transition-all duration-300">
  Falar no WhatsApp
</a>
        </div>

        <p className="mt-8 text-sm text-sky-600">
          Orçamento gratuito • Atendimento rápido • Profissionais qualificados
        </p>
      </div>
    </section>
  );
}