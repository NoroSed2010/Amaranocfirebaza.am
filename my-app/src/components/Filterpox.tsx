import React from "react";
import { useMarzStore } from "../Store/storeMarz";

export default function FilterPox() {
  const { minPrice, maxPrice, setMinPrice, setMaxPrice } = useMarzStore();

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <input
        type="number"
        placeholder="Սկսած"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value === "" ? "" : Number(e.target.value))}
        style={{
          color: "black",
          padding: "10px",
          width: "100px",
          border: "1px solid #ccc",
          backgroundColor: "white",
        }}
      />
      <input
        type="number"
        placeholder="Մինչև"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))}
        style={{
          color: "black",
          padding: "10px",
          width: "100px",
          border: "1px solid #ccc",
          backgroundColor: "white",
        }}
      />
    </div>
  );
}
