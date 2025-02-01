import yslugi1 from "@/public/img/main/yslugi1.png";
import Image from "next/image";
import Link from "next/link";
import { PiMapPinFill, PiPhoneFill } from "react-icons/pi";

export default function MobileNav({ navLinks, isOpen }) {
  return (
    <div
      className={`${
        isOpen ? `translate-x-0` : `-translate-x-full`
      } flex lg:hidden absolute w-full h-dvh bg-orange p-8 top-[66px] sm:top-[93px] flex-col gap-10 animate-simple z-30`}
    >
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

      <Image
        src={yslugi1}
        width="auto"
        height="auto"
        alt="Услуги"
        className="w-[177px] absolute top-[240px] right-9"
      />

      <div className="text-white">
        <div className="mt-[127px] mx-auto flex w-full items-center justify-center gap-2">
          <PiMapPinFill className="text-[32px] " />
          <p>Краснодар, ул. Лавочкина 21</p>
        </div>
        <div className="mt-[13px] flex w-full items-center justify-center gap-2">
          <PiPhoneFill className="text-[32px]" />
          <p className="text-[18px]">+7 (918) 470-69-67</p>
        </div>

        <p className="mt-8 text-center text-[12px]">
          Часы приема: <br />
          понедельник-пятница 8:00 - 19:00
          <br /> суббота, воскресенье 9:00 - 15:00
        </p>
      </div>
    </div>
  );
}
