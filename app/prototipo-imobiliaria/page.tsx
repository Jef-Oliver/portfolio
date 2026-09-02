import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, MessageCircle, ExternalLink } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Protótipo Interativo | ImobPRO - Jeferson Oliveira',
  description: 'Experimente o protótipo funcional de inteligência, CRM e gestão imobiliária.',
};

export default function PrototipoImobiliariaPage() {
  const whatsappMsg = encodeURIComponent(
    'Olá Jeferson! Testei o protótipo do ImobPRO e quero um sistema sob medida para minha imobiliária/corretora.'
  );

  return (
    <div className="flex flex-col w-screen h-screen bg-black overflow-hidden select-none">
      {/* Top Bar Navigation */}
      <header className="h-14 bg-dark-surface border-b border-dark-border px-4 md:px-6 flex items-center justify-between z-20 flex-shrink-0">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs md:text-sm text-gray-300 hover:text-neon transition-colors px-3 py-1.5 rounded-lg border border-dark-border hover:border-neon/40 bg-black/40"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Site</span>
          </Link>
          <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-dark-border">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono text-white font-semibold">
              ImobPRO Enterprise Demo Live
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/prototipo-imobiliaria.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 text-xs text-gray-400 hover:text-white px-2.5 py-1.5 rounded"
            title="Abrir em aba isolada"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Aba cheia</span>
          </a>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon text-xs py-1.5 px-3 md:px-4 flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Quero um Sistema Assim</span>
          </a>
        </div>
      </header>

      {/* Embedded Prototype Frame */}
      <main className="flex-1 w-full h-[calc(100vh-3.5rem)] relative bg-[#090d16]">
        <iframe
          src="/prototipo-imobiliaria.html"
          title="Protótipo ImobPRO"
          className="w-full h-full border-0"
          allow="fullscreen"
        />
      </main>
    </div>
  );
}
