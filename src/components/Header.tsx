"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/40 backdrop-blur-xl border-b border-white/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="hover:opacity-80 transition-opacity flex items-center gap-3">
            <Image
              src="/teste_logo.svg" 
              alt="Logo Clearfy"
              width={40}
              height={40}
              className="opacity-90 object-contain"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent">
              CLEARFY
            </span>
          </Link>
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-6">
          {/* ATENÇÃO: Adicionamos a '/' antes da '#' para funcionar de qualquer página */}
          <Link href="/#servicos" className="text-sky-600 hover:text-sky-700 font-medium transition-colors">
            Serviços
          </Link>
          <Link href="/#beneficios" className="text-sky-600 hover:text-sky-700 font-medium transition-colors">
            Benefícios
          </Link>
          {/* O botão agora leva para a página dedicada de orçamento */}
          <Link
            href="/orcamento"
            className="bg-sky-500/90 text-white px-5 py-2 rounded-lg font-semibold hover:bg-sky-600/90 shadow-md shadow-sky-500/20 backdrop-blur-sm transition-all duration-300"
          >
            Solicitar Orçamento
          </Link>
        </div>

        {/* Botão hamburguer mobile */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-md text-sky-600 hover:bg-white/20 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-white/40 backdrop-blur-xl border-t border-white/30 shadow-sm">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link 
              href="/#servicos" 
              className="text-sky-600 font-medium hover:text-sky-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Serviços
            </Link>
            <Link 
              href="/#beneficios" 
              className="text-sky-600 font-medium hover:text-sky-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Benefícios
            </Link>
            <Link
              href="/orcamento"
              className="bg-sky-500/90 text-white px-5 py-2 rounded-lg font-semibold hover:bg-sky-600/90 text-center shadow-md shadow-sky-500/20 backdrop-blur-sm transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}