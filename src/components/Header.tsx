import bgHeader from "@/assets/bg-header.png";
import { useTranslation } from "react-i18next";
import { BsMouse } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

function Header() {
    const { t } = useTranslation();
    const handleMouseClick = () => {
        const element = document.getElementById("Kenali Smart City");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id={t("navbar.home")}>
            <div className="relative">
                <img src={bgHeader} alt="bg-header" className="w-full h-[350px] tablet:h-[400px] desktop:h-[660px]" />
                <div className="max-w-[1440px] mx-auto px-4 tablet:px-12 desktop:px-36">
                    <div className="absolute top-28 tablet:top-32 desktop:top-40 bg-transparent">
                        <h1 className="text-white font-general-sans-semibold text-[35px] tablet:text-[40px] desktop:text-[78px] bg-transparent w-[80%] tablet:w-[50%] desktop:w-[62%]">{t("header.title")}</h1>
                    </div>
                    <div
                        onClick={handleMouseClick}
                        className="flex items-center justify-center flex-col gap-4 absolute right-[44%] tablet:right-[48%] desktop:right-[48.5%] -bottom-16 bg-transparent cursor-pointer">
                        <BsMouse size={40} color="white" className="bg-transparent" />
                        <MdKeyboardArrowDown size={40} color="white" className="bg-transparent animate-bounce" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header