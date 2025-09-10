import React from "react";
import Marz from "./Marz";
import Pox from "./Pox";
import { useMarzStore } from "../Store/storeMarz";
import FilterPox from "./Filterpox";
import Night from "./Gisherakac";
import Senyak from "./Senyakqanak";
import Lox from "./Loxavazan";

export default function Info() {
  const el = <h3>Տարածաշրջան</h3>;
  const el2 = <h4>Մարդկանց թույլատրելի քանակ</h4>;

  const { count, setCount } = useMarzStore();

  function minusFun() {
    if (count > 1) setCount(count - 1);
  }

  return (
    <div className="info">
      <div className="shrjan">
        {el}
        <Marz />
      </div>

      <div>
        <p className="pgic">————————————————</p>
      </div>

      <div className="gintext">
        <h4>Արժեք</h4>
        <Pox />
      </div>

      <div>
        <p className="pgic">————————————————</p>
      </div>

      <div style={{ margin: "20px 0", display: "flex", gap: "20px" }}>
        <FilterPox />
      </div>

      <div>
        <p className="pgic">————————————————</p>
      </div>

      <div className="mardqanak">
        {el2}
        <div className="mainqanak">
          <button className="new minus" onClick={minusFun}>
            -
          </button>
          <div className="qanak">{count}</div>
          <button className="new plyus" onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
      </div>

      <div>
        <p className="pgic">————————————————</p>
      </div>

      <div>
        <h1>Գիշերակացի առկայություն</h1>
        <Night />
      </div>

      <div>
        <p className="pgic">————————————————</p>
      </div>

      <div>
        <h1>Սենյակների քանակ</h1>
        <Senyak />
      </div>

      <div>
        <p className="pgic">————————————————</p>
      </div>

      <div>
        <h1>Լողավազան</h1>
        <Lox />
      </div>
    </div>
  );
}
