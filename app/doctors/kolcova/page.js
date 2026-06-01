import ButtonFeed from '@/app/components/ButtonFeed';
import foto from '@/public/img/main/doctors/kolcova.png';
import Image from 'next/image';

export const metadata = {
  title: 'Кольцова Наталия Михайловна - врач УЗИ | Клиника Великмед',
  description:
    'Кольцова Наталия Михайловна - врач УЗИ в клинике Великмед. Диагностика и лечение заболеваний различных органов с помощью ультразвукового исследования. Запись на консультацию врача УЗИ.',
  keywords:
    'Кольцова Наталия Михайловна, врач УЗИ, ультразвуковое исследование, диагностика, лечение, Великмед, консультация врача УЗИ',

  // Open Graph (для ВКонтакте, Facebook)
  openGraph: {
    title: 'Кольцова Наталия Михайловна - врач УЗИ | Клиника Великмед',
    description:
      'Врач-врач УЗИ. Диагностика и лечение заболеваний различных органов с помощью ультразвукового исследования.',
    type: 'profile',
    url: 'https://velikmed.ru/doctors/kolcova',
    siteName: 'Клиника Великмед',
    locale: 'ru_RU',
    images: [
      {
        url: 'https://velikmed.ru/img/main/doctors/kolcova.png', // Специальное изображение для соцсетей
        width: 500,
        height: 500,
        alt: 'Кольцова Наталия Михайловна - врач УЗИ',
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

export default function Kolcova() {
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
              name: 'Кольцова Наталия Михайловна',
              jobTitle: 'врач-врач УЗИ',
              description:
                'Врач-врач УЗИ в клинике Великмед. Специалист по диагностике и лечению заболеваний различных органов с помощью ультразвукового исследования.',
              worksFor: {
                '@type': 'MedicalOrganization',
                name: 'Клиника Великмед',
              },
              knowsAbout: [
                'УЗИ',
                'Заболевания органов брюшной полости',
                'Заболевания сердца',
                'Заболевания легких',
                'Заболевания костей',
              ],
              experienceYears: '34',
              image: 'https://velikmed.ru/img/main/doctors/kolcova.png',
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
              alt="Кольцова Наталия Михайловна - врач УЗИ клиники Великмед"
              title="Кольцова Наталия Михайловна, врач УЗИ"
              loading="lazy"
              quality={80}
              className="mx-auto sm:mx-0"
            />
            <div className="flex flex-col gap-4">
              <h1 className="font-display text-3xl text-orange">
                Кольцова Наталия Михайловна
              </h1>
              <p className="text-lg">врач УЗИ</p>
              <p className="mb-8 text-lg">стаж 34 года</p>

              <ButtonFeed style={'bg-orange mt-auto'} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
