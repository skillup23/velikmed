'use client';
import arroyLeft from '@/public/img/main/arroyLeftOrange.svg';
import arroyRight from '@/public/img/main/arroyRightOrange.svg';
import heart from '@/public/img/main/heart-feedback.png';
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
    className="item w-[99%] sm:w-[357px] shrink-0 rounded-xl overflow-hidden"
    data-value="1"
  >
    <h6 className="p-6 text-white bg-orange">Емильянова Екатерина</h6>
    <div className="relative p-6 bg-orange-light">
      <div className="overflow-y-auto h-[228px]">
        <p className="">
          Отличное отношение к пациентам со стороны врачей и со стороны
          администраторов. Стоимость услуг приемлемая. Результаты анализов
          быстро готовятся. <br />
          <br />
          Отдельную благодарность хочу выразить Елене Анатольевне. Врач от Бога,
          доброжелательная, внимательная, грамотная.
        </p>
      </div>

      <h6 className="mt-16">06.09.2025</h6>
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
    className="item w-[99%] sm:w-[357px] shrink-0 rounded-xl overflow-hidden"
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

      <h6 className="mt-16">16.09.2025</h6>
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
    className="item w-[99%] sm:w-[357px] shrink-0 rounded-xl overflow-hidden"
    data-value="3"
  >
    <h6 className="p-6 text-white bg-orange">Котлярова Елена</h6>
    <div className="relative p-6 bg-orange-light">
      <div className="overflow-y-auto h-[228px]">
        <p className="">
          Сдавала кровь на гормоны, очень вежливый персонал, без ожидания
          оформили необходимые документы. <br />
          <br />
          Чистое и комфортное помещение. Всё прошло быстро и аккуратно. Также
          проходили обследование УЗИ​ с дочкой, всё отлично. Рекомендую.
        </p>
      </div>

      <h6 className="mt-16">17.09.2025</h6>
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
    className="item w-[99%] sm:w-[357px] shrink-0 rounded-xl overflow-hidden"
    data-value="4"
  >
    <h6 className="p-6 text-white bg-orange">Пациент +7 938 53XXXXX</h6>
    <div className="relative p-6 bg-orange-light">
      <div className="overflow-y-auto h-[228px]">
        <p className="">
          Знала, что у нас во дворе открылась клиника «Великмед», но как-то
          сомневалась зайти, есть уже часто посещаемые клиники, но дальше от
          дома. <br />
          <br />
          Ситуация требовала быстрого решения проблемы, желательно сейчас. Зашла
          спросить, есть ли время на сегодня, меня сразу же записали на прием в
          ближайший час. Проблему решили сразу же, дали много полезных
          рекомендации, прием был комфортным и информативным. Планирую и дальше
          посещать эту клинику. <br />
          <br />
          Рекомендую к обследованиям по УЗИ​ и гинекологии. Других врачей пока
          не приходилось посещать в данной клинике. Также объяснили, что
          прикрепляют к клинике по СНИЛС, и все данные есть онлайн в личном
          кабинете «Медточки».
        </p>
      </div>

      <h6 className="mt-16">20.09.2025</h6>
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
    className="item w-[99%] sm:w-[357px] shrink-0 rounded-xl overflow-hidden"
    data-value="5"
  >
    <h6 className="p-6 text-white bg-orange">Пациент +7 961 58XXXXX</h6>
    <div className="relative p-6 bg-orange-light">
      <div className="overflow-y-auto h-[228px]">
        <p className="">
          Понравились чистота и вежливость персонала. Прихожу как к себе домой,
          а не в больницу, очень уютно. Администратор Ирина очень вежливая и
          добрая девушка. <br />
          <br />
          Расположение больницы относительно хорошо, я добираюсь с ГМР. Сдавала
          много раз кровь, Наталья - профессионал своего дела, спасибо большое.
        </p>
      </div>

      <h6 className="mt-16">18.09.2025</h6>
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
        <div className="relative mt-4 sm:mt-8">
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
            className="b-refs-buttons flex absolute -top-[66px] sm:-top-[86px] right-0 gap-[67px]"
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
        'Is Server'
      )}
    </>
  );
}
