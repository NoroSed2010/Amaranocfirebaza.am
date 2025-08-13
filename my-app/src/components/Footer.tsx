import React from "react";
import "../components_css/Footer.css";
import Login from "./Login";

export default function Footer(){
  return (
    <footer>
      <Login />
      <div className="myinfo">
        <img src="/footer.png" className="footerimg" alt="Footer" />
      </div>
    </footer>
  );
}
