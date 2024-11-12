import { berita } from "@/lib/data"
import { Separator } from "./ui/separator"

function News() {
    return (
        <section className="mt-[1000px]">
            <div className="wrapper">
                <div className="flex items-center gap-4">
                    <h2 className="text-[50px] font-general-sans-semibold special-text">Berita</h2>
                    <Separator className="border-2 rounded-full w-[94px]" />
                </div>
                <div className="mt-16">
                    <h1 className="special-text font-general-sans-semibold text-3xl mb-5">Must Read</h1>
                    <div className="grid grid-cols-4 grid-rows-2 gap-2.5">
                        {berita.map((news) => {
                            return (
                                <div key={news.id} className={`relative col-span-2 row-span-2`}>
                                    <div className="bg-gradient-to-b from-transparent to-black absolute w-full h-full rounded-[20px]"></div>
                                    <img
                                        className={`mb-5 object-cover w-full h-full rounded-[20px]`}
                                        // src={news.thumbnail}
                                        alt={news.title}
                                    />
                                    <div className="absolute bottom-0 p-5">
                                        <p className="mb-5 text-[22px] font-general-sans-semibold">{news.title}</p>
                                        <p className="font-general-sans-medium text-base opacity-60">{news.date}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News