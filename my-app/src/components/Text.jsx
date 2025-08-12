import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase"; 

export default function ShowAllTexts() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "messages"), (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        text: doc.data().text,
        email: doc.data().email
      }));
      setMessages(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {messages.map((msg, index) => (
        <p key={index}>
          <strong>{msg.email}:</strong> {msg.text}
        </p>
      ))}
    </div>
  );
}
