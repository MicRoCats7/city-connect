import smartGovernance from "../assets/icon_smart_city/smart-governance.svg";
import smartEnvironment from "../assets/icon_smart_city/smart-environment.svg";
import smartSociety from "../assets/icon_smart_city/smart-society.svg";
import smartLiving from "../assets/icon_smart_city/smart-living.svg";
import smartEconomy from "../assets/icon_smart_city/smart-economy.svg";
import smartBranding from "../assets/icon_smart_city/smart-branding.svg";
import imageGovernance from "@/assets/icon_smart_city/smartGovernance.png";
import imageEnvironment from "@/assets/icon_smart_city/smartEnvironment.png";
import imageSociety from "@/assets/icon_smart_city/smartSociety.png";
import imageLiving from "@/assets/icon_smart_city/smartLiving.png";
import imageEconomy from "@/assets/icon_smart_city/smartEconomy.png";
import imageBranding from "@/assets/icon_smart_city/smartBranding.png";
import { GoArrowRight } from "react-icons/go";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import collapseLeft from "@/assets/collapse-left.svg";
import collapseRight from "@/assets/collapse-right.svg";
import { useTranslation } from "react-i18next";

function SmartCity() {
  const { t } = useTranslation();

  const dataSmartCity = [
    {
      id: 1,
      title: "SMART GOVERNANCE",
      desc: t("smart_city.titleGovernance"),
      icon: smartGovernance,
      image: imageGovernance,
      color: "#DB3A3C",
    },
    {
      id: 2,
      title: "SMART ENVIROMENT",
      desc: t("smart_city.titleEnviroment"),
      icon: smartEnvironment,
      image: imageEnvironment,
      color: "#38D938",
    },
    {
      id: 3,
      title: "SMART SOCIETY",
      desc: t("smart_city.titleSociety"),
      icon: smartSociety,
      image: imageSociety,
      color: "#1D24AD",
    },
    {
      id: 4,
      title: "SMART LIVING",
      desc: t("smart_city.titleLiving"),
      icon: smartLiving,
      image: imageLiving,
      color: "#E0CD95",
    },
    {
      id: 5,
      title: "SMART ECONOMY",
      desc: t("smart_city.titleEconomy"),
      icon: smartEconomy,
      image: imageEconomy,
      color: "#E2AC40",
    },
    {
      id: 6,
      title: "SMART BRANDING",
      desc: t("smart_city.titleBranding"),
      icon: smartBranding,
      image: imageBranding,
      color: "#189FFF",
    },
  ];

  const Hexagon = ({
    color,
    label,
    icon,
  }: {
    color: any;
    label: string;
    icon: any;
  }) => (
    <div
      className={`scale-95 tablet:scale-80 desktop:scale-100 relative w-[290px] h-[340px] clip-hexagon flex items-center justify-center text-white hover:scale-90 duration-300 transition transform cursor-pointer`}
      style={{ backgroundColor: color }}
    >
      <div className="flex items-center justify-center flex-col gap-2 bg-transparent">
        <img src={icon} alt="icon" className="bg-transparent" />
        <p className="text-lg font-general-sans-semibold bg-transparent">
          {label}
        </p>
        <div className="flex items-center gap-2 bg-transparent">
          <p className="text-sm font-general-sans-regular bg-transparent">
            {t("smart_city.button_click")}
          </p>
          <GoArrowRight className="bg-transparent" />
        </div>
      </div>
    </div>
  );

  return (
    <section
      className="flex justify-center items-center flex-col pt-32 relative max-w-[1440px] mx-auto px-4 tablet:px-12 desktop:px-36"
      id={t("navbar.smart_city")}
    >
      <div className="absolute -left-9 top-8 bg-transparent">
        <img src={collapseLeft} alt="collapse" className="bg-transparent" />
      </div>
      <div className="absolute -right-9 top-0 bg-transparent">
        <img src={collapseRight} alt="collapse" className="bg-transparent" />
      </div>
      <div className="flex items-center justify-center flex-col">
        <h1 className="special-text text-[30px] desktop:text-[50px] font-general-sans-semibold">
          {t("smart_city.title")}
        </h1>
        <p className="text-[#ffffff60] text-sm desktop:text-lg font-general-sans-regular">
          {t("smart_city.subtitle")}
        </p>
      </div>
      <div className="scale-wrapper flex justify-center items-center flex-col">
        <div className="relative mt-32">
          <Dialog>
            <DialogTrigger asChild>
              <div className="absolute -top-10 right-0">
                <Hexagon
                  color={dataSmartCity[0].color}
                  label={dataSmartCity[0].title}
                  icon={dataSmartCity[0].icon}
                />
              </div>
            </DialogTrigger>
            <DialogContent
              className="max-w-[700px] bg-[#191A19] border-[3px] animate-gradientBorder rounded-none flex flex-col items-center"
              style={{
                borderImageSlice: 1,
                animation: "gradientBorderAnimation 5s linear infinite",
              }}
            >
              <img src={dataSmartCity[0].image} alt="" className="w-28" />
              <div className="flex items-center flex-col">
                <h1 className="bg-transparent special-text font-general-sans-semibold text-lg uppercase">
                  {dataSmartCity[0].title}
                </h1>
                <p className="bg-transparent text-white font-general-sans-medium text-sm leading-6 text-center">
                  {dataSmartCity[0].desc}
                </p>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <div className="absolute -top-10 left-2">
                <Hexagon
                  color={dataSmartCity[1].color}
                  label={dataSmartCity[1].title}
                  icon={dataSmartCity[1].icon}
                />
              </div>
            </DialogTrigger>
            <DialogContent
              className="max-w-[525px] bg-[#191A19] border-[3px] animate-gradientBorder rounded-none flex flex-col items-center"
              style={{
                borderImageSlice: 1,
                animation: "gradientBorderAnimation 5s linear infinite",
              }}
            >
              <img src={dataSmartCity[1].image} alt="" className="w-28" />
              <div className="flex items-center flex-col">
                <h1 className="bg-transparent special-text font-general-sans-semibold text-lg uppercase">
                  {dataSmartCity[1].title}
                </h1>
                <p className="bg-transparent text-white font-general-sans-medium text-sm leading-6 text-center">
                  {dataSmartCity[1].desc}
                </p>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <div className="absolute top-56 right-[150px] bg-transparent">
                <Hexagon
                  color={dataSmartCity[2].color}
                  label={dataSmartCity[2].title}
                  icon={dataSmartCity[2].icon}
                />
              </div>
            </DialogTrigger>
            <DialogContent
              className="max-w-[525px] bg-[#191A19] border-[3px] animate-gradientBorder rounded-none flex flex-col items-center"
              style={{
                borderImageSlice: 1,
                animation: "gradientBorderAnimation 5s linear infinite",
              }}
            >
              <img src={dataSmartCity[2].image} alt="" className="w-40" />
              <div className="flex items-center flex-col">
                <h1 className="bg-transparent special-text font-general-sans-semibold text-lg uppercase">
                  {dataSmartCity[2].title}
                </h1>
                <p className="bg-transparent text-white font-general-sans-medium text-sm leading-6 text-center">
                  {dataSmartCity[2].desc}
                </p>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <div className="absolute top-56 left-40 bg-transparent">
                <Hexagon
                  color={dataSmartCity[3].color}
                  label={dataSmartCity[3].title}
                  icon={dataSmartCity[3].icon}
                />
              </div>
            </DialogTrigger>
            <DialogContent
              className="max-w-[525px] bg-[#191A19] border-[3px] animate-gradientBorder rounded-none flex flex-col items-center"
              style={{
                borderImageSlice: 1,
                animation: "gradientBorderAnimation 5s linear infinite",
              }}
            >
              <img src={dataSmartCity[3].image} alt="" className="w-40" />
              <div className="flex items-center flex-col">
                <h1 className="bg-transparent special-text font-general-sans-semibold text-lg uppercase">
                  {dataSmartCity[3].title}
                </h1>
                <p className="bg-transparent text-white font-general-sans-medium text-sm leading-6 text-center">
                  {dataSmartCity[3].desc}
                </p>
              </div>
            </DialogContent>
          </Dialog>
          <div className="absolute top-56 -right-[150px] bg-transparent">
            <div className="relative w-[290px] h-[340px] bg-[#2a2a2a] clip-hexagon flex items-center justify-center text-white">
              <p className="text-3xl font-general-sans-semibold special-text">
                SMART CITY
              </p>
            </div>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <div className="absolute top-[490px] right-0 bg-transparent">
                <Hexagon
                  color={dataSmartCity[4].color}
                  label={dataSmartCity[4].title}
                  icon={dataSmartCity[4].icon}
                />
              </div>
            </DialogTrigger>
            <DialogContent
              className="max-w-[525px] bg-[#191A19] border-[3px] animate-gradientBorder rounded-none flex flex-col items-center"
              style={{
                borderImageSlice: 1,
                animation: "gradientBorderAnimation 5s linear infinite",
              }}
            >
              <img src={dataSmartCity[4].image} alt="" className="w-40" />
              <div className="flex items-center flex-col">
                <h1 className="bg-transparent special-text font-general-sans-semibold text-lg uppercase">
                  {dataSmartCity[4].title}
                </h1>
                <p className="bg-transparent text-white font-general-sans-medium text-sm leading-6 text-center">
                  {dataSmartCity[4].desc}
                </p>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <div className="absolute top-[490px] left-3 bg-transparent">
                <Hexagon
                  color={dataSmartCity[5].color}
                  label={dataSmartCity[5].title}
                  icon={dataSmartCity[5].icon}
                />
              </div>
            </DialogTrigger>
            <DialogContent
              className="max-w-[525px] bg-[#191A19] border-[3px] animate-gradientBorder rounded-none flex flex-col items-center"
              style={{
                borderImageSlice: 1,
                animation: "gradientBorderAnimation 5s linear infinite",
              }}
            >
              <img src={dataSmartCity[5].image} alt="" className="w-40" />
              <div className="flex items-center flex-col">
                <h1 className="bg-transparent special-text font-general-sans-semibold text-lg uppercase">
                  {dataSmartCity[5].title}
                </h1>
                <p className="bg-transparent text-white font-general-sans-medium text-sm leading-6 text-center">
                  {dataSmartCity[5].desc}
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}

export default SmartCity;
