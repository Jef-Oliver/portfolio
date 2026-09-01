'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ChevronUp, ChevronDown, User, Zap, ShieldAlert, Sparkles } from 'lucide-react';
import { useGame } from '@/context/GameContext';

export default function VisitorRankingWidget() {
  const { playerName, score, level, leaderboard } = useGame();
  const [isExpanded, setIsExpanded] = useState(false);

  // If no name chosen yet, hide or show minimal guest badge
  const displayName = playerName || 'Visitante Convidado';

  return (
    <div className="fixed bottom-4 right-4 z-40 pointer-events-auto select-none font-mono">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            style={{ backgroundColor: '#0A0A0A', borderColor: 'rgba(0, 255, 65, 0.3)' }}
            className="mb-3 w-80 p-4 border rounded-2xl shadow-[0_0_30px_rgba(0,255,65,0.15)] bg-black/95 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#1A1A1A]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-[#00FF41]/15 border border-[#00FF41]/40 flex items-center justify-center">
                  <Trophy className="w-3.5 h-3.5 text-[#00FF41]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white tracking-wide">
                    RANKING DE VISITANTES
                  </h4>
                  <span className="text-[9px] text-gray-400">Acerte os monstros e ganhe EXP</span>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-white p-1 rounded"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Leaderboard list */}
            <div className="my-3 space-y-1.5">
              {leaderboard.map((player, index) => {
                const isMe = player.isCurrentPlayer;
                return (
                  <div
                    key={`${player.name}-${index}`}
                    className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-colors ${
                      isMe
                        ? 'bg-[#00FF41]/10 border border-[#00FF41]/40 text-white font-bold'
                        : 'bg-black/40 text-gray-300 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span
                        className={`w-4 text-[11px] font-bold ${
                          index === 0
                            ? 'text-yellow-400'
                            : index === 1
                            ? 'text-gray-300'
                            : index === 2
                            ? 'text-amber-600'
                            : 'text-gray-500'
                        }`}
                      >
                        #{index + 1}
                      </span>
                      <span className="truncate">
                        {player.name} {isMe ? '(Você)' : ''}
                      </span>
                    </div>
                    <span className="text-[#00FF41] font-bold text-xs pl-2">
                      {player.score} EXP
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Player footer */}
            <div className="pt-2 border-t border-[#1A1A1A] flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-1.5 text-gray-300">
                <User className="w-3 h-3 text-[#00FF41]" />
                <span className="truncate max-w-[120px]">{displayName}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] bg-[#00FF41]/10 text-[#00FF41] px-1.5 py-0.5 rounded border border-[#00FF41]/20 font-bold">
                  LVL {level}
                </span>
                <span className="text-white font-bold">{score} EXP</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Collapsed floating pill button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ backgroundColor: '#070707', borderColor: 'rgba(0, 255, 65, 0.4)' }}
        className="flex items-center gap-3 px-3.5 py-2 rounded-full border shadow-[0_0_20px_rgba(0,255,65,0.25)] bg-black/90 backdrop-blur-md text-white transition-all group"
      >
        <div className="w-6 h-6 rounded-full bg-[#00FF41] flex items-center justify-center">
          <Trophy className="w-3.5 h-3.5 text-black" />
        </div>
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-white tracking-wide truncate max-w-[110px]">
              {displayName}
            </span>
            <span className="text-[9px] bg-[#00FF41]/15 text-[#00FF41] px-1 rounded font-bold">
              Lvl {level}
            </span>
          </div>
          <span className="text-[10px] text-[#00FF41] font-bold">
            {score} EXP
          </span>
        </div>
        <div className="text-gray-400 group-hover:text-white pl-1">
          {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </div>
      </motion.button>
    </div>
  );
}
