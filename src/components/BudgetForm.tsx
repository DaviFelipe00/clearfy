"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function BudgetForm() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    // Simulação de envio
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    alert("Solicitação enviada com sucesso!");
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-sky-100"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-sky-800 mb-2">Solicitar Orçamento</h1>
        <p className="text-zinc-600">Preencha os dados abaixo e entraremos em contato.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-sky-900">Nome Completo</label>
            <input
              required
              type="text"
              id="name"
              placeholder="Seu nome"
              className="w-full px-4 py-3 rounded-xl bg-sky-50/50 border border-sky-100 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-sky-900">Telefone / WhatsApp</label>
            <input
              required
              type="tel"
              id="phone"
              placeholder="(00) 00000-0000"
              className="w-full px-4 py-3 rounded-xl bg-sky-50/50 border border-sky-100 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-sky-900">E-mail</label>
          <input
            required
            type="email"
            id="email"
            placeholder="seu@email.com"
            className="w-full px-4 py-3 rounded-xl bg-sky-50/50 border border-sky-100 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium text-sky-900">Tipo de Serviço</label>
          <select
            id="service"
            className="w-full px-4 py-3 rounded-xl bg-sky-50/50 border border-sky-100 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all text-zinc-700"
          >
            <option value="residencial">Limpeza Residencial</option>
            <option value="comercial">Limpeza Comercial</option>
            <option value="pos-obra">Pós-Obra</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-sky-900">Mensagem (Opcional)</label>
          <textarea
            id="message"
            rows={4}
            placeholder="Conte mais detalhes sobre o que você precisa..."
            className="w-full px-4 py-3 rounded-xl bg-sky-50/50 border border-sky-100 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all resize-none"
          />
        </div>

        <button
          disabled={isLoading}
          type="submit"
          className="w-full bg-gradient-to-r from-sky-500 to-sky-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-sky-500/30 hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? "Enviando..." : "Enviar Solicitação"}
        </button>
      </form>
    </motion.div>
  );
}