import { create } from "zustand";

interface MarzState {
  selected: string[];
  minPrice: number | null;
  maxPrice: number | null;
  setMinPrice: (value: number | null) => void;
  setMaxPrice: (value: number | null) => void;
}

export const useMarzStore = create<MarzState>((set) => ({
  selected: [],
  minPrice: null,
  maxPrice: null,
  setMinPrice: (value) => set({ minPrice: value }),
  setMaxPrice: (value) => set({ maxPrice: value }),
}));
