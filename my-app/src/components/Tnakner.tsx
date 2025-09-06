export default function Tnak() {
    return (
        <div className="flex gap-5">
            <div
                className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
                <div className="w-full h-56 overflow-hidden">
                    <img
                        src="/tnak/image1.png"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>
                <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-gray-600 text-sm">
                        <div className="flex items-center gap-1">
                            <i className="fa-solid fa-location-dot text-orange-500"></i>
                            <span>Ջրվեժ</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <i className="fa-solid fa-user-group text-orange-500"></i>
                            <span>30</span>
                        </div>
                        <div className="flex items-center gap-1 bg-orange-100 px-2 py-0.5 rounded-lg">
                            <i className="fa-solid fa-star text-orange-500"></i>
                            <span className="font-medium text-orange-600">5</span>
                        </div>
                    </div>
                    <p className="text-xl font-bold text-gray-800">
                        <p>90000 <span className="text-orange-500">֏</span></p>
                    </p>
                </div>
            </div>
            <div
                className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
                <div className="w-full h-56 overflow-hidden">
                    <img
                        src="/tnak/image2.png"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>
                <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-gray-600 text-sm">
                        <div className="flex items-center gap-1">
                            <i className="fa-solid fa-location-dot text-orange-500"></i>
                            <span>Երևան</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <i className="fa-solid fa-user-group text-orange-500"></i>
                            <span>15</span>
                        </div>
                        <div className="flex items-center gap-1 bg-orange-100 px-2 py-0.5 rounded-lg">
                            <i className="fa-solid fa-star text-orange-500"></i>
                            <span className="font-medium text-orange-600">5</span>
                        </div>
                    </div>
                    <p className="text-xl font-bold text-gray-800">
                        <p>70000 <span className="text-orange-500">֏</span></p>
                    </p>
                </div>
            </div>
            <div
                className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
                <div className="w-full h-56 overflow-hidden">
                    <img
                        src="/tnak/image3.png"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>
                <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-gray-600 text-sm">
                        <div className="flex items-center gap-1">
                            <i className="fa-solid fa-location-dot text-orange-500"></i>
                            <span>Հանքավան</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <i className="fa-solid fa-user-group text-orange-500"></i>
                            <span>25</span>
                        </div>
                        <div className="flex items-center gap-1 bg-orange-100 px-2 py-0.5 rounded-lg">
                            <i className="fa-solid fa-star text-orange-500"></i>
                            <span className="font-medium text-orange-600">5</span>
                        </div>
                    </div>
                    <p className="text-xl font-bold text-gray-800">
                        <p>60000 <span className="text-orange-500">֏</span></p>
                    </p>
                </div>
            </div>
        </div>
    )
}