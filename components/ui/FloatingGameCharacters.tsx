'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// SVG Pixel Art Sprites
function SpaceInvaderSprite({ isDamaged }: { isDamaged: boolean }) {
  const color = isDamaged ? '#ef4444' : '#00FF41';
  return (
    <svg viewBox="0 0 11 8" className="w-full h-full drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]" style={{ fill: color }}>
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

function GhostSprite({ isDamaged }: { isDamaged: boolean }) {
  const color = isDamaged ? '#ef4444' : '#22d3ee';
  return (
    <svg viewBox="0 0 14 14" className="w-full h-full drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" style={{ fill: color }}>
      <rect x="4" y="0" width="6" height="1" />
      <rect x="2" y="1" width="10" height="1" />
      <rect x="1" y="2" width="12" height="1" />
      <rect x="1" y="3" width="12" height="3" />
      <rect x="0" y="6" width="14" height="5" />
      <rect x="2" y="4" width="3" height="3" fill="#000" />
      <rect x="8" y="4" width="3" height="3" fill="#000" />
      <rect x="2" y="4" width="2" height="2" fill="#fff" />
      <rect x="8" y="4" width="2" height="2" fill="#fff" />
      <rect x="0" y="11" width="2" height="3" />
      <rect x="4" y="11" width="2" height="2" />
      <rect x="8" y="11" width="2" height="2" />
      <rect x="12" y="11" width="2" height="3" />
    </svg>
  );
}

function PixelWizardSprite({ isDamaged }: { isDamaged: boolean }) {
  const hatColor = isDamaged ? '#ef4444' : '#c084fc';
  return (
    <svg viewBox="0 0 16 16" className="w-full h-full drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]">
      <rect x="7" y="0" width="2" height="1" fill={hatColor} />
      <rect x="6" y="1" width="3" height="1" fill={hatColor} />
      <rect x="5" y="2" width="4" height="2" fill={hatColor} />
      <rect x="4" y="4" width="7" height="1" fill={hatColor} />
      <rect x="2" y="5" width="11" height="1" fill="#38bdf8" />
      <rect x="5" y="6" width="5" height="2" fill="#fed7aa" />
      <rect x="6" y="7" width="1" height="1" fill="#000" />
      <rect x="8" y="7" width="1" height="1" fill="#000" />
      <rect x="4" y="8" width="7" height="3" fill="#ffffff" />
      <rect x="5" y="11" width="5" height="2" fill="#ffffff" />
      <rect x="4" y="13" width="7" height="3" fill={hatColor} />
      <rect x="12" y="5" width="2" height="2" fill="#00FF41" className="animate-pulse" />
      <rect x="12" y="7" width="1" height="9" fill="#f59e0b" />
    </svg>
  );
}

function StarshipSprite({ isDamaged }: { isDamaged: boolean }) {
  const bodyColor = isDamaged ? '#ef4444' : '#00FF41';
  return (
    <svg viewBox="0 0 15 11" className="w-full h-full drop-shadow-[0_0_8px_rgba(0,255,65,0.7)]" style={{ fill: bodyColor }}>
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

function PixelCoinSprite({ isDamaged }: { isDamaged: boolean }) {
  const color = isDamaged ? '#ef4444' : '#facc15';
  return (
    <svg viewBox="0 0 10 10" className="w-full h-full drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" style={{ fill: color }}>
      <rect x="3" y="0" width="4" height="1" />
      <rect x="1" y="1" width="8" height="1" />
      <rect x="0" y="2" width="10" height="6" />
      <rect x="1" y="8" width="8" height="1" />
      <rect x="3" y="9" width="4" height="1" />
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
  maxHp?: number;
  name: string;
  renderSprite: (isDamaged: boolean) => React.ReactNode;
}

function FloatingCharacter({
  initialX,
  initialY,
  duration = 6,
  delay = 0,
  size = 36,
  maxHp = 3,
  name,
  renderSprite,
}: FloatingCharacterProps) {
  const [hp, setHp] = useState(maxHp);
  const [isDamaged, setIsDamaged] = useState(false);
  const [floatingText, setFloatingText] = useState<{ id: number; text: string }[]>([]);
  const isDead = hp <= 0;

  // Handle hit
  const handleHit = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isDead) return;

    const newHp = hp - 1;
    setHp(newHp);
    setIsDamaged(true);
    setTimeout(() => setIsDamaged(false), 200);

    const hitLabel = newHp <= 0 ? '💥 K.O.!' : newHp === 1 ? '⚠️ CRITICAL!' : '🎯 HIT! -1 HP';
    const textId = Date.now() + Math.random();
    setFloatingText((prev) => [...prev, { id: textId, text: hitLabel }]);
    setTimeout(() => {
      setFloatingText((prev) => prev.filter((item) => item.id !== textId));
    }, 900);
  };

  // Automatic Respawn after 4.5 seconds if dead
  useEffect(() => {
    if (isDead) {
      const respawnTimer = setTimeout(() => {
        setHp(maxHp);
        const respawnId = Date.now();
        setFloatingText([{ id: respawnId, text: '✨ RESPAWN!' }]);
        setTimeout(() => {
          setFloatingText((prev) => prev.filter((item) => item.id !== respawnId));
        }, 1200);
      }, 4500);
      return () => clearTimeout(respawnTimer);
    }
  }, [isDead, maxHp]);

  // Calculate health percentage
  const hpPercent = (hp / maxHp) * 100;
  const hpColor = hpPercent > 60 ? '#00FF41' : hpPercent > 30 ? '#eab308' : '#ef4444';

  return (
    <div
      data-game-target="true"
      className="fixed pointer-events-auto select-none z-30 group"
      style={{
        left: `${initialX}%`,
        top: `${initialY}%`,
        width: size,
        height: size,
      }}
      onClick={handleHit}
    >
      <AnimatePresence>
        {!isDead && (
          <motion.div
            key="enemy-sprite"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: isDamaged ? 1 : hp === maxHp ? [0.4, 0.8, 0.4] : 0.9,
              y: isDamaged ? [-4, 4, -2, 2, 0] : [-16, 16, -16],
              x: isDamaged ? [-6, 6, -4, 4, 0] : [-10, 10, -10],
              rotate: isDamaged ? [-12, 12, 0] : [-5, 5, -5],
              scale: isDamaged ? 1.25 : 1,
            }}
            exit={{
              scale: [1.2, 0],
              opacity: [1, 0],
              rotate: 360,
              transition: { duration: 0.35 },
            }}
            transition={{
              y: { duration, repeat: Infinity, ease: 'easeInOut', delay },
              x: { duration: duration + 1, repeat: Infinity, ease: 'easeInOut', delay },
              rotate: { duration: duration * 1.2, repeat: Infinity, ease: 'easeInOut', delay },
            }}
            whileHover={{ scale: 1.2, opacity: 1 }}
            className="w-full h-full cursor-crosshair relative"
          >
            {/* Health Bar above character */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-1 bg-black/80 border border-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full transition-all duration-200"
                style={{
                  width: `${hpPercent}%`,
                  backgroundColor: hpColor,
                }}
              />
            </div>

            {/* Character Sprite */}
            {renderSprite(isDamaged)}

            {/* Target name tooltip */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded bg-black/90 border border-neon/30 text-[8px] font-mono text-neon whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {name} ({hp}/{maxHp} HP)
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Damage / Respawn text popup */}
      <AnimatePresence>
        {floatingText.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 1, y: 0, scale: 0.8 }}
            animate={{ opacity: 0, y: -28, scale: 1.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className={`absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold whitespace-nowrap pointer-events-none px-1.5 py-0.5 rounded bg-black/90 border ${
              item.text.includes('RESPAWN')
                ? 'text-[#00FF41] border-[#00FF41]'
                : item.text.includes('K.O.')
                ? 'text-yellow-400 border-yellow-400 animate-bounce'
                : 'text-red-500 border-red-500'
            }`}
          >
            {item.text}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default function FloatingGameCharacters() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {/* 1. Space Invader */}
      <FloatingCharacter
        initialX={4}
        initialY={14}
        duration={5.5}
        delay={0}
        size={38}
        maxHp={3}
        name="👾 Space Invader"
        renderSprite={(isDamaged) => <SpaceInvaderSprite isDamaged={isDamaged} />}
      />

      {/* 2. Cyber Ghost */}
      <FloatingCharacter
        initialX={92}
        initialY={22}
        duration={6.5}
        delay={1}
        size={36}
        maxHp={3}
        name="👻 Cyber Ghost"
        renderSprite={(isDamaged) => <GhostSprite isDamaged={isDamaged} />}
      />

      {/* 3. Retro Starship */}
      <FloatingCharacter
        initialX={6}
        initialY={62}
        duration={7}
        delay={2}
        size={42}
        maxHp={4}
        name="🚀 Starship PRO"
        renderSprite={(isDamaged) => <StarshipSprite isDamaged={isDamaged} />}
      />

      {/* 4. Pixel Mage */}
      <FloatingCharacter
        initialX={90}
        initialY={75}
        duration={6}
        delay={1.5}
        size={40}
        maxHp={3}
        name="🧙‍♂️ Code Mage"
        renderSprite={(isDamaged) => <PixelWizardSprite isDamaged={isDamaged} />}
      />

      {/* 5. Energy Coin */}
      <FloatingCharacter
        initialX={15}
        initialY={88}
        duration={4.8}
        delay={0.5}
        size={30}
        maxHp={2}
        name="🪙 1-UP Coin"
        renderSprite={(isDamaged) => <PixelCoinSprite isDamaged={isDamaged} />}
      />
    </div>
  );
}
