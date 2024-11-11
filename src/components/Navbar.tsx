import logo from "@/assets/logo.svg";
import { NavItems } from "@/lib/NavItems";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MdKeyboardArrowDown } from "react-icons/md";

function Navbar() {
    return (
        <section className="py-8 flex items-center justify-between">
            <img src={logo} alt="logo" />
            <div className="flex items-center gap-10">
                {NavItems.map((item, index) => {
                    const active = item.url === window.location.pathname ? "text-white font-general-sans-medium" : "text-gray-700 font-general-sans-medium"
                    return (
                        <a key={index} href={item.url} className={active}>
                            {item.title}
                        </a>
                    )
                })}
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger className="text-white flex items-center gap-2 outline-none font-general-sans-medium">
                    ID
                    <MdKeyboardArrowDown size={20} color="white" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="rounded-xl">
                    <DropdownMenuItem className="bg-white cursor-pointer font-general-sans-medium">EN</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </section>
    )
}

export default Navbar