"use client"; // Esta linha é OBRIGATÓRIA para animações

import { motion } from "framer-motion";

export function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      // Começa invisível e levemente para baixo
      initial={{ opacity: 0, y: 20 }}
      // Anima para visível e na posição original
      whileInView={{ opacity: 1, y: 0 }}
      // Configurações da animação
      transition={{ duration: 0.5, ease: "easeInOut" }}
      // "viewport" garante que a animação só rode uma vez
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}