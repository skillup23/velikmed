import { navLinks } from "@/public/data/data";
import imgFooter from "@/public/img/main/img-footer.png";
import logo from "@/public/img/main/logo-footer.jpg";
import proDoctorov from "@/public/img/main/pro-doctorov.svg";
import Image from "next/image";
import Link from "next/link";
import { BiSolidFileDoc } from "react-icons/bi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { PiMapPinFill, PiPhoneFill } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="py-10 bg-gray-dark">
      <div className="container mx-auto px-5 relative">
        <div className="w-full flex flex-col sm:flex-row justify-between">
          <div>
            <Link href="/">
              <Image
                src={logo}
                width="auto"
                height="auto"
                alt="Лого"
                className="w-[209px] sm:w-[257px] mt-0 sm:-mt-4 cursor-pointer rounded-lg"
              />
            </Link>
            <Link
              href="https://prodoctorov.ru/krasnodar/lpu/105329-klinika-velikmed/"
              target="_blank"
            >
              <Image
                src={proDoctorov}
                width="auto"
                height="auto"
                alt="Лого"
                className="w-[150px] sm:w-[257px] mt-1 sm:mt-2 cursor-pointer rounded-lg"
              />
            </Link>
          </div>

          <nav className="flex sm:hidden flex-row flex-wrap gap-x-[22px] gap-y-4 justify-center">
            {navLinks.map(({ id, url, title }) => {
              return (
                <Link
                  key={id}
                  href={url}
                  className="text-[15px] text-white font-medium tracking-wide hover:text-gray-light animate-simple"
                >
                  {title}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 sm:mt-0 sm:-ml-10 flex flex-col justify-between text-white gap-3 sm:gap-7">
            <a
              href="#"
              target="_blank"
              className="flex items-center gap-[10px] hover:opacity-90 animate-simple"
            >
              <PiMapPinFill className="text-[35px] sm:text-[40px] text-orange" />
              <p className="text-[14px] sm:text-[18px] font-semibold leading-6 hover:text-gray-light sm:leading-7">
                г. Краснодар, <br /> ул. Лавочкина 21
              </p>
            </a>
            <a
              href="tel:89182468877"
              target="_blank"
              className="flex items-center gap-[10px]  hover:opacity-90 animate-simple"
            >
              <PiPhoneFill className="text-[35px] sm:text-[40px] text-orange" />
              <p className="text-[14px] sm:text-[18px] font-semibold leading-6 hover:text-gray-light sm:leading-7">
                +7 (918) 246-88-77
              </p>
            </a>
            <a
              href="tel:89184706967"
              target="_blank"
              className="flex items-center gap-[10px] hover:opacity-90 animate-simple"
            >
              <MdOutlineAccessTimeFilled className="text-[35px] sm:text-[40px] text-orange" />
              <p className="text-[14px] sm:text-[18px] font-semibold leading-6 hover:text-gray-light sm:leading-7">
                понедельник-пятница 8:00 - 19:00 <br />
                суббота, воскресенье 9:00 - 15:00
              </p>
            </a>
            <Link
              href="/documents"
              className="flex items-center gap-[10px] animate-simple"
            >
              <BiSolidFileDoc className="text-[35px] sm:text-[40px] text-orange" />
              <p className="text-[14px] sm:text-[18px] font-semibold leading-6 hover:text-gray-light sm:leading-7">
                Юридическая информация
              </p>
            </Link>
          </div>

          <nav className="hidden sm:flex flex-col gap-3">
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

        <p className="mt-10 sm:-mt-6 text-center sm:text-start text-white font-medium">
          ©2025 «ВеликМед»
        </p>

        <Image
          src={imgFooter}
          width="auto"
          height="auto"
          alt="Красный крестик в круге"
          className="absolute -top-20 right-6 sm:right-[250px] w-[120px] sm:max-w-[160px]"
        />
      </div>
    </footer>
  );
}
