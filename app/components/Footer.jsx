import { navLinks } from '@/public/data/data';
import imgFooter from '@/public/img/main/img-footer.png';
import logo from '@/public/img/main/logo-footer.png';
// import proDoctorov from '@/public/img/main/pro-doctorov.svg';
import Image from 'next/image';
import Link from 'next/link';
import { BiSolidFileDoc } from 'react-icons/bi';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import { PiMapPinFill, PiPhoneFill } from 'react-icons/pi';
import ProDoctorovButton from './ProDoctorovButton';
import ProDoctorovClinika from './ProDoctorovClinika';

export default function Footer() {
  return (
    <footer className="pt-2 pb-6 md:py-10 bg-gray-dark">
      <div className="container mx-auto px-5 relative">
        <div className="w-full flex flex-col sm:flex-row justify-between">
          <div>
            <Link href="/">
              <Image
                src={logo}
                width={450}
                height={100}
                alt="Лого"
                loading="lazy"
                quality={100}
                className="w-[209px] sm:w-[257px] mt-0 sm:-mt-4 cursor-pointer rounded-lg"
              />
            </Link>
            <div className="hidden md:block ">
              <ProDoctorovClinika />
            </div>

            {/* <Link
              href="https://prodoctorov.ru/krasnodar/lpu/105329-klinika-velikmed/"
              target="_blank"
            >
              <Image
                src={proDoctorov}
                width={450}
                height={150}
                alt="Лого"
                loading="lazy"
                quality={100}
                className="hidden md:block w-[150px] sm:w-[257px] mt-1 sm:mt-2 cursor-pointer rounded-lg"
              />
            </Link> */}
          </div>

          <nav className="mt-4 flex sm:hidden flex-row flex-wrap gap-x-[22px] gap-y-4 justify-center">
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

          <div className="block md:hidden mx-auto">
            <ProDoctorovClinika />
          </div>
          {/* <Image
            src={proDoctorov}
            width={450}
            height={150}
            alt="Лого"
            loading="lazy"
            quality={100}
            className="block md:hidden mx-auto w-[200px] mt-8 sm:mt-2 cursor-pointer rounded-lg"
          /> */}

          <div className="mt-8 sm:mt-0 sm:-ml-10 flex flex-col justify-between text-white gap-3 sm:gap-7">
            <a
              href="https://yandex.ru/maps/-/CHqAJMJV"
              target="_blank"
              className="flex items-center gap-[10px] hover:opacity-90 animate-simple"
            >
              <PiMapPinFill className="text-[35px] sm:text-[40px] text-orange" />
              <p className="text-[14px] sm:text-[18px] font-semibold leading-6 hover:text-orange sm:leading-7">
                г. Краснодар, <br /> ул. Лавочкина 21
              </p>
            </a>
            <a
              href="tel:89182468877"
              target="_blank"
              className="flex items-center gap-[10px]  hover:opacity-90 animate-simple"
            >
              <PiPhoneFill className="text-[35px] sm:text-[40px] text-orange" />
              <p className="text-[14px] sm:text-[18px] font-semibold leading-6 hover:text-orange sm:leading-7">
                +7 (918) 246-88-77
              </p>
            </a>
            <div className="flex items-center gap-[10px] hover:opacity-90 animate-simple">
              <MdOutlineAccessTimeFilled className="text-[35px] sm:text-[40px] text-orange" />
              <p className="text-[14px] sm:text-[18px] font-semibold leading-6 sm:leading-7">
                понедельник-пятница 8:00 - 19:00 <br />
                суббота, воскресенье 9:00 - 15:00
              </p>
            </div>
            <Link
              href="/documents"
              className="flex items-center gap-[10px] animate-simple"
            >
              <BiSolidFileDoc className="text-[35px] sm:text-[40px] text-orange" />
              <p className="text-[14px] sm:text-[18px] font-semibold leading-6 hover:text-orange sm:leading-7">
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
                  className="text-[24px] text-white font-medium tracking-wide hover:text-orange animate-simple"
                >
                  {title}
                </Link>
              );
            })}
          </nav>
        </div>

        <p className="mt-10 md:-mt-6 text-center sm:text-start text-white font-medium">
          ©2026 «ВеликМед»
        </p>

        <Image
          src={imgFooter}
          width={50}
          height={50}
          alt="Красный крестик в круге"
          className="absolute -top-16 md:-top-20 right-6 sm:right-[250px] w-[120px] sm:max-w-[160px]"
          loading="lazy"
        />
      </div>

      <ProDoctorovButton />
    </footer>
  );
}
