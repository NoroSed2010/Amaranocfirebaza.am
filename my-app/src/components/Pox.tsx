import React, { useEffect, useState } from "react";

interface PoxData {
  class2: string;
  logo: string;
}

export default function Pox() {
  const [pox, setPox] = useState([]);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://amaranocfirebasa-default-rtdb.firebaseio.com/dder.json"
    );

    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        const data: PoxData[] = JSON.parse(xhr.responseText);

        const poxEl = data.map((dengi, index) => (
          <div key={index} className={`klor ${dengi.class2}`}>
            {dengi.logo}
          </div>
        ));

        setPox(poxEl);
      }
    };

    xhr.send();
  }, []); 

  return <div className="gin">{pox}</div>;
}
