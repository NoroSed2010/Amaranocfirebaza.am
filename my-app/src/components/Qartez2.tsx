import React, { useState } from "react";
import Arandznatan from "./Arandznatun";
import Pahanj from "./Pahanj";
import New from "./New";
import Shuxur from "./Shuxur";
import Tesaran from "./Tesaran";
import Tnak from "./Tnakner";
import { useNavigate } from "react-router-dom";
import Info from "./Info";

export default function Map1() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("all"); // default = Բոլորը

    function filtr() {
        navigate("/qartez");
    }

    return (
        <div className="h-screen w-full grid grid-cols-[350px_1fr_600px] bg-gray-50">
            {/* Sidebar */}
            <div className="bg-white border-r shadow-lg p-4 overflow-y-auto">
                <Info />
            </div>

            {/* Main */}
            <main className="bg-white p-6 overflow-y-auto shadow-inner">
                {/* Buttons */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-3">
                        <button
                            onClick={() => setActiveTab("all")}
                            className={`px-5 py-2 rounded-full font-medium shadow-sm transition ${
                                activeTab === "all"
                                    ? "bg-black text-white"
                                    : "bg-gray-100 text-gray-700 border hover:bg-gray-200"
                            }`}
                        >
                            Բոլորը
                        </button>
                        <button
                            onClick={() => setActiveTab("top")}
                            className={`px-5 py-2 rounded-full font-medium shadow-sm transition ${
                                activeTab === "top"
                                    ? "bg-black text-white"
                                    : "bg-gray-100 text-gray-700 border hover:bg-gray-200"
                            }`}
                        >
                            Թոփ
                        </button>
                        <button
                            onClick={() => setActiveTab("discount")}
                            className={`px-5 py-2 rounded-full font-medium shadow-sm transition ${
                                activeTab === "discount"
                                    ? "bg-black text-white"
                                    : "bg-gray-100 text-gray-700 border hover:bg-gray-200"
                            }`}
                        >
                            Զեղչված
                        </button>
                    </div>

                    <button
                        onClick={filtr}
                        className="flex items-center gap-2 px-5 py-2 rounded-full border shadow-sm hover:bg-gray-100 transition"
                    >
                        Փակել Ֆիլտրը
                        <i className="fa-solid fa-sliders"></i>
                    </button>
                </div>

                {/* Dynamic content */}
                <div className="space-y-6">
                    {activeTab === "all" && (
                        <>
                            <Arandznatan />
                            <Pahanj />
                            <New />
                            <Shuxur />
                            <Tesaran />
                            <Tnak />
                        </>
                    )}

                    {activeTab === "top" && (
                        <div className="p-4 border rounded shadow bg-white">
                            <h2 className="text-xl font-bold mb-4">Թոփ Հայտարարություններ</h2>
                            <Pahanj />
                            <Shuxur />
                        </div>
                    )}

                    {activeTab === "discount" && (
                        <div className="p-4 border rounded shadow bg-white">
                            <h2 className="text-xl font-bold mb-4">Զեղչված Հայտարարություններ</h2>
                            <New />
                            <Tesaran />
                        </div>
                    )}
                </div>
            </main>

            {/* Map */}
            <div className="relative w-full h-full border-l shadow-lg">
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
