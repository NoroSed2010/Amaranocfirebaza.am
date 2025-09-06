import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import "../components_css/Chat.css";

interface Message {
  text: string;
  email: string | null;
}

export default function ShowAllTexts() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "messages"), (snapshot) => {
      const data: Message[] = snapshot.docs.map(doc => {
        const docData = doc.data();
        return {
          text: docData.text as string,
          email: docData.email as string | null,
        };
      });
      setMessages(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="messages">
      {messages.map((msg, index) => (
        <p key={index}>
          <strong>{msg.email}:</strong> {msg.text}
        </p>
      ))}
    </div>
  );
}
