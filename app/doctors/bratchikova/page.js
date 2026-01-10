import ButtonFeed from "@/app/components/ButtonFeed";
import foto from "@/public/img/main/doctors/bratchikova.png";
import Image from "next/image";

export const metadata = {
  title: "Братчикова Ирина Станиславовна - гинеколог | Клиника Великмед",
  description:
    "Братчикова Ирина Станиславовна - врач-гинеколог в клинике Великмед. Консультации, диагностика, лечение гинекологических заболеваний. Запись на прием гинеколога в Краснодаре.",
  keywords:
    "Братчикова Ирина Станиславовна, гинеколог, Великмед, женский врач, гинекология Краснодар, лечение гинекологических заболеваний, консультация гинеколога, УЗИ гинекология",

  // Open Graph (для ВКонтакте, Facebook)
  openGraph: {
    title: "Братчикова Ирина Станиславовна - врач-гинеколог",
    description:
      "Врач-гинеколог в клинике Великмед. Специалист по диагностике и лечению женских заболеваний.",
    type: "profile",
    url: "https://velikmed.ru/doctors/bratchikova",
    siteName: "Клиника Великмед",
    locale: "ru_RU",
    images: [
      {
        url: "https://velikmed.ru/img/main/doctors/bratchikova.png", // Специальное изображение для соцсетей
        width: 500,
        height: 500,
        alt: "Братчикова Ирина Станиславовна - гинеколог",
      },
    ],
  },

  // Для Яндекса - индексация
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    yandex: {
      index: true,
      follow: true,
    },
  },
};

export default function Bratchikova() {
  return (
    <main>
      {/* Структурированные данные для Яндекс и Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            // Для Google
            {
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Клиника Великмед",
              medicalSpecialty: "Гинекология, Акушерство",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Краснодар",
                streetAddress: "ул. Лавочкина, д. 21",
              },
              telephone: "+7 (918) 246-88-77",
              url: "https://velikmed.ru",
              priceRange: "₽₽",
            },
            // Для Яндекс
            {
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Братчикова Ирина Станиславовна",
              jobTitle: "врач-гинеколог",
              description:
                "Врач-гинеколог в клинике Великмед. Специалист по диагностике и лечению гинекологических заболеваний.",
              worksFor: {
                "@type": "MedicalOrganization",
                name: "Клиника Великмед",
              },
              knowsAbout: [
                "Гинекология",
                "Диагностика женских заболеваний",
                "Лечение воспалительных процессов",
                "Кольпоскопия",
                "Гормональные нарушения",
                "Контрацепция",
                "Подготовка к беременности",
                "Лечение бесплодия",
              ],
              experienceYears: "25",
              image: "https://velikmed.ru/img/main/doctors/bratchikova.png",
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
              alt="Братчикова Ирина Станиславовна - гинеколог клиники Великмед"
              title="Братчикова Ирина Станиславовна, гинеколог"
              loading="lazy"
              quality={80}
              className="mx-auto sm:mx-0"
            />
            <div className="flex flex-col gap-4">
              <h1 className="font-display text-3xl text-orange">
                Братчикова Ирина Станиславовна
              </h1>
              <p className="text-lg">гинеколог</p>
              <p className="mb-8 text-lg">стаж 29 лет</p>

              <ButtonFeed style={"bg-orange mt-auto"} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
