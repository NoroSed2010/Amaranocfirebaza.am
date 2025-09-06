import React, { useState, useEffect } from "react";
import Spasarkum from "./Spasarkum";
import Show from "./Show";
import Mijocarum from "./Mijocarum";
import Texnika from "./Texnika";
import Guyq from "./Guyq";
import Photo from "./Photo";
import Avto from "./Avto";

interface WorkIconsProps {
    onSelect: (component: React.ReactNode) => void;
}

export default function WorkIcons({ onSelect }: WorkIconsProps) {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const items = [
        { icon: "fa-solid fa-bell-concierge", label: "Սպասարկում", component: <div><Spasarkum /></div> },
        { icon: "fa-solid fa-wand-magic-sparkles", label: "Շոու", component: <div><Show /></div> },
        { icon: "fa-solid fa-champagne-glasses", label: "Միջոցառումներ", component: <div><Mijocarum /></div> },
        { icon: "fa-solid fa-rocket", label: "Տեխնիկա", component: <div><Texnika /></div> },
        { icon: "fa-solid fa-circle-nodes", label: "Օրավարձով գույք", component: <div><Guyq /></div> },
        { icon: "fa-solid fa-camera", label: "Նկարահանում", component: <div><Photo /></div> },
        { icon: "fa-solid fa-car", label: "Ուղևորափոխադրում", component: <div><Avto /></div> },
    ];

    useEffect(() => {
        onSelect(items[0].component);
    }, []);

    const handleClick = (index: number, component: React.ReactNode) => {
        setActiveIndex(index);
        onSelect(component);
    };

    return (
        <div className="workdiv flex items-center gap-12">
            <div className="orinakwork">
                <div className="flex gap-12">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`item flex flex-col items-center cursor-pointer ${activeIndex === index
                                ? "text-orange-500"
                                : "text-gray-700 hover:text-orange-500"
                                }`}
                            onClick={() => handleClick(index, item.component)}
                        >
                            <i className={`${item.icon} text-2xl`}></i>
                            <span className="mt-1 text-sm font-semibold">{item.label}</span>
                            {activeIndex === index && (
                                <div className="w-6 h-0.5 bg-orange-500 mt-1 rounded"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
