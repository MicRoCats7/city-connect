import { dataSmartCity } from "@/lib/data";

function SmartCity() {
    const hexagonData = [
        { color: "bg-red-500", label: "GOVERNANCE", icon: "🏢" },
        { color: "bg-blue-500", label: "BRANDING", icon: "💡" },
        { color: "bg-green-500", label: "ENVIRONMENT", icon: "🌳" },
        { color: "bg-yellow-500", label: "ECONOMY", icon: "💼" },
        { color: "bg-indigo-500", label: "SOCIETY", icon: "👥" },
        { color: "bg-amber-500", label: "LIVING", icon: "🏠" },
    ];

    const Hexagon = ({ color, label, icon }: { color: any, label: string, icon: any }) => (
        <div className={`relative w-[290px] h-[340px] ${color} clip-hexagon flex items-center justify-center text-white hover:scale-105 transition transform`}>
            <div className="flex items-center justify-center flex-col bg-transparent">
                <img src={icon} alt="icon" className="bg-transparent" />
                <p className="text-lg font-semibold bg-transparent">{label}</p>
                <p className="text-sm bg-transparent">Klik untuk detail</p>
            </div>
        </div>
    );

    return (
        <section className="flex justify-center items-center flex-col mt-32">
            <div className="flex items-center justify-center flex-col">
                <h1 className="special-text text-[50px] font-general-sans-semibold">KENALI SMART CITY</h1>
                <p className="text-[#ffffff60] text-lg font-general-sans-regular">Aspek-Aspek yang Membentuk Smart City</p>
            </div>
            <div className="relative mt-32">
                <div className="absolute -top-10 right-0">
                    <Hexagon color={hexagonData[0].color} label={dataSmartCity[0].title} icon={dataSmartCity[0].icon} />
                </div>
                <div className="absolute -top-10 left-2">
                    <Hexagon color={hexagonData[1].color} label={dataSmartCity[1].title} icon={dataSmartCity[1].icon} />
                </div>
                <div className="absolute top-56 right-[150px] bg-transparent">
                    <Hexagon color={hexagonData[2].color} label={dataSmartCity[2].title} icon={dataSmartCity[2].icon} />
                </div>
                <div className="absolute top-56 left-40 bg-transparent">
                    <Hexagon color={hexagonData[3].color} label={dataSmartCity[3].title} icon={dataSmartCity[3].icon} />
                </div>
                <div className="absolute top-56 -right-[150px] bg-transparent">
                    <div className="relative w-[290px] h-[340px] bg-black clip-hexagon flex items-center justify-center text-white">
                        <p className="text-lg font-semibold">SMART CITY</p>
                    </div>
                </div>
                <div className="absolute top-[490px] right-0 bg-transparent">
                    <Hexagon color={hexagonData[4].color} label={dataSmartCity[4].title} icon={dataSmartCity[4].icon} />
                </div>
                <div className="absolute top-[490px] left-3 bg-transparent">
                    <Hexagon color={hexagonData[5].color} label={dataSmartCity[5].title} icon={dataSmartCity[5].icon} />
                </div>
            </div>
        </section>
    )
}

export default SmartCity