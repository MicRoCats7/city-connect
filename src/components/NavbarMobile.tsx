import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import logoBlack from "@/assets/logo-black.svg";
import { useTranslation } from "react-i18next";
import enFlag from "@/assets/flag-en.svg";
import idFlag from "@/assets/flag-indo.svg";

function NavbarMobile() {
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [activeId, setActiveId] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

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
            setIsOpen(false);
        }
    };

    const handleLanguageChange = (language: string) => {
        i18n.changeLanguage(language);
        setIsOpen(false);
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="flex items-center justify-center">
                <RxHamburgerMenu color={scrolled ? "black" : "white"} size={25} />
            </SheetTrigger>
            <SheetContent className="flex items-start flex-col justify-between">
                <div className="flex items-start flex-col justify-start gap-4">
                    {NavItems.map((item, index) => {
                        const isActive = activeId === item.title;
                        return (
                            <a
                                key={index}
                                href={item.url}
                                onClick={(e) => handleNavClick(e, item.title)}
                                className={`transition-colors duration-300 text-black text-base tablet:text-lg
                                } ${isActive ? "font-general-sans-medium underline" : "font-general-sans-regular"}`}
                            >
                                {item.title}
                            </a>
                        );
                    })}
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="flex items-center gap-2">
                                {i18n.language === "id" ? (
                                    <>
                                        <img src={idFlag} className="w-5" alt="id flag" />
                                        <span className="font-general-sans-medium text-base tablet:text-lg">{t("lang.id")}</span>
                                    </>
                                ) : (
                                    <>
                                        <img src={enFlag} className="w-5" alt="en flag" />
                                        <span className="font-general-sans-medium text-base tablet:text-lg">{t("lang.en")}</span>
                                    </>
                                )}
                            </AccordionTrigger>
                            <AccordionContent className="flex items-center gap-2" onClick={() => handleLanguageChange("id")}>
                                <img src={idFlag} className="w-5" alt="id flag" />
                                <span className="font-general-sans-medium text-base tablet:text-lg">{t("lang.id")}</span>
                            </AccordionContent>
                            <AccordionContent className="flex items-center gap-2" onClick={() => handleLanguageChange("en")}>
                                <img src={enFlag} className="w-5" alt="en flag" />
                                <span className="font-general-sans-medium text-base tablet:text-lg">{t("lang.en")}</span>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <img src={logoBlack} alt="logo" className="w-[80%]" />
            </SheetContent>
        </Sheet>

    )
}

export default NavbarMobile