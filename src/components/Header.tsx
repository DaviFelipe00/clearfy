import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-tight text-sky-600 hover:text-sky-700 transition-colors"
        >
          Clearfy
        </Link>

        {/* Navegação e Botões juntos */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="#servicos"
            className="text-zinc-600 hover:text-sky-500 font-medium transition-colors"
          >
            Serviços
          </Link>
          <Link
            href="#beneficios"
            className="text-zinc-600 hover:text-sky-500 font-medium transition-colors"
          >
            Benefícios
          </Link>

          <Link
            href="#equipe"
            className="px-5 py-2 rounded-lg border-2 border-sky-400 text-sky-600 font-semibold hover:bg-sky-50 transition-all duration-300"
          >
            Faça parte da equipe
          </Link>

          <Link
            href="#solicitar"
            className="bg-sky-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-sky-600 shadow-md transition-all duration-300"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </div>
    </header>
  );
}
