import React, { useState, ChangeEvent } from "react";
import useAuthUser from "../Hooks/useAuthUser";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import ShowAllTexts from "./Text";
import "../components_css/Chat.css";

interface AuthUser {
  uid: string;
  email: string | null;
}

export default function Chat() {
  const user = useAuthUser() as AuthUser | null;
  const [msg, setMsg] = useState<string>("");

  if (!user) return <div>Խնդրում եմ մուտք գործել</div>;

  const sendMessage = async (): Promise<void> => {
    if (!msg.trim()) return;

    await addDoc(collection(db, "messages"), {
      text: msg,
      uid: user.uid,
      email: user.email,
      createdAt: serverTimestamp(),
    });

    setMsg("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setMsg(e.target.value);
  };

  return (
    <div className="div">
      <div className="inbtn">
        <input
          value={msg}
          onChange={handleChange}
          placeholder="Գրիր..."
        />
        <button onClick={sendMessage}>Ուղարկել</button>
      </div>
      <div className="mainDiv">
        <ShowAllTexts />
      </div>
    </div>
  );
}
