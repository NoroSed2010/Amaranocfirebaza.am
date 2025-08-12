import useAuthUser from "../hooks/useAuthUser";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import ShowText from "./Text";

export default function Chat() {
  const user = useAuthUser();
  const [msg, setMsg] = useState("");

  if (!user) return <div>Խնդրում եմ մուտք գործել</div>;

  const sendMessage = async () => {
    if (!msg.trim()) return;
    await addDoc(collection(db, "messages"), {
      text: msg,
      uid: user.uid,
      email: user.email,
      createdAt: serverTimestamp(),
    });
    setMsg("");
  };

  return (
    <div>
      <input
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Գրիր..."
      />
      <button onClick={sendMessage}>Ուղարկել</button>
      <ShowText/>
    </div>
  );
}
