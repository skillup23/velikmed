import bannerMain from "@/public/img/main/bannerMain1.png";
import Image from "next/image";
import ButtonFeed from "./components/ButtonFeed";
import Heading from "./components/Heading";
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
              className="w-[480px] -mb-12 -mt-20"
            />
          </div>
        </div>
      </section>

      {/* ----------------- Услуги ----------------------- */}
      <section className="section">
        <div className="container mx-auto px-5">
          <Heading>Услуги</Heading>
          <div className="mt-6 grid grid-cols-[453px_262px_357px] gap-6 text-white">
            <div className="p-8 row-span-3 bg-orange rounded-xl">
              <h4>Прием специалистов</h4>
              <ul className="mt-6 flex flex-col gap-[18px] text-[20px] leading-6 font-medium tracking-wide">
                <li>Терапевт</li>
                <li>Педиатр</li>
                <li>Эндокринолог</li>
                <li>Гастроэнтеролог</li>
                <li>Невролог</li>
                <li>Кардиолог</li>
                <li>Онколог</li>
                <li>Гинеколог</li>
              </ul>
            </div>
            <div className="p-8 row-span-2 bg-orange rounded-xl">
              <h4>Диагностика</h4>
              <ul className="mt-6 flex flex-col gap-[18px] text-[20px] leading-6 font-medium tracking-wide">
                <li>Лаборатория CL</li>
                <li>УЗИ</li>
              </ul>
            </div>
            <div className="p-8 row-span-2 bg-orange rounded-xl">
              <h4>Хирургия</h4>
              <ul className="mt-6 flex flex-col gap-[18px] text-[20px] leading-6 font-medium tracking-wide">
                <li>Малоинвазивная хирургия</li>
                <li>Эстетическая гинекология</li>
              </ul>
            </div>
            <div className="p-8 col-span-2 bg-orange rounded-xl">
              <h4>Экспертиза временной нетрудоспособности (больничный)</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- Наши специалисты ----------------------- */}
      <section className="section mt-8 py-10 bg-orange">
        <div className="container mx-auto px-5">
          <Heading style="text-white">Наши специалисты</Heading>
          <SliderMain />
          {/* <TrendingSlider /> */}
        </div>
      </section>

      <section className="section"></section>

      <section className="section"></section>
    </main>
  );
}
