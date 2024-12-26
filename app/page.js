import bannerMain from '@/public/img/main/bannerMain1.png';
import Image from 'next/image';
import ButtonFeed from './components/ButtonFeed';

export default function Home() {
  return (
    <main className="w-full">
      <section className="section">
        <div className="container mx-auto px-5">
          <div className="w-full p-12 flex justify-between bg-orange-light rounded-2xl">
            <div className="w-1/2">
              <h1 className="font-display">Клиника ВеликМед</h1>
              <h5>
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
              className="w-[300px]"
              priority={true}
            />
          </div>
        </div>
      </section>
      {/* <Image
        src={LogoG}
        width="auto"
        height="auto"
        alt="Лого"
        className="w-[300px]"
        priority={true}
      />
      <h2 className="mt-4 text=2xl md:text-3xl font-bold text-center">
        Сайт находится в разработке
      </h2>
      <h1 className="font-display">Клиника ВеликМед</h1> */}
    </main>
  );
}
