import React, { useEffect, useState } from "react";

interface InputData {
  class: string;
  placeholder: string;
  text: string;
}

export default function Input() {
  const [inputss, setInput] = useState([]);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://amaranocfirebasa-default-rtdb.firebaseio.com/dbinput.json",
    );

    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        const data: InputData[] = JSON.parse(xhr.responseText);

        const inputEl = data.map((inel, index) =>
          <input
            key={index} 
            className={inel.class}
            placeholder={inel.placeholder}
            defaultValue={inel.text}
          />
        );
        setInput(inputEl);
      }
    };

    xhr.send();
  }, []);

  return <div className="inputs">{inputss}</div>;
}
