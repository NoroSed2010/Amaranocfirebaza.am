import React, { useEffect, useState } from "react";
import "../components_css/Header.css";
import Mainheder from "./Mainheder";
import IconInput from "./Iconimput";

export default function Header() {
  const [hide, setHide] = useState(false);
  let lastScroll = 0;

  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll) {
        setHide(true);
      } else {
        setHide(false);
      }
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={hide ? "header hide" : "header"}>
      <Mainheder />
      <IconInput />
    </header>
  );
}
