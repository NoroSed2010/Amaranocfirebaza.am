import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase";
import { useState, useEffect } from "react";

export default function useAuthUser(): User | null {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  return user;
}
