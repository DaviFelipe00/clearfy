import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-sky-500">
          Clearfy
        </Link>

        {/* Links de Navegação (Desktop) */}
        <nav className="hidden md:flex gap-8">
          <Link href="#recursos" className="text-zinc-600 hover:text-sky-500 transition-colors">
            Recursos
          </Link>
          <Link href="#beneficios" className="text-zinc-600 hover:text-sky-500 transition-colors">
            Benefícios
          </Link>
          <Link href="#contato" className="text-zinc-600 hover:text-sky-500 transition-colors">
            Contato
          </Link>
        </nav>

        {/* Botão de Orçamento */}
        <a
          href="#solicitar"
          className="bg-blue-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-sky-600 transition-colors shadow-md"
        >
          Solicitar Orçamento
        </a>
      </div>
    </header>
  );
}