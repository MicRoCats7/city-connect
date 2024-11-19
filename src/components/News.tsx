import imageBerita1 from "../assets/image_berita/foto jaki.webp";
import imageBerita2 from "../assets/image_berita/foto bayar listrik gopay.webp";
import imageBerita3 from "../assets/image_berita/100 smart city.webp";
import imageBerita4 from "../assets/image_berita/foto mobile jkn.webp";
import imageBerita5 from "../assets/image_berita/foto e money suroboyo bus.webp";
import { Separator } from "./ui/separator";
import { useTranslation } from "react-i18next";

function News() {
  const { t } = useTranslation();

  const berita = [
    {
      id: 1,
      title: t("news.titleBerita1"),
      date: "19 Agu 2024",
      image: imageBerita1,
    },
    {
      id: 2,
      title: t("news.titleBerita2"),
      date: "6 Nov 2024",
      image: imageBerita2,
    },
    {
      id: 3,
      title: t("news.titleBerita3"),
      date: "20 Jul 2022",
      image: imageBerita3,
    },
    {
      id: 4,
      title: t("news.titleBerita4"),
      date: "22 Okt 2024",
      image: imageBerita4,
    },
    {
      id: 5,
      title: t("news.titleBerita5"),
      date: "11 Okt 2021",
      image: imageBerita5,
    },
  ];

  return (
    <section
      className="desktop:mt-[800px] tablet:mt-[800px] mt-[400px]"
      id={t("navbar.news")}
    >
      <div className="max-w-[1440px] mx-auto px-4 tablet:px-12 desktop:px-36">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl desktop:text-[50px] font-general-sans-semibold special-text">
            {t("news.title")}
          </h2>
          <Separator className="border-2 rounded-full w-[94px]" />
        </div>
        <div className="desktop:mt-10 mt-5">
          <div className="grid desktop:grid-cols-4 desktop:grid-rows-2 gap-2.5">
            {berita.map((news, index) => {
              if (index !== 2) {
                return (
                  <div
                    key={news.id}
                    className="relative col-span-1 flex flex-col justify-between cursor-pointer bg-transparent hover:scale-90 duration-300 transition transform"
                  >
                    <img
                      className="mb-5 desktop:w-[270px] w-full h-[180px] rounded-[20px]"
                      src={news.image}
                      alt={news.title}
                    />
                    <p className="desktop:mb-5 mb-2 text-sm desktop:text-[22px] leading-6 font-general-sans-semibold text-white">
                      {news.title}
                    </p>
                    <p className="font-general-sans-medium text-xs desktop:text-base opacity-60 text-white">
                      {news.date}
                    </p>
                  </div>
                );
              } else {
                return (
                  <div
                    key={news.id}
                    className="relative col-span-2 row-span-2 flex flex-col justify-between cursor-pointer hover:scale-90 duration-300 transition transform"
                  >
                    <img
                      className="my-5 desktop:my-0 object-cover w-full desktop:h-full mobile:h-full tablet:h-[500px] rounded-[20px]"
                      src={news.image}
                      alt={news.title}
                    />
                    <div className="absolute desktop:bottom-0 bottom-5 w-full p-5 bg-gradient-to-t from-black/100 to-transparent">
                      <p className="mb-5 text-[22px] font-general-sans-semibold text-white">
                        {news.title}
                      </p>
                      <p className="font-general-sans-medium text-base opacity-60 text-white">
                        {news.date}
                      </p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
