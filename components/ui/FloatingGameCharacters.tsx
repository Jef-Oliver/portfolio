'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGame } from '@/context/GameContext';
import { Sparkles, Trophy, Zap } from 'lucide-react';

// ==================== PIXEL ART SPRITES ====================

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

function SnakeSprite({ isDamaged }: { isDamaged: boolean }) {
  const bodyColor = isDamaged ? '#ef4444' : '#10b981';
  return (
    <svg viewBox="0 0 20 8" className="w-full h-full drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]">
      {/* Snake Head */}
      <rect x="14" y="1" width="5" height="5" fill={bodyColor} rx="1" />
      <rect x="17" y="2" width="1.5" height="1.5" fill="#000" />
      <rect x="19" y="3" width="2" height="1" fill="#ef4444" /> {/* Tongue */}
      {/* Body Segments */}
      <rect x="10" y="2" width="4" height="4" fill={bodyColor} />
      <rect x="6" y="1" width="4" height="4" fill={bodyColor} />
      <rect x="2" y="2" width="4" height="4" fill={bodyColor} />
      <rect x="0" y="3" width="2" height="2" fill={bodyColor} />
    </svg>
  );
}

function CyberSkullSprite({ isDamaged }: { isDamaged: boolean }) {
  const color = isDamaged ? '#ef4444' : '#e11d48';
  return (
    <svg viewBox="0 0 12 12" className="w-full h-full drop-shadow-[0_0_8px_rgba(225,29,72,0.8)]" style={{ fill: color }}>
      <rect x="3" y="0" width="6" height="1" /><rect x="2" y="1" width="8" height="1" />
      <rect x="1" y="2" width="10" height="4" />
      {/* Eye sockets */}
      <rect x="2" y="3" width="2" height="2" fill="#000" />
      <rect x="8" y="3" width="2" height="2" fill="#000" />
      <rect x="3" y="4" width="1" height="1" fill="#00FF41" />
      <rect x="9" y="4" width="1" height="1" fill="#00FF41" />
      {/* Teeth */}
      <rect x="3" y="6" width="6" height="2" />
      <rect x="4" y="8" width="4" height="3" />
      <rect x="5" y="9" width="1" height="2" fill="#000" />
      <rect x="7" y="9" width="1" height="2" fill="#000" />
    </svg>
  );
}

function CyberSlimeSprite({ isDamaged }: { isDamaged: boolean }) {
  const color = isDamaged ? '#ef4444' : '#84cc16';
  return (
    <svg viewBox="0 0 12 10" className="w-full h-full drop-shadow-[0_0_8px_rgba(132,204,22,0.8)]" style={{ fill: color }}>
      <rect x="4" y="0" width="4" height="1" /><rect x="2" y="1" width="8" height="1" />
      <rect x="1" y="2" width="10" height="2" /><rect x="0" y="4" width="12" height="5" />
      {/* Slime eyes */}
      <rect x="3" y="3" width="2" height="2" fill="#000" />
      <rect x="7" y="3" width="2" height="2" fill="#000" />
      <rect x="4" y="3" width="1" height="1" fill="#fff" />
      <rect x="8" y="3" width="1" height="1" fill="#fff" />
      <rect x="1" y="9" width="10" height="1" />
    </svg>
  );
}

function MegaBossSprite({ isDamaged }: { isDamaged: boolean }) {
  const armor = isDamaged ? '#ef4444' : '#a855f7';
  return (
    <svg viewBox="0 0 24 20" className="w-full h-full drop-shadow-[0_0_20px_rgba(168,85,247,0.9)]">
      {/* Boss Crown / Horns */}
      <rect x="2" y="0" width="3" height="3" fill="#ec4899" />
      <rect x="19" y="0" width="3" height="3" fill="#ec4899" />
      <rect x="6" y="2" width="12" height="3" fill={armor} />
      {/* Main Mecha Head */}
      <rect x="4" y="5" width="16" height="8" fill={armor} />
      {/* Glowing Visor */}
      <rect x="6" y="7" width="12" height="3" fill="#00FF41" className="animate-pulse" />
      <rect x="10" y="8" width="4" height="1" fill="#ffffff" />
      {/* Core Cannons */}
      <rect x="0" y="8" width="4" height="6" fill="#6366f1" />
      <rect x="20" y="8" width="4" height="6" fill="#6366f1" />
      {/* Lower armor & Thrusters */}
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
      <rect x="7" y="0" width="1" height="1" /><rect x="6" y="1" width="3" height="1" />
      <rect x="6" y="2" width="3" height="1" /><rect x="5" y="3" width="5" height="1" />
      <rect x="4" y="4" width="7" height="1" /><rect x="0" y="5" width="15" height="1" />
      <rect x="1" y="6" width="13" height="1" /><rect x="2" y="7" width="11" height="1" />
      <rect x="0" y="8" width="3" height="1" /><rect x="6" y="8" width="3" height="1" /><rect x="12" y="8" width="3" height="1" />
      <rect x="0" y="9" width="1" height="2" /><rect x="7" y="9" width="1" height="2" fill="#ef4444" className="animate-pulse" /><rect x="14" y="9" width="1" height="2" />
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

// ==================== ENEMY DEFINITIONS ====================

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
  type: 'invader' | 'ghost' | 'snake' | 'skull' | 'slime' | 'boss' | 'starship' | 'mage' | 'coin';
}

function getWaveEnemies(wave: number): EnemyConfig[] {
  switch (wave) {
    case 1:
      return [
        { id: 'w1-1', name: '👾 Space Invader', maxHp: 3, expReward: 30, size: 38, initialX: 5, initialY: 15, duration: 5.5, delay: 0, type: 'invader' },
        { id: 'w1-2', name: '👻 Cyber Ghost', maxHp: 3, expReward: 30, size: 36, initialX: 92, initialY: 22, duration: 6.5, delay: 0.8, type: 'ghost' },
        { id: 'w1-3', name: '🚀 Starship PRO', maxHp: 4, expReward: 40, size: 42, initialX: 6, initialY: 62, duration: 7, delay: 1.5, type: 'starship' },
        { id: 'w1-4', name: '🧙‍♂️ Code Mage', maxHp: 3, expReward: 50, size: 40, initialX: 90, initialY: 75, duration: 6, delay: 1, type: 'mage' },
        { id: 'w1-5', name: '🪙 1-UP Coin', maxHp: 2, expReward: 20, size: 30, initialX: 16, initialY: 88, duration: 4.8, delay: 0.5, type: 'coin' },
      ];
    case 2:
      return [
        { id: 'w2-1', name: '🐍 Cyber Snake Alpha', maxHp: 3, expReward: 45, size: 52, initialX: 8, initialY: 30, duration: 4.5, delay: 0, isSnake: true, type: 'snake' },
        { id: 'w2-2', name: '🐍 Cyber Snake Beta', maxHp: 3, expReward: 45, size: 52, initialX: 85, initialY: 65, duration: 5, delay: 1, isSnake: true, type: 'snake' },
        { id: 'w2-3', name: '👾 Space Invader', maxHp: 3, expReward: 30, size: 38, initialX: 45, initialY: 12, duration: 6, delay: 0.5, type: 'invader' },
        { id: 'w2-4', name: '👻 Cyber Ghost', maxHp: 3, expReward: 30, size: 36, initialX: 88, initialY: 18, duration: 5.8, delay: 1.2, type: 'ghost' },
        { id: 'w2-5', name: '🪙 1-UP Coin', maxHp: 2, expReward: 20, size: 30, initialX: 10, initialY: 82, duration: 4.5, delay: 0.3, type: 'coin' },
        { id: 'w2-6', name: '🧙‍♂️ Code Mage', maxHp: 3, expReward: 50, size: 40, initialX: 82, initialY: 85, duration: 6.2, delay: 1.5, type: 'mage' },
      ];
    case 3:
      return [
        { id: 'w3-1', name: '🧪 Cyber Slime Toxic', maxHp: 4, expReward: 50, size: 44, initialX: 12, initialY: 20, duration: 5, delay: 0, type: 'slime' },
        { id: 'w3-2', name: '🧪 Cyber Slime Acid', maxHp: 4, expReward: 50, size: 44, initialX: 86, initialY: 35, duration: 5.5, delay: 0.8, type: 'slime' },
        { id: 'w3-3', name: '🐍 Cyber Snake', maxHp: 3, expReward: 45, size: 50, initialX: 50, initialY: 80, duration: 4.2, delay: 1, isSnake: true, type: 'snake' },
        { id: 'w3-4', name: '🚀 Starship Elite', maxHp: 4, expReward: 45, size: 42, initialX: 8, initialY: 65, duration: 6.5, delay: 1.4, type: 'starship' },
        { id: 'w3-5', name: '👾 Space Invader X', maxHp: 3, expReward: 35, size: 38, initialX: 92, initialY: 70, duration: 5.2, delay: 0.5, type: 'invader' },
        { id: 'w3-6', name: '🪙 Super Coin', maxHp: 2, expReward: 30, size: 32, initialX: 30, initialY: 15, duration: 4, delay: 0.2, type: 'coin' },
      ];
    case 4:
      return [
        { id: 'w4-1', name: '💀 Cyber Skull Reaper', maxHp: 4, expReward: 60, size: 42, initialX: 14, initialY: 18, duration: 4, delay: 0, type: 'skull' },
        { id: 'w4-2', name: '💀 Cyber Skull Phantom', maxHp: 4, expReward: 60, size: 42, initialX: 82, initialY: 25, duration: 4.2, delay: 0.6, type: 'skull' },
        { id: 'w4-3', name: '🐍 Cyber Snake Ultra', maxHp: 4, expReward: 50, size: 54, initialX: 6, initialY: 55, duration: 4, delay: 1, isSnake: true, type: 'snake' },
        { id: 'w4-4', name: '🐍 Cyber Snake Mega', maxHp: 4, expReward: 50, size: 54, initialX: 88, initialY: 75, duration: 4.2, delay: 1.3, isSnake: true, type: 'snake' },
        { id: 'w4-5', name: '🧪 Cyber Slime', maxHp: 4, expReward: 50, size: 44, initialX: 48, initialY: 14, duration: 5.2, delay: 0.4, type: 'slime' },
        { id: 'w4-6', name: '🧙‍♂️ High Mage', maxHp: 4, expReward: 65, size: 42, initialX: 10, initialY: 85, duration: 5.8, delay: 1.6, type: 'mage' },
      ];
    case 5:
    default:
      return [
        { id: 'w5-boss', name: '👑 GIGA MECHA BOSS', maxHp: 8, expReward: 200, size: 72, initialX: 45, initialY: 14, duration: 4.5, delay: 0, isBoss: true, type: 'boss' },
        { id: 'w5-1', name: '💀 Boss Minion Skull', maxHp: 3, expReward: 50, size: 38, initialX: 12, initialY: 28, duration: 4.2, delay: 0.5, type: 'skull' },
        { id: 'w5-2', name: '💀 Boss Minion Skull', maxHp: 3, expReward: 50, size: 38, initialX: 82, initialY: 28, duration: 4.2, delay: 0.8, type: 'skull' },
        { id: 'w5-3', name: '🐍 Guardian Snake', maxHp: 3, expReward: 45, size: 50, initialX: 8, initialY: 70, duration: 4, delay: 1.2, isSnake: true, type: 'snake' },
        { id: 'w5-4', name: '🐍 Guardian Snake', maxHp: 3, expReward: 45, size: 50, initialX: 88, initialY: 70, duration: 4, delay: 1.5, isSnake: true, type: 'snake' },
      ];
  }
}

// ==================== ENEMY COMPONENT ====================

function EnemyEntity({
  config,
  onDefeated,
}: {
  config: EnemyConfig;
  onDefeated: (id: string) => void;
}) {
  const { addScore } = useGame();
  const [hp, setHp] = useState(config.maxHp);
  const [isDamaged, setIsDamaged] = useState(false);
  const [floatingText, setFloatingText] = useState<{ id: number; text: string; isExp?: boolean }[]>([]);
  const isDead = hp <= 0;

  const handleHit = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isDead) return;

    const newHp = hp - 1;
    setHp(newHp);
    setIsDamaged(true);
    setTimeout(() => setIsDamaged(false), 200);

    const textId = Date.now() + Math.random();

    if (newHp <= 0) {
      addScore(config.expReward);
      setFloatingText((prev) => [
        ...prev,
        { id: textId, text: `💥 +${config.expReward} EXP!`, isExp: true },
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
      case 'snake': return <SnakeSprite isDamaged={isDamaged} />;
      case 'skull': return <CyberSkullSprite isDamaged={isDamaged} />;
      case 'slime': return <CyberSlimeSprite isDamaged={isDamaged} />;
      case 'boss': return <MegaBossSprite isDamaged={isDamaged} />;
      case 'starship': return <StarshipSprite isDamaged={isDamaged} />;
      case 'mage': return <PixelWizardSprite isDamaged={isDamaged} />;
      case 'coin': return <PixelCoinSprite isDamaged={isDamaged} />;
      default: return <SpaceInvaderSprite isDamaged={isDamaged} />;
    }
  };

  return (
    <div
      data-game-target="true"
      className="fixed pointer-events-auto select-none z-30 group"
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
              y: isDamaged
                ? [-4, 4, -2, 2, 0]
                : config.isSnake
                ? [-8, 8, -8]
                : [-16, 16, -16],
              x: isDamaged
                ? [-6, 6, -4, 4, 0]
                : config.isSnake
                ? [-25, 25, -25]
                : [-12, 12, -12],
              rotate: isDamaged ? [-12, 12, 0] : config.isSnake ? [-8, 8, -8] : [-5, 5, -5],
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
              x: { duration: config.duration + 1.2, repeat: Infinity, ease: 'easeInOut', delay: config.delay },
              rotate: { duration: config.duration * 1.3, repeat: Infinity, ease: 'easeInOut', delay: config.delay },
            }}
            whileHover={{ scale: 1.25, opacity: 1 }}
            className={`w-full h-full cursor-crosshair relative ${config.isBoss ? 'drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]' : ''}`}
          >
            {/* Health Bar */}
            <div
              className={`absolute -top-3.5 left-1/2 -translate-x-1/2 bg-black/90 border border-gray-700 rounded-full overflow-hidden ${
                config.isBoss ? 'w-16 h-2 border-purple-500 shadow-neon' : 'w-9 h-1'
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
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold text-purple-400 bg-black/90 px-2 py-0.5 rounded border border-purple-500 whitespace-nowrap animate-pulse">
                👑 FINAL BOSS ({hp}/{config.maxHp} HP)
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
            animate={{ opacity: 0, y: -32, scale: 1.3 }}
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

// ==================== MAIN COMPONENT WITH WAVES 1 TO 5 ====================

export default function FloatingGameCharacters() {
  const { wave, setWave, nextWave } = useGame();
  const [enemies, setEnemies] = useState<EnemyConfig[]>([]);
  const [defeatedIds, setDefeatedIds] = useState<string[]>([]);
  const [waveBanner, setWaveBanner] = useState<string | null>(null);
  const [isVictory, setIsVictory] = useState<boolean>(false);

  // Initialize or update enemies when wave changes
  useEffect(() => {
    const list = getWaveEnemies(wave);
    setEnemies(list);
    setDefeatedIds([]);
    setIsVictory(false);

    // Show Wave Banner notification
    setWaveBanner(wave === 5 ? '🔥 WAVE 5: MEGA BOSS FINAL!' : `⚡ WAVE ${wave} INICIADA!`);
    const timer = setTimeout(() => {
      setWaveBanner(null);
    }, 2800);
    return () => clearTimeout(timer);
  }, [wave]);

  // Handle enemy defeat
  const handleDefeated = (id: string) => {
    setDefeatedIds((prev) => {
      const updated = [...prev, id];
      // Check if all enemies in this wave are defeated!
      if (updated.length >= enemies.length && enemies.length > 0) {
        if (wave < 5) {
          setTimeout(() => {
            nextWave();
          }, 1200);
        } else {
          // Beat Wave 5 (VICTORY!)
          setTimeout(() => {
            setIsVictory(true);
          }, 800);
        }
      }
      return updated;
    });
  };

  const handleRestart = () => {
    setIsVictory(false);
    setWave(1);
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20 font-mono">
      {/* Wave Banner Announcement */}
      <AnimatePresence>
        {waveBanner && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 120, damping: 14 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
          >
            <div className="bg-black/95 border-2 border-[#00FF41] shadow-[0_0_35px_rgba(0,255,65,0.4)] px-6 py-2.5 rounded-2xl flex items-center gap-3 backdrop-blur-xl">
              <Zap className="w-5 h-5 text-[#00FF41] animate-pulse" />
              <span className="text-sm md:text-base font-bold text-white tracking-widest uppercase">
                {waveBanner}
              </span>
              <span className="text-xs text-neon bg-neon/10 px-2 py-0.5 rounded border border-neon/30">
                {enemies.length} INIMIGOS
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Victory Celebration Modal */}
      <AnimatePresence>
        {isVictory && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-2xl p-6 pointer-events-auto"
          >
            <div className="max-w-md w-full p-8 rounded-3xl bg-black border-2 border-[#00FF41] shadow-[0_0_60px_rgba(0,255,65,0.3)] text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#00FF41]/20 border-2 border-[#00FF41] flex items-center justify-center mx-auto text-3xl shadow-[0_0_20px_rgba(0,255,65,0.6)]">
                🏆
              </div>
              <h3 className="text-2xl font-bold text-white font-grotesk tracking-wide">
                VITÓRIA TOTAL!
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Você derrotou todas as <span className="text-[#00FF41] font-bold">5 Waves</span> e o Mega Boss Mecha! Seu score foi registrado no ranking global.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleRestart}
                  className="btn-neon text-xs py-3 px-6 justify-center flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Jogar Novamente</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render Current Wave Enemies */}
      {enemies.map((enemy) => (
        <EnemyEntity
          key={enemy.id}
          config={enemy}
          onDefeated={handleDefeated}
        />
      ))}
    </div>
  );
}
