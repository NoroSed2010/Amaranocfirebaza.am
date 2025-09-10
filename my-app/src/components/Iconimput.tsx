import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useMarzStore } from "../Store/storeMarz";

export default function IconInput() {
  const navigate = useNavigate();
  const { search, setSearch } = useMarzStore();

  const click = () => navigate("/chatmain");
  const click2 = () => navigate("/likes");

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Դուրս եկար");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="iconimput" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <div className="icon" style={{ display: "flex", gap: "10px" }}>
        <i className="fa fa-globe" aria-hidden="true"></i>
        <i className="fa fa-user" aria-hidden="true" onClick={handleLogout}></i>
        <i className="fa fa-solid fa-comment-sms" onClick={click}></i>
        <i className="fa fa-solid fa-basket-shopping" onClick={click2}></i>
      </div>

      <div className="input" style={{ flex: 1 }}>
        <input
          type="text"
          placeholder="Որոնել..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            color: "black",
            padding: "10px",
            width: "100%",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor: "white",
          }}
        />
      </div>
    </div>
  );
}
