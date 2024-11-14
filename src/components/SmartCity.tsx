import { dataSmartCity } from "@/lib/data";
import { GoArrowRight } from "react-icons/go";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import collapseLeft from "@/assets/collapse-left.svg";
import collapseRight from "@/assets/collapse-right.svg";

function SmartCity() {
    const Hexagon = ({ color, label, icon }: { color: any, label: string, icon: any }) => (
        <div className={`relative w-[290px] h-[340px] clip-hexagon flex items-center justify-center text-white hover:scale-90 transition transform cursor-pointer`} style={{ backgroundColor: color }}>
            <div className="flex items-center justify-center flex-col gap-2 bg-transparent">
                <img src={icon} alt="icon" className="bg-transparent" />
                <p className="text-lg font-general-sans-semibold bg-transparent">{label}</p>
                <div className="flex items-center gap-2 bg-transparent">
                    <p className="text-sm font-general-sans-regular bg-transparent">Klik untuk detail</p>
                    <GoArrowRight className="bg-transparent" />
                </div>
            </div>
        </div>
    );

    return (
        <section className="flex justify-center items-center flex-col pt-32 relative" id="Kenali Smart City">
            <div className="absolute left-0 top-8 bg-transparent">
                <img src={collapseLeft} alt="collapse" className="bg-transparent" />
            </div>
            <div className="absolute right-0 top-0 bg-transparent">
                <img src={collapseRight} alt="collapse" className="bg-transparent" />
            </div>
            <div className="flex items-center justify-center flex-col">
                <h1 className="special-text text-[50px] font-general-sans-semibold">KENALI SMART CITY</h1>
                <p className="text-[#ffffff60] text-lg font-general-sans-regular">Aspek-Aspek yang Membentuk Smart City</p>
            </div>
            <div className="relative mt-32">
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="absolute -top-10 right-0">
                            <Hexagon color={dataSmartCity[0].color} label={dataSmartCity[0].title} icon={dataSmartCity[0].icon} />
                        </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-[525px] bg-[#191A19] border-[3px] animate-gradientBorder rounded-none" style={{
                        borderImageSlice: 1,
                        animation: "gradientBorderAnimation 5s linear infinite",
                    }}>
                        <DialogHeader className="bg-transparent">
                            <DialogTitle className="bg-transparent special-text font-general-sans-semibold text-lg uppercase">{dataSmartCity[0].title}</DialogTitle>
                        </DialogHeader>
                        <p className="bg-transparent text-white font-general-sans-medium text-sm leading-6 text-justify">{dataSmartCity[0].desc}</p>
                    </DialogContent>
                </Dialog>
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="absolute -top-10 left-2">
                            <Hexagon color={dataSmartCity[1].color} label={dataSmartCity[1].title} icon={dataSmartCity[1].icon} />
                        </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-[525px] bg-[#191A19] border-[3px] animate-gradientBorder rounded-none" style={{
                        borderImageSlice: 1,
                        animation: "gradientBorderAnimation 5s linear infinite",
                    }}>
                        <DialogHeader className="bg-transparent">
                            <DialogTitle className="bg-transparent special-text font-general-sans-semibold text-lg uppercase">{dataSmartCity[1].title}</DialogTitle>
                        </DialogHeader>
                        <p className="bg-transparent text-white font-general-sans-medium text-sm leading-6 text-justify">{dataSmartCity[1].desc}</p>
                    </DialogContent>
                </Dialog>
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="absolute top-56 right-[150px] bg-transparent">
                            <Hexagon color={dataSmartCity[2].color} label={dataSmartCity[2].title} icon={dataSmartCity[2].icon} />
                        </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-[525px] bg-[#191A19] border-[3px] animate-gradientBorder rounded-none" style={{
                        borderImageSlice: 1,
                        animation: "gradientBorderAnimation 5s linear infinite",
                    }}>
                        <DialogHeader className="bg-transparent">
                            <DialogTitle className="bg-transparent special-text font-general-sans-semibold text-lg uppercase">{dataSmartCity[2].title}</DialogTitle>
                        </DialogHeader>
                        <p className="bg-transparent text-white font-general-sans-medium text-sm leading-6 text-justify">{dataSmartCity[2].desc}</p>
                    </DialogContent>
                </Dialog>
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="absolute top-56 left-40 bg-transparent">
                            <Hexagon color={dataSmartCity[3].color} label={dataSmartCity[3].title} icon={dataSmartCity[3].icon} />
                        </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-[525px] bg-[#191A19] border-[3px] animate-gradientBorder rounded-none" style={{
                        borderImageSlice: 1,
                        animation: "gradientBorderAnimation 5s linear infinite",
                    }}>
                        <DialogHeader className="bg-transparent">
                            <DialogTitle className="bg-transparent special-text font-general-sans-semibold text-lg uppercase">{dataSmartCity[3].title}</DialogTitle>
                        </DialogHeader>
                        <p className="bg-transparent text-white font-general-sans-medium text-sm leading-6 text-justify">{dataSmartCity[3].desc}</p>
                    </DialogContent>
                </Dialog>
                <div className="absolute top-56 -right-[150px] bg-transparent">
                    <div className="relative w-[290px] h-[340px] bg-[#2a2a2a] clip-hexagon flex items-center justify-center text-white">
                        <p className="text-3xl font-general-sans-semibold special-text">SMART CITY</p>
                    </div>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="absolute top-[490px] right-0 bg-transparent">
                            <Hexagon color={dataSmartCity[4].color} label={dataSmartCity[4].title} icon={dataSmartCity[4].icon} />
                        </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-[525px] bg-[#191A19] border-[3px] animate-gradientBorder rounded-none" style={{
                        borderImageSlice: 1,
                        animation: "gradientBorderAnimation 5s linear infinite",
                    }}>
                        <DialogHeader className="bg-transparent">
                            <DialogTitle className="bg-transparent special-text font-general-sans-semibold text-lg uppercase">{dataSmartCity[4].title}</DialogTitle>
                        </DialogHeader>
                        <p className="bg-transparent text-white font-general-sans-medium text-sm leading-6 text-justify">{dataSmartCity[4].desc}</p>
                    </DialogContent>
                </Dialog>
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="absolute top-[490px] left-3 bg-transparent">
                            <Hexagon color={dataSmartCity[5].color} label={dataSmartCity[5].title} icon={dataSmartCity[5].icon} />
                        </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-[525px] bg-[#191A19] border-[3px] animate-gradientBorder rounded-none" style={{
                        borderImageSlice: 1,
                        animation: "gradientBorderAnimation 5s linear infinite",
                    }}>
                        <DialogHeader className="bg-transparent">
                            <DialogTitle className="bg-transparent special-text font-general-sans-semibold text-lg uppercase">{dataSmartCity[5].title}</DialogTitle>
                        </DialogHeader>
                        <p className="bg-transparent text-white font-general-sans-medium text-sm leading-6 text-justify">{dataSmartCity[5].desc}</p>
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    )
}

export default SmartCity