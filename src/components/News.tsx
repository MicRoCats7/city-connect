import { berita } from "@/lib/data"
import { Separator } from "./ui/separator"

function News() {
    return (
        <section className="mt-[900px] pt-28" id="Berita">
            <div className="wrapper">
                <div className="flex items-center gap-4">
                    <h2 className="text-[50px] font-general-sans-semibold special-text">Berita</h2>
                    <Separator className="border-2 rounded-full w-[94px]" />
                </div>
                <div className="mt-16">
                    <div className="grid grid-cols-4 grid-rows-2 gap-2.5">
                        {berita.map((news, index) => {
                            if (index !== 2) {
                                return (
                                    <div key={news.id} className="relative col-span-1 flex flex-col justify-between cursor-pointer bg-transparent hover:scale-90 transition transform">
                                        <img
                                            className="mb-5 w-[270px] h-[180px] rounded-[20px]"
                                            src={news.image}
                                            alt={news.title}
                                        />
                                        <p className="mb-5 text-[22px] leading-6 font-general-sans-semibold text-white">{news.title}</p>
                                        <p className="font-general-sans-medium text-base opacity-60 text-white">{news.date}</p>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={news.id} className="relative col-span-2 row-span-2 flex flex-col justify-between cursor-pointer hover:scale-90 transition transform">
                                        <img
                                            className="mb-5 object-cover w-full h-full rounded-[20px]"
                                            src={news.image}
                                            alt={news.title}
                                        />
                                        <div className="absolute -bottom-4 p-5 bg-gradient-to-t from-black/50 to-transparent">
                                            <p className="mb-5 text-[22px] font-general-sans-semibold text-white">{news.title}</p>
                                            <p className="font-general-sans-medium text-base opacity-60 text-white">{news.date}</p>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News