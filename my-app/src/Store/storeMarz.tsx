import { create } from "zustand";

interface MarzStore {
  selected: string[];
  count: number;
  setCount: (c: number) => void;

  minPrice: number | "";
  maxPrice: number | "";
  setMinPrice: (v: number | "") => void;
  setMaxPrice: (v: number | "") => void;

  selectedOrinak: string | null;
  setSelectedOrinak: (v: string | null) => void;
}

export const useMarzStore = create<MarzStore>((set) => ({
  selected: [],
  count: 1,
  setCount: (c) => set({ count: c }),

  minPrice: "",
  maxPrice: "",
  setMinPrice: (v) => set({ minPrice: v }),
  setMaxPrice: (v) => set({ maxPrice: v }),

  // ✅ Սկզբում null, setter էլ ավելացրեցինք
  selectedOrinak: null,
  setSelectedOrinak: (v) => set({ selectedOrinak: v }),
}));
