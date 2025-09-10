import { create } from "zustand";

interface MarzStore {
  selected: string[];
  count: number;
  setCount: (c: number) => void;

  minPrice: number | "";
  maxPrice: number | "";
  setMinPrice: (v: number | "") => void;
  setMaxPrice: (v: number | "") => void;

  search: string;
  setSearch: (v: string) => void;

  selectedOrinak: string | null;
  setSelectedOrinak: (v: string | null) => void;

  active: string;
  setActive: (v: string) => void;

  nightActive: string;
  setNightActive: (v: string) => void;

  senyakActive: string;
  setSenyakActive: (v: string) => void;

  toggle: (v: string) => void;
  clear: () => void;
}

export const useMarzStore = create<MarzStore>((set) => ({
  selected: [],
  count: 1,
  setCount: (c) => set({ count: c }),

  minPrice: "",
  maxPrice: "",
  setMinPrice: (v) => set({ minPrice: v }),
  setMaxPrice: (v) => set({ maxPrice: v }),

  search: "",
  setSearch: (v) => set({ search: v }),

  selectedOrinak: null,
  setSelectedOrinak: (v) => set({ selectedOrinak: v }),

  active: "Բոլորը",
  setActive: (v) => set({ active: v }),

  nightActive: "Բոլորը",
  setNightActive: (v) => set({ nightActive: v }),

  senyakActive: "Բոլորը",
  setSenyakActive: (v) => set({ senyakActive: v }),

  toggle: (v) =>
    set((state) => ({
      selected: state.selected.includes(v)
        ? state.selected.filter((item) => item !== v)
        : [...state.selected, v],
    })),

  clear: () => set({ selected: [] }),
}));
