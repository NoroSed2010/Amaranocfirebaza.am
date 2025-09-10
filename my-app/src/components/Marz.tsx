import React, { useEffect, useState } from "react";
import { useMarzStore } from "../Store/storeMarz";

interface MarzData {
  name: string;
  qanak: number | string;
}

export default function Marz() {
  const [data, setData] = useState<MarzData[]>([]);
  const { selected, toggle, clear } = useMarzStore();

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://amaranocfirebasa-default-rtdb.firebaseio.com/db.json"
    );
    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        const res: MarzData[] = JSON.parse(xhr.responseText);
        setData(res);
      }
    };
    xhr.send();
  }, []);

  return (
    <div className="marz space-y-2 max-h-40 overflow-y-auto pr-2">
      {data.map((el, index) => (
        <label
          key={index}
          className="flex items-center justify-between cursor-pointer text-gray-700"
        >
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-400"
              checked={selected.includes(el.name)}
              onChange={() => toggle(el.name)}
            />
            <span>{el.name}</span>
          </div>
          <span className="text-gray-500">{el.qanak}</span>
        </label>
      ))}
    </div>
  );
}