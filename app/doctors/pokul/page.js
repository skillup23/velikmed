import ButtonFeed from '@/app/components/ButtonFeed';
import foto from '@/public/img/main/doctors/kyarimova.jpg';
import Image from 'next/image';

export const metadata = {
  title:
    'Покуль Лилиана Викторовна - акушер-гинеколог, онколог | Клиника Великмед',
  description:
    'Покуль Лилиана Викторовна - акушер-гинеколог и онколог в клинике Великмед. Диагностика и лечение заболеваний женской репродуктивной системы и других заболеваний.',
  keywords:
    'Покуль Лилиана Викторовна, акушер-гинеколог, онколог, лечение женщин, заболевания гинекологии, Великмед, консультация гинеколога.',

  // Open Graph (для ВКонтакте, Facebook)
  openGraph: {
    title:
      'Покуль Лилиана Викторовна - акушер-гинеколог, онколог | Клиника Великмед',
    description:
      'Врач-гинеколог и онколог. Диагностика и лечение заболеваний женской репродуктивной системы и других заболеваний.',
    type: 'profile',
    url: 'https://velikmed.ru/doctors/pokul',
    siteName: 'Клиника Великмед',
    locale: 'ru_RU',
    images: [
      {
        url: 'https://velikmed.ru/img/main/doctors/pokul.jpg', // Специальное изображение для соцсетей
        width: 500,
        height: 500,
        alt: 'Покуль Лилиана Викторовна - акушер-гинеколог, онколог',
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

export default function Pokul() {
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
              name: 'Покуль Лилиана Викторовна',
              jobTitle: 'врач-гинеколог, онколог',
              description:
                'Врач-гинеколог и онколог в клинике Великмед. Специалист по диагностике и лечению заболеваний женской репродуктивной системы и других заболеваний.',
              worksFor: {
                '@type': 'MedicalOrganization',
                name: 'Клиника Великмед',
              },
              knowsAbout: [
                'Гинекология',
                'Заболевания матки',
                'Заболевания кишечника',
                'Патологии печени',
                'Заболевания поджелудочной железы',
              ],
              experienceYears: '4',
              image: 'https://velikmed.ru/img/main/doctors/pokul.jpg',
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
              alt="Покуль Лилиана Викторовна - акушер-гинеколог, онколог клиники Великмед"
              title="Покуль Лилиана Викторовна, акушер-гинеколог, онколог"
              loading="lazy"
              quality={80}
              className="mx-auto sm:mx-0"
            />
            <div className="flex flex-col gap-4">
              <h1 className="font-display text-3xl text-orange">
                Покуль Лилиана Викторовна
              </h1>
              <p className="text-lg">акушер-гинеколог, онколог</p>
              <p className="mb-8 text-lg">стаж 4 года</p>

              <ButtonFeed style={'bg-orange mt-auto'} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
