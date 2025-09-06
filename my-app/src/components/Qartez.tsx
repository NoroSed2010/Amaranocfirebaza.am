import React from "react";
import Orinak from "./Orinak";
import Qartezcalendar from "./Qartezcalendar";
import Nkar from "./Nkar";

export default function Qartez() {
  return (
    <div className="qartez">
      <Qartezcalendar />
      <Orinak />
      <Nkar />
    </div>
  );
}
