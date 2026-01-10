import ButtonFeed from "@/app/components/ButtonFeed";
import foto from "@/public/img/main/doctors/drobisheva.png";
import Image from "next/image";

export const metadata = {
  title:
    "Дробышева Татьяна Васильевна - трихолог с опытом 25 лет | Клиника Великмед",
  description:
    "Приём у трихолога Дробышевой Татьяны Васильевны. Детский трихолог, стаж 25 лет. Диагностика и лечение заболеваний волос и кожи головы.",
  keywords:
    "трихолог, детский трихолог, лечение волос, выпадение волос, Татьяна Дробышева, Краснодар",

  // Open Graph (для ВКонтакте, Facebook)
  openGraph: {
    title: "Дробышева Татьяна Васильевна - трихолог с 25-летним стажем",
    description:
      "Опытный трихолог и детский трихолог. Лечение заболеваний волос у взрослых и детей.",
    type: "profile",
    url: "https://velikmed.ru/doctors/drobisheva",
    siteName: "Клиника Великмед",
    locale: "ru_RU",
    images: [
      {
        url: "https://velikmed.ru/img/main/doctors/drobisheva.png", // Специальное изображение для соцсетей
        width: 500,
        height: 500,
        alt: "Дробышева Татьяна Васильевна - трихолог",
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

export default function Drobisheva() {
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
              medicalSpecialty: "Трихология",
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
              name: "Дробышева Татьяна Васильевна",
              jobTitle: "трихолог, детский трихолог",
              description: "Врач-трихолог с 25-летним опытом работы",
              worksFor: {
                "@type": "MedicalOrganization",
                name: "Клиника Великмед",
              },
              knowsAbout: ["Трихология"],
              experienceYears: "25",
              image: "https://velikmed.ru/img/main/doctors/drobisheva.png",
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
              alt="Дробышева Татьяна Васильевна - трихолог с 25-летним опытом"
              title="Дробышева Татьяна Васильевна, трихолог"
              loading="lazy"
              quality={80}
              className="mx-auto sm:mx-0"
            />
            <div className="flex flex-col gap-4">
              <h1 className="font-display text-3xl text-orange">
                Дробышева Татьяна Васильевна
              </h1>
              <p className="text-lg">трихолог, детский трихолог</p>
              <p className="mb-8 text-lg">стаж 25 лет</p>

              <ButtonFeed style={"bg-orange mt-auto"} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
