import React from "react";
import { useNavigate } from "react-router-dom";

export default function Mainheder() {
  const navigate = useNavigate();

  function click() {
    navigate("/Home")
  }

  function click2() {
    navigate("/zexj")
  }

  function click3() {
    navigate("/work")
  }

  function click4() {
    navigate("/about-us")
  }

  return (
    <div className="mainHeader">
      <div className="image">
        <img src="/logoamar.png" className="logo_img" alt="logo" />
      </div>
      <div className="tegs">
        <p className="btn m-3" onClick={click}>Գլխավոր</p>
        <p className="btn m-3" onClick={click2}>Զեղչեր</p>
        <p className="btn m-3" onClick={click3}>Ծառայություններ</p>
        <p className="btn m-3" onClick={click4}>Մեր մասին</p>
      </div>
    </div>
  );
}
