import React, { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { useMarzStore } from "../Store/storeMarz";
import Likes from "./like";
import Arandznatan from "./Arandznatun";
import Houses from "./Framehouses";
import Tnak from "./Tnakner";
import Shuxur from "./Shuxur";
import Tesaran from "./Tesaran";
import Pahanj from "./Pahanj";
import New from "./New";
import Bnakaran from "./Bnakaran";
import Pull from "./swimingpull";

interface NkarData {
    src: string;
    tex: string;
    gin: string | number;
    people: number;
}

export default function Com5() {
    const [data, setData] = useState<NkarData[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [columns, setColumns] = useState(3);


    const {
        selected,
        count,
        minPrice,
        maxPrice,
        selectedOrinak,
        setSelectedOrinak,
        search,
        active,
        nightActive,
        senyakActive
    } = useMarzStore();

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://amaranocfirebasa-default-rtdb.firebaseio.com/dbimg.json");

        xhr.onreadystatechange = () => {
            if (xhr.status === 200 && xhr.readyState === 4) {
                const parsed: NkarData[] = JSON.parse(xhr.responseText);
                setData(parsed);
                setTimeout(() => setLoading(false), 2500);
            }
        };

        xhr.send();
    }, []);

    const filteredData = data?.filter((el) => {
        const price = Number(el.gin);
        return (
            (selected.length > 0 ? selected.includes(el.tex) : true) &&
            el.tex.toLowerCase().includes(search.toLowerCase()) &&
            el.people >= count &&
            (minPrice === "" || price >= minPrice) &&
            (maxPrice === "" || price <= maxPrice)
        );
    });

    return (
        <div>
            <Tesaran />
            <New />
            <h1 className="m-5">Սովորական առաջարկներ</h1>
            <div
                style={{
                    width: "50vw",
                    display: "grid",
                    gridTemplateColumns: `repeat(${columns}, 1fr)`,
                    gap: "20px",
                }}
            >
                {loading ? (
                    <>
                        {(data?.length ? data : new Array(3).fill(null)).map((_, i) => (
                            <Skeleton key={i} margin="5px" width="300px" height="300px" />
                        ))}
                    </>
                ) : filteredData && filteredData.length > 0 ? (
                    filteredData.map((el, index) => (
                        <div
                            key={index}
                            className="mainnkardiv max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
                        >
                            <div onClick={() => window.open(`/maininfo/${el.tex}`, "_blank")}>
                                <div className="w-full h-56 overflow-hidden">
                                    <img
                                        src={el.src}
                                        alt={el.tex}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <div className="p-4 space-y-2">
                                    <div className="flex items-center justify-between text-gray-600 text-sm">
                                        <div className="flex items-center gap-1">
                                            <i className="fa-solid fa-location-dot text-orange-500"></i>
                                            <span>{el.tex}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <i className="fa-solid fa-user-group text-orange-500"></i>
                                            <span>{el.people}</span>
                                        </div>
                                        <div className="flex items-center gap-1 bg-orange-100 px-2 py-0.5 rounded-lg">
                                            <i className="fa-solid fa-star text-orange-500"></i>
                                            <span className="font-medium text-orange-600">5</span>
                                        </div>
                                    </div>
                                    <p className="text-xl font-bold text-gray-800">
                                        {el.gin} <span className="text-orange-500">֏</span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <Likes nkar={el} />
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Առաջարկներ չեն գտնվել</p>
                )}
            </div>
        </div>
    )
}