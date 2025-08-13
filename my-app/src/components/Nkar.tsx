import React, { useEffect, useState } from "react";

interface NkarData {
  src: string;
  tex: string;
  gin: string | number;
}

export default function Nkar(){
  const [hrefImg, setHrefImg] = useState([]);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://amaranocfirebasa-default-rtdb.firebaseio.com/dbimg.json"
    );

    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        const data: NkarData[] = JSON.parse(xhr.responseText);

        const newElements = data.map((el, index) => (
          <div key={index} className="nkarimg">
            <img src={el.src} className="img" alt={el.tex} />
            <p className="namecountry">{el.tex}</p>
            <p style={{ color: "gray" }}>{el.gin}</p>
          </div>
        ));

        setHrefImg(newElements);
      }
    };

    xhr.send();
  }, []);

  return <div className="nkarinfo">{hrefImg}</div>;
}
