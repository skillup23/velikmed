import LogoG from "@/public/img/main/logo-g.png";
import Image from "next/image";
import Link from "next/link";
import { PiMapPinFill, PiPhoneFill } from "react-icons/pi";

export default function Header() {
  let id = 0;
  const navLinks = [
    {
      id: id++,
      url: "#",
      title: "Услуги",
    },
    {
      id: id++,
      url: "#",
      title: "Специалисты",
    },
    {
      id: id++,
      url: "#",
      title: "Диагностика",
    },
    {
      id: id++,
      url: "#",
      title: "Отзывы",
    },
    {
      id: id++,
      url: "#",
      title: "Контакты",
    },
  ];

  return (
    <header>
      <div>
        <div className="container mx-auto px-5 flex justify-between items-center">
          <Image
            src={LogoG}
            width="auto"
            height="auto"
            alt="Лого"
            className="max-w-[387px]"
            priority={true}
          />
          <a href="#" target="_blank" className="flex items-center gap-1">
            <PiMapPinFill className="text-[45px] text-orange" />
            <p className="text-[20px] leading-6">
              Краснодар, <br /> ул. Лавочкина 21
            </p>
          </a>
          <a
            href="tel:89184706967"
            target="_blank"
            className="flex items-center gap-1"
          >
            <PiPhoneFill className="text-[45px] text-orange" />
            <p className="text-[24px] leading-6 font-semibold">
              +7 (918) 470-69-67
            </p>
          </a>
          <button className="px-10 py-[18px] text-[24px] text-white uppercase bg-orange rounded-xl cursor-pointer">
            Записаться
          </button>
        </div>
      </div>

      <div className="bg-gray-dark">
        <div className="container mx-auto px-5">
          <h6 className="py-[9px] text-[24px] text-white text-center">
            Часы приема: понедельник-пятница с 8:00 до 19:00 | суббота,
            воскресенье с 9:00 до 15:00
          </h6>
        </div>
      </div>

      <div className="bg-orange">
        <nav className="container h-[91px] mx-auto px-5 flex justify-between items-center">
          {navLinks.map(({ id, url, title }) => {
            return (
              <Link
                key={id}
                href={url}
                className="text-[24px] text-white uppercase font-medium"
              >
                {title}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
