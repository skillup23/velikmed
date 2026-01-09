"use client";

import { doctors } from "@/public/data/data";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Doctors() {
  const [isShowAll, setIsShowAll] = useState(false);
  const componentRef = useRef(null); // Создаем ссылку на компонент

  const toggleShowAll = () => {
    const wasShowAll = isShowAll; // Проверяем состояние открыто или нет
    setIsShowAll(!isShowAll);

    // Прокручиваем страницу только при нажатии на кнопку "Скрыть"
    if (wasShowAll && componentRef.current) {
      const componentTop = componentRef.current.getBoundingClientRect().top;
      const offset = 80; // Смещение в 80 пикселей вверх
      window.scrollTo({
        top: window.scrollY + componentTop - offset,
        behavior: "smooth",
      });
    }
  };

  // Первые три элемента всегда видны
  const initialItems = doctors.slice(0, 3);
  // Остальные элементы, которые будут анимироваться
  const additionalItems = doctors.slice(3);

  return (
    <div className="flex flex-col" ref={componentRef}>
      {/* Привязываем ссылку к компоненту */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-x-6 animate-simple">
        {/* Первые три элемента */}
        {initialItems.map(({ id, fio, spec, workYear, foto, link }) => {
          return (
            <Link
              key={id}
              className="mb-6 pt-6 md:pt-8 px-6 flex flex-col items-start justify-between bg-white rounded-xl gap-[10px] md:gap-3 overflow-hidden"
              href={link}
            >
              <h4 className="leading-6 md:leading-8">{fio}</h4>
              <h6 className="my-auto py-2 px-[18px] text-orange border border-orange rounded-2xl inline-block">
                {spec}
              </h6>
              <h6 className="z-10">{workYear}</h6>
              <Image
                src={foto}
                width={350}
                height={350}
                alt="Специалист Клиники"
                loading="lazy"
                className="-mt-6 ml-6 -mr-6 items-end"
              />
            </Link>
          );
        })}

        {/* Остальные элементы с анимацией */}
        {additionalItems.map(({ id, fio, spec, workYear, foto }) => {
          return (
            <div
              key={id + 3} // Индекс смещен на 3, чтобы избежать конфликтов
              className={`px-6 flex flex-col items-start justify-between bg-white rounded-xl gap-[10px] md:gap-3 transition-all duration-300 ease-in-out overflow-hidden ${
                isShowAll
                  ? "mb-6 pt-6 md:pt-8 opacity-100 max-h-[500px]"
                  : "mb-0 pt-0 md:pt-0 opacity-0 max-h-0"
              }`}
            >
              <h4 className="leading-6 md:leading-8">{fio}</h4>
              <h6 className="my-auto py-2 px-[18px] text-orange border border-orange rounded-2xl inline-block">
                {spec}
              </h6>
              <h6 className="z-10">{workYear}</h6>
              <Image
                src={foto}
                width="auto"
                height="auto"
                alt="Специалист Клиники"
                className="w-[454px] -mt-6 ml-6 -mr-6 items-end"
              />
            </div>
          );
        })}
      </div>
      {/* Кнопка */}
      <button
        onClick={toggleShowAll}
        className="w-full sm:w-80 mx-auto mt-6 sm:mt-8 p-2 text-[18px] sm:text-[24px] uppercase border-2 border-gray-dark hover:bg-white rounded-lg cursor-pointer animate-simple"
      >
        {isShowAll ? "Скрыть" : "Все специалисты"}
      </button>
    </div>
  );
}
