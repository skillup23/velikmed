import bannerMain from '@/public/img/main/bannerMain3.png';
import bannerMainFon from '@/public/img/main/bannerMainFon.svg';
import bannerMainFonMob from '@/public/img/main/bannerMainFonMob2.svg';
import princip from '@/public/img/main/img-princip.png';
import oKlinike from '@/public/img/main/o-klinike2.jpg';
import yandexGood from '@/public/img/main/yandexGood.webp';
import news1 from '@/public/img/news/1.jpg';
import news2 from '@/public/img/news/article2.jpg';
import news3 from '@/public/img/news/VelikmedMart2026.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense, lazy } from 'react';

// Критичные компоненты (выше экрана) оставляем как есть
import ButtonFeed from './components/ButtonFeed';
import Heading from './components/Heading';

// Ленивая загрузка для остальных компонентов
const Doctors = lazy(() => import('./components/Doctors'));
const Princips = lazy(() => import('./components/Princips'));
const SliderFeedback = lazy(() => import('./components/SliderFeedback'));
const UslugiMain = lazy(() => import('./components/UslugiMain'));
const YandexMap2 = lazy(() => import('./components/YandexMap2'));

// Fallback компоненты
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <div className="w-8 h-8 border-2 border-orange border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function Home() {
  return (
    <main className="w-full">
      {/* ----------------- Первый экран ----------------------- */}
      <section className="section">
        <div className="container mx-auto px-5">
          <div className="relative w-full px-4 py-6 sm:p-12 flex flex-col sm:flex-row justify-between bg-gradient_second rounded-2xl">
            <div className="sm:w-1/2">
              <h1 className="font-display text-white title_velikmed">
                Клиника ВеликМЕД
              </h1>
              <h5 className="mt-1 sm:mt-3 mb-5 sm:mb-10 leading-5 sm:leading-7 text-white">
                современная клиника доктора Великжаниной
                <br />
                для заботы о вашем здоровье
              </h5>
              <ButtonFeed style={'hidden sm:block bg-gray-dark'} />
            </div>
            <Image
              src={bannerMain}
              width="auto"
              height="auto"
              alt="Баннер Фото"
              className="w-[300px] sm:w-[453px] -mb-6 sm:-mb-12 sm:-mt-22 ml-auto sm:ml-12 -mr-4 sm:-mr-12 z-10 rounded-2xl"
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
              className="sm:hidden absolute right-0 bottom-0 w-full rounded-2xl"
            />
          </div>
          <ButtonFeed style={'block sm:hidden mt-4 w-full bg-gray-dark'} />
        </div>
      </section>

      {/* ----------------- Услуги ----------------------- */}
      <section className="section" id="uslugi">
        <div className="container mx-auto px-5">
          <Heading>Услуги</Heading>
          <Suspense fallback={<LoadingSpinner />}>
            <UslugiMain />
          </Suspense>
        </div>
      </section>

      {/* ----------------- Наши принципы ----------------------- */}
      <section className="section">
        <div className="container mx-auto px-5">
          <Heading>Наши принципы</Heading>
          <div className="flex flex-col sm:flex-row">
            <Suspense
              fallback={
                <div className="flex-1 min-h-[200px]">
                  <LoadingSpinner />
                </div>
              }
            >
              <Princips />
            </Suspense>

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
            <Suspense fallback={<LoadingSpinner />}>
              <Doctors />
            </Suspense>
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
              width={500}
              height={500}
              alt="Баннер Фото"
              loading="lazy"
              quality={85}
              className="w-full -mb-28 sm:mb-0 sm:w-1/2 h-full"
            />
          </div>

          <div className="mt-10 sm:mt-20 flex flex-col sm:flex-row gap-6">
            <div className="w-full h-[203px] lg:h-[406px] flex items-center justify-center bg-[url(../public/img/main/virtToor.jpg)] bg-right bg-cover rounded-2xl">
              <button className="px-4 sm:px-8 py-3 text-[14px] sm:text-[18px] text-white uppercase bg-orange rounded-xl cursor-pointer hover:bg-orange-dark animate-simple">
                <Link
                  href="https://yandex.ru/maps/-/CLB3MVpN"
                  target="_blank"
                  prefetch={false} // Не префетчить внешние ссылки
                >
                  виртуальный тур клиники Великмед
                </Link>
              </button>
            </div>
            <Link
              href="https://yandex.ru/maps/-/CParJR~r"
              target="_blank"
              prefetch={false}
              className="hidden sm:block w-1/4"
            >
              <Image
                src={yandexGood}
                width={500}
                height={500}
                alt="Хорошее Место по мнению Яндекс"
                loading="lazy"
                quality={85}
                className="sm:h-[203px] lg:h-[406px] rounded-xl"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ----------------- Акции ----------------------- */}
      <section className="section" id="sales">
        <div className="container mx-auto px-5">
          <Heading>Акции</Heading>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <li className="w-full p-5 flex flex-col items-center justify-between rounded-xl bg-orange text-white gap-2">
              <h4 className="text-3xl font-bold text-center uppercase">
                Акция
              </h4>
              <p className="mb-2">до 31 мая</p>
              <h4 className="text-3xl font-bold text-center uppercase">
                Витамины и минералы:<br></br>
                <span className="text-xl">базовый комплекс</span>
              </h4>
              <ul className="my-4 mx-4">
                <li className="list-disc">Витамин В12</li>
                <li className="list-disc">Фолиевая кислота</li>
                <li className="list-disc">Кальций общий (Ca)</li>
                <li className="list-disc">Фосфор неорганический (P)</li>
                <li className="list-disc">Магний (Мg) в сыворотке крови</li>
                <li className="list-disc">Железо (Fe) в сыворотке крови</li>
                <li className="list-disc">25-OH витамин D общий</li>
              </ul>
              <h5 className="line-through text-3xl">4890 ₽</h5>
              <h3 className="text-5xl font-bold">1600 ₽</h3>
              <h3 className="mt-4 text-lg text-center">
                Подробности уточняйте по телефону:<br></br>
                <span className="font-bold text-2xl">8 918 246-88-77</span>
              </h3>
              <p className="mt-auto text-gray-dark text-center text-sm justify-self-end">
                ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ <br></br>НЕОБХОДИМА КОНСУЛЬТАЦИЯ
                СПЕЦИАЛИСТА
              </p>
            </li>

            <li className="w-full p-5 flex flex-col items-center justify-between rounded-xl bg-orange text-white gap-2">
              <h4 className="text-3xl font-bold text-center uppercase">
                Акция
              </h4>
              <p className="mb-2">до 31 мая</p>
              <h4 className="text-3xl font-bold text-center uppercase">
                Здоров ты – <br />
                здорова страна
              </h4>
              <h4 className="mt-4 text-3xl text-center">Чек-ап анализы</h4>
              <h5 className="mt-auto line-through text-3xl">12560 ₽</h5>
              <h3 className="text-5xl font-bold">4000 ₽</h3>
              <h3 className="mt-4 text-lg text-center">
                Подробности уточняйте по телефону:<br></br>
                <span className="font-bold text-2xl">8 918 246-88-77</span>
              </h3>
              <p className="text-gray-dark text-center text-sm justify-self-end">
                ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ <br></br>НЕОБХОДИМА КОНСУЛЬТАЦИЯ
                СПЕЦИАЛИСТА
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* ----------------- Новости ----------------------- */}
      <section className="section" id="news">
        <div className="container mx-auto px-5">
          <Heading>Новости</Heading>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Image
              src={news3}
              width={500}
              height={800}
              alt="Фото"
              loading="lazy"
              quality={75}
              className="w-full sm:w-1/2 h-full border-orange border-2 rounded-xl"
            />
            <ul className="flex flex-col gap-4">
              <Link href="/news/article1" className="group">
                <li className="flex flex-col sm:flex-row rounded-xl border-orange border-2 overflow-hidden">
                  <Image
                    src={news1}
                    width={200}
                    height={200}
                    alt="Фото"
                    loading="lazy"
                    quality={75}
                    className="w-full sm:w-1/3 h-full"
                  />
                  <div className="p-6 flex flex-col justify-between gap-3 sm:gap-4 text-center">
                    <p className="group-hover:text-orange transition duration-300">
                      Статья из журнала Красота&Спорт
                    </p>
                    <h5 className="font-bold text-xl group-hover:text-orange transition duration-300">
                      Елена Анатольевна Великжанина
                    </h5>
                    <div className="flex flex-col gap-4">
                      <p>Врач акушер-гинеколог со стажем</p>
                      <p>Организатор зравоохранения</p>
                      <p>Главный врач</p>
                      <p>
                        Генеральный директор многопрофильной клиники
                        ООО&nbsp;«ВеликМед»
                      </p>
                    </div>
                  </div>
                </li>
              </Link>

              <Link href="/news/article2" className="group">
                <li className="flex flex-col sm:flex-row rounded-xl border-orange border-2 overflow-hidden">
                  <Image
                    src={news2}
                    width={200}
                    height={200}
                    alt="Фото"
                    loading="lazy"
                    quality={75}
                    className="w-full sm:w-1/3 h-full"
                  />
                  <div className="p-6 flex flex-col justify-between gap-3 sm:gap-4 text-center">
                    <p className="group-hover:text-orange transition duration-300">
                      Статья из журнала Красота&Спорт
                    </p>
                    <h5 className="font-bold text-xl group-hover:text-orange transition duration-300">
                      «ВеликМед»: медицина, в которую хочется вернуться
                    </h5>
                    <div className="flex flex-col gap-4">
                      <p>Автор:</p>
                      <p>
                        Генеральный директор многопрофильной клиники
                        ООО&nbsp;«ВеликМед»
                      </p>
                      <p>Врач акушер-гинеколог со стажем</p>
                      <p>Елена Анатольевна Великжанина</p>
                    </div>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </section>

      {/* ----------------- Отзывы ----------------------- */}
      <section className="section">
        <div className="container mx-auto px-5">
          <Heading>Отзывы</Heading>
          <Suspense
            fallback={
              <div className="h-48">
                <LoadingSpinner />
              </div>
            }
          >
            <SliderFeedback />
          </Suspense>
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
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <div className="text-center">
                      <div className="w-8 h-8 border-2 border-orange border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                      <p className="text-sm text-gray-600">Загрузка карты...</p>
                    </div>
                  </div>
                }
              >
                <YandexMap2 />
              </Suspense>
            </div>

            <Link
              href="https://yandex.ru/maps/-/CParJR~r"
              target="_blank"
              prefetch={false}
              className="block sm:hidden"
            >
              <Image
                src={yandexGood}
                width={500}
                height={500}
                alt="Хорошее Место по мнению Яндекс"
                loading="lazy"
                quality={85}
                className="sm:h-[203px] lg:h-[406px] rounded-xl"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
