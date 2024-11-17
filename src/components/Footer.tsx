import logo from "@/assets/logo.svg";
import { RiTwitterXLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaRegCopyright } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation();

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

  return (
    <section className="pt-[35px] pb-5 bg-[#191A19] border-t-[1px] border-[#ffffff30]">
      <div className="flex flex-col desktop:gap-28 gap-10 max-w-[1440px] mx-auto px-4 tablet:px-12 desktop:px-36">
        <div>
          <div className="flex desktop:items-center items-start desktop:flex-row flex-col justify-between">
            <img className="w-[300px] h-[78px] " src={logo} alt="logo" />
            <div className="flex desktop:items-center items-start desktop:flex-row flex-col gap-10 desktop:mt-0 mt-10">
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
          <div className="flex items-center desktop:justify-end justify-center gap-1 ">
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
