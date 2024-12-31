"use client";
import arroyLeft from "@/public/img/main/arroyLeftOrange.svg";
import arroyRight from "@/public/img/main/arroyRightOrange.svg";
import heart from "@/public/img/main/heart-feedback.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div
    className="item w-[357px] shrink-0 rounded-xl overflow-hidden"
    data-value="1"
  >
    <h6 className="p-6 text-white bg-orange">Емильянова Екатерина</h6>
    <div className="relative p-6 bg-orange-light">
      <div className="overflow-y-auto h-[228px]">
        <p className="">
          Хочу выразить благодарность всему коллективу клиники «ВеликМед». С
          первого визита меня встретили дружелюбие и профессионализм. Персонал
          очень внимателен к каждому пациенту, всегда готовы помочь и объяснить
          все нюансы лечения. <br />
          <br />
          Особую признательность хочу выразить моему лечащему врачу Иванову
          Ивану Ивановичу. Его подход к лечению – это сочетание современных
          методов и индивидуального подхода к каждому пациенту. Благодаря его
          профессионализму я быстро пошел на поправку. Клиника оснащена
          современным оборудованием, а атмосфера внутри создает ощущение
          комфорта и доверия. Чистота и порядок везде, начиная от приемной и
          заканчивая процедурными кабинетами. <br />
          <br />
          Рекомендую клинику «ВеликМед» всем, кто ищет качественное медицинское
          обслуживание и внимательное отношение. Спасибо за ваш труд!
        </p>
      </div>

      <h6 className="mt-16">24.12.2024</h6>
      <Image
        src={heart}
        width="auto"
        height="auto"
        alt="Сердечко"
        className="absolute bottom-0 right-0 w-[111px] pointer-events-none"
      />
    </div>
  </div>,
  <div
    className="item w-[357px] shrink-0 rounded-xl overflow-hidden"
    data-value="2"
  >
    <h6 className="p-6 text-white bg-orange">Филякова Маргарита</h6>
    <div className="relative p-6 bg-orange-light">
      <div className="overflow-y-auto h-[228px]">
        <p className="">
          Хочу выразить огромную благодарность коллективу клиники «ВеликМед» за
          профессионализм, внимание к пациентам и высокий уровень обслуживания!
          <br />
          <br />
          Я обратилась сюда впервые несколько месяцев назад с проблемами со
          здоровьем, и уже после первого приема поняла, что попала в надежные
          руки. Врачи внимательно выслушали меня, провели тщательное
          обследование и предложили оптимальный план лечения. <br />
          <br />
          Особую признательность хочу выразить моему лечащему врачу Иванову
          Сергею Петровичу – он не только помог мне справиться с заболеванием,
          но и всегда поддерживал морально, что очень важно в процессе
          выздоровления. Отдельного упоминания заслуживает атмосфера в самой
          клинике. Здесь чувствуешь себя комфортно и спокойно, персонал вежлив и
          готов помочь в любой ситуации. Оборудование современное, а чистота и
          порядок радуют глаз. Теперь я рекомендую клинику «ВеликМед» всем своим
          знакомым и близким. Спасибо вам за вашу работу и заботу о пациентах!
        </p>
      </div>

      <h6 className="mt-16">20.12.2024</h6>
      <Image
        src={heart}
        width="auto"
        height="auto"
        alt="Сердечко"
        className="absolute bottom-0 right-0 w-[111px] pointer-events-none"
      />
    </div>
  </div>,
  <div
    className="item w-[357px] shrink-0 rounded-xl overflow-hidden"
    data-value="3"
  >
    <h6 className="p-6 text-white bg-orange">Котлярова Елена</h6>
    <div className="relative p-6 bg-orange-light">
      <div className="overflow-y-auto h-[228px]">
        <p className="">
          Особую признательность хочу выразить моему лечащему врачу Иванову
          Сергею Петровичу – он не только помог мне справиться с заболеванием,
          но и всегда поддерживал морально, что очень важно в процессе
          выздоровления. <br />
          <br />
          Отдельного упоминания заслуживает атмосфера в самой клинике. Здесь
          чувствуешь себя комфортно и спокойно, персонал вежлив и готов помочь в
          любой ситуации. <br />
          <br />
          Оборудование современное, а чистота и порядок радуют глаз. Теперь я
          рекомендую клинику «ВеликМед» всем своим знакомым и близким. Спасибо
          вам за вашу работу и заботу о пациентах!
        </p>
      </div>

      <h6 className="mt-16">16.12.2024</h6>
      <Image
        src={heart}
        width="auto"
        height="auto"
        alt="Сердечко"
        className="absolute bottom-0 right-0 w-[111px] pointer-events-none"
      />
    </div>
  </div>,
  <div
    className="item w-[357px] shrink-0 rounded-xl overflow-hidden"
    data-value="4"
  >
    <h6 className="p-6 text-white bg-orange">Емильянова Екатерина</h6>
    <div className="relative p-6 bg-orange-light">
      <div className="overflow-y-auto h-[228px]">
        <p className="">
          Хочу выразить благодарность всему коллективу клиники «ВеликМед». С
          первого визита меня встретили дружелюбие и профессионализм. Персонал
          очень внимателен к каждому пациенту, всегда готовы помочь и объяснить
          все нюансы лечения. <br />
          <br />
          Особую признательность хочу выразить моему лечащему врачу Иванову
          Ивану Ивановичу. Его подход к лечению – это сочетание современных
          методов и индивидуального подхода к каждому пациенту. Благодаря его
          профессионализму я быстро пошел на поправку. Клиника оснащена
          современным оборудованием, а атмосфера внутри создает ощущение
          комфорта и доверия. Чистота и порядок везде, начиная от приемной и
          заканчивая процедурными кабинетами. <br />
          <br />
          Рекомендую клинику «ВеликМед» всем, кто ищет качественное медицинское
          обслуживание и внимательное отношение. Спасибо за ваш труд!
        </p>
      </div>

      <h6 className="mt-16">14.12.2024</h6>
      <Image
        src={heart}
        width="auto"
        height="auto"
        alt="Сердечко"
        className="absolute bottom-0 right-0 w-[111px] pointer-events-none"
      />
    </div>
  </div>,
  <div
    className="item w-[357px] shrink-0 rounded-xl overflow-hidden"
    data-value="5"
  >
    <h6 className="p-6 text-white bg-orange">Емильянова Екатерина</h6>
    <div className="relative p-6 bg-orange-light">
      <div className="overflow-y-auto h-[228px]">
        <p className="">
          Хочу выразить благодарность всему коллективу клиники «ВеликМед». С
          первого визита меня встретили дружелюбие и профессионализм. Персонал
          очень внимателен к каждому пациенту, всегда готовы помочь и объяснить
          все нюансы лечения. <br />
          <br />
          Особую признательность хочу выразить моему лечащему врачу Иванову
          Ивану Ивановичу. Его подход к лечению – это сочетание современных
          методов и индивидуального подхода к каждому пациенту. Благодаря его
          профессионализму я быстро пошел на поправку. Клиника оснащена
          современным оборудованием, а атмосфера внутри создает ощущение
          комфорта и доверия. Чистота и порядок везде, начиная от приемной и
          заканчивая процедурными кабинетами. <br />
          <br />
          Рекомендую клинику «ВеликМед» всем, кто ищет качественное медицинское
          обслуживание и внимательное отношение. Спасибо за ваш труд!
        </p>
      </div>

      <h6 className="mt-16">04.12.2024</h6>
      <Image
        src={heart}
        width="auto"
        height="auto"
        alt="Сердечко"
        className="absolute bottom-0 right-0 w-[111px] pointer-events-none"
      />
    </div>
  </div>,
];

export default function SliderFeedback() {
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
        "Is Server"
      )}
    </>
  );
}
