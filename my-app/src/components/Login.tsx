import useAuthUser from "../Hooks/useAuthUser";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useState, ChangeEvent } from "react";

interface User {
  uid: string;
  email: string | null;
}

export default function Chat() {
  const user: User | null = useAuthUser();
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  };

  return (
    <div>
      <input
        value={msg}
        onChange={handleChange}
        placeholder="Գրիր..."
      />
      <button onClick={sendMessage}>Ուղարկել</button>
    </div>
  );
}
