import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import iconlocation from "@/assets/icon_location.svg";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { galeri } from '@/lib/data';
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { IoIosInformationCircleOutline } from 'react-icons/io';

function PetaGaleri() {
    const icon = new L.Icon({
        iconUrl: iconlocation,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
    });

    return (
        <section className="wrapper py-44 flex items-center justify-center flex-col" id="Peta Smart City">
            <h1 className="special-text font-general-sans-semibold text-[40px] text-center w-1/2">
                KOTA-KOTA YANG MENERAPKAN SMART CITY
            </h1>
            <MapContainer center={[-2.5, 118.0]} zoom={5} className="w-full h-[600px] mt-8 z-10">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {galeri.map((city, index) => (
                    <Marker key={index} position={city.coor} icon={icon}>
                        <Popup>
                            <div className='flex items-start flex-col gap-1'>
                                <h2 className="font-general-sans-semibold text-xl">{city.name}</h2>
                                <div className='flex items-center gap-2'>
                                    <h6 className="font-general-sans-regular">Fitur-Fitur Smart city yang ada di {city.name}</h6>
                                    <Popover>
                                        <PopoverTrigger>
                                            <IoIosInformationCircleOutline />
                                        </PopoverTrigger>
                                        <PopoverContent className="bg-black text-white p-4 rounded-md">
                                            <p className="text-sm text-center">Klik Gambar untuk melihat detail fitur</p>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>
                            <Carousel
                                opts={{
                                    align: "start",
                                }}
                                className="w-full max-w-sm mt-4"
                            >
                                <CarouselContent>
                                    {city.photo?.map((photo, idx) => (
                                        <CarouselItem key={photo.id || idx} className='basis-1/2'>
                                            <Card className="flex items-center justify-center">
                                                <CardContent className="relative items-center justify-center p-1 w-[400px]">
                                                    <Popover>
                                                        <PopoverTrigger>
                                                            <img
                                                                src={photo.image}
                                                                alt={photo.desc}
                                                                className="rounded-md w-full h-full aspect-square"
                                                            />
                                                        </PopoverTrigger>
                                                        <PopoverContent className="bg-black text-white p-4 rounded-md">
                                                            <p className="text-sm text-center">{photo.desc}</p>
                                                        </PopoverContent>
                                                    </Popover>
                                                </CardContent>
                                            </Card>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </section >
    );
}

export default PetaGaleri;
