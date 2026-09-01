'use client';

import { useRef } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';

const DEFAULT_ITEMS = [
  { text: 'Seu sistema, app ou site construído com segurança e entrega rápida', highlight: true },
  { text: 'Engenharia real: não criamos às cegas, usamos IA para acelerar qualidade', highlight: false },
  { text: 'Graduado pelo Instituto Federal (IFTO)', highlight: true },
  { text: 'Experiência em Sistemas Governamentais & Alta Governança', highlight: false },
  { text: 'Arquitetura Sólida, Código Auditável & LGPD', highlight: true },
  { text: '+7 Sistemas Entregues em Produção com Zero Downtime', highlight: false },
  { text: 'Gestão Imobiliária · Restaurantes · Ponto Eletrônico · Inventário', highlight: true },
  { text: 'Python · Django · FastAPI · Java Spring Boot · PostgreSQL', highlight: false },
  { text: 'React · Next.js · Angular · Docker · Cloud GCP/AWS', highlight: false },
  { text: 'Atendimento Direto com o Desenvolvedor · Sem Intermediários', highlight: true },
];

const SEP = '✦';

function MarqueeTrack({
  items,
  baseVelocity = -45,
}: {
  items: typeof DEFAULT_ITEMS;
  baseVelocity?: number;
}) {
  const baseX = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
    let moveBy = (baseVelocity * delta) / 1000;
    baseX.set(baseX.get() + moveBy);

    if (ref.current) {
      const trackWidth = ref.current.scrollWidth / 2;
      if (baseVelocity < 0 && baseX.get() <= -trackWidth) {
        baseX.set(0);
      } else if (baseVelocity > 0 && baseX.get() >= 0) {
        baseX.set(-trackWidth);
      }
    }
  });

  const repeated = [...items, ...items];

  return (
    <motion.div
      ref={ref}
      className="flex items-center gap-0 whitespace-nowrap will-change-transform"
      style={{ x: baseX }}
    >
      {repeated.map((item, i) => (
        <span key={i} className="flex items-center">
          <span
            className={`text-xs md:text-sm font-mono tracking-wider uppercase px-5 py-1 ${
              item.highlight
                ? 'text-white font-semibold'
                : 'text-gray-300'
            }`}
          >
            {item.highlight ? (
              <span className="text-neon glow-neon-text mr-1.5">▸</span>
            ) : null}
            {item.text}
          </span>
          <span className="text-neon text-sm md:text-base px-3 opacity-90">{SEP}</span>
        </span>
      ))}
    </motion.div>
  );
}

interface MarqueeProps {
  variant?: 'hero' | 'divider';
  customItems?: typeof DEFAULT_ITEMS;
  speed?: number;
}

export default function Marquee({
  variant = 'divider',
  customItems,
  speed = -45,
}: MarqueeProps) {
  const items = customItems || DEFAULT_ITEMS;

  return (
    <div
      className={`relative overflow-hidden border-y border-neon/15 bg-black/90 backdrop-blur-md ${
        variant === 'hero'
          ? 'py-3.5 border-neon/25 shadow-[0_0_25px_rgba(0,255,65,0.05)]'
          : 'py-3'
      }`}
    >
      {/* Left & Right gradient fade masks */}
      <div className="absolute left-0 top-0 h-full w-20 md:w-32 z-10 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-20 md:w-32 z-10 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none" />

      {/* Track */}
      <div className="flex overflow-hidden">
        <MarqueeTrack items={items} baseVelocity={speed} />
      </div>
    </div>
  );
}
