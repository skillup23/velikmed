"use client";

import { doctors } from "@/public/data/data";
import Image from "next/image";
import { useState } from "react";

export default function Doctors() {
  const [isDoctors, setIsDoctors] = useState(doctors.slice(0, 3));
  const [isShowAll, setIsShowAll] = useState(false);

  function loadMore(item) {
    setIsDoctors(doctors.slice(0, item));
    setIsShowAll(true);
  }

  function loadStart() {
    setIsDoctors(doctors.slice(0, 3));
    setIsShowAll(false);

    window.scrollBy(0, -1600);
  }

  return (
    <div className="flex flex-col">
      <div className="mt-6 grid grid-cols-3 gap-6 animate-simple">
        {isDoctors.map(({ id, fio, spec, workYear, foto }) => {
          return (
            <div
              key={id}
              className="pt-8 px-6 flex flex-col items-start justify-between bg-white rounded-xl overflow-hidden gap-3 animate-simple"
            >
              <h4>{fio}</h4>
              <h6 className="my-auto py-2 px-[18px] text-orange border border-orange rounded-2xl inline-block">
                {spec}
              </h6>
              <h6>{workYear}</h6>
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

      {isShowAll ? (
        <button
          onClick={() => {
            loadStart();
          }}
          className="w-full sm:w-80 mx-auto mt-6 sm:mt-8 p-2 text-[18px] sm:text-[24px] uppercase border-2 border-gray-dark hover:bg-white rounded-lg cursor-pointer animate-simple"
        >
          скрыть
        </button>
      ) : (
        <button
          onClick={() => {
            loadMore(doctors.length);
          }}
          className="w-full sm:w-80 mx-auto mt-6 sm:mt-8 p-2 text-[18px] sm:text-[24px] uppercase border-2 border-gray-dark hover:bg-white rounded-lg cursor-pointer animate-simple"
        >
          все специалисты
        </button>
      )}
    </div>
  );
}
