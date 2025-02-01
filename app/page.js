import bannerMain from "@/public/img/main/bannerMain1.png";
import princip from "@/public/img/main/img-princip.png";
import mapKontact from "@/public/img/main/map.jpg";
import oKlinike from "@/public/img/main/o-klinike.jpg";
import Image from "next/image";
import ButtonFeed from "./components/ButtonFeed";
import Heading from "./components/Heading";
import Princips from "./components/Princips";
import SliderFeedback from "./components/SliderFeedback";
import SliderMain from "./components/SliderMain";
import UslugiMain from "./components/UslugiMain";

export default function Home() {
  return (
    <main className="w-full">
      {/* ----------------- Первый экран ----------------------- */}
      <section className="section">
        <div className="container mx-auto px-5">
          <div className="w-full px-4 py-6 sm:p-12 flex flex-col sm:flex-row justify-between bg-orange-light rounded-2xl">
            <div className="sm:w-1/2">
              <h1 className="font-display ">Клиника ВеликМЕД</h1>
              <h5 className="mt-1 sm:mt-3 mb-6 sm:mb-10 leading-5 sm:leading-7">
                современная клиника
                <br />
                для заботы о вашем здоровье
              </h5>
              <ButtonFeed style={"hidden sm:block"} />
            </div>
            <Image
              src={bannerMain}
              width="auto"
              height="auto"
              alt="Баннер Фото"
              className="w-[253px] sm:w-[480px] -mb-6 sm:-mb-12 sm:-mt-20 ml-auto sm:ml-12 -mr-3 sm:-mr-12"
            />
          </div>
          <ButtonFeed style={"block sm:hidden mt-4 w-full"} />
        </div>
      </section>

      {/* ----------------- Услуги ----------------------- */}
      <section className="section">
        <div className="container mx-auto px-5">
          <Heading>Услуги</Heading>
          <UslugiMain />
        </div>
      </section>

      {/* ----------------- Наши принципы ----------------------- */}
      <section className="section">
        <div className="container mx-auto px-5">
          <Heading>Наши принципы</Heading>
          <div className="flex flex-col sm:flex-row">
            <Princips />

            <Image
              src={princip}
              width="auto"
              height="auto"
              alt="Фонендоскоп"
              className="w-[140px] sm:w-[425px] mt-6 sm:-mt-12 -mb-10 sm:-mb-14 mx-auto"
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
          <div className="w-full mt-8 flex flex-col-reverse sm:flex-row bg-gray-dark rounded-xl overflow-hidden gap-10">
            <div className="sm:w-1/2 pt-4 pb-6 px-6 sm:p-10 pr-0 text-white bg-gray-dark">
              <h6 className="mb-8 text-[14px] sm:text-[19px] font-medium leading-7 text-balance">
                Клиника ВеликМед — это современное медицинское учреждение,
                предлагающее широкий спектр услуг в области диагностики, лечения
                и профилактики заболеваний.
              </h6>
              <h6 className="mb-8 text-[14px] sm:text-[19px] font-medium leading-7 text-balance">
                В клинике работают высококвалифицированные специалисты, которые
                используют передовые методы и технологии для обеспечения
                качественного и эффективного обслуживания пациентов.
              </h6>
              <h6 className="text-[14px] sm:text-[19px] font-medium leading-7 text-balance">
                Клиника оснащена современным оборудованием, которое позволяет
                проводить диагностику и лечение на высоком уровне.
              </h6>
            </div>

            <Image
              src={oKlinike}
              width="auto"
              height="auto"
              alt="Баннер Фото"
              className="w-full -mb-28 sm:mb-0 sm:w-1/2 h-full"
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
