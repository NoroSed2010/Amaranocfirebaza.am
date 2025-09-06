import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "./firebase";

import Login from "./pages/mainlogin";
import Register from "./pages/register";
import Home from "./pages/Home";
import MainChat from "./components/Chatmain";
import Zambyux from "./pages/likesZamb";
import Map from "./components/Qartez1";
import Zexj from "./components/Zexj";
import Work from "./components/Work";
import Us from "./components/Aboutus";
import Maininfo from "./components/Maininfo";

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Routes>
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      <Route
        path="/register"
        element={!user ? <Register /> : <Navigate to="/" />}
      />
      <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
      <Route path="/chatmain" element={user ? <MainChat /> : <Navigate to="/login" />} />
      <Route path="/likes" element={<Zambyux />} />
      <Route path="/qartez" element={user ? <Map /> : <Navigate to="/login" />} />    
      <Route path="/Home" element={user ? <Home /> : <Navigate to="/login" />} />    
      <Route path="/zexj" element={user ? <Zexj /> : <Navigate to="/login" />} />  
      <Route path="/work" element={user ? <Work /> : <Navigate to="/login" />} />  
      <Route path="/about-us" element={user ? <Us /> : <Navigate to="/login" />} />    
      <Route path="/maininfo/:id" element={<Maininfo />} />
    </Routes>
  );
}
