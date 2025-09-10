import { useMarzStore } from "../Store/storeMarz";

export default function Night() {
  const { nightActive, setNightActive } = useMarzStore();

  const buttons = ["Բոլորը", "Այո", "Ոչ"];

  return (
    <div className="mt-5 flex gap-5">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => setNightActive(btn)}
          className={`px-5 py-2 rounded-full font-medium transition 
            ${nightActive === btn
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
