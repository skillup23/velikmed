import ButtonFeed from '@/app/components/ButtonFeed';
import foto from '@/public/img/main/doctors/kireeva.png';
import Image from 'next/image';

export const metadata = {
  title: 'Киреева Елена Фуатовна - психолог | Клиника Великмед',
  description:
    'Киреева Елена Фуатовна - психолог в клинике Великмед. Диагностика и лечение различных психологических проблем с помощью психотерапевтических процедур. Запись на консультацию психолога.',
  keywords:
    'Киреева Елена Фуатовна, психолог, психология, Великмед, консультация психолога',

  // Open Graph (для ВКонтакте, Facebook)
  openGraph: {
    title: 'Киреева Елена Фуатовна - психолог | Клиника Великмед',
    description:
      'Психолог. Диагностика и лечение различных психологических проблем с помощью психотерапевтических процедур.',
    type: 'profile',
    url: 'https://velikmed.ru/doctors/kireeva',
    siteName: 'Клиника Великмед',
    locale: 'ru_RU',
    images: [
      {
        url: 'https://velikmed.ru/img/main/doctors/kireeva.png', // Специальное изображение для соцсетей
        width: 500,
        height: 500,
        alt: 'Киреева Елена Фуатовна - психолог',
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

export default function Kireeva() {
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
              name: 'Киреева Елена Фуатовна',
              jobTitle: 'психолог',
              description:
                'Психолог в клинике Великмед. Специалист по диагностике и лечению различных психологических проблем с помощью психотерапевтических процедур.',
              worksFor: {
                '@type': 'MedicalOrganization',
                name: 'Клиника Великмед',
              },
              knowsAbout: ['Психология', 'Психотерапия'],
              experienceYears: '13',
              image: 'https://velikmed.ru/img/main/doctors/kireeva.png',
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
              alt="Киреева Елена Фуатовна - психолог клиники Великмед"
              title="Киреева Елена Фуатовна, психолог"
              loading="lazy"
              quality={80}
              className="mx-auto sm:mx-0"
            />
            <div className="flex flex-col gap-4">
              <h1 className="font-display text-3xl text-orange">
                Киреева Елена Фуатовна
              </h1>
              <p className="text-lg">психолог</p>
              <p className="mb-8 text-lg">стаж 13 лет</p>

              <ButtonFeed style={'bg-orange mt-auto'} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
