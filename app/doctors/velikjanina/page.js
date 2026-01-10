import ButtonFeed from "@/app/components/ButtonFeed";
import foto from "@/public/img/main/doctors/velikjanina1.png";
import Image from "next/image";

export const metadata = {
  title:
    "Великжанина Елена Анатольевна - гинеколог с 31-летним стажем | Клиника Великмед",
  description:
    "Гинеколог Великжанина Елена Анатольевна: ведение беременности, лечение гинекологических заболеваний, стаж 31 год. Опытный гинеколог в Краснодаре. Запись на консультацию",
  keywords:
    "гинеколог, гинекология, ведение беременности, женское здоровье, Елена Великжанина, гинеколог Краснодар, УЗИ гинекология, лечение бесплодия",

  // Open Graph (для ВКонтакте, Facebook)
  openGraph: {
    title: "Великжанина Елена Анатольевна - гинеколог с 31-летним стажем",
    description:
      "Опытный врач-гинеколог. Ведение беременности, лечение гинекологических заболеваний.",
    type: "profile",
    url: "https://velikmed.ru/doctors/velikjanina",
    siteName: "Клиника Великмед",
    locale: "ru_RU",
    images: [
      {
        url: "https://velikmed.ru/img/main/doctors/velikjanina1.png", // Специальное изображение для соцсетей
        width: 500,
        height: 500,
        alt: "Великжанина Елена Анатольевна - гинеколог",
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

export default function Velikjanina() {
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
              name: "Великжанина Елена Анатольевна",
              jobTitle: "врач-гинеколог, акушер-гинеколог",
              description:
                "Врач-гинеколог высшей категории с 31-летним опытом работы",
              worksFor: {
                "@type": "MedicalOrganization",
                name: "Клиника Великмед",
              },
              knowsAbout: [
                "Гинекология",
                "Акушерство",
                "Ведение беременности",
                "УЗИ диагностика",
              ],
              experienceYears: "31",
              image: "https://velikmed.ru/img/main/doctors/velikjanina1.png",
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
              alt="Великжанина Елена Анатольевна - гинеколог с 31-летним стажем"
              title="Великжанина Елена Анатольевна, гинеколог, гинеколог-эндокринолог, детский гинеколог"
              loading="lazy"
              quality={80}
              className="mx-auto sm:mx-0"
            />
            <div className="flex flex-col gap-4">
              <h1 className="font-display text-3xl text-orange">
                Великжанина Елена Анатольевна
              </h1>
              <p className="text-lg">
                гинеколог, гинеколог-эндокринолог, детский гинеколог
              </p>
              <p className="mb-8 text-lg">стаж 31 год</p>

              <ButtonFeed style={"bg-orange mt-auto"} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
