import { useMarzStore } from "../Store/storeMarz";

export default function Senyak() {
  const { senyakActive, setSenyakActive } = useMarzStore();

  const buttons = ["Բոլորը", "1", "2", "3", "4", "5", "6 և ավելի"];

  return (
    <div className="senaykqanakdiv">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => setSenyakActive(btn)}
          className={`px-5 py-2 rounded-full font-medium transition 
            ${senyakActive === btn
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
