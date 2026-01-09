import ButtonFeed from "@/app/components/ButtonFeed";
import foto from "@/public/img/main/doctors/velikjanina1.png";
import Image from "next/image";

export default function Velikjanina() {
  return (
    <main>
      <section className="section">
        <div className="container mx-auto px-5">
          <div className="mb-14 flex flex-col sm:flex-row border-orange border-0 rounded-xl gap-12">
            <Image
              src={foto}
              width={320}
              height={320}
              alt="Великжанина Елена Анатольевна"
              loading="lazy"
              quality={80}
              className="mx-auto sm:mx-0"
            />
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-3xl text-orange">
                Великжанина Елена Анатольевна
              </h3>
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
