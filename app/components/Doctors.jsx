import { doctors } from "@/public/data/data";
import Image from "next/image";

export default function Doctors() {
  return (
    <div className="flex flex-col">
      <div className="mt-6 flex flex-col sm:flex-row gap-6">
        {doctors.map(({ id, fio, spec, workYear, foto }) => {
          return (
            <div
              key={id}
              className="pt-8 px-6 bg-white rounded-xl overflow-hidden"
            >
              <h4>{fio}</h4>
              <h6 className="my-[12px] py-2 px-[18px] text-orange border border-orange rounded-2xl inline-block">
                {spec}
              </h6>
              <h6>{workYear}</h6>
              <Image
                src={foto}
                width="auto"
                height="auto"
                alt="Специалист Клиники"
                className="w-[454px] -mt-6 ml-6 -mr-6"
              />
            </div>
          );
        })}
      </div>

      <button className="w-full sm:w-80 mx-auto mt-6 sm:mt-8 p-2 text-[18px] sm:text-[24px] uppercase border-2 border-gray-dark hover:bg-white rounded-lg cursor-pointer animate-simple">
        все специалисты
      </button>
    </div>
  );
}
