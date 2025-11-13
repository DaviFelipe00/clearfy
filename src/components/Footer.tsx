import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-sky-50/40 pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          
          {/* Coluna 1 - Marca e Contato */}
          <div className="md:col-span-5">
            <Link href="/" className="group inline-block mb-4">
              <span className="text-3xl font-bold text-sky-500 transition-colors duration-300 group-hover:text-sky-600">
                Clearfy
              </span>
            </Link>
            <p className="text-zinc-600 text-sm max-w-sm mb-4 leading-relaxed">
              Limpeza profissional para residências e empresas. Seu ambiente impecável com a Clearfy.
            </p>

            <div className="flex flex-col gap-2 text-sm">
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-2 text-zinc-600 hover:text-sky-500 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-500" />
                (11) 99999-9999
              </a>
              <a
                href="mailto:contato@clearfy.com"
                className="flex items-center gap-2 text-zinc-600 hover:text-sky-500 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-500" />
                contato@clearfy.com
              </a>
              <div className="flex items-center gap-2 text-zinc-600">
                <MapPin className="w-4 h-4 text-sky-500" />
                Recife, PE
              </div>
            </div>
          </div>

          {/* Coluna 2 - Produto */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-zinc-900 mb-3 text-base">Produto</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="#precos" className="text-zinc-600 hover:text-sky-500 transition-colors">Preços</Link>
              <Link href="#integracoes" className="text-zinc-600 hover:text-sky-500 transition-colors">Integrações</Link>
              <Link href="#servicos" className="text-zinc-600 hover:text-sky-500 transition-colors">Serviços</Link>
            </nav>
          </div>

          {/* Coluna 3 - Empresa */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-zinc-900 mb-3 text-base">Empresa</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="#sobre" className="text-zinc-600 hover:text-sky-500 transition-colors">Sobre</Link>
              <Link href="#blog" className="text-zinc-600 hover:text-sky-500 transition-colors">Blog</Link>
              <Link href="#contato" className="text-zinc-600 hover:text-sky-500 transition-colors">Contato</Link>
              <Link href="#carreiras" className="text-zinc-600 hover:text-sky-500 transition-colors">Carreiras</Link>
            </nav>
          </div>

          {/* Coluna 4 - Redes sociais */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-zinc-900 mb-3 text-base">Siga-nos</h3>
            <div className="flex gap-2 mb-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white hover:bg-sky-600 transition-colors duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white hover:bg-sky-600 transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white hover:bg-sky-600 transition-colors duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-zinc-600">
              Receba novidades e dicas de limpeza
            </p>
          </div>
        </div>

        <div className="h-px bg-sky-200 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-zinc-500 text-xs">
          <p>&copy; 2025 Clearfy. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="#privacidade" className="hover:text-sky-500 transition-colors">Privacidade</Link>
            <Link href="#termos" className="hover:text-sky-500 transition-colors">Termos</Link>
            <Link href="#cookies" className="hover:text-sky-500 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
