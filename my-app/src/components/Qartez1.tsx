import React from "react";
import Arandznatan from "./Arandznatun";
import Pahanj from "./Pahanj";
import New from "./New";
import Shuxur from "./Shuxur";
import Tesaran from "./Tesaran";
import Tnak from "./Tnakner";
import { useNavigate } from "react-router-dom";
import { useMarzStore } from "../Store/storeMarz";

export default function Map() {
  const navigate = useNavigate();
  const { active, setActive } = useMarzStore();

  function filtr() {
    navigate("/qartez2");
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="bg-gray-50 overflow-y-auto p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-3">
            <button
              onClick={() => setActive("Բոլորը")}
              className={`px-4 py-2 rounded-full font-medium ${active === "Բոլորը"
                  ? "bg-black text-white"
                  : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
              Բոլորը
            </button>
            <button
              onClick={() => setActive("Թոփի")}
              className={`px-4 py-2 rounded-full font-medium ${active === "Թոփի"
                  ? "bg-black text-white"
                  : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
              Թոփի
            </button>
            <button
              onClick={() => setActive("Զեղչված")}
              className={`px-4 py-2 rounded-full font-medium ${active === "Զեղչված"
                  ? "bg-black text-white"
                  : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
              Զեղչված
            </button>
          </div>

          <button
            onClick={filtr}
            className="flex items-center gap-2 px-4 py-2 rounded-full border hover:bg-gray-100 transition"
          >
            Ֆիլտր
            <i className="fa-solid fa-sliders"></i>
          </button>
        </div>

        <div className="space-y-6">
          {active === "Բոլորը" && (
            <>
              <Arandznatan />
              <Pahanj />
              <New />
              <Shuxur />
              <Tesaran />
              <Tnak />
            </>
          )}

          {active === "Թոփի" && (
            <div className="p-4 bg-white shadow rounded-xl">
              <h2 className="text-lg font-semibold mb-2">Թոփ գույք</h2>
              <Pahanj />
              <New />
            </div>
          )}

          {active === "Զեղչված" && (
            <div className="p-4 bg-white shadow rounded-xl">
              <h2 className="text-lg font-semibold mb-2">Զեղչված գույք</h2>
              <Shuxur />
              <Tesaran />
            </div>
          )}
        </div>
      </div>

      <div className="relative w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2409.3094093010186!2d44.52222417489336!3d40.178980570077066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcfaa8577229%3A0x608f2b6a19a71695!2z1LHVrNWl1oQg1YTVodW21bjWgtWv1bXVodW2INaD1bjVstW41oEsINS11oDWh9Wh1bY!5e1!3m2!1shy!2sam!4v1721485644201!5m2!1shy!2sam"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
