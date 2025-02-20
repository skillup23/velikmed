'use client';

import { navLinks } from '@/public/data/data';
import logo from '@/public/img/main/logo-g.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { PiMapPinFill, PiPhoneFill } from 'react-icons/pi';
import BurgerButton from './BurgerButton';
import ButtonFeed from './ButtonFeed';
import MobileNav from './MobileNav';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function openMobileMenu() {
    setIsOpen(!isOpen);

    const b = document.querySelector('body');

    if (isOpen === false) {
      b.classList.add('overflow-hidden');
      b.classList.remove('overflow-auto');
    } else {
      b.classList.add('overflow-auto');
      b.classList.remove('overflow-hidden');
    }
  }

  return (
    <header>
      <div>
        <div className="container mx-auto pt-[6px] pb-[3px] xl:py-0 px-5 flex justify-between items-center">
          <Link href="#">
            <Image
              src={logo}
              width="auto"
              height="auto"
              alt="Лого"
              className="w-[145px] xl:w-[262px] cursor-pointer"
            />
          </Link>

          {/* <!-- Бургер меню кнопка --> */}
          <div
            onClick={() => {
              openMobileMenu();
            }}
          >
            <BurgerButton isOpen={isOpen}></BurgerButton>
          </div>

          <a
            href="https://yandex.ru/maps/-/CHqAJMJV"
            target="_blank"
            className="hidden md:flex items-center gap-1 hover:text-orange animate-simple"
          >
            <PiMapPinFill className="text-[30px] text-orange" />
            <p>
              г. Краснодар, <br /> ул. Лавочкина 21
            </p>
          </a>
          <a
            href="tel:89182468877"
            target="_blank"
            className="hidden md:flex items-center gap-1 hover:text-orange animate-simple"
          >
            <PiPhoneFill className="text-[30px] text-orange" />
            <p className="text-[18px] font-bold">+7 (918) 246-88-77</p>
          </a>
          <ButtonFeed style="hidden md:block" />
        </div>
      </div>

      <div className="bg-gray-dark">
        <div className="container mx-auto px-5">
          <h6 className="hidden sm:block py-[12.5px] text-white text-center tracking-normal">
            Часы приема: понедельник-пятница с 8:00 до 19:00 | суббота,
            воскресенье с 9:00 до 15:00
          </h6>
          <h6 className="block sm:hidden py-[7.5px] text-white text-center tracking-normal text-[12px]">
            Понедельник-пятница с 8:00 до 19:00 <br /> Суббота, воскресенье с
            9:00 до 15:00
          </h6>
        </div>
      </div>

      <div className="bg-orange hidden sm:block">
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

      <MobileNav
        navLinks={navLinks}
        isOpen={isOpen}
        openMobileMenu={openMobileMenu}
      />
    </header>
  );
}
