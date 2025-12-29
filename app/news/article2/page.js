import Image from 'next/image';
import img1 from '@/public/img/news/article2/img1.jpg';
import img2 from '@/public/img/news/article2/img2.jpg';

export default function Article1() {
  return (
    <main>
      <section className="section">
        <div className="container mx-auto px-5 ">
          <Image
            src={img1}
            width={1200}
            height={800}
            alt="Статья часть 1"
            className="-mt-5"
          />
          <Image
            src={img2}
            width={1200}
            height={800}
            alt="Статья часть 2"
            className="mb-10"
          />
        </div>
      </section>
    </main>
  );
}
