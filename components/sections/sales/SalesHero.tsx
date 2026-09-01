'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, MessageCircle, ChevronRight, Play } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

const TYPING_LINES = [
  '> Iniciando sistema de gestão...',
  '> Módulo financeiro carregado ✓',
  '> Conectando ao banco de dados...',
  '> Integrações ativas ✓',
  '> Sistema pronto para produção ✓',
];

function TerminalContent({
  lines,
  currentLine,
  currentChar,
  done,
}: {
  lines: string[];
  currentLine: number;
  currentChar: number;
  done: boolean;
}) {
  const progressPercent = Math.min(
    100,
    Math.round(
      ((lines.length +
        (currentLine < TYPING_LINES.length
          ? currentChar / (TYPING_LINES[currentLine]?.length || 1)
          : 0)) /
        TYPING_LINES.length) *
        100
    )
  );

  return (
    <div
      style={{ backgroundColor: '#070707', borderColor: 'rgba(0, 255, 65, 0.25)' }}
      className="relative card-dark p-5 md:p-6 border shadow-[0_0_50px_rgba(0,255,65,0.18)] rounded-2xl overflow-hidden text-left"
    >
      {/* Top neon line accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00FF41] to-transparent" />

      {/* Terminal header */}
      <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-[#00FF41]/80 shadow-[0_0_8px_rgba(0,255,65,0.8)]" />
          <span className="ml-2 text-gray-400 text-xs font-mono">
            sistema_cliente.log
          </span>
        </div>
        <span
          style={{ backgroundColor: 'rgba(0, 255, 65, 0.1)', color: '#00FF41', borderColor: 'rgba(0, 255, 65, 0.3)' }}
          className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded border"
        >
          {done ? 'ONLINE' : `BOOTING ${progressPercent}%`}
        </span>
      </div>

      {/* Terminal Body */}
      <div
        style={{ backgroundColor: '#000000', borderColor: 'rgba(0, 255, 65, 0.2)', color: '#00FF41' }}
        className="font-mono text-xs border rounded-xl p-4 min-h-[160px] flex flex-col justify-start leading-6"
      >
        {lines.map((line, i) => (
          <div key={i} className="text-[#00FF41]">
            {line}
          </div>
        ))}
        {!done && currentLine < TYPING_LINES.length && (
          <div className="text-[#00FF41]">
            {TYPING_LINES[currentLine].slice(0, currentChar)}
            <span className="animate-pulse text-[#00FF41] font-bold">█</span>
          </div>
        )}
      </div>

      {/* Progress line */}
      {!done && (
        <div className="mt-3 w-full bg-[#1A1A1A] h-1 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#00FF41] transition-all duration-100 ease-out shadow-[0_0_8px_rgba(0,255,65,0.8)]"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      )}

      <div className="mt-3.5 pt-3.5 border-t border-[#1A1A1A] text-xs font-mono text-gray-400 flex items-center justify-between">
        <span>{'// '}Sistema em produção há 2 meses com zero downtime</span>
        {done && <span className="text-[#00FF41] text-[11px] font-bold">✓ 100% OK</span>}
      </div>
    </div>
  );
}

export default function SalesHero() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);
  const [isDocked, setIsDocked] = useState(false);

  // Fast typing logic (~2 seconds total)
  useEffect(() => {
    if (done) return;
    if (currentLine >= TYPING_LINES.length) {
      setDone(true);
      const timer = setTimeout(() => {
        setIsDocked(true);
      }, 350);
      return () => clearTimeout(timer);
    }

    const line = TYPING_LINES[currentLine];
    if (currentChar < line.length) {
      const t = setTimeout(() => setCurrentChar((c) => c + 1), 16);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLines((prev) => [...prev, line]);
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 120);
      return () => clearTimeout(t);
    }
  }, [currentChar, currentLine, done]);

  // Instant skip button
  const handleSkip = () => {
    setLines(TYPING_LINES);
    setDone(true);
    setIsDocked(true);
  };

  return (
    <section
      style={{ backgroundColor: '#000000', color: '#ffffff' }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
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

      {/* ── 1. CENTERED FULLSCREEN LOADER SCREEN (COVERS EVERYTHING WHILE BOOTING) ── */}
      <AnimatePresence>
        {!isDocked && (
          <motion.div
            key="preloader-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ backgroundColor: '#000000' }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-2xl p-6"
          >
            {/* Background neon ambient aura */}
            <div className="absolute w-[500px] h-[500px] bg-neon/10 blur-[140px] rounded-full pointer-events-none" />

            <motion.div
              layoutId="terminal-box"
              transition={{
                type: 'spring',
                stiffness: 85,
                damping: 16,
              }}
              className="w-full max-w-lg relative z-10"
            >
              <TerminalContent
                lines={lines}
                currentLine={currentLine}
                currentChar={currentChar}
                done={done}
              />
            </motion.div>

            {/* Subtext & Skip button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 flex items-center gap-4 z-10"
            >
              <span className="text-xs font-mono text-gray-500">
                Carregando ambiente de produção...
              </span>
              <button
                onClick={handleSkip}
                className="text-xs font-mono text-[#00FF41] hover:text-white underline hover:no-underline transition-colors flex items-center gap-1 bg-[#00FF41]/10 border border-[#00FF41]/30 px-2.5 py-1 rounded"
              >
                <span>Pular intro</span>
                <Play className="w-3 h-3 fill-[#00FF41]" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 2. HERO CONTENT (REVEALED WHEN DOCKED) ── */}
      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{
                opacity: isDocked ? 1 : 0,
                x: isDocked ? 0 : -30,
              }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isDocked ? 1 : 0, y: isDocked ? 0 : 20 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-4 bg-neon/5 border border-neon/20 rounded-full pr-6 p-1.5 mb-6"
              >
                <img
                  src="/projects-images/profile.jpg"
                  alt="Jeferson Oliveira"
                  className="w-14 h-14 rounded-full object-cover border-2 border-neon/50"
                />
                <span className="text-neon text-base font-semibold tracking-wide">
                  Sistemas sob medida por Jeferson Oliveira
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: isDocked ? 1 : 0,
                  scale: isDocked ? 1 : 0.95,
                }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="heading-xl text-white mb-6"
              >
                Seu negócio merece um{' '}
                <span className="text-neon glow-neon-text">
                  sistema feito sob medida
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isDocked ? 1 : 0, y: isDocked ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-text text-lg leading-relaxed mb-8"
              >
                Elimine planilhas, erros e retrabalho. Desenvolvo sistemas profissionais
                personalizados para gestão imobiliária, controle de ponto, inventário e
                muito mais entregues com qualidade e suporte real.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isDocked ? 1 : 0, y: isDocked ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
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
                animate={{ opacity: isDocked ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex gap-8"
              >
                {[
                  { value: '4+', label: 'Anos de experiência' },
                  { value: '+7', label: 'Sistemas entregues' },
                  { value: '95%', label: 'Redução de erros' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-neon font-grotesk">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-muted">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Docked Terminal Target */}
            <div className="hidden lg:block">
              {isDocked && (
                <motion.div
                  layoutId="terminal-box"
                  transition={{
                    type: 'spring',
                    stiffness: 85,
                    damping: 16,
                  }}
                  className="relative"
                >
                  {/* Glow behind terminal */}
                  <div className="absolute -inset-4 bg-neon/10 blur-2xl rounded-2xl" />

                  <TerminalContent
                    lines={lines}
                    currentLine={currentLine}
                    currentChar={currentChar}
                    done={done}
                  />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isDocked ? 1 : 0 }}
        transition={{ delay: 0.7 }}
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
