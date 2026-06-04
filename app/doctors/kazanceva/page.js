import ButtonFeed from '@/app/components/ButtonFeed';
import foto from '@/public/img/main/doctors/kazanceva.png';
import Image from 'next/image';

export const metadata = {
  title: 'Казанцева Юлия Андреевна - кардиолог | Клиника Великмед',
  description:
    'Казанцева Юлия Андреевна - кардиолог в клинике Великмед. Диагностика и лечение различных сердечно-сосудистых заболеваний. Запись на консультацию кардиолога.',
  keywords:
    'Казанцева Юлия Андреевна, кардиолог, сердце, Великмед, консультация кардиолога',

  // Open Graph (для ВКонтакте, Facebook)
  openGraph: {
    title: 'Казанцева Юлия Андреевна - кардиолог | Клиника Великмед',
    description:
      'Кардиолог. Диагностика и лечение различных сердечно-сосудистых заболеваний.',
    type: 'profile',
    url: 'https://velikmed.ru/doctors/kazanceva',
    siteName: 'Клиника Великмед',
    locale: 'ru_RU',
    images: [
      {
        url: 'https://velikmed.ru/img/main/doctors/kazanceva.png', // Специальное изображение для соцсетей
        width: 500,
        height: 500,
        alt: 'Казанцева Юлия Андреевна - кардиолог',
      },
    ],
  },

  // Для Яндекса - индексация
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    yandex: {
      index: true,
      follow: true,
    },
  },
};

export default function Kazanceva() {
  return (
    <main>
      {/* Структурированные данные для Яндекс и Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            // Для Google
            {
              '@context': 'https://schema.org',
              '@type': 'MedicalBusiness',
              name: 'Клиника Великмед',
              medicalSpecialty: 'Кардиология',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Краснодар',
                streetAddress: 'ул. Лавочкина, д. 21',
              },
              telephone: '+7 (918) 246-88-77',
              url: 'https://velikmed.ru',
              priceRange: '₽₽',
            },
            // Для Яндекс
            {
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Казанцева Юлия Андреевна',
              jobTitle: 'кардиолог',
              description:
                'Кардиолог в клинике Великмед. Специалист по диагностике и лечению различных сердечно-сосудистых заболеваний.',
              worksFor: {
                '@type': 'MedicalOrganization',
                name: 'Клиника Великмед',
              },
              knowsAbout: ['Кардиология', 'Сердце'],
              experienceYears: '18',
              image: 'https://velikmed.ru/img/main/doctors/kazanceva.png',
            },
          ]),
        }}
      />

      <section className="section">
        <div className="container mx-auto px-5">
          <div className="mb-14 flex flex-col sm:flex-row border-orange border-0 rounded-xl gap-12">
            <Image
              src={foto}
              width={320}
              height={320}
              alt="Казанцева Юлия Андреевна - кардиолог клиники Великмед"
              title="Казанцева Юлия Андреевна, кардиолог"
              loading="lazy"
              quality={80}
              className="mx-auto sm:mx-0"
            />
            <div className="flex flex-col gap-4">
              <h1 className="font-display text-3xl text-orange">
                Казанцева Юлия Андреевна
              </h1>
              <p className="text-lg">кардиолог</p>
              <p className="mb-8 text-lg">стаж 18 лет</p>

              <ButtonFeed style={'bg-orange mt-auto'} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
