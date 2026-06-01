import ButtonFeed from '@/app/components/ButtonFeed';
import foto from '@/public/img/main/doctors/velikzhanin.png';
import Image from 'next/image';

export const metadata = {
  title: 'Великжанин Виталий Анатольевич - гастроэнтеролог | Клиника Великмед',
  description:
    'Великжанин Виталий Анатольевич - врач-гастроэнтеролог в клинике Великмед. Диагностика и лечение заболеваний ЖКТ: гастрит, язва, колит, панкреатит. Запись на консультацию гастроэнтеролога.',
  keywords:
    'Великжанин Виталий Анатольевич, гастроэнтеролог, лечение желудка, заболевания ЖКТ, гастрит, язва, колит, панкреатит, Великмед, консультация гастроэнтеролога',

  // Open Graph (для ВКонтакте, Facebook)
  openGraph: {
    title:
      'Великжанин Виталий Анатольевич - гастроэнтеролог | Клиника Великмед',
    description:
      'Врач-гастроэнтеролог. Диагностика и лечение заболеваний желудочно-кишечного тракта.',
    type: 'profile',
    url: 'https://velikmed.ru/doctors/velikzhanin',
    siteName: 'Клиника Великмед',
    locale: 'ru_RU',
    images: [
      {
        url: 'https://velikmed.ru/img/main/doctors/velikzhanin.png', // Специальное изображение для соцсетей
        width: 500,
        height: 500,
        alt: 'Великжанин Виталий Анатольевич - гастроэнтеролог',
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

export default function Velikzhanin() {
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
              name: 'Великжанин Виталий Анатольевич',
              jobTitle: 'врач-гастроэнтеролог',
              description:
                'Врач-гастроэнтеролог в клинике Великмед. Специалист по диагностике и лечению заболеваний желудочно-кишечного тракта.',
              worksFor: {
                '@type': 'MedicalOrganization',
                name: 'Клиника Великмед',
              },
              knowsAbout: [
                'Гастроэнтерология',
                'Заболевания желудка',
                'Заболевания кишечника',
                'Патологии печени',
                'Заболевания поджелудочной железы',
              ],
              experienceYears: '32',
              image: 'https://velikmed.ru/img/main/doctors/velikzhanin.png',
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
              alt="Великжанин Виталий Анатольевич - гастроэнтеролог клиники Великмед"
              title="Великжанин Виталий Анатольевич, гастроэнтеролог"
              loading="lazy"
              quality={80}
              className="mx-auto sm:mx-0"
            />
            <div className="flex flex-col gap-4">
              <h1 className="font-display text-3xl text-orange">
                Великжанин Виталий Анатольевич
              </h1>
              <p className="text-lg">гастроэнтеролог</p>
              <p className="mb-8 text-lg">стаж 32 года</p>

              <ButtonFeed style={'bg-orange mt-auto'} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
