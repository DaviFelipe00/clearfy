import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React Compiler para otimizações automáticas
  reactCompiler: true,
  
  // Otimizações de imagem
  images: {
    // Formatos modernos (AVIF é 50% menor que WebP, WebP é 30% menor que JPEG)
    formats: ['image/avif', 'image/webp'],
    
    // Tamanhos de dispositivos para gerar imagens responsivas
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    
    // Tamanhos de imagem para ícones e thumbs
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Cache de imagens otimizadas (em segundos)
    minimumCacheTTL: 60,
    
    // Permite SVGs (importante para logos)
    dangerouslyAllowSVG: true,
    
    // Inline para exibir imagens normalmente (não forçar download)
    contentDispositionType: 'inline',
  },
  
  // Compressão gzip/brotli automática
  compress: true,
  
  // Configurações experimentais para performance
  experimental: {
    // Melhora o carregamento de fontes
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;