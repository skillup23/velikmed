import ButtonFeed from '@/app/components/ButtonFeed';
import foto from '@/public/img/main/doctors/diadchenko.png';
import Image from 'next/image';

export const metadata = {
  title:
    'Дьяченко Галия Фуатовна - косметист, косметолог-эстетист | Клиника Великмед',
  description:
    'Дьяченко Галия Фуатовна - косметист, косметолог-эстетист в клинике Великмед. Диагностика и лечение различных кожных заболеваний с помощью косметологических процедур. Запись на консультацию косметолога.',
  keywords:
    'Дьяченко Галия Фуатовна, косметист, косметолог-эстетист, косметические процедуры, Великмед, консультация косметолога',

  // Open Graph (для ВКонтакте, Facebook)
  openGraph: {
    title:
      'Дьяченко Галия Фуатовна - косметист, косметолог-эстетист | Клиника Великмед',
    description:
      'Косметист, косметолог-эстетист. Диагностика и лечение различных кожных заболеваний с помощью косметологических процедур.',
    type: 'profile',
    url: 'https://velikmed.ru/doctors/diadchenko',
    siteName: 'Клиника Великмед',
    locale: 'ru_RU',
    images: [
      {
        url: 'https://velikmed.ru/img/main/doctors/diadchenko.png', // Специальное изображение для соцсетей
        width: 500,
        height: 500,
        alt: 'Дьяченко Галия Фуатовна - косметист, косметолог-эстетист',
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

export default function Diadchenko() {
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
              medicalSpecialty: 'Гастроэнтерология',
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
              name: 'Дьяченко Галия Фуатовна',
              jobTitle: 'косметист, косметолог-эстетист',
              description:
                'Косметист, косметолог-эстетист в клинике Великмед. Специалист по диагностике и лечению различных кожных заболеваний с помощью косметологических процедур.',
              worksFor: {
                '@type': 'MedicalOrganization',
                name: 'Клиника Великмед',
              },
              knowsAbout: ['Косметические процедуры', 'Заболевания кожи'],
              experienceYears: '15',
              image: 'https://velikmed.ru/img/main/doctors/diadchenko.png',
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
              alt="Дьяченко Галия Фуатовна - косметист, косметолог-эстетист клиники Великмед"
              title="Дьяченко Галия Фуатовна, косметист, косметолог-эстетист"
              loading="lazy"
              quality={80}
              className="mx-auto sm:mx-0"
            />
            <div className="flex flex-col gap-4">
              <h1 className="font-display text-3xl text-orange">
                Дьяченко Галия Фуатовна
              </h1>
              <p className="text-lg">косметист, косметолог-эстетист</p>
              <p className="mb-8 text-lg">стаж 15 лет</p>

              <ButtonFeed style={'bg-orange mt-auto'} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
