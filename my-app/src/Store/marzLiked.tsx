import { create } from "zustand";

interface MarzData {
  name: string;
  qanak: number | string;
}

interface NkarData {
  src: string;
  tex: string;
  gin: string | number;
}

interface MarzState {
  selected: string[];
  liked: NkarData[];
  toggle: (name: string) => void;
  clear: () => void;

  toggleLike: (nkar: NkarData) => void;
}

export const useMarzStore = create<MarzState>((set, get) => ({
  selected: [],
  liked: [],

  toggle: (name) =>
    set((state) => ({
      selected: state.selected.includes(name)
        ? state.selected.filter((n) => n !== name)
        : [...state.selected, name],
    })),

  clear: () => set({ selected: [] }),

  toggleLike: (nkar) => {
    const { liked } = get();
    const isLiked = liked.find((el) => el.src === nkar.src);

    set({
      liked: isLiked
        ? liked.filter((el) => el.src !== nkar.src)
        : [...liked, nkar],
    });
  },
}));