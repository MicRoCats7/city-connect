import { useEffect, useRef, useState } from "react";
import { galeri } from "@/lib/data";
import { Separator } from "./ui/separator";
import galeriKota from "@/assets/jakarta.jpg";
import { IoMdClose } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

function Galeri() {
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    const handleClick = (item: any) => {
        setSelectedItem(item);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            closeModal();
        }
    };

    useEffect(() => {
        if (selectedItem) {
            document.body.classList.add("overflow-hidden");
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [selectedItem]);

    return (
        <section className="wrapper pt-[172px]">
            <div className="flex items-center justify-end gap-4">
                <Separator className="border-2 rounded-full w-[94px]" />
                <h2 className="text-[50px] font-general-sans-semibold special-text">Galeri</h2>
            </div>
            <div className="mt-16">
                <div className="grid grid-cols-4 grid-rows-2 gap-2.5">
                    {galeri.slice(0, 5).map((galeri, index) => {
                        if (index !== 2) {
                            return (
                                <div
                                    key={galeri.id}
                                    onClick={() => handleClick(galeri)}
                                    className="relative col-span-1 flex flex-col justify-between cursor-pointer bg-transparent transition transform hover:scale-90"
                                >
                                    <img
                                        className="mb-5 w-[270px] h-[180px] rounded-[20px] hover:scale-90 transition transform"
                                        src={galeriKota}
                                        alt={galeri.name}
                                    />
                                    <div className="absolute left-[45%] top-[35%] bg-transparent">
                                        <FaPlay className="bg-transparent" size={30} color="white" />
                                    </div>
                                    <p className="mb-5 text-[22px] leading-6 font-general-sans-semibold text-white">{galeri.name}</p>
                                </div>
                            )
                        } else {
                            return (
                                <div
                                    key={galeri.id}
                                    onClick={() => handleClick(galeri)}
                                    className="relative col-span-2 row-span-2 flex flex-col justify-between cursor-pointer hover:scale-90 transition transform"
                                >
                                    <img
                                        className="mb-5 object-cover w-full h-full rounded-[20px]"
                                        src={galeriKota}
                                        alt={galeri.name}
                                    />
                                    <div className="absolute left-[46%] top-[40%] bg-transparent">
                                        <FaPlay className="bg-transparent" size={50} color="white" />
                                    </div>
                                    <div className="w-full absolute bottom-4 p-5 bg-gradient-to-t from-black/100 to-transparent bg-transparent rounded-[20px]">
                                        <p className="mb-5 text-[50px] font-general-sans-semibold text-white bg-transparent">{galeri.name}</p>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
                <div className="grid grid-cols-4 grid-rows-2 gap-2.5">
                    {galeri.slice(5, 10).map((galeri, index) => {
                        if (index !== 2) {
                            return (
                                <div
                                    key={galeri.id}
                                    onClick={() => handleClick(galeri)}
                                    className="relative col-span-1 flex flex-col justify-between cursor-pointer bg-transparent"
                                >
                                    <img
                                        className="mb-5 w-[270px] h-[180px] rounded-[20px] hover:scale-90 transition transform"
                                        src={galeriKota}
                                        alt={galeri.name}
                                    />
                                    <p className="mb-5 text-[22px] leading-6 font-general-sans-semibold text-white">{galeri.name}</p>
                                </div>
                            )
                        } else {
                            return (
                                <div
                                    key={galeri.id}
                                    onClick={() => handleClick(galeri)}
                                    className="relative col-span-2 row-span-2 flex flex-col justify-between cursor-pointer hover:scale-90 transition transform"
                                >
                                    <img
                                        className="mb-5 object-cover w-full h-full rounded-[20px]"
                                        src={galeriKota}
                                        alt={galeri.name}
                                    />
                                    <div className="w-full absolute bottom-4 p-5 bg-gradient-to-t from-black/100 to-transparent bg-transparent rounded-[20px]">
                                        <p className="mb-5 text-[50px] font-general-sans-semibold text-white bg-transparent">{galeri.name}</p>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
            {selectedItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-65">
                    <div ref={modalRef} className="relative w-full max-w-4xl">
                        <button
                            onClick={closeModal}
                            className="absolute -top-2 -right-2 text-xl font-bold bg-white rounded-full p-2"
                        >
                            <IoMdClose className="bg-transparent" color="black" />
                        </button>
                        <iframe
                            className="w-full h-[500px] rounded-lg"
                            src={selectedItem.link}
                            title={selectedItem.name}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </section>
    );
}

export default Galeri;
