'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface LeaderboardEntry {
  name: string;
  score: number;
  isCurrentPlayer?: boolean;
}

const DEFAULT_LEADERBOARD: LeaderboardEntry[] = [
  { name: 'Lucas Dev', score: 480 },
  { name: 'Mariana Silva', score: 360 },
  { name: 'Rafael Costa', score: 270 },
  { name: 'Ana Beatriz', score: 190 },
  { name: 'Carlos Eduardo', score: 120 },
];

interface GameContextType {
  playerName: string;
  setPlayerName: (name: string) => void;
  score: number;
  addScore: (points: number) => void;
  leaderboard: LeaderboardEntry[];
  hasAskedName: boolean;
  setHasAskedName: (val: boolean) => void;
  level: number;
}

const defaultContextValue: GameContextType = {
  playerName: '',
  setPlayerName: () => {},
  score: 0,
  addScore: () => {},
  leaderboard: DEFAULT_LEADERBOARD,
  hasAskedName: false,
  setHasAskedName: () => {},
  level: 1,
};

const GameContext = createContext<GameContextType>(defaultContextValue);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [playerName, setPlayerNameState] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [hasAskedName, setHasAskedName] = useState<boolean>(false);

  // Load player from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedName = localStorage.getItem('portfolio_player_name');
      const savedScore = localStorage.getItem('portfolio_player_score');
      if (savedName) {
        setPlayerNameState(savedName);
        setHasAskedName(true);
      }
      if (savedScore) {
        setScore(parseInt(savedScore, 10) || 0);
      }
    }
  }, []);

  const setPlayerName = (name: string) => {
    setPlayerNameState(name);
    setHasAskedName(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_player_name', name);
    }
  };

  const addScore = (points: number) => {
    setScore((prev) => {
      const newScore = prev + points;
      if (typeof window !== 'undefined') {
        localStorage.setItem('portfolio_player_score', newScore.toString());
      }
      return newScore;
    });
  };

  // Level calculated by EXP
  const level = Math.floor(score / 100) + 1;

  // Build sorted leaderboard with the current player included
  const activeLeaderboard: LeaderboardEntry[] = [...DEFAULT_LEADERBOARD];
  if (playerName) {
    const existingIndex = activeLeaderboard.findIndex((e) => e.name === playerName);
    if (existingIndex >= 0) {
      activeLeaderboard[existingIndex].score = Math.max(activeLeaderboard[existingIndex].score, score);
      activeLeaderboard[existingIndex].isCurrentPlayer = true;
    } else {
      activeLeaderboard.push({ name: playerName, score, isCurrentPlayer: true });
    }
  }
  activeLeaderboard.sort((a, b) => b.score - a.score);

  return (
    <GameContext.Provider
      value={{
        playerName,
        setPlayerName,
        score,
        addScore,
        leaderboard: activeLeaderboard.slice(0, 6),
        hasAskedName,
        setHasAskedName,
        level,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  return context || defaultContextValue;
}
