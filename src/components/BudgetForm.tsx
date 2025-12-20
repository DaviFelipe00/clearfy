"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Briefcase, Key } from "lucide-react"; // Ícones opcionais para melhorar o visual

export function BudgetOptions() {
  const options = [
    {
      title: "Para minha residência",
      description: "Soluções de limpeza para sua casa ou apartamento.",
      href: "https://wa.me/5581995124721?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20especialista%20para%20*minha%20resid%C3%AAncia*", // Coloque seu link aqui
      icon: <Home className="w-8 h-8 text-sky-500" />,
    },
    {
      title: "Para meu negócio",
      description: "Serviços especializados para empresas e escritórios.",
      href: "https://wa.me/5581995124721?text=Ol%C3%A1!%20Preciso%20de%20uma%20solu%C3%A7%C3%A3o%20especializada%20para%20*meu%20neg%C3%B3cio*%20(ou%20p%C3%B3s-obra)", // Coloque seu link aqui
      icon: <Briefcase className="w-8 h-8 text-sky-500" />,
    },
    {
      title: "Sou anfitrião",
      description: "Limpeza profissional para Airbnb e aluguéis de temporada.",
      href: "https://wa.me/5581995124721?text=Ol%C3%A1!%20Sou%20anfitri%C3%A3o%20e%20quero%20saber%20mais%20sobre%20a%20gest%C3%A3o%20de%20*Turnover%2FAirbnb*", // Coloque seu link aqui
      icon: <Key className="w-8 h-8 text-sky-500" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-sky-800 mb-2">
          Como podemos te ajudar?
        </h1>
        <p className="text-zinc-600">
          Selecione a opção que melhor descreve sua necessidade.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {options.map((option, index) => (
          <Link key={index} href={option.href} className="group">
            <motion.div
              whileHover={{ y: -5 }}
              className="h-full bg-white p-8 rounded-3xl shadow-lg border border-sky-100 hover:shadow-sky-200/50 hover:border-sky-300 transition-all flex flex-col items-center text-center cursor-pointer"
            >
              <div className="mb-6 p-4 bg-sky-50 rounded-2xl group-hover:bg-sky-100 transition-colors">
                {option.icon}
              </div>
              
              <h3 className="text-xl font-bold text-sky-900 mb-3 group-hover:text-sky-600 transition-colors">
                {option.title}
              </h3>
              
              <p className="text-sm text-zinc-500 leading-relaxed">
                {option.description}
              </p>
              
              <div className="mt-6 w-full py-3 rounded-xl bg-sky-50 text-sky-600 font-semibold text-sm group-hover:bg-sky-500 group-hover:text-white transition-all">
                Selecionar
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}