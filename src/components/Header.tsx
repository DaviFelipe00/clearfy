import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-sky-500">
          Clearfy
        </Link>

        {/* Links de Navegação (Desktop) */}
        <nav className="hidden md:flex gap-8">
          <Link href="#servicos" className="text-zinc-600 hover:text-sky-500">
            Serviços
          </Link>
          <Link href="#beneficios" className="text-zinc-600 hover:text-sky-500">
            Benefícios
          </Link>
        </nav>

        {/* Botão de Orçamento */}
        <a
          href="#solicitar"
          // MELHORIA: Trocado de 'font-medium' para 'font-semibold'
          className="bg-sky-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-sky-600 shadow-md"
        >
          Solicitar Orçamento
        </a>
      </div>
    </header>
  );
}