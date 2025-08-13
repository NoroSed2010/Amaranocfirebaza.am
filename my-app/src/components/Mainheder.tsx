import React, { useEffect, useState } from "react";

interface TextData {
  class: string;
  text: string;
}

export default function Mainheder(){
  const [text, setText] = useState([]);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://amaranocfirebasa-default-rtdb.firebaseio.com/dbtext.json"
    );

    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        const data: TextData[] = JSON.parse(xhr.responseText);

        const textEl = data.map((el, index) => (
          <div key={index} className="teg">
            <p className={el.class}>{el.text}</p>
          </div>
        ));

        setText(textEl);
      }
    };

    xhr.send();
  }, []);

  return (
    <div className="mainHeader">
      <div className="image">
        <img src="/logoamar.png" className="logo_img" alt="logo" />
      </div>
      <div className="tegs">{text}</div>
    </div>
  );
}
