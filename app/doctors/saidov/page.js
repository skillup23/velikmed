import ButtonFeed from "@/app/components/ButtonFeed";
import foto from "@/public/img/main/doctors/saidov.png";
import Image from "next/image";

export const metadata = {
  title: "Саидов Эльшад Баходирович - хирург, врач УЗИ | Клиника Великмед",
  description:
    "Саидов Эльшад Баходирович - хирург и врач УЗИ в клинике Великмед. Проведение операций, ультразвуковая диагностика, консультации хирурга. Запись на прием в Краснодаре.",
  keywords:
    "Саидов Эльшад Баходирович, хирург Краснодар, врач УЗИ, клиника Великмед, оперативная хирургия, ультразвуковая диагностика, консультация хирурга, Краснодар",

  // Open Graph (для ВКонтакте, Facebook)
  openGraph: {
    title: "Саидов Эльшад Баходирович - хирург, врач УЗИ",
    description:
      "Врач-хирург и специалист ультразвуковой диагностики в клинике Великмед.",
    type: "profile",
    url: "https://velikmed.ru/doctors/saidov",
    siteName: "Клиника Великмед",
    locale: "ru_RU",
    images: [
      {
        url: "https://velikmed.ru/img/main/doctors/saidov.png", // Специальное изображение для соцсетей
        width: 500,
        height: 500,
        alt: "Саидов Эльшад Баходирович - хирург, врач УЗИ",
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

export default function Saidov() {
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
              medicalSpecialty: "Хирургия, Ультразвуковая диагностика",
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
              name: "Саидов Эльшад Баходирович",
              jobTitle: "врач-хирург, врач ультразвуковой диагностики",
              description:
                "Врач-хирург и специалист ультразвуковой диагностики в клинике Великмед",
              worksFor: {
                "@type": "MedicalOrganization",
                name: "Клиника Великмед",
              },
              knowsAbout: [
                "Хирургия",
                "Ультразвуковая диагностика",
                "Оперативное лечение",
              ],
              experienceYears: "18",
              image: "https://velikmed.ru/img/main/doctors/saidov.png",
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
              alt="Саидов Эльшад Баходирович - хирург, врач УЗИ клиники Великмед"
              title="Саидов Эльшад Баходирович, хирург и врач УЗИ"
              loading="lazy"
              quality={80}
              className="mx-auto sm:mx-0"
            />
            <div className="flex flex-col gap-4">
              <h1 className="font-display text-3xl text-orange">
                Саидов Эльшад Баходирович
              </h1>
              <p className="text-lg">хирург и врач УЗИ</p>
              <p className="mb-8 text-lg">стаж 8 лет</p>

              <ButtonFeed style={"bg-orange mt-auto"} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
