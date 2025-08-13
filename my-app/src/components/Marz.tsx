import React, { useEffect, useState } from "react";

interface MarzData {
  name: string;
  qanak: number | string;
}

export default function Marz() {
  const [href, setHref] = useState([]);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://amaranocfirebasa-default-rtdb.firebaseio.com/db.json"
    );

    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        const data: MarzData[] = JSON.parse(xhr.responseText);

        const elements = data.map((el, index) => (
          <label key={index}>
            <input type="checkbox" />
            {" " + el.name + " " + el.qanak}
          </label>
        ));

        setHref(elements);
      }
    };

    xhr.send();
  }, []);

  return <div className="marz">{href}</div>;
}
