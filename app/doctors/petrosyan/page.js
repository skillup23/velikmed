import ButtonFeed from '@/app/components/ButtonFeed';
import foto from '@/public/img/main/doctors/petrosyan.jpg';
import Image from 'next/image';

export const metadata = {
  title: 'Петросян Мери Сейрановна - педиатр | Клиника Великмед',
  description:
    'Петросян Мери Сейрановна - педиатр в клинике Великмед. Диагностика и лечение различных заболеваний у детей. Запись на консультацию педиатра.',
  keywords:
    'Петросян Мери Сейрановна, педиатр, детская медицина, Великмед, консультация педиатра',

  // Open Graph (для ВКонтакте, Facebook)
  openGraph: {
    title: 'Петросян Мери Сейрановна - педиатр | Клиника Великмед',
    description:
      'Педиатр. Диагностика и лечение различных заболеваний у детей.',
    type: 'profile',
    url: 'https://velikmed.ru/doctors/petrosyan',
    siteName: 'Клиника Великмед',
    locale: 'ru_RU',
    images: [
      {
        url: 'https://velikmed.ru/img/main/doctors/petrosyan.jpg', // Специальное изображение для соцсетей
        width: 500,
        height: 500,
        alt: 'Петросян Мери Сейрановна - педиатр',
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

export default function Petrosyan() {
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
              medicalSpecialty: 'Психология',
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
              name: 'Петросян Мери Сейрановна',
              jobTitle: 'педиатр',
              description:
                'Педиатр в клинике Великмед. Специалист по диагностике и лечению различных заболеваний у детей.',
              worksFor: {
                '@type': 'MedicalOrganization',
                name: 'Клиника Великмед',
              },
              knowsAbout: ['Педиатрия', 'Детская медицина'],
              experienceYears: '13',
              image: 'https://velikmed.ru/img/main/doctors/petrosyan.jpg',
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
              alt="Петросян Мери Сейрановна - педиатр клиники Великмед"
              title="Петросян Мери Сейрановна, педиатр"
              loading="lazy"
              quality={80}
              className="mx-auto sm:mx-0"
            />
            <div className="flex flex-col gap-4">
              <h1 className="font-display text-3xl text-orange">
                Петросян Мери Сейрановна
              </h1>
              <p className="text-lg">педиатр</p>
              <p className="mb-8 text-lg">стаж 13 лет</p>

              <ButtonFeed style={'bg-orange mt-auto'} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
