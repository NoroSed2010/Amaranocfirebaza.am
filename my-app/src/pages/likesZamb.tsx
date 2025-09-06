import React from "react";
import { useMarzStore } from "../Store/marzLiked";
import Likes from "../components/like";

export default function Zambyux() {
  const { liked } = useMarzStore();

  if (liked.length === 0) {
    return <p className="text-center text-gray-500 text-lg font-medium mt-4">Չկան հավանած նկարներ</p>;
  }

  return (
    <div
      style={{
        width: "60vw",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        margin: "0 auto",
      }}
    >
      {liked.map((el, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            overflow: "hidden",
            textAlign: "center",
            backgroundColor: "#f9f9f9",
          }}
        >
          <img
            src={el.src}
            alt={el.tex}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />
          <p style={{ fontWeight: "bold", margin: "10px 0 5px" }}>{el.tex}</p>
          <p style={{ color: "gray", marginBottom: "10px" }}>{el.gin}</p>
          <Likes nkar={el} />
        </div>
      ))}
    </div>
  );
}