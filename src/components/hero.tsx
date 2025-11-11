"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const fadeInFixed: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function Hero() {
  return (
    <section className="relative w-full pt-40 pb-24 md:pt-48 md:pb-32 gradient-bg overflow-hidden">
      {/* Background decorativo adicional */}
      <motion.div
        className="absolute inset-x-0 top-0 h-[600px] w-full max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          background:
            "radial-gradient(circle at top, rgba(2, 132, 199, 0.12), transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Elementos decorativos */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-sky-400/5 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -20, 0] }}
        transition={{
          opacity: { duration: 0.8 },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        aria-hidden="true"
      />

      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 20, 0] }}
        transition={{
          opacity: { duration: 0.8 },
          y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
        aria-hidden="true"
      />

      <motion.div
        className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Título */}
        <motion.h1
          variants={fadeInFixed}
          className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-gradient-to-br from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent max-w-4xl leading-tight"
        >
          Ambientes limpos e organizados para você
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          variants={fadeInFixed}
          className="mt-6 text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed"
        >
          A Clearfy oferece serviços de limpeza profissional para residências e
          empresas. Qualidade, confiança e excelência em cada detalhe.
        </motion.p>

        {/* Botões */}
        <motion.div
          variants={fadeInFixed}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <motion.div
            variants={buttonVariants}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.15 }}
          >
            <Link
              href="#solicitar"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-sky-600 hover:to-sky-700 shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/40 transition-all duration-300 group"
            >
              Solicitar Orçamento
            </Link>
          </motion.div>

          <motion.div
            variants={buttonVariants}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.15 }}
          >
            <Link
              href="#servicos"
              className="flex items-center justify-center bg-white text-zinc-700 px-8 py-4 rounded-xl font-bold text-lg border-2 border-zinc-200 hover:bg-zinc-50 hover:border-sky-200 transition-all duration-300 backdrop-blur-sm"
            >
              Nossos Serviços
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
