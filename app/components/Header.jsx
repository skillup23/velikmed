import { navLinks } from "@/public/data/data";
import logo from "@/public/img/main/logo-g.png";
import Image from "next/image";
import Link from "next/link";
import { PiMapPinFill, PiPhoneFill } from "react-icons/pi";
import ButtonFeed from "./ButtonFeed";

export default function Header() {
  return (
    <header>
      <div>
        <div className="container mx-auto px-5 flex justify-between items-center">
          <Link href="#">
            <Image
              src={logo}
              width="auto"
              height="auto"
              alt="Лого"
              className="max-w-[262px] cursor-pointer"
            />
          </Link>

          <a
            href="#"
            target="_blank"
            className="flex items-center gap-1 hover:opacity-90 animate-simple"
          >
            <PiMapPinFill className="text-[30px] text-orange" />
            <p>
              г. Краснодар, <br /> ул. Лавочкина 21
            </p>
          </a>
          <a
            href="tel:89184706967"
            target="_blank"
            className="flex items-center gap-1 hover:opacity-90 animate-simple"
          >
            <PiPhoneFill className="text-[30px] text-orange" />
            <p className="text-[18px] font-bold">+7 (918) 470-69-67</p>
          </a>
          <ButtonFeed />
        </div>
      </div>

      <div className="bg-gray-dark">
        <div className="container mx-auto px-5">
          <h6 className="py-[12.5px] text-white text-center tracking-normal">
            Часы приема: понедельник-пятница с 8:00 до 19:00 | суббота,
            воскресенье с 9:00 до 15:00
          </h6>
        </div>
      </div>

      <div className="bg-orange">
        <nav className="container h-[74px] mx-auto px-5 flex justify-between items-center">
          {navLinks.map(({ id, url, title }) => {
            return (
              <Link
                key={id}
                href={url}
                className="text-[20px] text-white uppercase font-medium tracking-wide hover:text-gray-light animate-simple"
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
