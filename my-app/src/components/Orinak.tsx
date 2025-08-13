import React, { useEffect, useState } from "react";

interface OrinakData {
  divclass: string;
  iconclass: string;
  text: string;
}

export default function Orinak() {
  const [orinak, setOrinak] = useState([]);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://amaranocfirebasa-default-rtdb.firebaseio.com/dborinak.json"
    );

    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        const data: OrinakData[] = JSON.parse(xhr.responseText);

        const orinakEl = data.map((orel, index) => (
          <div key={index} className={orel.divclass}>
            <i className={orel.iconclass}></i>
            <h5>{orel.text}</h5>
          </div>
        ));

        setOrinak(orinakEl);
      }
    };

    xhr.send();
  }, []);

  return <div className="orinak">{orinak}</div>;
}
