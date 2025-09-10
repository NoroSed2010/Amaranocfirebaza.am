import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Pox from "./Pox";
import NkarZexj from "./Zexjnkar";
import Skeleton from "./Skeleton";

interface MainData {
    src: string;
    tex: string;
    gin: string | number;
    people: number;
}

export default function Maininfo() {
    const { id } = useParams();
    const [data, setData] = useState<MainData[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://amaranocfirebasa-default-rtdb.firebaseio.com/dbimg.json");

        xhr.onreadystatechange = () => {
            if (xhr.status === 200 && xhr.readyState === 4) {
                const parsed: MainData[] = JSON.parse(xhr.responseText);
                setData(parsed);
                setTimeout(() => setLoading(false), 2500);
            }
        };

        xhr.send();
    }, []);

    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState<number | null>(null);
    const [showCalendar, setShowCalendar] = useState(false);


    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    const months = [
        "Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս",
        "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"
    ];
    const weekDays = ["Երկ", "Երք", "Չոր", "Հնգ", "Ուրբ", "Շաբ", "Կիր"];

    const days: (number | null)[] = [];
    for (let i = 1; i < (firstDay === 0 ? 7 : firstDay); i++) {
        days.push(null);
    }
    for (let d = 1; d <= daysInMonth; d++) {
        days.push(d);
    }

    const item = data?.find((el) => el.tex === id);

    return (
        <div>
            <Header />

            {loading ? (
                (data?.length ? data : new Array(3).fill(null)).map((_, i) => (
                    <Skeleton key={i} margin="5px" width="300px" height="300px" />
                ))
            ) : item ? (
                <div>
                    <div className="maininfodiv flex items-center justify-between rounded-2xl border p-3 shadow-sm">
                        <div className="flex items-center">
                            <i className="fa-solid fa-location-dot text-orange-500 mr-2"></i>
                            <span className="font-semibold">{item.tex}</span>

                            <div className="flex items-center ml-5">
                                <i className="fa-solid fa-star text-orange-500 mr-1"></i>
                                <span className="font-medium text-orange-600">5</span>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <span className="font-semibold text-orange-600">{item.gin.toLocaleString()}</span>
                            <span className="text-orange-500">֏</span>
                            <Pox />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mt-10">
                        <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden">
                            <img
                                src={item.src}
                                alt={item.tex}
                                className="imgmain w-full object-cover rounded-xl"
                            />
                            <span className="absolute top-5 left-5 text-7xl font-bold text-orange-500 drop-shadow-lg">
                                15%
                            </span>
                        </div>

                        <div className="rounded-xl overflow-hidden">
                            <img
                                src="/small/image1.png"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="rounded-xl overflow-hidden">
                            <img
                                src="/small/image2.png"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="rounded-xl overflow-hidden">
                            <img
                                src="/small/image3.png"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="rounded-xl overflow-hidden">
                            <img
                                src="/small/image4.png"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="rounded-xl overflow-hidden">
                            <img
                                src="/small/image5.png"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                                <div className="bg-white rounded-2xl shadow p-6 border">
                                    <img src="/image.png" />
                                </div>

                                <div className="bg-white rounded-2xl shadow p-6 border">
                                    <h2 className="font-bold mb-4">Նշեք Ձեր ցանկալի օրերը</h2>

                                    <div className="flex justify-between items-center mb-4 bg-orange-500 text-white p-2 rounded">
                                        <button onClick={() => setCurrentDate(new Date(year, month - 1, 1))}>
                                            <i className="fa-solid fa-arrow-left"></i>
                                        </button>
                                        <span className="font-bold">{months[month]} {year}</span>
                                        <button onClick={() => setCurrentDate(new Date(year, month + 1, 1))}>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-7 text-center font-semibold text-gray-600 mb-2">
                                        {weekDays.map((d) => (
                                            <span key={d}>{d}</span>
                                        ))}
                                    </div>

                                    <div className="grid grid-cols-7 text-center gap-y-2">
                                        {days.map((d, i) =>
                                            d ? (
                                                <button
                                                    key={i}
                                                    onClick={() => setSelectedDay(d)}
                                                    className={`p-2 rounded-full w-10 h-10 mx-auto transition 
              ${selectedDay === d
                                                            ? "bg-orange-500 text-white shadow"
                                                            : "hover:bg-orange-100"}`}
                                                >
                                                    {d}
                                                </button>
                                            ) : (
                                                <span key={i}></span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="aravelutyun">
                        <img src="/img.png" />
                    </div>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2409.3094093010186!2d44.52222417489336!3d40.178980570077066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcfaa8577229%3A0x608f2b6a19a71695!2z1LHVrNWl1oQg1YTVodW21bjWgtWv1bXVodW2INaD1bjVstW41oEsINS11oDWh9Wh1bY!5e1!3m2!1shy!2sam!4v1721485644201!5m2!1shy!2sam"
                            className="qartez w-full h-full border-0"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="aravelutyun">
                        <img src="/imagekarciq.png" />
                    </div>
                    <div className="vernagir">
                        <p className="m-3">—————————————————————————————————</p>
                        <h1>ԹԵԺ ԱՌԱՋԱՐԿՆԵՐ</h1>
                        <p className="m-3">—————————————————————————————————</p>
                    </div>
                    <NkarZexj />
                </div>

            ) : (
                <p className="tvyalerror">Տվյալը չի գտնվել</p>
            )}
            <div>
                <img src="/footer.png" alt="Footer" />
            </div>
        </div>
    );
}
