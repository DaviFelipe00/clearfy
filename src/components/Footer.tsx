// Em: src/components/Footer.tsx

import Link from 'next/link';

export function Footer() {
  return (
    // Fundo azul claro, como na imagem
    <footer className="w-full bg-sky-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Coluna 1: Logo e Descrição */}
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-bold text-sky-500 mb-4 inline-block">
              Clearfy
            </Link>
            <p className="text-zinc-600 max-w-sm">
              Serviços de limpeza profissional para residências e empresas. Deixe seu ambiente impecável com a Clearfy.
            </p>
          </div>

          {/* Coluna 2: Produto */}
          <div>
            <h3 className="font-semibold text-zinc-900 mb-4">Produto</h3>
            <nav className="flex flex-col gap-3">
              <Link href="#precos" className="text-zinc-600 hover:text-sky-500 transition-colors">Preços</Link>
              <Link href="#integracoes" className="text-zinc-600 hover:text-sky-500 transition-colors">Integrações</Link>
            </nav>
          </div>

          {/* Coluna 3: Empresa */}
          <div>
            <h3 className="font-semibold text-zinc-900 mb-4">Empresa</h3>
            <nav className="flex flex-col gap-3">
              <Link href="#sobre" className="text-zinc-600 hover:text-sky-500 transition-colors">Sobre</Link>
              <Link href="#blog" className="text-zinc-600 hover:text-sky-500 transition-colors">Blog</Link>
              <Link href="#contato" className="text-zinc-600 hover:text-sky-500 transition-colors">Contato</Link>
            </nav>
          </div>
        </div>

        {/* Linha Divisória e Copyright */}
        <div className="mt-12 pt-8 border-t border-sky-200/60 flex flex-col md:flex-row justify-between items-center text-zinc-500">
          <p className="text-sm mb-4 md:mb-0">
            &copy; 2025 Clearfy. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#privacidade" className="hover:text-sky-500 transition-colors">Privacidade</Link>
            <Link href="#termos" className="hover:text-sky-500 transition-colors">Termos</Link>
            <Link href="#cookies" className="hover:text-sky-500 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}