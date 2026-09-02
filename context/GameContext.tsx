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
  setPlayerName: (name: string, isGuest?: boolean) => void;
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
  resetPlayer: () => void;
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
  resetPlayer: () => {},
};

const GameContext = createContext<GameContextType>(defaultContextValue);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [playerName, setPlayerNameState] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [hasAskedName, setHasAskedName] = useState<boolean>(false);
  const [globalLeaderboard, setGlobalLeaderboard] = useState<LeaderboardEntry[]>(DEFAULT_LEADERBOARD);
  const [isLoadingLeaderboard, setIsLoadingLeaderboard] = useState<boolean>(false);
  const [wave, setWave] = useState<number>(1);
  const [sessionToken, setSessionToken] = useState<string>('');
  const playerNameRef = useRef<string>('');
  const sessionTokenRef = useRef<string>('');
  const syncTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Keep refs in sync with states to prevent stale closures during rapid clicking
  useEffect(() => {
    playerNameRef.current = playerName;
  }, [playerName]);

  useEffect(() => {
    sessionTokenRef.current = sessionToken;
  }, [sessionToken]);

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
      const savedWave = localStorage.getItem('portfolio_player_wave');
      const savedToken = localStorage.getItem('portfolio_session_token');

      let currentName = '';
      let currentScore = 0;
      let currentToken = '';

      if (savedToken) {
        currentToken = savedToken;
        setSessionToken(savedToken);
        sessionTokenRef.current = savedToken;
      }

      if (savedName) {
        currentName = savedName;
        setPlayerNameState(savedName);
        playerNameRef.current = savedName;
        setHasAskedName(true);
      }
      if (savedScore) {
        currentScore = parseInt(savedScore, 10) || 0;
        setScore(currentScore);
      }
      if (savedWave) {
        setWave(parseInt(savedWave, 10) || 1);
      }

      // If user refreshed the page with an existing score and token, immediately sync to backend
      if (currentName && currentToken && currentScore > 0) {
        syncScoreToBackend(currentName, currentScore, currentToken);
      }
    }
  }, []);

  // 2. Sync player score with Supabase backend, sending cryptographic token
  const syncScoreToBackend = (nameToSync: string, scoreToSync: number, tokenToSync?: string) => {
    if (!nameToSync) return;
    const token = tokenToSync || sessionTokenRef.current || sessionToken;
    if (!token) return; // Cannot sync score without valid authenticated session token

    if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current);

    syncTimeoutRef.current = setTimeout(async () => {
      try {
        const res = await fetch('/api/leaderboard', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: nameToSync, score: scoreToSync, sessionToken: token }),
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
    }, 400);
  };

  const setPlayerName = async (name: string, isGuest = false) => {
    try {
      // Request a cryptographically signed session token from the backend
      const res = await fetch('/api/leaderboard/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, isGuest }),
      });

      if (res.ok) {
        const data = await res.json();
        const validName = data.name;
        const token = data.sessionToken;

        setPlayerNameState(validName);
        playerNameRef.current = validName;
        setSessionToken(token);
        sessionTokenRef.current = token;
        setHasAskedName(true);

        if (typeof window !== 'undefined') {
          localStorage.setItem('portfolio_player_name', validName);
          localStorage.setItem('portfolio_session_token', token);
        }

        syncScoreToBackend(validName, score, token);
      }
    } catch (err) {
      console.error('Failed to initialize player session token:', err);
    }
  };

  const addScore = (points: number) => {
    setScore((prev) => {
      const newScore = prev + points;
      if (typeof window !== 'undefined') {
        localStorage.setItem('portfolio_player_score', newScore.toString());
      }
      const activeName = playerNameRef.current || playerName;
      const activeToken = sessionTokenRef.current || sessionToken;
      if (activeName && activeToken) {
        syncScoreToBackend(activeName, newScore, activeToken);
      }
      return newScore;
    });
  };

  const nextWave = () => {
    setWave((prev) => {
      const next = prev < 99 ? prev + 1 : 1;
      if (typeof window !== 'undefined') {
        localStorage.setItem('portfolio_player_wave', next.toString());
      }
      return next;
    });
  };

  const resetPlayer = () => {
    setPlayerNameState('');
    setScore(0);
    setWave(1);
    setSessionToken('');
    setHasAskedName(false);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('portfolio_player_name');
      localStorage.removeItem('portfolio_player_score');
      localStorage.removeItem('portfolio_player_wave');
      localStorage.removeItem('portfolio_session_token');
    }
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
        resetPlayer,
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
