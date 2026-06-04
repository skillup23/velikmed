import ButtonFeed from '@/app/components/ButtonFeed';
import foto from '@/public/img/main/doctors/selivanova.png';
import Image from 'next/image';

export const metadata = {
  title:
    'Селиванова Анастасия Николаевна - педиатр, детский гастроэнтеролог | Клиника Великмед',
  description:
    'Селиванова Анастасия Николаевна - педиатр, детский гастроэнтеролог в клинике Великмед. Диагностика и лечение различных медицинских проблем у детей.',
  keywords:
    'Селиванова Анастасия Николаевна, педиатр, детский гастроэнтеролог, Великмед, консультация педиатра',

  // Open Graph (для ВКонтакте, Facebook)
  openGraph: {
    title:
      'Селиванова Анастасия Николаевна - педиатр, детский гастроэнтеролог | Клиника Великмед',
    description:
      'Педиатр, детский гастроэнтеролог. Диагностика и лечение различных медицинских проблем у детей.',
    type: 'profile',
    url: 'https://velikmed.ru/doctors/selivanova',
    siteName: 'Клиника Великмед',
    locale: 'ru_RU',
    images: [
      {
        url: 'https://velikmed.ru/img/main/doctors/selivanova.png', // Специальное изображение для соцсетей
        width: 500,
        height: 500,
        alt: 'Селиванова Анастасия Николаевна - педиатр, детский гастроэнтеролог',
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

export default function Selivanova() {
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
              medicalSpecialty: 'Педиатрия',
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
              name: 'Селиванова Анастасия Николаевна',
              jobTitle: 'педиатр, детский гастроэнтеролог',
              description:
                'Педиатр, детский гастроэнтеролог в клинике Великмед. Специалист по диагностике и лечению различных медицинских проблем у детей.',
              worksFor: {
                '@type': 'MedicalOrganization',
                name: 'Клиника Великмед',
              },
              knowsAbout: ['Педиатрия', 'Гастроэнтерология'],
              experienceYears: '13',
              image: 'https://velikmed.ru/img/main/doctors/selivanova.png',
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
              alt="Селиванова Анастасия Николаевна - педиатр, детский гастроэнтеролог клиники Великмед"
              title="Селиванова Анастасия Николаевна, педиатр, детский гастроэнтеролог"
              loading="lazy"
              quality={80}
              className="mx-auto sm:mx-0"
            />
            <div className="flex flex-col gap-4">
              <h1 className="font-display text-3xl text-orange">
                Селиванова Анастасия Николаевна
              </h1>
              <p className="text-lg">педиатр, детский гастроэнтеролог</p>
              <p className="mb-8 text-lg">стаж 13 лет</p>

              <ButtonFeed style={'bg-orange mt-auto'} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
