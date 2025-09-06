import { useState } from "react";

export default function Arajark() {
    const prices = [50000, 60000, 70000, 80000, 90000, 100000];
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <div className="m-5 mt-12 flex flex-col lg:flex-row gap-6">
            <div className="bg-white shadow-md rounded-2xl p-8 flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Պատվիրի՛ր <span className="text-orange-500">Նվեր քարտ</span> քո կամ ընկերներիդ համար
                </h1>
                <div className="border-t border-orange-300 my-4"></div>
                <p className="text-gray-700 leading-relaxed">
                    Բաց մի թող մեր բացառիկ զեղչի քարտերը։ Եթե պլանավորում ես քո հաջորդ արձակուրդը՝
                    ընկերներիդ կամ ընտանիքիդ անդամների հետ, մեր զեղչային քարտերը առաջարկում են անգերազանցելի
                    խնայողություններ ամառանոցների և ծառայությունների լայն տեսականիով։ Ընտրիր զեղչի չափը քարտի վրա։
                </p>
            </div>
            <div className="flex-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl p-10 flex flex-col items-center justify-center">
                <h1 className="text-white text-2xl font-bold mb-10 tracking-wide">
                    AMARANC<span className="text-orange-200">.AM</span>
                </h1>

                <div className="grid grid-cols-3 gap-4">
                    {prices.map((price) => (
                        <button
                            onClick={() => setSelected(price)}
                            className={`px-6 py-3 rounded-full font-bold text-lg transition-all shadow 
          ${selected === price
                                    ? "bg-white text-orange-500"
                                    : "bg-orange-500 text-white border border-white hover:bg-white hover:text-orange-500"
                                }`}
                        >
                            {price.toLocaleString()} ֏
                        </button>
                    ))}
                </div>

                <button className="mt-12 bg-orange-300 hover:bg-orange-600 text-white font-bold px-10 py-3 rounded-full shadow-lg transition">
                    Պատվիրել
                </button>
            </div>
        </div>
    )
}