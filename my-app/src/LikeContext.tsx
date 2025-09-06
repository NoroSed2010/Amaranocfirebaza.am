import React, { createContext, useContext, useState } from "react";

interface LikeItem {
  src: string;
  tex: string;
  gin: string | number;
}

interface LikesContextType {
  likes: LikeItem[];
  toggleLike: (item: LikeItem) => void;
}

const LikesContext = createContext<LikesContextType | undefined>(undefined);

export function LikesProvider({ children }: { children: React.ReactNode }) {
  const [likes, setLikes] = useState<LikeItem[]>([]);

  const toggleLike = (item: LikeItem) => {
    const exists = likes.find((l) => l.src === item.src);
    if (exists) {
      setLikes(likes.filter((l) => l.src !== item.src));
    } else {
      setLikes([...likes, item]);
    }
  };

  return (
    <LikesContext.Provider value={{ likes, toggleLike }}>
      {children}
    </LikesContext.Provider>
  );
}

export function useLikes() {
  const context = useContext(LikesContext);
  if (!context) throw new Error("useLikes must be inside LikesProvider");
  return context;
}
