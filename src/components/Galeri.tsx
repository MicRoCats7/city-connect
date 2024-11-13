import { galeri } from "@/lib/data"
import { Separator } from "./ui/separator"
import galeriKota from "@/assets/jakarta.jpg"

function Galeri() {
    return (
        <section className="wrapper pt-[172px]">
            <div className="flex items-center justify-end gap-4">
                <Separator className="border-2 rounded-full w-[94px]" />
                <h2 className="text-[50px] font-general-sans-semibold special-text">Galeri</h2>
            </div>
            <div className="mt-16">
                <div className="grid grid-cols-4 grid-rows-2 gap-2.5">
                    {galeri.map((galeri, index) => {
                        if (index !== 2) {
                            return (
                                <div key={galeri.id} className="relative col-span-1 flex flex-col justify-between cursor-pointer bg-transparent">
                                    <img
                                        className="mb-5 w-[270px] h-[180px] rounded-[20px] hover:scale-105 transition transform"
                                        src={galeriKota}
                                        alt={galeri.name}
                                    />
                                    <p className="mb-5 text-[22px] leading-6 font-general-sans-semibold">{galeri.name}</p>
                                </div>
                            )
                        } else {
                            return (
                                <div key={galeri.id} className="relative col-span-2 row-span-2 flex flex-col justify-between cursor-pointer hover:scale-105 transition transform">
                                    <img
                                        className="mb-5 object-cover w-full h-full rounded-[20px]"
                                        src={galeriKota}
                                        alt={galeri.name}
                                    />
                                    <div className="absolute -bottom-4 p-5 bg-gradient-to-t from-black/100 w-full to-transparent">
                                        <p className="mb-5 text-[22px] font-general-sans-semibold">{galeri.name}</p>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </section>
    )
}

export default Galeri