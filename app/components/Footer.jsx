import { navLinks } from "@/public/data/data";
import imgFooter from "@/public/img/main/img-footer.png";
import logo from "@/public/img/main/logo-footer.jpg";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { PiMapPinFill, PiPhoneFill } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="py-10 bg-gray-dark hidden sm:block">
      <div className="container mx-auto px-5 relative">
        <div className="w-full flex justify-between">
          <Link href="#">
            <Image
              src={logo}
              width="auto"
              height="auto"
              alt="Лого"
              className="max-w-[262px] cursor-pointer rounded-lg"
            />
          </Link>

          <div className="-ml-10 flex flex-col justify-between text-white">
            <a
              href="#"
              target="_blank"
              className="flex items-center gap-[10px] hover:opacity-90 animate-simple"
            >
              <PiMapPinFill className="text-[40px] " />
              <p className="text-[18px] font-semibold leading-7">
                г. Краснодар, <br /> ул. Лавочкина 21
              </p>
            </a>
            <a
              href="tel:89184706967"
              target="_blank"
              className="flex items-center gap-[10px]  hover:opacity-90 animate-simple"
            >
              <PiPhoneFill className="text-[40px]" />
              <p className="text-[18px] font-semibold">+7 (918) 470-69-67</p>
            </a>
            <a
              href="tel:89184706967"
              target="_blank"
              className="flex items-center gap-[10px] hover:opacity-90 animate-simple"
            >
              <MdOutlineAccessTimeFilled className="text-[40px]" />
              <p className="text-[18px] font-semibold leading-7">
                понедельник-пятница 8:00 - 19:00 <br />
                суббота, воскресенье 9:00 - 15:00
              </p>
            </a>
          </div>

          <nav className="flex flex-col gap-3">
            {navLinks.map(({ id, url, title }) => {
              return (
                <Link
                  key={id}
                  href={url}
                  className="text-[24px] text-white font-medium tracking-wide hover:text-gray-light animate-simple"
                >
                  {title}
                </Link>
              );
            })}
          </nav>
        </div>

        <p className="mt-6 text-white font-medium">©2025 «ВеликМед»</p>

        <Image
          src={imgFooter}
          width="auto"
          height="auto"
          alt="Красный крестик в круге"
          className="absolute -top-20 right-[250px] max-w-[160px]"
        />
      </div>
    </footer>
  );
}
