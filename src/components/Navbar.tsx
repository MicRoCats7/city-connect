import { useState, useEffect } from "react";
import logo from "@/assets/logo.svg";
import { NavItems } from "@/lib/NavItems";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdKeyboardArrowDown } from "react-icons/md";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: any, title: any) => {
        e.preventDefault();
        const element = document.getElementById(title);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            className={`py-8 fixed w-full top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-white/50 shadow-lg" : "bg-transparent"
                }`}
        >
            <div className="flex items-center justify-between wrapper">
                <img src={logo} alt="logo" />
                <div className="flex items-center gap-10">
                    {NavItems.map((item, index) => {
                        const active = item.url === window.location.pathname
                            ? "text-white font-general-sans-medium"
                            : "text-gray-700 font-general-sans-medium";
                        return (
                            <a
                                key={index}
                                href={item.url}
                                onClick={(e) => handleNavClick(e, item.title)}
                                className={active}
                            >
                                {item.title}
                            </a>
                        );
                    })}
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger className="text-white flex items-center gap-2 outline-none font-general-sans-medium">
                        ID
                        <MdKeyboardArrowDown size={20} color={scrolled ? "black" : "white"} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="rounded-xl">
                        <DropdownMenuItem className="bg-white cursor-pointer font-general-sans-medium">
                            EN
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </section>
    );
}

export default Navbar;
