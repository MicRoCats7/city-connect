import { useState, useEffect } from "react";
import logo from "@/assets/logo.svg";
import logoBlack from "@/assets/logo-black.svg";
import enFlag from "@/assets/flag-en.svg";
import idFlag from "@/assets/flag-indo.svg";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdKeyboardArrowDown } from "react-icons/md";
import NavbarMobile from "./NavbarMobile";
import { useTranslation } from "react-i18next";


function Navbar() {
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [activeId, setActiveId] = useState<string | null>(null);

    const NavItems = [
        {
            title: t('navbar.home'),
            url: "/",
        },
        {
            title: t('navbar.smart_city'),
            url: "#Kenali Smart City",
        },
        {
            title: t('navbar.news'),
            url: "#Berita",
        },
        {
            title: t('navbar.gallery'),
            url: "#Galeri",
        },
        {
            title: t('navbar.maps_smart_city'),
            url: "#Peta Smart City",
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                root: null,
                threshold: 0.6,
            }
        );

        NavItems.forEach((item) => {
            const section = document.getElementById(item.title);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const handleNavClick = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleLanguageChange = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <section
            className={`py-6 desktop:py-8 fixed w-full top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-transparent"
                }`}
        >
            <div className="flex items-center justify-between max-w-[1440px] mx-auto px-4 tablet:px-12 desktop:px-36">
                <img src={scrolled ? logoBlack : logo} alt="logo" className="w-32 tablet:w-40 desktop:w-auto" />
                <div className="hidden tablet:hidden desktop:flex items-center gap-10">
                    {NavItems.map((item, index) => {
                        const isActive = activeId === item.title;
                        return (
                            <a
                                key={index}
                                href={item.url}
                                onClick={(e) => handleNavClick(e, item.title)}
                                className={`transition-colors duration-300 ${scrolled ? "text-black" : "text-white"
                                    } ${isActive ? "font-general-sans-medium underline" : "font-general-sans-regular"}`}
                            >
                                {item.title}
                            </a>
                        );
                    })}
                </div>
                <div className="hidden desktop:block">
                    <DropdownMenu>
                        <DropdownMenuTrigger className={`${scrolled ? "text-black" : "text-white"} flex items-center gap-2 outline-none font-general-sans-medium`}>
                            {i18n.language === "id" ? "ID" : "EN"}
                            <img src={i18n.language === "id" ? idFlag : enFlag} className="w-5" alt="" />
                            <MdKeyboardArrowDown size={20} color={scrolled ? "black" : "white"} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="rounded-xl">
                            <DropdownMenuItem
                                className="bg-white cursor-pointer font-general-sans-medium"
                                onClick={() => handleLanguageChange("id")}
                            >
                                ID
                                <img src={idFlag} className="w-5" alt="" />
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="bg-white cursor-pointer font-general-sans-medium"
                                onClick={() => handleLanguageChange("en")}
                            >
                                EN
                                <img src={enFlag} className="w-5" alt="" />
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="block desktop:hidden">
                    <NavbarMobile />
                </div>
            </div>
        </section>
    );
}

export default Navbar;
