import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import iconlocation from "@/assets/icon_location.svg"

function PetaGaleri() {
    const icon = new L.Icon({
        iconUrl: iconlocation,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
    });

    const cityData = [
        {
            name: "Jakarta",
            coordinates: [-6.2088, 106.8456] as [number, number],
            image: "path_to_image_of_jakarta.jpg",
            description: "Jakarta is implementing various smart city technologies.",
        },
        {
            name: "Bandung",
            coordinates: [-6.9175, 107.6191] as [number, number],
            image: "path_to_image_of_bandung.jpg",
            description: "Bandung has adopted smart city initiatives for urban management.",
        },
        {
            name: "Surabaya",
            coordinates: [-7.263351734202219, 112.74701138580754] as [number, number],
            image: "path_to_image_of_surabaya.jpg",
            description: "surabaya has adopted smart city initiatives for urban management.",
        },
    ];

    return (
        <section className="wrapper py-44 flex items-center justify-center flex-col" id="Peta Smart City">
            <h1 className="special-text font-general-sans-semibold text-[40px] text-center w-1/2">
                KOTA-KOTA YANG MENERAPKAN SMART CITY
            </h1>
            <MapContainer center={[-2.5, 118.0]} zoom={5} className="w-full h-[600px] mt-8 z-10">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {cityData.map((city, index) => (
                    <Marker key={index} position={city.coordinates} icon={icon}>
                        <Popup>
                            <div className="text-center">
                                <h2 className="font-semibold">{city.name}</h2>
                                <p>{city.description}</p>
                                <img src={city.image} alt={`Image of ${city.name}`} className="w-full mt-2" />
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </section>
    )
}

export default PetaGaleri