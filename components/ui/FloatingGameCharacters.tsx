'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGame } from '@/context/GameContext';
import { Sparkles, Trophy, Zap, Flame, Crown } from 'lucide-react';

// ==================== SPRITES ====================

function SpaceInvaderSprite({ isDamaged }: { isDamaged: boolean }) {
  const color = isDamaged ? '#ef4444' : '#00FF41';
  return (
    <svg viewBox="0 0 11 8" className="w-full h-full drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]" style={{ fill: color }}>
      <rect x="2" y="0" width="1" height="1" /><rect x="8" y="0" width="1" height="1" />
      <rect x="3" y="1" width="1" height="1" /><rect x="7" y="1" width="1" height="1" />
      <rect x="2" y="2" width="7" height="1" />
      <rect x="1" y="3" width="2" height="1" /><rect x="4" y="3" width="3" height="1" /><rect x="8" y="3" width="2" height="1" />
      <rect x="0" y="4" width="11" height="1" /><rect x="0" y="5" width="1" height="1" />
      <rect x="2" y="5" width="7" height="1" /><rect x="10" y="5" width="1" height="1" />
      <rect x="0" y="6" width="1" height="1" /><rect x="2" y="6" width="1" height="1" />
      <rect x="8" y="6" width="1" height="1" /><rect x="10" y="6" width="1" height="1" />
      <rect x="3" y="7" width="2" height="1" /><rect x="6" y="7" width="2" height="1" />
    </svg>
  );
}

function GhostSprite({ isDamaged }: { isDamaged: boolean }) {
  const color = isDamaged ? '#ef4444' : '#22d3ee';
  return (
    <svg viewBox="0 0 14 14" className="w-full h-full drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" style={{ fill: color }}>
      <rect x="4" y="0" width="6" height="1" /><rect x="2" y="1" width="10" height="1" />
      <rect x="1" y="2" width="12" height="1" /><rect x="1" y="3" width="12" height="3" />
      <rect x="0" y="6" width="14" height="5" />
      <rect x="2" y="4" width="3" height="3" fill="#000" /><rect x="8" y="4" width="3" height="3" fill="#000" />
      <rect x="2" y="4" width="2" height="2" fill="#fff" /><rect x="8" y="4" width="2" height="2" fill="#fff" />
      <rect x="0" y="11" width="2" height="3" /><rect x="4" y="11" width="2" height="2" />
      <rect x="8" y="11" width="2" height="2" /><rect x="12" y="11" width="2" height="3" />
    </svg>
  );
}

// REAL SLITHERING CRAWLING SNAKE (Animated Segments)
function AnimatedSnakeSprite({ isDamaged }: { isDamaged: boolean }) {
  const bodyColor = isDamaged ? '#ef4444' : '#10b981';
  const glowColor = isDamaged ? 'rgba(239,68,68,0.8)' : 'rgba(16,185,129,0.8)';

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Dynamic multi-segment crawling SVG */}
      <svg viewBox="0 0 28 10" className="w-full h-full overflow-visible" style={{ filter: `drop-shadow(0 0 8px ${glowColor})` }}>
        {/* Tail Segment */}
        <motion.rect
          x="1"
          y="4"
          width="3"
          height="3"
          rx="1"
          fill={bodyColor}
          animate={{ y: [4, 1, 7, 4] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        />
        {/* Body Segments 1 to 3 */}
        <motion.rect
          x="5"
          y="3"
          width="4"
          height="4.5"
          rx="1"
          fill={bodyColor}
          animate={{ y: [3, 0.5, 5.5, 3] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.45 }}
        />
        <motion.rect
          x="10"
          y="2.5"
          width="4.5"
          height="5"
          rx="1"
          fill={bodyColor}
          animate={{ y: [2.5, 5.5, 0.5, 2.5] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        />
        <motion.rect
          x="15.5"
          y="2"
          width="5"
          height="5.5"
          rx="1.5"
          fill={bodyColor}
          animate={{ y: [2, 0.5, 4.5, 2] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
        />
        {/* Head Segment */}
        <motion.g
          animate={{ y: [1.5, 3.5, 0, 1.5] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect x="21" y="1" width="6" height="6" rx="2" fill={bodyColor} />
          {/* Eye */}
          <rect x="24.5" y="2" width="1.5" height="1.5" fill="#000" />
          <rect x="25" y="2.2" width="0.8" height="0.8" fill="#fff" />
          {/* Flickering Tongue */}
          <motion.path
            d="M 27 4 L 30 3 M 27 4 L 30 5"
            stroke="#ef4444"
            strokeWidth="1"
            fill="none"
            animate={{ opacity: [1, 0, 1], scaleX: [1, 1.3, 1] }}
            transition={{ duration: 0.4, repeat: Infinity }}
          />
        </motion.g>
      </svg>
    </div>
  );
}

function CyberSkullSprite({ isDamaged }: { isDamaged: boolean }) {
  const color = isDamaged ? '#ef4444' : '#e11d48';
  return (
    <svg viewBox="0 0 12 12" className="w-full h-full drop-shadow-[0_0_8px_rgba(225,29,72,0.8)]" style={{ fill: color }}>
      <rect x="3" y="0" width="6" height="1" /><rect x="2" y="1" width="8" height="1" />
      <rect x="1" y="2" width="10" height="4" />
      <rect x="2" y="3" width="2" height="2" fill="#000" /><rect x="8" y="3" width="2" height="2" fill="#000" />
      <rect x="3" y="4" width="1" height="1" fill="#00FF41" /><rect x="9" y="4" width="1" height="1" fill="#00FF41" />
      <rect x="3" y="6" width="6" height="2" /><rect x="4" y="8" width="4" height="3" />
      <rect x="5" y="9" width="1" height="2" fill="#000" /><rect x="7" y="9" width="1" height="2" fill="#000" />
    </svg>
  );
}

function CyberSlimeSprite({ isDamaged }: { isDamaged: boolean }) {
  const color = isDamaged ? '#ef4444' : '#84cc16';
  return (
    <svg viewBox="0 0 12 10" className="w-full h-full drop-shadow-[0_0_8px_rgba(132,204,22,0.8)]" style={{ fill: color }}>
      <rect x="4" y="0" width="4" height="1" /><rect x="2" y="1" width="8" height="1" />
      <rect x="1" y="2" width="10" height="2" /><rect x="0" y="4" width="12" height="5" />
      <rect x="3" y="3" width="2" height="2" fill="#000" /><rect x="7" y="3" width="2" height="2" fill="#000" />
      <rect x="4" y="3" width="1" height="1" fill="#fff" /><rect x="8" y="3" width="1" height="1" fill="#fff" />
      <rect x="1" y="9" width="10" height="1" />
    </svg>
  );
}

function MegaBossSprite({ isDamaged, bossIndex = 1 }: { isDamaged: boolean; bossIndex?: number }) {
  const armorColors = ['#a855f7', '#ef4444', '#f59e0b', '#06b6d4', '#ec4899'];
  const armor = isDamaged ? '#ef4444' : armorColors[(bossIndex - 1) % armorColors.length];

  return (
    <svg viewBox="0 0 24 20" className="w-full h-full drop-shadow-[0_0_25px_rgba(168,85,247,0.9)]">
      <rect x="2" y="0" width="3" height="3" fill="#ec4899" /><rect x="19" y="0" width="3" height="3" fill="#ec4899" />
      <rect x="6" y="2" width="12" height="3" fill={armor} />
      <rect x="4" y="5" width="16" height="8" fill={armor} />
      <rect x="6" y="7" width="12" height="3" fill="#00FF41" className="animate-pulse" />
      <rect x="10" y="8" width="4" height="1" fill="#ffffff" />
      <rect x="0" y="8" width="4" height="6" fill="#6366f1" /><rect x="20" y="8" width="4" height="6" fill="#6366f1" />
      <rect x="6" y="13" width="12" height="5" fill={armor} />
      <rect x="8" y="18" width="3" height="2" fill="#ef4444" className="animate-ping" />
      <rect x="13" y="18" width="3" height="2" fill="#ef4444" className="animate-ping" />
    </svg>
  );
}

function StarshipSprite({ isDamaged }: { isDamaged: boolean }) {
  const bodyColor = isDamaged ? '#ef4444' : '#00FF41';
  return (
    <svg viewBox="0 0 15 11" className="w-full h-full drop-shadow-[0_0_8px_rgba(0,255,65,0.7)]" style={{ fill: bodyColor }}>
      <rect x="7" y="0" width="1" height="1" /><rect x="6" y="1" width="3" height="1" /><rect x="6" y="2" width="3" height="1" />
      <rect x="5" y="3" width="5" height="1" /><rect x="4" y="4" width="7" height="1" /><rect x="0" y="5" width="15" height="1" />
      <rect x="1" y="6" width="13" height="1" /><rect x="2" y="7" width="11" height="1" /><rect x="0" y="8" width="3" height="1" />
      <rect x="6" y="8" width="3" height="1" /><rect x="12" y="8" width="3" height="1" /><rect x="0" y="9" width="1" height="2" />
      <rect x="7" y="9" width="1" height="2" fill="#ef4444" className="animate-pulse" /><rect x="14" y="9" width="1" height="2" />
    </svg>
  );
}

function PixelWizardSprite({ isDamaged }: { isDamaged: boolean }) {
  const hatColor = isDamaged ? '#ef4444' : '#c084fc';
  return (
    <svg viewBox="0 0 16 16" className="w-full h-full drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]">
      <rect x="7" y="0" width="2" height="1" fill={hatColor} /><rect x="6" y="1" width="3" height="1" fill={hatColor} />
      <rect x="5" y="2" width="4" height="2" fill={hatColor} /><rect x="4" y="4" width="7" height="1" fill={hatColor} />
      <rect x="2" y="5" width="11" height="1" fill="#38bdf8" /><rect x="5" y="6" width="5" height="2" fill="#fed7aa" />
      <rect x="6" y="7" width="1" height="1" fill="#000" /><rect x="8" y="7" width="1" height="1" fill="#000" />
      <rect x="4" y="8" width="7" height="3" fill="#ffffff" /><rect x="5" y="11" width="5" height="2" fill="#ffffff" />
      <rect x="4" y="13" width="7" height="3" fill={hatColor} /><rect x="12" y="5" width="2" height="2" fill="#00FF41" className="animate-pulse" />
      <rect x="12" y="7" width="1" height="9" fill="#f59e0b" />
    </svg>
  );
}

function PixelCoinSprite({ isDamaged }: { isDamaged: boolean }) {
  const color = isDamaged ? '#ef4444' : '#facc15';
  return (
    <svg viewBox="0 0 10 10" className="w-full h-full drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" style={{ fill: color }}>
      <rect x="3" y="0" width="4" height="1" /><rect x="1" y="1" width="8" height="1" />
      <rect x="0" y="2" width="10" height="6" /><rect x="1" y="8" width="8" height="1" />
      <rect x="3" y="9" width="4" height="1" /><rect x="4" y="3" width="2" height="4" fill="#fef08a" />
    </svg>
  );
}

// ==================== PROCEDURAL WAVE GENERATOR (WAVES 1 TO 99) ====================

interface EnemyConfig {
  id: string;
  name: string;
  maxHp: number;
  expReward: number;
  size: number;
  initialX: number;
  initialY: number;
  duration: number;
  delay: number;
  isSnake?: boolean;
  isBoss?: boolean;
  bossIndex?: number;
  movePattern?: 'crawl' | 'float' | 'zigzag' | 'hover';
  type: 'invader' | 'ghost' | 'snake' | 'skull' | 'slime' | 'boss' | 'starship' | 'mage' | 'coin';
}

function generateProceduralWave(wave: number): EnemyConfig[] {
  const isBossWave = wave % 5 === 0;
  const numBosses = isBossWave ? Math.min(4, Math.floor(wave / 5)) : 0;
  // Scaled enemy count (starts at 4, caps at 14 enemies for balanced screen perimeter)
  const regularCount = Math.min(14, 4 + Math.floor(wave * 1.1));

  const list: EnemyConfig[] = [];

  // 1. If Boss Wave, add the Bosses along top periphery / side wings
  if (isBossWave) {
    const bossHp = 6 + Math.floor(wave / 5) * 2;
    const bossExp = 150 + Math.floor(wave / 5) * 50;

    for (let b = 1; b <= numBosses; b++) {
      // Position bosses safely at side wings or top margin
      const posX = b % 2 === 1 ? 6 + (b - 1) * 6 : 86 - (b - 2) * 6;
      const posY = 10 + (b % 3) * 12;

      list.push({
        id: `boss-${wave}-${b}`,
        name: `👑 GIGA BOSS #${b} (Lv.${wave})`,
        maxHp: bossHp,
        expReward: bossExp,
        size: 64,
        initialX: Math.min(92, Math.max(4, posX)),
        initialY: posY,
        duration: 4.5 + b * 0.4,
        delay: b * 0.3,
        isBoss: true,
        bossIndex: b,
        type: 'boss',
      });
    }
  }

  // Enemy types available based on wave progression
  const availableTypes: ('invader' | 'ghost' | 'snake' | 'skull' | 'slime' | 'starship' | 'mage' | 'coin')[] = [
    'invader',
    'ghost',
    'coin',
  ];

  if (wave >= 2) availableTypes.push('snake', 'starship');
  if (wave >= 3) availableTypes.push('slime', 'mage');
  if (wave >= 4) availableTypes.push('skull', 'snake');

  // Spawn perimeter zones (Left Column, Right Column, Top Gutter, Bottom Gutter)
  // This completely protects the central content column (20% to 80% width) from being blocked
  for (let i = 0; i < regularCount; i++) {
    const type = availableTypes[i % availableTypes.length];
    const isSnake = type === 'snake';
    const hpScale = Math.min(6, 2 + Math.floor(wave / 8));
    const expBase = isSnake ? 45 : type === 'mage' ? 55 : type === 'skull' ? 50 : type === 'slime' ? 40 : 30;

    const zone = i % 4;
    let x = 8;
    let y = 20;

    if (zone === 0) {
      // Left side gutter (2% - 14%)
      x = 3 + (i % 3) * 4;
      y = 14 + Math.floor(i / 2) * 16;
    } else if (zone === 1) {
      // Right side gutter (84% - 95%)
      x = 84 + (i % 3) * 4;
      y = 16 + Math.floor(i / 2) * 16;
    } else if (zone === 2) {
      // Top floating band (outside center heading)
      x = 18 + (i * 14) % 64;
      y = 8 + (i % 2) * 6;
    } else {
      // Bottom floating band (outside center buttons)
      x = 16 + (i * 15) % 68;
      y = 86 + (i % 2) * 6;
    }

    // Keep within valid boundaries
    x = Math.min(94, Math.max(3, x));
    y = Math.min(92, Math.max(7, y));

    list.push({
      id: `w${wave}-enemy-${i}`,
      name:
        type === 'snake'
          ? `🐍 Cyber Snake`
          : type === 'skull'
          ? `💀 Cyber Skull`
          : type === 'slime'
          ? `🧪 Cyber Slime`
          : type === 'mage'
          ? `🧙‍♂️ Code Mage`
          : type === 'starship'
          ? `🚀 Starship`
          : type === 'ghost'
          ? `👻 Ghost`
          : type === 'coin'
          ? `🪙 1-UP Coin`
          : `👾 Invader`,
      maxHp: isSnake ? hpScale + 1 : hpScale,
      expReward: expBase + Math.floor(wave * 2),
      size: isSnake ? 56 : type === 'starship' ? 44 : type === 'slime' ? 42 : type === 'coin' ? 30 : 38,
      initialX: x,
      initialY: y,
      duration: isSnake ? 4.2 : 5 + (i % 3),
      delay: (i * 0.25) % 2,
      isSnake,
      movePattern: isSnake ? 'crawl' : i % 2 === 0 ? 'zigzag' : 'float',
      type,
    });
  }

  return list;
}

// ==================== ENEMY ENTITY WITH COMBOS & ANIMATION ====================

function EnemyEntity({
  config,
  onDefeated,
  comboMultiplier,
  onHitRegistered,
}: {
  config: EnemyConfig;
  onDefeated: (id: string) => void;
  comboMultiplier: number;
  onHitRegistered: () => void;
}) {
  const { addScore } = useGame();
  const [hp, setHp] = useState(config.maxHp);
  const [isDamaged, setIsDamaged] = useState(false);
  const [floatingText, setFloatingText] = useState<{ id: number; text: string; isExp?: boolean }[]>([]);
  const isDead = hp <= 0;

  const handleHit = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isDead) return;

    onHitRegistered();
    const newHp = hp - 1;
    setHp(newHp);
    setIsDamaged(true);
    setTimeout(() => setIsDamaged(false), 200);

    const textId = Date.now() + Math.random();

    if (newHp <= 0) {
      const awardedExp = Math.round(config.expReward * (comboMultiplier > 1 ? comboMultiplier * 0.8 : 1));
      addScore(awardedExp);
      setFloatingText((prev) => [
        ...prev,
        {
          id: textId,
          text: comboMultiplier >= 2 ? `💥 +${awardedExp} EXP! (x${comboMultiplier})` : `💥 +${awardedExp} EXP!`,
          isExp: true,
        },
      ]);
      onDefeated(config.id);
    } else {
      const hitLabel = newHp === 1 ? '⚠️ CRITICAL!' : '🎯 HIT! -1 HP';
      setFloatingText((prev) => [...prev, { id: textId, text: hitLabel }]);
    }

    setTimeout(() => {
      setFloatingText((prev) => prev.filter((item) => item.id !== textId));
    }, 1000);
  };

  const hpPercent = (hp / config.maxHp) * 100;
  const hpColor = hpPercent > 60 ? '#00FF41' : hpPercent > 30 ? '#eab308' : '#ef4444';

  const renderSprite = () => {
    switch (config.type) {
      case 'invader': return <SpaceInvaderSprite isDamaged={isDamaged} />;
      case 'ghost': return <GhostSprite isDamaged={isDamaged} />;
      case 'snake': return <AnimatedSnakeSprite isDamaged={isDamaged} />;
      case 'skull': return <CyberSkullSprite isDamaged={isDamaged} />;
      case 'slime': return <CyberSlimeSprite isDamaged={isDamaged} />;
      case 'boss': return <MegaBossSprite isDamaged={isDamaged} bossIndex={config.bossIndex} />;
      case 'starship': return <StarshipSprite isDamaged={isDamaged} />;
      case 'mage': return <PixelWizardSprite isDamaged={isDamaged} />;
      case 'coin': return <PixelCoinSprite isDamaged={isDamaged} />;
      default: return <SpaceInvaderSprite isDamaged={isDamaged} />;
    }
  };

  return (
    <div
      data-game-target="true"
      className="fixed pointer-events-auto select-none z-10 group"
      style={{
        left: `${config.initialX}%`,
        top: `${config.initialY}%`,
        width: config.size,
        height: config.size,
      }}
      onClick={handleHit}
    >
      <AnimatePresence>
        {!isDead && (
          <motion.div
            key={config.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: isDamaged ? 1 : config.isBoss ? 1 : 0.9,
              // REAL CRAWLING WAVE FOR SNAKES ACROSS MAP
              y: isDamaged
                ? [-4, 4, -2, 2, 0]
                : config.isSnake
                ? [-14, 14, -14]
                : [-16, 16, -16],
              x: isDamaged
                ? [-6, 6, -4, 4, 0]
                : config.isSnake
                ? [-35, 35, -35]
                : [-12, 12, -12],
              rotate: isDamaged ? [-12, 12, 0] : config.isSnake ? [-10, 10, -10] : [-5, 5, -5],
              scaleX: config.isSnake ? [1, 1, -1, -1, 1] : 1, // Snake flips direction when slithering
              scale: isDamaged ? 1.3 : 1,
            }}
            exit={{
              scale: [1.3, 0],
              opacity: [1, 0],
              rotate: 360,
              transition: { duration: 0.35 },
            }}
            transition={{
              y: { duration: config.duration, repeat: Infinity, ease: 'easeInOut', delay: config.delay },
              x: { duration: config.duration + 1.5, repeat: Infinity, ease: 'easeInOut', delay: config.delay },
              rotate: { duration: config.duration * 1.2, repeat: Infinity, ease: 'easeInOut', delay: config.delay },
              scaleX: { duration: (config.duration + 1.5) * 2, repeat: Infinity, ease: 'easeInOut', delay: config.delay },
            }}
            whileHover={{ scale: 1.25, opacity: 1 }}
            className={`w-full h-full cursor-crosshair relative ${config.isBoss ? 'drop-shadow-[0_0_25px_rgba(168,85,247,0.9)]' : ''}`}
          >
            {/* Health Bar */}
            <div
              className={`absolute -top-3.5 left-1/2 -translate-x-1/2 bg-black/90 border border-gray-700 rounded-full overflow-hidden ${
                config.isBoss ? 'w-18 h-2.5 border-purple-500 shadow-neon' : 'w-9 h-1'
              }`}
            >
              <div
                className="h-full transition-all duration-200"
                style={{
                  width: `${hpPercent}%`,
                  backgroundColor: config.isBoss ? '#c084fc' : hpColor,
                }}
              />
            </div>

            {/* Boss Crown Badge */}
            {config.isBoss && (
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold text-purple-300 bg-black/95 px-2 py-0.5 rounded border border-purple-500 whitespace-nowrap animate-pulse flex items-center gap-1 shadow-[0_0_12px_rgba(168,85,247,0.6)]">
                <Crown className="w-3 h-3 text-yellow-400" />
                <span>BOSS ({hp}/{config.maxHp} HP)</span>
              </div>
            )}

            {/* Sprite */}
            {renderSprite()}

            {/* Target name tooltip */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded bg-black/90 border border-neon/30 text-[8px] font-mono text-neon whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {config.name} (+{config.expReward} EXP)
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Damage / EXP Popup */}
      <AnimatePresence>
        {floatingText.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 1, y: 0, scale: 0.8 }}
            animate={{ opacity: 0, y: -34, scale: 1.35 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85 }}
            className={`absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold whitespace-nowrap pointer-events-none px-2 py-0.5 rounded bg-black/95 border ${
              item.isExp
                ? 'text-[#00FF41] border-[#00FF41] shadow-[0_0_15px_rgba(0,255,65,0.9)] scale-110'
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

// ==================== MAIN COMPONENT WITH UP TO 99 WAVES & COMBOS ====================

export default function FloatingGameCharacters() {
  const { wave, setWave, nextWave } = useGame();
  const [enemies, setEnemies] = useState<EnemyConfig[]>([]);
  const [defeatedIds, setDefeatedIds] = useState<string[]>([]);
  const [waveBanner, setWaveBanner] = useState<string | null>(null);

  // Combo mechanics
  const [combo, setCombo] = useState(0);
  const comboTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleHitRegistered = () => {
    if (comboTimerRef.current) clearTimeout(comboTimerRef.current);
    setCombo((prev) => prev + 1);

    comboTimerRef.current = setTimeout(() => {
      setCombo(0);
    }, 1600);
  };

  // Generate wave enemies dynamically on wave change
  useEffect(() => {
    const list = generateProceduralWave(wave);
    setEnemies(list);
    setDefeatedIds([]);

    const isBossWave = wave % 5 === 0;
    const numBosses = Math.floor(wave / 5);

    setWaveBanner(
      isBossWave
        ? `🔥 WAVE ${wave}: ALERTA DE ${numBosses} GIGA BOSS${numBosses > 1 ? 'ES' : ''}!`
        : `⚡ WAVE ${wave} INICIADA!`
    );

    const timer = setTimeout(() => {
      setWaveBanner(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [wave]);

  // Handle enemy defeat & wave advancement
  const handleDefeated = (id: string) => {
    setDefeatedIds((prev) => {
      const updated = [...prev, id];
      // When all enemies of the current wave are wiped out
      if (updated.length >= enemies.length && enemies.length > 0) {
        setTimeout(() => {
          nextWave();
        }, 1000);
      }
      return updated;
    });
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10 font-mono">
      {/* Wave Banner Notification */}
      <AnimatePresence>
        {waveBanner && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 120, damping: 14 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
          >
            <div
              className={`border-2 px-6 py-2.5 rounded-2xl flex items-center gap-3 backdrop-blur-xl bg-black/95 ${
                wave % 5 === 0
                  ? 'border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.5)]'
                  : 'border-[#00FF41] shadow-[0_0_35px_rgba(0,255,65,0.4)]'
              }`}
            >
              {wave % 5 === 0 ? (
                <Flame className="w-5 h-5 text-purple-400 animate-bounce" />
              ) : (
                <Zap className="w-5 h-5 text-[#00FF41] animate-pulse" />
              )}
              <span className="text-sm md:text-base font-bold text-white tracking-widest uppercase">
                {waveBanner}
              </span>
              <span className="text-xs text-neon bg-neon/10 px-2.5 py-0.5 rounded border border-neon/30 font-bold">
                {enemies.length} ALVOS
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Combo Multiplier Counter in Viewport */}
      <AnimatePresence>
        {combo >= 2 && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0, x: -20 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="fixed top-36 left-6 z-40 pointer-events-none flex items-center gap-2 bg-black/90 border border-yellow-400/50 px-3 py-1.5 rounded-xl shadow-[0_0_20px_rgba(250,204,21,0.4)]"
          >
            <Flame className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-xs font-bold text-yellow-400 tracking-wider">
              COMBO x{combo}!
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render enemies */}
      {enemies.map((enemy) => (
        <EnemyEntity
          key={enemy.id}
          config={enemy}
          onDefeated={handleDefeated}
          comboMultiplier={combo}
          onHitRegistered={handleHitRegistered}
        />
      ))}
    </div>
  );
}
