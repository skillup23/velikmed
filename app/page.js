import bannerMain from '@/public/img/main/bannerMain1.png';
import bannerMainFon from '@/public/img/main/bannerMainFon.svg';
import bannerMainFonMob from '@/public/img/main/bannerMainFonMob.svg';
import princip from '@/public/img/main/img-princip.png';
// import mapKontact from '@/public/img/main/map.jpg';
import oKlinike from '@/public/img/main/o-klinike2.jpg';
import news1 from '@/public/img/news/1.jpg';
import Image from 'next/image';
import ButtonFeed from './components/ButtonFeed';
import Doctors from './components/Doctors';
import Heading from './components/Heading';
import Princips from './components/Princips';
import SliderFeedback from './components/SliderFeedback';
import UslugiMain from './components/UslugiMain';
import YandexMap2 from './components/YandexMap2';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-full">
      {/* ----------------- Первый экран ----------------------- */}
      <section className="section">
        <div className="container mx-auto px-5">
          <div className="relative w-full px-4 py-6 sm:p-12 flex flex-col sm:flex-row justify-between bg-gradient_second rounded-2xl">
            <div className="sm:w-1/2">
              <h1 className="font-display">Клиника ВеликМЕД</h1>
              <h5 className="mt-1 sm:mt-3 mb-5 sm:mb-10 leading-5 sm:leading-7">
                современная клиника
                <br />
                доктора Великжаниной
                <br />
                для заботы о вашем здоровье
              </h5>
              <ButtonFeed style={'hidden sm:block'} />
            </div>
            <Image
              src={bannerMain}
              width="auto"
              height="auto"
              alt="Баннер Фото"
              className="w-[253px] sm:w-[453px] -mb-6 sm:-mb-12 sm:-mt-22 ml-auto sm:ml-12 -mr-3 sm:-mr-12 z-10"
            />
            <Image
              src={bannerMainFon}
              width="auto"
              height="auto"
              alt="Баннер Фото"
              className="hidden sm:block absolute right-0 bottom-0"
            />
            <Image
              src={bannerMainFonMob}
              width="auto"
              height="auto"
              alt="Баннер Фото"
              className="sm:hidden absolute right-0 bottom-0"
            />
          </div>
          <ButtonFeed style={'block sm:hidden mt-4 w-full'} />
        </div>
      </section>

      {/* ----------------- Услуги ----------------------- */}
      <section className="section" id="uslugi">
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
      <section
        className="section relative mt-8 sm:py-10 bg-gradient2 z-10 rounded-3xl animate-simple"
        id="doctors"
      >
        <div className="container mx-auto px-5">
          <div className="p-6 md:p-0 bg-gradient1 rounded-xl">
            <Heading style="text-white">Наши специалисты</Heading>
            <Doctors />
          </div>
        </div>
      </section>

      {/* ----------------- О Клинике ----------------------- */}
      <section className="section" id="oklinike">
        <div className="container mx-auto px-5">
          <Heading>О клинике</Heading>
          <div className="w-full mt-6 sm:mt-8 flex flex-col-reverse sm:flex-row bg-gray-dark rounded-xl overflow-hidden gap-9">
            <div className="sm:w-1/2 pt-4 pb-6 px-6 sm:p-10 pr-0 text-white bg-gray-dark">
              <h6 className="mb-4 md:mb-6 text-[14px] sm:text-[18px] font-medium leading-6 md:leading-7 text-balance">
                Клиника ВеликМед — это современное медицинское учреждение,
                предлагающее широкий спектр услуг в области диагностики, лечения
                и профилактики заболеваний.
              </h6>
              <h6 className="mb-4 md:mb-6 text-[14px] sm:text-[18px] font-medium leading-6 md:leading-7">
                В клинике работают высококвалифицированные специалисты, которые
                используют передовые методы и технологии для обеспечения
                качественного и эффективного обслуживания пациентов.
              </h6>
              <h6 className="text-[14px] sm:text-[18px] font-medium leading-6 md:leading-7">
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

          <div className="mt-10 sm:mt-20 w-full h-[203px] lg:h-[406px] flex items-center justify-center bg-[url(../public/img/main/virtToor.jpg)] bg-right bg-cover rounded-2xl">
            <button className="px-4 sm:px-8 py-3 text-[14px] sm:text-[18px] text-white uppercase bg-orange rounded-xl cursor-pointer hover:bg-orange-dark animate-simple">
              <Link href="https://yandex.ru/maps/-/CLB3MVpN" target="_blank">
                виртуальный тур клиники Великмед
              </Link>
            </button>
          </div>
        </div>
      </section>

      {/* ----------------- Новости ----------------------- */}
      <section className="section" id="news">
        <div className="container mx-auto px-5">
          <Heading>Новости</Heading>
          <ul className="mt-6 flex flex-col gap-4">
            <Link href="/news/article1" className="group">
              <li className="flex rounded-xl border-orange border-2 overflow-hidden">
                <Image
                  src={news1}
                  width="auto"
                  height="auto"
                  alt="Фото"
                  className="w-1/2 -mb-28 sm:mb-0 sm:w-1/5 h-full"
                  priority
                />
                <div className="p-6 flex flex-col justify-between">
                  <p className="group-hover:text-orange transition duration-300">
                    Статья из журнала Красота&Спорт
                  </p>
                  <h5 className="font-bold group-hover:text-orange transition duration-300">
                    Елена Анатольевна Великжанина
                  </h5>
                  <div className="flex flex-col gap-1">
                    <p>Врач акушер-гинеколог со стажем</p>
                    <p>Организатор зравоохранения</p>
                    <p>Главный врач</p>
                    <p>
                      Генеральный директор многопрофильной клиники ООО
                      «ВеликМед»
                    </p>
                  </div>
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </section>

      {/* ----------------- Отзывы ----------------------- */}
      <section className="section" id="feedback">
        <div className="container mx-auto px-5">
          <Heading>Отзывы</Heading>
          <SliderFeedback />
        </div>
      </section>

      {/* ----------------- Контакты ----------------------- */}
      <section className="section mb-[72px]" id="contacts">
        <div className="container mx-auto px-5">
          <Heading>Контакты</Heading>
          <div className="w-full mt-6 sm:mt-8 p-6 sm:p-10 flex flex-col sm:flex-row bg-orange rounded-xl overflow-hidden gap-8 sm:gap-[58px]">
            <ul className="w-full flex flex-col text-white gap-4 sm:gap-10">
              <li className="flex justify-between">
                <h4 className="text-gray-dark sm:text-white">Телефон</h4>
                <h4 className="w-[150px] sm:w-[225px]">+7 918 246-88-77</h4>
              </li>
              <li className="flex justify-between">
                <h4 className="text-gray-dark sm:text-white">Email</h4>
                <h4 className="w-[150px] sm:w-[225px]">info@velikmed.ru</h4>
              </li>
              <li className="flex justify-between">
                <h4 className="text-gray-dark sm:text-white">Адрес</h4>
                <h4 className="w-[150px] sm:w-[225px] leading-6 sm:leading-9">
                  г. Краснодар, <br />
                  ул. Лавочкина, 21
                </h4>
              </li>
              <li className="flex justify-between">
                <h4 className="text-gray-dark sm:text-white leading-6 sm:leading-9">
                  Время <br />
                  работы
                </h4>
                <h4 className="w-[150px] sm:w-[225px] leading-6 sm:leading-9">
                  пн-пт 8:00-19:00 <br />
                  сб, вс 9:00-15:00
                </h4>
              </li>
            </ul>

            <div
              id="map"
              className="w-full sm:max-w-[603px] h-[271px] sm:h-[330px] object-cover rounded-xl overflow-hidden"
            >
              <YandexMap2 />
            </div>
            {/* <Image
              src={mapKontact}
              width="auto"
              height="auto"
              alt="Баннер Фото"
              className="w-full sm:max-w-[603px] h-[271px] sm:h-full object-cover rounded-xl"
            /> */}
          </div>
        </div>
      </section>
    </main>
  );
}
