import logo from "@/assets/logo.svg";
import { NavItems } from "@/lib/NavItems";
import { RiTwitterXLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <section className="pt-[35px] pb-5 bg-[#191A19] border-t-[1px] border-[#ffffff30]">
      <div className="flex flex-col gap-28 wrapper">
        <div>
          <div className="flex items-center justify-between">
            <img className="w-[300px] h-[78px] " src={logo} alt="logo" />
            <div className="flex items-center gap-10">
              {NavItems.map((item, index) => {
                const active = "text-white opacity-50 font-general-sans-medium";
                return (
                  <a key={index} href={item.url} className={active}>
                    {item.title}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-[15px]">
            <div className="rounded-full bg-[#2F312F] p-2.5 flex justify-center items-center hover:bg-black ">
              <RiTwitterXLine className="bg-transparent" color="white" />
            </div>
            <div className="rounded-full bg-[#2F312F] p-2 flex justify-center items-center hover:bg-black">
              <RiInstagramLine
                className="bg-transparent"
                color="white"
                size={20}
              />
            </div>
            <div className="rounded-full bg-[#2F312F] p-2 flex justify-center items-center hover:bg-black">
              <RiFacebookCircleLine
                className="bg-transparent"
                color="white"
                size={20}
              />
            </div>
          </div>
          <div className="py-5">
            <hr className=" opacity-30" />
          </div>
          <div className="flex items-center justify-end gap-1 ">
            <FaRegCopyright color="white" className="opacity-50" />
            <p className="opacity-50 text-white font-general-sans-medium ">
              Copyright CityConnect 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
