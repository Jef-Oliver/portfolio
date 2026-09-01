'use client';

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

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
  isLoadingLeaderboard: boolean;
  wave: number;
  setWave: (wave: number) => void;
  nextWave: () => void;
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
  isLoadingLeaderboard: false,
  wave: 1,
  setWave: () => {},
  nextWave: () => {},
};

const GameContext = createContext<GameContextType>(defaultContextValue);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [playerName, setPlayerNameState] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [hasAskedName, setHasAskedName] = useState<boolean>(false);
  const [globalLeaderboard, setGlobalLeaderboard] = useState<LeaderboardEntry[]>(DEFAULT_LEADERBOARD);
  const [isLoadingLeaderboard, setIsLoadingLeaderboard] = useState<boolean>(false);
  const [wave, setWave] = useState<number>(1);
  const syncTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 1. Fetch global leaderboard from Supabase on mount
  useEffect(() => {
    const fetchGlobalLeaderboard = async () => {
      try {
        setIsLoadingLeaderboard(true);
        const res = await fetch('/api/leaderboard');
        if (res.ok) {
          const json = await res.json();
          if (json.leaderboard && json.leaderboard.length > 0) {
            setGlobalLeaderboard(json.leaderboard);
          }
        }
      } catch (err) {
        console.error('Failed to fetch global leaderboard:', err);
      } finally {
        setIsLoadingLeaderboard(false);
      }
    };

    fetchGlobalLeaderboard();

    // Load saved local user info
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

  // 2. Sync player score with Supabase backend
  const syncScoreToBackend = (nameToSync: string, scoreToSync: number) => {
    if (!nameToSync) return;
    if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current);

    syncTimeoutRef.current = setTimeout(async () => {
      try {
        const res = await fetch('/api/leaderboard', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: nameToSync, score: scoreToSync }),
        });
        if (res.ok) {
          const json = await res.json();
          if (json.leaderboard && json.leaderboard.length > 0) {
            setGlobalLeaderboard(json.leaderboard);
          }
        }
      } catch (err) {
        console.error('Failed to sync score to backend:', err);
      }
    }, 600);
  };

  const setPlayerName = (name: string) => {
    setPlayerNameState(name);
    setHasAskedName(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_player_name', name);
    }
    syncScoreToBackend(name, score);
  };

  const addScore = (points: number) => {
    setScore((prev) => {
      const newScore = prev + points;
      if (typeof window !== 'undefined') {
        localStorage.setItem('portfolio_player_score', newScore.toString());
      }
      if (playerName) {
        syncScoreToBackend(playerName, newScore);
      }
      return newScore;
    });
  };

  const nextWave = () => {
    setWave((prev) => (prev < 5 ? prev + 1 : 1));
  };

  // Level calculated by EXP
  const level = Math.floor(score / 100) + 1;

  // Build sorted active leaderboard with current player highlighted
  const activeLeaderboard: LeaderboardEntry[] = [...globalLeaderboard];
  if (playerName) {
    const existingIndex = activeLeaderboard.findIndex((e) => e.name.toLowerCase() === playerName.toLowerCase());
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
        leaderboard: activeLeaderboard.slice(0, 7),
        hasAskedName,
        setHasAskedName,
        level,
        isLoadingLeaderboard,
        wave,
        setWave,
        nextWave,
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
