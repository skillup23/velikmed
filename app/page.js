import bannerMain from "@/public/img/main/bannerMain1.png";
import princip from "@/public/img/main/img-princip.png";
import mapKontact from "@/public/img/main/map.jpg";
import oKlinike from "@/public/img/main/o-klinike.jpg";
import yslugi1 from "@/public/img/main/yslugi1.png";
import yslugi2 from "@/public/img/main/yslugi2.png";
import yslugi3 from "@/public/img/main/yslugi3.png";
import yslugi4 from "@/public/img/main/yslugi4.png";
import Image from "next/image";
import ButtonFeed from "./components/ButtonFeed";
import Heading from "./components/Heading";
import SliderFeedback from "./components/SliderFeedback";
import SliderMain from "./components/SliderMain";

export default function Home() {
  return (
    <main className="w-full">
      {/* ----------------- Первый экран ----------------------- */}
      <section className="section">
        <div className="container mx-auto px-5">
          <div className="w-full p-12 flex justify-between bg-orange-light rounded-2xl">
            <div className="w-1/2">
              <h1 className="font-display">Клиника ВеликМед</h1>
              <h5 className="mt-3 mb-10 leading-7">
                современная клиника
                <br />
                для заботы о вашем здоровье
              </h5>
              <ButtonFeed />
            </div>
            <Image
              src={bannerMain}
              width="auto"
              height="auto"
              alt="Баннер Фото"
              className="w-[480px] -mb-12 -mt-20 ml-12 -mr-12"
            />
          </div>
        </div>
      </section>

      {/* ----------------- Услуги ----------------------- */}
      <section className="section">
        <div className="container mx-auto px-5">
          <Heading>Услуги</Heading>
          <div className="mt-6 grid grid-cols-[453px_262px_357px] gap-6 text-white">
            <div className="relative p-8 row-span-3 bg-gradient rounded-xl">
              <h4>Прием специалистов</h4>
              <ul className="mt-6 flex flex-col gap-5 text-[20px] leading-6 font-medium tracking-wide">
                <li>Терапевт</li>
                <li>Педиатр</li>
                <li>Эндокринолог</li>
                <li>Гастроэнтеролог</li>
                <li>Невролог</li>
                <li>Кардиолог</li>
                <li>Онколог</li>
                <li>Гинеколог</li>
              </ul>
              <Image
                src={yslugi1}
                width="auto"
                height="auto"
                alt="Услуги"
                className="w-[177px] absolute bottom-2 right-3"
              />
            </div>

            <div className="relative p-8 row-span-2 bg-gradient rounded-xl">
              <h4>Диагностика</h4>
              <ul className="mt-6 flex flex-col gap-5 text-[20px] leading-6 font-medium tracking-wide">
                <li>Лаборатория CL</li>
                <li>УЗИ</li>
              </ul>
              <Image
                src={yslugi2}
                width="auto"
                height="auto"
                alt="Услуги"
                className="w-[64px] absolute bottom-6 right-8"
              />
            </div>

            <div className="relative p-8 row-span-2 bg-gradient rounded-xl">
              <h4>Хирургия</h4>
              <ul className="mt-6 flex flex-col gap-5 text-[20px] leading-6 font-medium tracking-wide">
                <li className="leading-7">
                  Малоинвазивная <br /> хирургия
                </li>
                <li className="mb-7 leading-7">
                  Эстетическая <br /> гинекология
                </li>
              </ul>
              <Image
                src={yslugi3}
                width="auto"
                height="auto"
                alt="Услуги"
                className="w-[221px] absolute bottom-0 right-0"
              />
            </div>

            <div className="relative p-8 col-span-2 bg-gradient rounded-xl">
              <h4 className="mb-8">
                Экспертиза временной нетрудоспособности (больничный)
              </h4>
              <Image
                src={yslugi4}
                width="auto"
                height="auto"
                alt="Услуги"
                className="w-[107px] absolute bottom-0 right-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- Наши принципы ----------------------- */}
      <section className="section">
        <div className="container mx-auto px-5">
          <Heading>Наши принципы</Heading>
          <div className="flex">
            <ul className="mt-8 mr-[71px] flex flex-col gap-6">
              <li className="h-[77px] flex gap-[22px] items-center">
                <p className="w-[88px] font-display font-normal text-[64px] text-orange">
                  01
                </p>
                <h4>Доказательный подход</h4>
              </li>
              <li className="h-[77px] flex gap-[22px] items-center">
                <p className="w-[88px] font-display font-normal text-[64px] text-orange">
                  02
                </p>
                <h4>Высокий экспертный уровень врачей</h4>
              </li>
              <li className="h-[77px] flex gap-[22px] items-center">
                <p className="w-[88px] font-display font-normal text-[64px] text-orange">
                  03
                </p>
                <h4>Врачи всегда на стороне пациента</h4>
              </li>
              <li className="h-[77px] flex gap-[22px] items-center">
                <p className="w-[88px] font-display font-normal text-[64px] text-orange">
                  04
                </p>
                <h4>Соблюдение медицинской этики</h4>
              </li>
              <li className="h-[77px] flex gap-[22px] items-center">
                <p className="w-[88px] font-display font-normal text-[64px] text-orange">
                  05
                </p>
                <h4>Сервис со вниманием к деталям</h4>
              </li>
            </ul>

            <Image
              src={princip}
              width="auto"
              height="auto"
              alt="Фонендоскоп"
              className="w-[425px] -mt-12 -mb-14"
            />
          </div>
        </div>
      </section>

      {/* ----------------- Наши специалисты ----------------------- */}
      <section className="section relative mt-8 py-10 bg-gradient rounded-2xl z-10">
        <div className="container mx-auto px-5">
          <Heading style="text-white">Наши специалисты</Heading>
          <SliderMain />

          {/* <TrendingSlider /> */}
        </div>
      </section>

      {/* ----------------- О Клинике ----------------------- */}
      <section className="section">
        <div className="container mx-auto px-5">
          <Heading>О клинике</Heading>
          <div className="w-full mt-8 flex bg-gray-dark rounded-xl overflow-hidden gap-10">
            <div className="w-1/2 p-10 pr-0 text-white">
              <h6 className="mb-8 text-[19px] font-medium leading-7">
                Клиника ВеликМед — это современное медицинское учреждение,
                предлагающее широкий спектр услуг в области диагностики, лечения
                и профилактики заболеваний.
              </h6>
              <h6 className="mb-8 text-[19px] font-medium leading-7">
                В клинике работают высококвалифицированные специалисты, которые
                используют передовые методы и технологии для обеспечения
                качественного и эффективного обслуживания пациентов.
              </h6>
              <h6 className="text-[19px] font-medium leading-7">
                Клиника оснащена современным оборудованием, которое позволяет
                проводить диагностику и лечение на высоком уровне.
              </h6>
            </div>

            <Image
              src={oKlinike}
              width="auto"
              height="auto"
              alt="Баннер Фото"
              className="w-1/2 h-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* ----------------- Отзывы ----------------------- */}
      <section className="section">
        <div className="container mx-auto px-5">
          <Heading>Отзывы</Heading>
          <SliderFeedback />
        </div>
      </section>

      {/* ----------------- Контакты ----------------------- */}
      <section className="section mb-[72px]">
        <div className="container mx-auto px-5">
          <Heading>Контакты</Heading>
          <div className="w-full mt-8 p-10 flex bg-orange rounded-xl overflow-hidden gap-[68px]">
            <ul className="w-full flex flex-col text-white gap-10">
              <li className="flex justify-between">
                <h4>Телефон</h4>
                <h4>+7 918 470-69-67</h4>
              </li>
              <li className="flex justify-between">
                <h4>Email</h4>
                <h4>info@velikmed.ru</h4>
              </li>
              <li className="flex justify-between">
                <h4>Адрес</h4>
                <h4>
                  г. Краснодар, <br />
                  ул. Лавочкина, 21
                </h4>
              </li>
              <li className="flex justify-between">
                <h4>
                  Время <br />
                  работы
                </h4>
                <h4>
                  пн-пт 8:00-19:00 <br />
                  сб, вс 9:00-15:00
                </h4>
              </li>
            </ul>
            <Image
              src={mapKontact}
              width="auto"
              height="auto"
              alt="Баннер Фото"
              className="max-w-[603px] h-full rounded-xl"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
