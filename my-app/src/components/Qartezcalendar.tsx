import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Qartezcalendar() {
  const navigate = useNavigate();
  const [showCalendar, setShowCalendar] = useState(false);

  function click() {
    navigate("/qartez");
  }

  function click2() {
    setShowCalendar(true);
  }
  
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

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

  return (
    <div className="qartezcalendar">
      <div className="icontext" onClick={click}>
        <p>Քարտեզ</p>
        <i className="fa fa-map" aria-hidden="true"></i>
      </div>

      <div className="calendar">
        <i className="fa fa-calendar" aria-hidden="true" onClick={click2}></i>
      </div>

      {showCalendar && (
        <div className="relative">

          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <button
              onClick={() => setShowCalendar(false)}
              className="absolute top-40 right-80 text-gray-500 hover:text-black text-lg"
            >
              ✕
            </button>
            <div className="bg-white rounded-2xl shadow-xl w-[450px] p-6 relative animate-fadeIn">

              <div className="flex justify-between items-center mb-5">
                <button
                  onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
                  className="px-2 py-1 rounded hover:bg-gray-200"
                >
                  {"<"}
                </button>
                <span className="font-bold text-orange-500 text-lg">
                  {months[month]} {year}
                </span>
                <button
                  onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
                  className="px-2 py-1 rounded hover:bg-gray-200"
                >
                  {">"}
                </button>
              </div>

              <div className="grid grid-cols-7 text-center font-semibold text-sm text-gray-600 mb-2">
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
                          : "hover:bg-orange-100"
                        }`}
                    >
                      {d}
                    </button>
                  ) : (
                    <span key={i}></span>
                  )
                )}
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                >
                  Չեղարկել
                </button>
                <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 shadow">
                  Ընտրել
                </button>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
