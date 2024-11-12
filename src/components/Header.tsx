import bgHeader from "@/assets/bg-header.png";
import { BsMouse } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

function Header() {
    return (
        <section>
            <div className="relative">
                <img src={bgHeader} alt="bg-header" className="w-full h-[500px]" />
                <div className="wrapper">
                    <div className="absolute top-24 bg-transparent">
                        <h1 className="text-white font-general-sans-semibold text-[78px] bg-transparent w-[64%]">Selamat Datang di Masa Depan Indonesia</h1>
                    </div>
                    <div className="flex items-center justify-center flex-col gap-4 absolute right-[48.5%] -bottom-16 bg-transparent cursor-pointer">
                        <BsMouse size={40} color="white" className="bg-transparent" />
                        <MdKeyboardArrowDown size={40} color="white" className="bg-transparent animate-bounce" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header