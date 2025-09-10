import React, { useEffect, useState, useRef } from "react";
import { useMarzStore } from "../Store/storeMarz";

interface OrinakData {
  divclass: string;
  iconclass: string;
  text: string;
}

export default function Orinak() {
  const [orinak, setOrinak] = useState<OrinakData[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { setSelectedOrinak } = useMarzStore();

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://amaranocfirebasa-default-rtdb.firebaseio.com/dborinak.json");

    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        const data: OrinakData[] = JSON.parse(xhr.responseText);
        setOrinak(data);
      }
    };

    xhr.send();
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="orinak-container">
      <button className="arrow left" onClick={scrollLeft}>
        <span>&#8592;</span>
      </button>
      <div className="orinak" ref={scrollRef}>
        {orinak.map((orel, index) => (
          <div
            key={index}
            className={orel.divclass}
            onClick={() => setSelectedOrinak(orel.text)}
            style={{ cursor: "pointer" }}
          >
            <img src={orel.iconclass} alt={orel.text} />
            <h5>{orel.text}</h5>
          </div>
        ))}
      </div>
      <button className="arrow right" onClick={scrollRight}>
        <span>&#8594;</span>
      </button>
    </div>
  );
}
