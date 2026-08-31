'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MessageCircle, ChevronRight } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

const TYPING_LINES = [
  '> Iniciando sistema de gestão...',
  '> Módulo financeiro carregado ✓',
  '> Conectando ao banco de dados...',
  '> Integrações ativas ✓',
  '> Sistema pronto para produção ✓',
];

function TerminalTyping() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    if (currentLine >= TYPING_LINES.length) { setDone(true); return; }

    const line = TYPING_LINES[currentLine];
    if (currentChar < line.length) {
      const t = setTimeout(() => setCurrentChar(c => c + 1), 35);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLines(prev => [...prev, line]);
        setCurrentLine(l => l + 1);
        setCurrentChar(0);
      }, 400);
      return () => clearTimeout(t);
    }
  }, [currentChar, currentLine, done]);

  return (
    <div className="font-mono text-xs text-neon/70 bg-black/60 border border-neon/20 rounded-xl p-4 text-left">
      {lines.map((line, i) => (
        <div key={i} className="leading-6">{line}</div>
      ))}
      {!done && currentLine < TYPING_LINES.length && (
        <div className="leading-6">
          {TYPING_LINES[currentLine].slice(0, currentChar)}
          <span className="animate-pulse text-neon">█</span>
        </div>
      )}
    </div>
  );
}

export default function SalesHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-neon" />

      {/* Radial glow center */}
      <div className="absolute inset-0 bg-radial-neon opacity-60" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-neon rounded-full"
          style={{
            top: `${20 + i * 12}%`,
            left: `${10 + i * 15}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-4 bg-neon/5 border border-neon/20 rounded-full pr-6 p-1.5 mb-6"
              >
                <img src="/projects-images/profile.jpg" alt="Jeferson Oliveira" className="w-14 h-14 rounded-full object-cover border-2 border-neon/50" />
                <span className="text-neon text-base font-semibold tracking-wide">Sistemas sob medida por Jeferson Oliveira</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="heading-xl text-white mb-6"
              >
                Seu negócio merece um{' '}
                <span className="text-neon glow-neon-text">
                  sistema feito sob medida
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-gray-text text-lg leading-relaxed mb-8"
              >
                Elimine planilhas, erros e retrabalho. Desenvolvo sistemas profissionais
                personalizados para gestão imobiliária, controle de ponto, inventário e
                muito mais entregues com qualidade e suporte real.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 mb-10"
              >
                <motion.a
                  href={`https://wa.me/${CONTACT.whatsapp}?text=Olá!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20os%20sistemas.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-neon text-base py-4 px-8 justify-center sm:justify-start"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </motion.a>

                <motion.a
                  href="#produtos"
                  whileHover={{ scale: 1.02 }}
                  className="btn-outline-neon text-base py-4 px-8 justify-center"
                >
                  Ver Sistemas
                  <ChevronRight className="w-4 h-4" />
                </motion.a>
              </motion.div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex gap-8"
              >
                {[
                  { value: '4+', label: 'Anos de experiência' },
                  { value: '+7', label: 'Sistemas entregues' },
                  { value: '95%', label: 'Redução de erros' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-neon font-grotesk">{stat.value}</div>
                    <div className="text-xs text-gray-muted">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Glow behind terminal */}
                <div className="absolute -inset-4 bg-neon/5 blur-2xl rounded-2xl" />

                <div className="relative card-dark p-6 border-neon/20">
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-dark-border">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-neon/60" />
                    <span className="ml-2 text-gray-muted text-xs font-mono">sistema_cliente.log</span>
                  </div>

                  <TerminalTyping />

                  <div className="mt-4 pt-4 border-t border-dark-border text-xs font-mono text-gray-muted">
                    {'// '}Sistema em produção há 2 meses com zero downtime
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-muted font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 text-neon" />
        </motion.div>
      </motion.div>
    </section>
  );
}
