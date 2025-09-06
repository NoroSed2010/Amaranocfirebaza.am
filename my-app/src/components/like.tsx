import React from "react";
import { useMarzStore } from "../Store/marzLiked";

interface LikesProps {
  nkar: {
    src: string;
    tex: string;
    gin: string | number;
  };
}

export default function Likes({ nkar }: LikesProps) {
  const { liked, toggleLike } = useMarzStore();
  const isLiked = liked.some((el) => el.src === nkar.src);

  return (
    <i
      className="fa-solid fa-heart"
      style={{ 
        color: isLiked ? "red" : "gray", 
        cursor: "pointer", 
        fontSize: "20px" 
      }}
      onClick={() => toggleLike(nkar)}
    ></i>
  );
}