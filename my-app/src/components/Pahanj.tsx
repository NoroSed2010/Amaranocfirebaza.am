import { useEffect, useState } from "react";
import Likes from "./like";
import Skeleton from "./Skeleton";

interface NkarData {
  src: string;
  tex: string;
  gin: string | number;
  people: number;
}

export default function Pahanj() {
    const [data, setData] = useState<NkarData[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open(
            "GET",
            "https://amaranocfirebasa-default-rtdb.firebaseio.com/dbpahanj.json"
        );

        xhr.onreadystatechange = () => {
            if (xhr.status === 200 && xhr.readyState === 4) {
                const parsed: NkarData[] = JSON.parse(xhr.responseText);
                setData(parsed);
                setTimeout(() => setLoading(false), 2500);
            }
        };

        xhr.send();
    }, []);

    return (
        <div className="flex gap-5">
            {loading ? (
                <>
                    {(data?.length ? data : new Array(3).fill(null)).map((_, i) => (
                        <Skeleton key={i} margin="5px" width="300px" height="300px" />
                    ))}
                </>
            ) : data && data.length > 0 ? (
                data.map((el, index) => (
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
    );
}