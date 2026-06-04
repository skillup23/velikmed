import ButtonFeed from '@/app/components/ButtonFeed';
import foto from '@/public/img/main/doctors/skobelev.jpg';
import Image from 'next/image';

export const metadata = {
  title:
    'Скобелев Петр Петрович - андролог, врач УЗИ, уролог | Клиника Великмед',
  description:
    'Скобелев Петр Петрович - андролог, врач УЗИ, уролог в клинике Великмед. Диагностика и лечение различных урологических и андрологических проблем. Запись на консультацию врача.',
  keywords:
    'Скобелев Петр Петрович, андролог, врач УЗИ, уролог, Великмед, консультация врача',

  // Open Graph (для ВКонтакте, Facebook)
  openGraph: {
    title:
      'Скобелев Петр Петрович - андролог, врач УЗИ, уролог | Клиника Великмед',
    description:
      'Андролог, врач УЗИ, уролог. Диагностика и лечение различных урологических и андрологических проблем.',
    type: 'profile',
    url: 'https://velikmed.ru/doctors/skobelev',
    siteName: 'Клиника Великмед',
    locale: 'ru_RU',
    images: [
      {
        url: 'https://velikmed.ru/img/main/doctors/skobelev.jpg', // Специальное изображение для соцсетей
        width: 500,
        height: 500,
        alt: 'Скобелев Петр Петрович - андролог, врач УЗИ, уролог',
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

export default function Skobelev() {
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
              medicalSpecialty: 'Андрология',
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
              name: 'Скобелев Петр Петрович',
              jobTitle: 'андролог, врач УЗИ, уролог',
              description:
                'Андролог, врач УЗИ, уролог в клинике Великмед. Специалист по диагностике и лечению различных урологических и андрологических проблем.',
              worksFor: {
                '@type': 'MedicalOrganization',
                name: 'Клиника Великмед',
              },
              knowsAbout: ['Андрология', 'Урология'],
              experienceYears: '31',
              image: 'https://velikmed.ru/img/main/doctors/skobelev.jpg',
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
              alt="Скобелев Петр Петрович - андролог, врач УЗИ, уролог клиники Великmed"
              title="Скобелев Петр Петрович, андролог, врач УЗИ, уролог"
              loading="lazy"
              quality={80}
              className="mx-auto sm:mx-0"
            />
            <div className="flex flex-col gap-4">
              <h1 className="font-display text-3xl text-orange">
                Скобелев Петр Петрович
              </h1>
              <p className="text-lg">андролог, врач УЗИ, уролог</p>
              <p className="mb-8 text-lg">стаж 31 год</p>

              <ButtonFeed style={'bg-orange mt-auto'} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
