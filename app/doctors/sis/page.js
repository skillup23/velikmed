import ButtonFeed from "@/app/components/ButtonFeed";
import foto from "@/public/img/main/doctors/sis.png";
import Image from "next/image";

export const metadata = {
  title: "Сыс Елена Александровна - эндокринолог | Клиника Великмед",
  description:
    "Сыс Елена Александровна - врач-эндокринолог в клинике Великмед. Диагностика и лечение заболеваний щитовидной железы, диабета, гормональных нарушений. Запись на прием эндокринолога.",
  keywords:
    "эндокринолог, щитовидная железа, диабет, гормоны, Сыс Елена Александровна, Великмед, лечение эндокринных заболеваний, сахарный диабет, гипотиреоз",

  // Open Graph (для ВКонтакте, Facebook)
  openGraph: {
    title: "Сыс Елена Александровна - врач-эндокринолог | Великмед",
    description:
      "Врач-эндокринолог. Диагностика и лечение заболеваний эндокринной системы.",
    type: "profile",
    url: "https://velikmed.ru/doctors/sys",
    siteName: "Клиника Великмед",
    locale: "ru_RU",
    images: [
      {
        url: "https://velikmed.ru/img/main/doctors/sis.png", // Специальное изображение для соцсетей
        width: 500,
        height: 500,
        alt: "Ефремова Екатерина Владимировна - гинеколог",
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

export default function Sis() {
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
              medicalSpecialty: "Эндокринология",
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
              name: "Сыс Елена Александровна",
              jobTitle: "врач-эндокринолог",
              description:
                "Врач-эндокринолог в клинике Великмед. Специалист по диагностике и лечению заболеваний эндокринной системы.",
              worksFor: {
                "@type": "MedicalOrganization",
                name: "Клиника Великмед",
              },
              knowsAbout: [
                "Эндокринология",
                "Заболевания щитовидной железы",
                "Сахарный диабет",
                "Гормональные нарушения",
              ],
              experienceYears: "18",
              image: "https://velikmed.ru/img/main/doctors/sis.png",
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
              alt="Сыс Елена Александровна - эндокринолог клиники Великмед"
              title="Сыс Елена Александровна, эндокринолог"
              loading="lazy"
              quality={80}
              className="mx-auto sm:mx-0"
            />
            <div className="flex flex-col gap-4">
              <h1 className="font-display text-3xl text-orange">
                Сыс Елена Александровна
              </h1>
              <p className="text-lg">эндокринолог</p>
              <p className="mb-8 text-lg">стаж 11 лет</p>

              <ButtonFeed style={"bg-orange mt-auto"} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
