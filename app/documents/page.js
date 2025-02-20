import { documents } from "@/public/data/data";
import arroyLeft from "@/public/img/docs/arrow-left.svg";
import docsMain from "@/public/img/docs/doc-main.png";
import bannerMainFon from "@/public/img/main/bannerMainFon.svg";
import bannerMainFonMob from "@/public/img/main/bannerMainFonMob.svg";
import Image from "next/image";
import Link from "next/link";

export default function Documents() {
  return (
    <main>
      <section className="section">
        <div className="container mx-auto px-5">
          <div
            className="relative w-full px-4 py-6 sm:p-12 flex flex-col sm:flex-row justify-between items-center bg-gradient_second rounded-2xl overflow-hidden
"
          >
            <h2 className="relative sm:w-3/4 font-display z-10">
              Документы и лицензии
            </h2>
            <div>
              <Image
                src={docsMain}
                width="auto"
                height="auto"
                alt="Баннер Фото"
                className="relative w-[200px] sm:w-[273px] mt-4 md:-my-[18px] z-10"
              />
              <Image
                src={bannerMainFon}
                width="auto"
                height="auto"
                alt="Баннер Фото"
                className="hidden sm:block absolute right-0 -bottom-16"
              />
              <Image
                src={bannerMainFonMob}
                width="auto"
                height="auto"
                alt="Баннер Фото"
                className="sm:hidden absolute right-0 bottom-0"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section mb-[72px]">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {documents.map(({ id, title, url }) => {
              return (
                <div
                  key={id}
                  className="h-[250px] md:h-[300px] p-8 flex flex-col justify-between bg-orange-third rounded-[15px] text-gray-dark"
                >
                  <h4 className="text-lg md:text-2xl font-medium leading-8">
                    {title}
                  </h4>
                  <Link
                    href={url}
                    target="_blank"
                    className="group py-1 md:py-2 flex items-center justify-center bg-orange-second rounded-[60px] gap-2"
                  >
                    <p className="text-white font-medium text-lg md:text-2xl">
                      Подробнее
                    </p>
                    <Image
                      src={arroyLeft}
                      width="auto"
                      height="auto"
                      alt="ссылка на документ"
                      className="w-12 group-hover:translate-x-2 animate-simple"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
