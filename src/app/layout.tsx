// Em: src/app/layout.tsx

import type { Metadata } from "next";
// 1. Mude a importação de "Geist" para "Figtree"
import { Figtree } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// 2. Configure a nova fonte (Figtree)
// Escolhemos os pesos que o design usa (normal, semi-bold, e bold)
const figtree = Figtree({
  variable: "--font-sans", // Vamos usar uma variável genérica
  subsets: ["latin"],
  weight: ["400", "600", "800"], // Regular, SemiBold, ExtraBold
});

export const metadata: Metadata = {
  title: "Clearfy - Limpeza Profissional",
  description: "Serviços de limpeza profissional para residências e empresas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        // 3. Aplique a variável da Figtree aqui
        // (Removemos a fonte mono, pois não é necessária)
        className={`${figtree.variable} antialiased bg-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}