import { useMarzStore } from "../Store/storeMarz";

export default function Lox() {
  const { active, setActive } = useMarzStore();

  const buttons = ["Բոլորը", "Բաց", "Փակ", "Տաքացվող", "Առանց լողավազանի"];

  return (
    <div className="loxdiv">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => setActive(btn)}
          className={`px-5 py-2 rounded-full font-medium transition 
            ${active === btn
              ? "bg-[#0F172A] text-white"
              : "bg-white border border-gray-300 text-gray-500"
            }`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}
