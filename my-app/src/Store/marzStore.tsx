import { create } from "zustand";

interface MarzState {
  selected: string[];
  count: number;
  minPrice: number | "";
  maxPrice: number | "";
  toggle: (name: string) => void;
  clear: () => void;
}

export const useMarzStore = create<MarzState>((set) => ({
  selected: [],
  count: 1,
  minPrice: "",
  maxPrice: "",
  toggle: (name) =>
    set((state) => ({
      selected: state.selected.includes(name)
        ? state.selected.filter((n) => n !== name)
        : [...state.selected, name],
    })),
  clear: () => set({ selected: [] }),
}));
