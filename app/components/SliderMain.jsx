'use client';
import arroyLeft from '@/public/img/main/arroyLeft.svg';
import arroyRight from '@/public/img/main/arroyRight.svg';
import doctor1 from '@/public/img/main/doctor1.png';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div
    className="item w-[99%] sm:w-[357px] pt-8 px-6 shrink-0 bg-white rounded-xl overflow-hidden animate-simple"
    data-value="1"
  >
    <h4>Фамилия Имя Отчество</h4>
    <h6 className="my-[12px] py-2 px-[18px] text-orange border border-orange rounded-2xl inline-block">
      эндокринолог
    </h6>
    <h6>стаж 12 лет</h6>
    <Image
      src={doctor1}
      width="auto"
      height="auto"
      alt="Специалист Клиники"
      className="w-[454px] -mt-6 ml-6 -mr-6 pointer-events-none"
    />
  </div>,
  <div
    className="item w-[99%] sm:w-[357px] pt-8 px-6 shrink-0 bg-white rounded-xl overflow-hidden animate-simple"
    data-value="2"
  >
    <h4>Фамилия Имя Отчество</h4>
    <h6 className="my-[12px] py-2 px-[18px] text-orange border border-orange rounded-2xl inline-block">
      кардиолог
    </h6>
    <h6>стаж 17 лет</h6>
    <Image
      src={doctor1}
      width="auto"
      height="auto"
      alt="Специалист Клиники"
      className="w-[454px] -mt-6 ml-6 -mr-6 pointer-events-none"
    />
  </div>,
  <div
    className="item w-[99%] sm:w-[357px] pt-8 px-6 shrink-0 bg-white rounded-xl overflow-hidden animate-simple"
    data-value="3"
  >
    <h4>Фамилия Имя Отчество</h4>
    <h6 className="my-[12px] py-2 px-[18px] text-orange border border-orange rounded-2xl inline-block">
      гастроэнтеролог
    </h6>
    <h6>стаж 8 лет</h6>
    <Image
      src={doctor1}
      width="auto"
      height="auto"
      alt="Специалист Клиники"
      className="w-[454px] -mt-6 ml-6 -mr-6 pointer-events-none"
    />
  </div>,
  <div
    className="item w-[99%] sm:w-[357px] pt-8 px-6 shrink-0 bg-white rounded-xl overflow-hidden animate-simple"
    data-value="4"
  >
    <h4>Фамилия Имя Отчество</h4>
    <h6 className="my-[12px] py-2 px-[18px] text-orange border border-orange rounded-2xl inline-block">
      терапевт
    </h6>
    <h6>стаж 4 года</h6>
    <Image
      src={doctor1}
      width="auto"
      height="auto"
      alt="Специалист Клиники"
      className="w-[454px] -mt-6 ml-6 -mr-6 pointer-events-none"
    />
  </div>,
  <div
    className="item w-[99%] sm:w-[357px] pt-8 px-6 shrink-0 bg-white rounded-xl overflow-hidden animate-simple"
    data-value="5"
  >
    <h4>Фамилия Имя Отчество</h4>
    <h6 className="my-[12px] py-2 px-[18px] text-orange border border-orange rounded-2xl inline-block">
      педиатр
    </h6>
    <h6>стаж 2 года</h6>
    <Image
      src={doctor1}
      width="auto"
      height="auto"
      alt="Специалист Клиники"
      className="w-[454px] -mt-6 ml-6 -mr-6 pointer-events-none"
    />
  </div>,
];

export default function SliderMain() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const carousel = useRef(null);

  return (
    <>
      {isClient ? (
        <div className="relative mt-8">
          <AliceCarousel
            key="carousel"
            mouseTracking
            disableDotsControls
            disableButtonsControls
            infinite
            items={items}
            ref={carousel}
            responsive={responsive}
          />
          <nav key="nav" className="b-refs-navs">
            {items.map((item, i) => {
              return (
                <span key={i} onClick={() => carousel?.current?.slideTo(i)} />
              );
            })}
          </nav>
          <div
            key="btns"
            className="b-refs-buttons flex absolute -top-[86px] right-0 gap-[67px]"
          >
            <button onClick={(e) => carousel?.current?.slidePrev(e)}>
              <Image
                src={arroyLeft}
                width="auto"
                height="auto"
                alt="Стрелка влево"
                className="w-12 cursor-pointer"
              />
            </button>
            <button onClick={(e) => carousel?.current?.slideNext(e)}>
              <Image
                src={arroyRight}
                width="auto"
                height="auto"
                alt="Стрелка влево"
                className="w-12 cursor-pointer"
              />
            </button>
          </div>
        </div>
      ) : (
        'Загрузка данных'
      )}
    </>
  );
}
