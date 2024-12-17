import Image from 'next/image';
import LogoG from '@/public/img/main/logo-g.png';

export default function Home() {
  return (
    <main className="w-full h-[100vh] flex flex-col items-center justify-center">
      <Image
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
    </main>
  );
}
