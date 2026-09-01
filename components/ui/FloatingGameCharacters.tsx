'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

// SVG Pixel Art Sprites
function SpaceInvaderSprite() {
  return (
    <svg viewBox="0 0 11 8" className="w-full h-full fill-neon drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]">
      <rect x="2" y="0" width="1" height="1" />
      <rect x="8" y="0" width="1" height="1" />
      <rect x="3" y="1" width="1" height="1" />
      <rect x="7" y="1" width="1" height="1" />
      <rect x="2" y="2" width="7" height="1" />
      <rect x="1" y="3" width="2" height="1" />
      <rect x="4" y="3" width="3" height="1" />
      <rect x="8" y="3" width="2" height="1" />
      <rect x="0" y="4" width="11" height="1" />
      <rect x="0" y="5" width="1" height="1" />
      <rect x="2" y="5" width="7" height="1" />
      <rect x="10" y="5" width="1" height="1" />
      <rect x="0" y="6" width="1" height="1" />
      <rect x="2" y="6" width="1" height="1" />
      <rect x="8" y="6" width="1" height="1" />
      <rect x="10" y="6" width="1" height="1" />
      <rect x="3" y="7" width="2" height="1" />
      <rect x="6" y="7" width="2" height="1" />
    </svg>
  );
}

function GhostSprite() {
  return (
    <svg viewBox="0 0 14 14" className="w-full h-full fill-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
      <rect x="4" y="0" width="6" height="1" />
      <rect x="2" y="1" width="10" height="1" />
      <rect x="1" y="2" width="12" height="1" />
      <rect x="1" y="3" width="12" height="3" />
      <rect x="0" y="6" width="14" height="5" />
      {/* Eyes */}
      <rect x="2" y="4" width="3" height="3" fill="#000" />
      <rect x="8" y="4" width="3" height="3" fill="#000" />
      <rect x="2" y="4" width="2" height="2" fill="#fff" />
      <rect x="8" y="4" width="2" height="2" fill="#fff" />
      {/* Bottom tentacles */}
      <rect x="0" y="11" width="2" height="3" />
      <rect x="4" y="11" width="2" height="2" />
      <rect x="8" y="11" width="2" height="2" />
      <rect x="12" y="11" width="2" height="3" />
    </svg>
  );
}

function PixelWizardSprite() {
  return (
    <svg viewBox="0 0 16 16" className="w-full h-full fill-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]">
      {/* Hat */}
      <rect x="7" y="0" width="2" height="1" fill="#c084fc" />
      <rect x="6" y="1" width="3" height="1" fill="#c084fc" />
      <rect x="5" y="2" width="4" height="2" fill="#c084fc" />
      <rect x="4" y="4" width="7" height="1" fill="#c084fc" />
      <rect x="2" y="5" width="11" height="1" fill="#38bdf8" />
      {/* Face & Beard */}
      <rect x="5" y="6" width="5" height="2" fill="#fed7aa" />
      <rect x="6" y="7" width="1" height="1" fill="#000" />
      <rect x="8" y="7" width="1" height="1" fill="#000" />
      <rect x="4" y="8" width="7" height="3" fill="#ffffff" />
      <rect x="5" y="11" width="5" height="2" fill="#ffffff" />
      {/* Robe */}
      <rect x="4" y="13" width="7" height="3" fill="#c084fc" />
      {/* Magic Staff */}
      <rect x="12" y="5" width="2" height="2" fill="#00FF41" className="animate-pulse" />
      <rect x="12" y="7" width="1" height="9" fill="#f59e0b" />
    </svg>
  );
}

function StarshipSprite() {
  return (
    <svg viewBox="0 0 15 11" className="w-full h-full fill-neon drop-shadow-[0_0_8px_rgba(0,255,65,0.7)]">
      <rect x="7" y="0" width="1" height="1" />
      <rect x="6" y="1" width="3" height="1" />
      <rect x="6" y="2" width="3" height="1" />
      <rect x="5" y="3" width="5" height="1" />
      <rect x="4" y="4" width="7" height="1" />
      <rect x="0" y="5" width="15" height="1" />
      <rect x="1" y="6" width="13" height="1" />
      <rect x="2" y="7" width="11" height="1" />
      <rect x="0" y="8" width="3" height="1" />
      <rect x="6" y="8" width="3" height="1" />
      <rect x="12" y="8" width="3" height="1" />
      <rect x="0" y="9" width="1" height="2" />
      <rect x="7" y="9" width="1" height="2" fill="#ef4444" className="animate-pulse" />
      <rect x="14" y="9" width="1" height="2" />
    </svg>
  );
}

function PixelCoinSprite() {
  return (
    <svg viewBox="0 0 10 10" className="w-full h-full fill-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]">
      <rect x="3" y="0" width="4" height="1" />
      <rect x="1" y="1" width="8" height="1" />
      <rect x="0" y="2" width="10" height="6" />
      <rect x="1" y="8" width="8" height="1" />
      <rect x="3" y="9" width="4" height="1" />
      {/* Coin inner shine */}
      <rect x="4" y="3" width="2" height="4" fill="#fef08a" />
    </svg>
  );
}

interface FloatingCharacterProps {
  initialX: number;
  initialY: number;
  duration?: number;
  delay?: number;
  size?: number;
  children: React.ReactNode;
  name: string;
}

function FloatingCharacter({
  initialX,
  initialY,
  duration = 6,
  delay = 0,
  size = 36,
  children,
  name,
}: FloatingCharacterProps) {
  const [clicked, setClicked] = useState(false);

  return (
    <motion.div
      className="fixed pointer-events-auto cursor-pointer select-none z-30 group"
      style={{
        left: `${initialX}%`,
        top: `${initialY}%`,
        width: size,
        height: size,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.35, 0.75, 0.35],
        y: [-18, 18, -18],
        x: [-12, 12, -12],
        rotate: [-6, 6, -6],
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      whileHover={{
        scale: 1.35,
        opacity: 1,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        setClicked(true);
        setTimeout(() => setClicked(false), 1500);
      }}
    >
      {/* Retro Sprite */}
      <div className="w-full h-full relative transition-transform duration-300 group-hover:rotate-12">
        {children}
      </div>

      {/* Floating tooltip on hover/click */}
      <div
        className={`absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-black/90 border border-neon/40 text-[9px] font-mono text-neon whitespace-nowrap transition-all duration-200 pointer-events-none shadow-neon ${
          clicked
            ? 'opacity-100 scale-100 -translate-y-2 text-yellow-300 border-yellow-400'
            : 'opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100'
        }`}
      >
        {clicked ? '⚡ +100 EXP!' : name}
      </div>
    </motion.div>
  );
}

export default function FloatingGameCharacters() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {/* Top Left: Space Invader */}
      <FloatingCharacter
        initialX={4}
        initialY={14}
        duration={5.5}
        delay={0}
        size={38}
        name="👾 Space Invader"
      >
        <SpaceInvaderSprite />
      </FloatingCharacter>

      {/* Top Right: Pixel Ghost */}
      <FloatingCharacter
        initialX={92}
        initialY={22}
        duration={6.5}
        delay={1}
        size={36}
        name="👻 Cyber Ghost"
      >
        <GhostSprite />
      </FloatingCharacter>

      {/* Mid Left: Retro Starship */}
      <FloatingCharacter
        initialX={6}
        initialY={62}
        duration={7}
        delay={2}
        size={42}
        name="🚀 Starship PRO"
      >
        <StarshipSprite />
      </FloatingCharacter>

      {/* Mid-Right: Pixel Mage */}
      <FloatingCharacter
        initialX={90}
        initialY={75}
        duration={6}
        delay={1.5}
        size={40}
        name="🧙‍♂️ Code Mage"
      >
        <PixelWizardSprite />
      </FloatingCharacter>

      {/* Bottom Center-Left: Energy Coin */}
      <FloatingCharacter
        initialX={15}
        initialY={88}
        duration={4.8}
        delay={0.5}
        size={28}
        name="🪙 1-UP Coin"
      >
        <PixelCoinSprite />
      </FloatingCharacter>
    </div>
  );
}
