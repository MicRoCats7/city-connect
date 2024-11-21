import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import iconlocation from "@/assets/icon_location.svg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Separator } from "./ui/separator";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import thumbnailGaleri1 from "../assets/image_galeri/thumbnail/jakarta.webp";
import thumbnailGaleri2 from "../assets/image_galeri/thumbnail/surabaya.webp";
import thumbnailGaleri3 from "../assets/image_galeri/thumbnail/bandung.webp";
import thumbnailGaleri4 from "../assets/image_galeri/thumbnail/bali.webp";
import thumbnailGaleri5 from "../assets/image_galeri/thumbnail/jogja.webp";
import thumbnailGaleri6 from "../assets/image_galeri/thumbnail/semarang.webp";
import thumbnailGaleri7 from "../assets/image_galeri/thumbnail/makassar.webp";
import thumbnailGaleri8 from "../assets/image_galeri/thumbnail/batu.webp";
import thumbnailGaleri9 from "../assets/image_galeri/thumbnail/balikpapan.webp";
import thumbnailGaleri10 from "../assets/image_galeri/thumbnail/bekasi.webp";
import imageGaleriJakarta1 from "../assets/image_galeri/Jakarta/foto jaki.webp";
import imageGaleriJakarta2 from "../assets/image_galeri/Jakarta/foto mrt jakarta.webp";
import imageGaleriJakarta3 from "../assets/image_galeri/Jakarta/foto future city hub.webp";
import imageGaleriJakarta4 from "../assets/image_galeri/Jakarta/foto CRM.webp";
import imageGaleriJakarta5 from "../assets/image_galeri/Jakarta/foto pantau banjir.webp";
import imageGaleriJakarta6 from "../assets/image_galeri/Jakarta/foto peta jakarta kini.webp";
import imageGaleriJakarta7 from "../assets/image_galeri/Jakarta/foto digital experience.webp";
import imageGaleriJakarta8 from "../assets/image_galeri/Jakarta/foto jurnal.webp";
import imageGaleriSurabaya1 from "../assets/image_galeri/Surabaya/foto suroboyo bus.webp";
import imageGaleriSurabaya2 from "../assets/image_galeri/Surabaya/foto wira wiri.webp";
import imageGaleriSurabaya3 from "../assets/image_galeri/Surabaya/foto SSW.webp";
import imageGaleriSurabaya4 from "../assets/image_galeri/Surabaya/foto sits atcs.webp";
import imageGaleriSurabaya5 from "../assets/image_galeri/Surabaya/foto e-health.webp";
import imageGaleriSurabaya6 from "../assets/image_galeri/Surabaya/foto peken.webp";
import imageGaleriBandung1 from "../assets/image_galeri/Bandung/foto bcc.webp";
import imageGaleriBandung2 from "../assets/image_galeri/Bandung/foto bandung smart city.webp";
import imageGaleriBandung3 from "../assets/image_galeri/Bandung/foto open data.webp";
import imageGaleriBandung4 from "../assets/image_galeri/Bandung/foto technopolis.webp";
import imageGaleriBandung5 from "../assets/image_galeri/Bandung/foto TPE.webp";
import imageGaleriDenpasar1 from "../assets/image_galeri/Denpasar/foto cyber monitor.webp";
import imageGaleriDenpasar2 from "../assets/image_galeri/Denpasar/fotoDenpasar Tourism Information.webp";
import imageGaleriDenpasar3 from "../assets/image_galeri/Denpasar/foto satu data denpasar.webp";
import imageGaleriYogya1 from "../assets/image_galeri/Yogyakarta/foto jogja smart service.webp";
import imageGaleriYogya2 from "../assets/image_galeri/Yogyakarta/foto ppid.webp";
import imageGaleriYogya3 from "../assets/image_galeri/Yogyakarta/foto free wifi.webp";
import imageGaleriSemarang1 from "../assets/image_galeri/Semarang/foto semarang smart city.webp";
import imageGaleriSemarang2 from "../assets/image_galeri/Semarang/foto satu data semarang.webp";
import imageGaleriSemarang3 from "../assets/image_galeri/Semarang/foto e pbb.webp";
import imageGaleriSemarang4 from "../assets/image_galeri/Semarang/foto yohsehat.webp";
import imageGaleriMakassar1 from "../assets/image_galeri/Makassar/war room.webp";
import imageGaleriMakassar2 from "../assets/image_galeri/Makassar/foto smart parking.webp";
import imageGaleriMakassar3 from "../assets/image_galeri/Makassar/foto home care.webp";
import imageGaleriBatu1 from "../assets/image_galeri/Batu/foto ppid batu.webp";
import imageGaleriBatu2 from "../assets/image_galeri/Batu/foto ppid batu.webp";
import imageGaleriBatu3 from "../assets/image_galeri/Batu/foto ppid batu.webp";
import imageGaleriBalikpapan1 from "../assets/image_galeri/Balikpapan/foto ppid balikpapan.webp";
import imageGaleriBalikpapan2 from "../assets/image_galeri/Balikpapan/foto mpp.webp";
import imageGaleriBekasi1 from "../assets/image_galeri/Bekasi/foto bekasi kota.webp";
import imageGaleriBekasi2 from "../assets/image_galeri/Bekasi/ppid bekasi.webp";
import imageGaleriBekasi3 from "../assets/image_galeri/Bekasi/foto cctv.webp";
import imageGaleriMedan1 from "../assets/image_galeri/Medan/foto website medan.webp";
import imageGaleriMedan2 from "../assets/image_galeri/Medan/foto mercy.webp";
import imageGaleriMedan3 from "../assets/image_galeri/Medan/foto ppid medan.webp";
import imageGaleriPekanbaru1 from "../assets/image_galeri/Pekanbaru/foto web pekanbaru.webp";
import imageGaleriPekanbaru2 from "../assets/image_galeri/Pekanbaru/foto ppid pekanbaru.webp";
import imageGaleriSamarinda1 from "../assets/image_galeri/Samarinda/foto web samarinda.webp";
import imageGaleriSamarinda2 from "../assets/image_galeri/Samarinda/foto command center samarinda.webp";
import imageGaleriSamarinda3 from "../assets/image_galeri/Samarinda/foto ppid samarinda.webp";
import imageGaleriPalembang1 from "../assets/image_galeri/Palembang/foto web palembang.webp";
import imageGaleriPalembang2 from "../assets/image_galeri/Palembang/foto sidemang.webp";
import imageGaleriPalembang3 from "../assets/image_galeri/Palembang/foto si bucil.webp";
import imageGaleriManado1 from "../assets/image_galeri/Manado/foto web manado.webp";
import imageGaleriManado2 from "../assets/image_galeri/Manado/foto satu data manado.webp";
import imageGaleriSolo1 from "../assets/image_galeri/Solo/foto eling solo.webp";
import imageGaleriSolo2 from "../assets/image_galeri/Solo/foto e lapor.webp";
import imageGaleriSolo3 from "../assets/image_galeri/Solo/foto e service.webp";
import imageGaleriTangerang1 from "../assets/image_galeri/Tangerang/foto tangerang smart city.webp";
import imageGaleriTangerang2 from "../assets/image_galeri/Tangerang/foto wifi.webp";
import imageGaleriTangerang3 from "../assets/image_galeri/Tangerang/foto faskes.webp";
import imageGaleriTangerang4 from "../assets/image_galeri/Tangerang/foto perpus.webp";

function PetaGaleri() {
  const icon = new L.Icon({
    iconUrl: iconlocation,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  const [activePopup, setActivePopup] = useState<number | null>(null);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

  const galeri = [
    {
      id: 1,
      name: "Bandung",
      coor: [-6.9153714084368385, 107.64658613354767] as [number, number],
      link: "https://www.youtube.com/embed/CsFRai1m9QI?si=wEuw79iu1rt9I9v",
      thumbnail: thumbnailGaleri3,
      photo: [
        {
          id: 1,
          title: "Bandung Command Center (BCC)",
          image: imageGaleriBandung1,
          desc: t("maps_smart_city.descBandung1"),
        },
        {
          id: 2,
          title: "Bandung Smart City",
          image: imageGaleriBandung2,
          desc: t("maps_smart_city.descBandung2"),
        },
        {
          id: 3,
          title: "Open Data Kota Bandung",
          image: imageGaleriBandung3,
          desc: t("maps_smart_city.descBandung3"),
        },
        {
          id: 4,
          title: "Bandung Technopolis",
          image: imageGaleriBandung4,
          desc: t("maps_smart_city.descBandung4"),
        },
        {
          id: 5,
          title: "Mesin Terminal Parkir Elektronik (TPE)",
          image: imageGaleriBandung5,
          desc: t("maps_smart_city.descBandung5"),
        },
      ],
    },
    {
      id: 2,
      name: "Surabaya",
      coor: [-7.263351734202219, 112.74701138580754] as [number, number],
      link: "https://www.youtube.com/embed/VLsNfipXv5Q?si=LbjWf2K2zPeHNiha",
      thumbnail: thumbnailGaleri2,
      photo: [
        {
          id: 1,
          title: "Suroboyo Bus",
          image: imageGaleriSurabaya1,
          desc: t("maps_smart_city.descSurabaya1"),
        },
        {
          id: 2,
          title: "Wirawiri Suroboyo",
          image: imageGaleriSurabaya2,
          desc: t("maps_smart_city.descSurabaya2"),
        },
        {
          id: 3,
          title: "Surabaya Single Window (SSW)",
          image: imageGaleriSurabaya3,
          desc: t("maps_smart_city.descSurabaya3"),
        },
        {
          id: 4,
          title: "Surabaya Intelligent Transport System (SITS)",
          image: imageGaleriSurabaya4,
          desc: t("maps_smart_city.descSurabaya4"),
        },
        {
          id: 5,
          title: "e - Health Surabaya",
          image: imageGaleriSurabaya5,
          desc: t("maps_smart_city.descSurabaya5"),
        },
        {
          id: 6,
          title: "PEKEN Surabaya",
          image: imageGaleriSurabaya6,
          desc: t("maps_smart_city.descSurabaya6"),
        },
      ],
    },
    {
      id: 3,
      name: "Jakarta",
      coor: [-6.195590285033856, 106.81645301833055] as [number, number],
      link: "https://www.youtube.com/embed/K_roO9tycV4?si=YVKXr4K1mBFNXQ8V",
      thumbnail: thumbnailGaleri1,
      photo: [
        {
          id: 1,
          title: "Jakarta Kini (JAKI)",
          image: imageGaleriJakarta1,
          desc: t("maps_smart_city.descJakarta1"),
        },
        {
          id: 2,
          title: "MRT Jakarta",
          image: imageGaleriJakarta2,
          desc: t("maps_smart_city.descJakarta2"),
        },
        {
          id: 3,
          title: "Future City Hub",
          image: imageGaleriJakarta3,
          desc: t("maps_smart_city.descJakarta3"),
        },
        {
          id: 4,
          title: "Cepat Respon Masyarakat (CRM)",
          image: imageGaleriJakarta4,
          desc: t("maps_smart_city.descJakarta4"),
        },
        {
          id: 5,
          title: "Pantau Banjir Jakarta",
          image: imageGaleriJakarta5,
          desc: t("maps_smart_city.descJakarta5"),
        },
        {
          id: 6,
          title: "JakPeta",
          image: imageGaleriJakarta6,
          desc: t("maps_smart_city.descJakarta6"),
        },
        {
          id: 7,
          title: "Digital Xperience",
          image: imageGaleriJakarta7,
          desc: t("maps_smart_city.descJakarta7"),
        },
        {
          id: 8,
          title: "Journal of Future Cities",
          image: imageGaleriJakarta8,
          desc: t("maps_smart_city.descJakarta8"),
        },
      ],
    },
    {
      id: 4,
      name: "Denpasar",
      coor: [-8.670275895575003, 115.21256896031949] as [number, number],
      link: "https://www.youtube.com/embed/X9alu7blkKI?si=hYlxYYThM_tRfNkz",
      thumbnail: thumbnailGaleri4,
      photo: [
        {
          id: 1,
          title: "Denpasar Cyber Monitor",
          image: imageGaleriDenpasar1,
          desc: t("maps_smart_city.descDenpasar1"),
        },
        {
          id: 2,
          title: "Denpasar Tourism",
          image: imageGaleriDenpasar2,
          desc: t("maps_smart_city.descDenpasar2"),
        },
        {
          id: 3,
          title: "Satu Data Denpasar",
          image: imageGaleriDenpasar3,
          desc: t("maps_smart_city.descDenpasar3"),
        },
      ],
    },
    {
      id: 5,
      name: "Yogyakarta",
      coor: [-7.801887880726409, 110.36729069447279] as [number, number],
      link: "https://www.youtube.com/embed/71uAk1skYsc?si=vBy7fJyPJHCMt5Yn",
      thumbnail: thumbnailGaleri5,
      photo: [
        {
          id: 1,
          title: "Jogja Smart Service (JSS)",
          image: imageGaleriYogya1,
          desc: t("maps_smart_city.descJogja1"),
        },
        {
          id: 2,
          title: "Pejabat Pengelola Informasi dan Dokumentasi Yogyakarta",
          image: imageGaleriYogya2,
          desc: t("maps_smart_city.descJogja2"),
        },
        {
          id: 3,
          title: "FreeHotspot JSS",
          image: imageGaleriYogya3,
          desc: t("maps_smart_city.descJogja3"),
        },
      ],
    },
    {
      id: 6,
      name: "Semarang",
      coor: [-6.983149791454412, 110.41019410198705] as [number, number],
      link: "https://www.youtube.com/embed/N_46mWMdmvQ?si=3qytRAOvCvSoCR1i",
      thumbnail: thumbnailGaleri6,
      photo: [
        {
          id: 1,
          title: "Smart City Semarang",
          image: imageGaleriSemarang1,
          desc: t("maps_smart_city.descSemarang1"),
        },
        {
          id: 2,
          title: "Semarang Satu Data",
          image: imageGaleriSemarang2,
          desc: t("maps_smart_city.descSemarang2"),
        },
        {
          id: 3,
          title: "e - PBB Kota Semarang",
          image: imageGaleriSemarang3,
          desc: t("maps_smart_city.descSemarang3"),
        },
        {
          id: 4,
          title: "Yoh Sehat",
          image: imageGaleriSemarang4,
          desc: t("maps_smart_city.descSemarang4"),
        },
      ],
    },
    {
      id: 7,
      name: "Makassar",
      coor: [-5.1614080746708035, 119.43832845719861] as [number, number],
      link: "https://www.youtube.com/embed/H_Oi9evsuBo?si=74qyqpeKxoXb8rDR",
      thumbnail: thumbnailGaleri7,
      photo: [
        {
          id: 1,
          title: "War Room",
          image: imageGaleriMakassar1,
          desc: t("maps_smart_city.descMakassar1"),
        },
        {
          id: 2,
          title: "Smart Parking",
          image: imageGaleriMakassar2,
          desc: t("maps_smart_city.descMakassar2"),
        },
        {
          id: 3,
          title: "Home Care Dottoro'ta",
          image: imageGaleriMakassar3,
          desc: t("maps_smart_city.descMakassar3"),
        },
      ],
    },
    {
      id: 8,
      name: "Batu",
      coor: [-7.882823743521434, 112.5336334130382] as [number, number],
      link: "https://www.youtube.com/embed/khiz3KW9ZTw?si=rIeG3CVxzUFebmfC",
      thumbnail: thumbnailGaleri8,
      photo: [
        {
          id: 1,
          title: "Kota Batu",
          image: imageGaleriBatu1,
          desc: t("maps_smart_city.descBatu1"),
        },
        {
          id: 2,
          title: "Pejabat Pengelola Informasi dan Dokumentasi (PPID) Batu",
          image: imageGaleriBatu2,
          desc: t("maps_smart_city.descBatu2"),
        },
        {
          id: 3,
          title:
            "Sistem Informasi Akses Keuangan Daerah Pemerintah Kota Batu (SiKANDA PRABU)",
          image: imageGaleriBatu3,
          desc: t("maps_smart_city.descBatu3"),
        },
      ],
    },
    {
      id: 9,
      name: "Balikpapan",
      coor: [-1.2367294421468487, 116.84723648615882] as [number, number],
      link: "https://www.youtube.com/embed/kDbY3N8ldGU?si=a2uYfbBTMaZIecKq",
      thumbnail: thumbnailGaleri9,
      photo: [
        {
          id: 1,
          title:
            "Pejabat Pengelola Informasi dan Dokumentasi (PPID) Balikpapan",
          image: imageGaleriBalikpapan1,
          desc: t("maps_smart_city.descBalikpapan1"),
        },
        {
          id: 2,
          title: "Mal Pelayanan Publik Balikpapan",
          image: imageGaleriBalikpapan2,
          desc: t("maps_smart_city.descBalikpapan2"),
        },
      ],
    },
    {
      id: 10,
      name: "Bekasi",
      coor: [-6.239240304113193, 106.98419858312859] as [number, number],
      link: "https://www.youtube.com/embed/WL78Z3B_3cs?si=1-0W6HWYeOpj8NDb",
      thumbnail: thumbnailGaleri10,
      photo: [
        {
          id: 1,
          title: "Kota Bekasi",
          image: imageGaleriBekasi1,
          desc: t("maps_smart_city.descBekasi1"),
        },
        {
          id: 2,
          title: "Pejabat Pengelola Informasi dan Dokumentasi (PPID) Bekasi",
          image: imageGaleriBekasi2,
          desc: t("maps_smart_city.descBekasi2"),
        },
        {
          id: 3,
          title: "CCTV Kota Bekasi",
          image: imageGaleriBekasi3,
          desc: t("maps_smart_city.descBekasi3"),
        },
      ],
    },
    {
      id: 11,
      name: "Medan",
      coor: [3.59293150898071, 98.67153464216551] as [number, number],
      link: "",
      thumbnail: "",
      photo: [
        {
          id: 1,
          title: "Kota Medan",
          image: imageGaleriMedan1,
          desc: t("maps_smart_city.descMedan1"),
        },
        {
          id: 2,
          title: "Medan Smart City (Mercy)",
          image: imageGaleriMedan2,
          desc: t("maps_smart_city.descMedan2"),
        },
        {
          id: 3,
          title: "Pejabat Pengelola Informasi dan Dokumentasi (PPID) Medan",
          image: imageGaleriMedan3,
          desc: t("maps_smart_city.descMedan3"),
        },
      ],
    },
    {
      id: 12,
      name: "Pekanbaru",
      coor: [0.5086410324484659, 101.45215764949828] as [number, number],
      link: "",
      thumbnail: "",
      photo: [
        {
          id: 1,
          title: "Kota Pekanbaru",
          image: imageGaleriPekanbaru1,
          desc: t("maps_smart_city.descPekanbaru1"),
        },
        {
          id: 2,
          title: "Pejabat Pengelola Informasi dan Dokumentasi (PPID) Pekanbaru",
          image: imageGaleriPekanbaru2,
          desc: t("maps_smart_city.descPekanbaru2"),
        },
      ],
    },
    {
      id: 13,
      name: "Samarinda",
      coor: [-0.4942566648565013, 117.13919753946982] as [number, number],
      link: "",
      thumbnail: "",
      photo: [
        {
          id: 1,
          title: "Kota Samarinda",
          image: imageGaleriSamarinda1,
          desc: t("maps_smart_city.descSamarinda1"),
        },
        {
          id: 2,
          title: "Command Center Samarinda",
          image: imageGaleriSamarinda2,
          desc: t("maps_smart_city.descSamarinda2"),
        },
        {
          id: 3,
          title: "Pejabat Pengelola Informasi dan Dokumentasi (PPID) Samarinda",
          image: imageGaleriSamarinda3,
          desc: t("maps_smart_city.descSamarinda3"),
        },
      ],
    },
    {
      id: 14,
      name: "Palembang",
      coor: [-2.9765658626173677, 104.77737943331648] as [number, number],
      link: "",
      thumbnail: "",
      photo: [
        {
          id: 1,
          title: "Website Kota Palembang",
          image: imageGaleriPalembang1,
          desc: t("maps_smart_city.descPalembang1"),
        },
        {
          id: 2,
          title: "Sistem Informasi Demografi Palembang (Sidemang)",
          image: imageGaleriPalembang2,
          desc: t("maps_smart_city.descPalembang2"),
        },
        {
          id: 3,
          title: "Sistem Informasi Bimbingan dan Konseling Online (Si Bucil)",
          image: imageGaleriPalembang3,
          desc: t("maps_smart_city.descPalembang3"),
        },
      ],
    },
    {
      id: 15,
      name: "Manado",
      coor: [1.4742324012968449, 124.8428466919196] as [number, number],
      link: "",
      thumbnail: "",
      photo: [
        {
          id: 1,
          title: "Website Kota Manado",
          image: imageGaleriManado1,
          desc: t("maps_smart_city.descManado1"),
        },
        {
          id: 2,
          title: "Satu Data Kota Manado",
          image: imageGaleriManado2,
          desc: t("maps_smart_city.descManado2"),
        },
      ],
    },
    {
      id: 16,
      name: "Surakarta",
      coor: [-7.575537322917199, 110.82439764926472] as [number, number],
      link: "",
      thumbnail: "",
      photo: [
        {
          id: 1,
          title: "Electronic Policing Solo (ELING SOLO)",
          image: imageGaleriSolo1,
          desc: t("maps_smart_city.descSolo1"),
        },
        {
          id: 2,
          title: "E - Lapor",
          image: imageGaleriSolo2,
          desc: t("maps_smart_city.descSolo2"),
        },
        {
          id: 3,
          title: "E - Service",
          image: imageGaleriSolo3,
          desc: t("maps_smart_city.descSolo3"),
        },
      ],
    },
    {
      id: 17,
      name: "Tangerang",
      coor: [-6.170031208641479, 106.64026127631075] as [number, number],
      link: "",
      thumbnail: "",
      photo: [
        {
          id: 1,
          title: "Tangerang Smart City",
          image: imageGaleriTangerang1,
          desc: t("maps_smart_city.descTangerang1"),
        },
        {
          id: 2,
          title: "Wifi Publik Kota Tangerang",
          image: imageGaleriTangerang2,
          desc: t("maps_smart_city.descTangerang2"),
        },
        {
          id: 3,
          title: "Peta Fasilitas Kesehatan Kota Tangerang",
          image: imageGaleriTangerang3,
          desc: t("maps_smart_city.descTangerang3"),
        },
        {
          id: 4,
          title: "Peta Perpustakaan Kota Tangerang",
          image: imageGaleriTangerang4,
          desc: t("maps_smart_city.descTangerang4"),
        },
      ],
    },
  ];

  const handlePopupOpen = (index: number) => {
    setActivePopup(index);
  };

  const handlePopupClose = () => {
    setActivePopup(null);
  };

  useEffect(() => {
    if (activePopup !== null && popoverRef.current) {
      popoverRef.current.focus();
    }
  }, [activePopup]);

  return (
    <section
      className="max-w-[1440px] mx-auto px-4 tablet:px-12 desktop:px-36 pt-4 pb-44 flex items-center justify-center flex-col"
      id={t("navbar.maps_smart_city")}
    >
      <h1 className="special-text font-general-sans-semibold desktop:text-[40px] tablet:text-3xl text-xl desktop:leading-10 text-center desktop:w-1/2 tablet:w-2/3">
        {t("maps_smart_city.title")}
      </h1>
      <MapContainer
        center={[-2.5, 118.0]}
        zoom={5}
        className="w-full h-[550px] mt-8 z-10"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {galeri.map((city, index) => (
          <Marker key={index} position={city.coor} icon={icon}>
            <Popup
              eventHandlers={{
                popupopen: () => handlePopupOpen(index),
                popupclose: handlePopupClose,
              }}
            >
              <div className="flex items-start flex-col gap-1">
                <h2 className="font-general-sans-semibold text-xl">
                  {city.name}
                </h2>
                <div className="flex items-center gap-2">
                  <h6 className="font-general-sans-regular">
                    {t("maps_smart_city.feature")}
                    {city.name}
                  </h6>
                  <Popover>
                    <PopoverTrigger>
                      <IoIosInformationCircleOutline />
                    </PopoverTrigger>
                    <PopoverContent
                      ref={popoverRef}
                      className="bg-black text-white p-4 rounded-md"
                      tabIndex={-1}
                    >
                      <p className="text-sm text-center">
                        {t("maps_smart_city.click")}
                      </p>
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
                    <CarouselItem key={photo.id || idx} className="basis-1/2">
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
                              <h1 className="font-general-sans-semibold text-left">
                                {photo.title}
                              </h1>
                              <Separator className="mb-2 border-[2px]" />
                              <p className="text-sm text-left font-general-sans-regular">
                                {photo.desc}
                              </p>
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
    </section>
  );
}

export default PetaGaleri;
