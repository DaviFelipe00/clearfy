"use client"; 

import { Sparkle} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion'; 

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
      delayChildren: 0.1,  
    },
  },
};

const itemFadeInUp = {
  hidden: { opacity: 0, y: 20 }, 
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

export function Hero() {
  return (
    <section className="relative w-full pt-40 pb-24 md:pt-48 md:pb-32 bg-white overflow-hidden">
      <div 
        className="absolute inset-x-0 top-0 h-[600px] w-full max-w-7xl mx-auto" 
        style={{
          background: 'radial-gradient(circle at top, rgba(2, 132, 199, 0.08), transparent 60%)'
        }} 
        aria-hidden="true" 
      />

      <motion.div 
        className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="show" 
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold tracking-tighter text-sky-500 max-w-4xl"
        >
          Ambientes limpos e organizados para você
        </motion.h1>

        <motion.p 
          className="mt-6 text-lg md:text-xl text-zinc-600 max-w-2xl"
        >
          A Clearfy oferece serviços de limpeza profissional para residências e
          empresas. Qualidade, confiança e excelência em cada detalhe.
        </motion.p>

        <motion.div 
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="#solicitar"
            className="flex items-center justify-center gap-2 bg-sky-500 text-white px-7 py-3 rounded-lg font-extrabold text-lg hover:bg-sky-600 shadow-lg shadow-sky-500/20 hover:shadow-xl hover:shadow-sky-500/30"
          >
            Solicitar Orçamento
          </Link>
          <Link
            href="#servicos"
            className="flex items-center justify-center bg-white text-zinc-700 px-7 py-3 rounded-lg font-extrabold text-lg border border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300"
          >
            Nossos Serviços
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}