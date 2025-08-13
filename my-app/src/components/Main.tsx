import "../components_css/Main.css";
import Qartez from "./Qartez";
import Info from "./Info";

export default function Main(){
  return (
    <div>
      <div className="newDiv">
        <Info />
        <Qartez />
      </div>
    </div>
  );
}
