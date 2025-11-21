import { create } from "zustand";

interface GameState {
  playerName: string;
  difficulty: number; // 4 = 4x4, 5 = 5x5
  setPlayer: (name: string, difficulty: number) => void;
}

export const useGameStore = create<GameState>((set) => ({
  playerName: "",
  difficulty: 4,
  setPlayer: (playerName, difficulty) => set({ playerName, difficulty }),
}));
