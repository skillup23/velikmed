import yslugi1 from '@/public/img/main/yslugi1.png';
import yslugi2 from '@/public/img/main/yslugi2.png';
import yslugi3 from '@/public/img/main/yslugi3.png';
import yslugi4 from '@/public/img/main/yslugi4.png';
import Image from 'next/image';

export default function UslugiMain() {
  return (
    <div className="mt-3 sm:mt-6 grid grid-cols-1 sm:grid-cols-[453px_262px_357px] gap-6 text-white">
      <div className="uslugi_card sm:row-span-2 bg-gradient">
        <h4>Прием специалистов</h4>
        <ul className="uslugi_list">
          <li>Терапевт</li>
          <li>Педиатр</li>
          <li>Эндокринолог</li>
          <li>Гастроэнтеролог</li>
          <li>Невролог</li>
          <li>Кардиолог</li>
          <li>Онколог</li>
          <li>Гинеколог</li>
          <li>Хирург</li>
          <li>Косметолог</li>
        </ul>
        <Image
          src={yslugi1}
          width="auto"
          height="auto"
          alt="Услуги"
          className="w-[177px] absolute bottom-0 right-3"
        />
      </div>

      <div className="uslugi_card sm:row-span-1 bg-gradient">
        <h4>Педиатрия</h4>
        <ul className="uslugi_list">
          <li>Детский гастроэнтеролог</li>
          <li>Детский невролог</li>
        </ul>
        {/* <Image
          src={yslugi2}
          width="auto"
          height="auto"
          alt="Услуги"
          className="w-[64px] absolute bottom-6 right-8"
        /> */}
      </div>

      <div className="uslugi_card sm:row-span-1 bg-gradient">
        <h4>Хирургия</h4>
        <ul className="uslugi_list">
          <li className="leading-7">
            Малоинвазивная <br /> хирургия
          </li>
          <li className="sm:mb-7 leading-7">
            Эстетическая <br /> гинекология
          </li>
        </ul>
        <Image
          src={yslugi3}
          width="auto"
          height="auto"
          alt="Услуги"
          className="w-[221px] absolute bottom-0 right-0"
        />
      </div>

      <div className="uslugi_card sm:row-span-1 bg-gradient">
        <h4>Диагностика</h4>
        <ul className="uslugi_list">
          <li>Лаборатория CL</li>
          <li>УЗИ</li>
        </ul>
        <Image
          src={yslugi2}
          width="auto"
          height="auto"
          alt="Услуги"
          className="w-[64px] absolute bottom-6 right-8"
        />
      </div>

      <div className="uslugi_card sm:row-span-1 bg-gradient">
        <h4 className="sm:mb-8">
          Экспертиза временной нетрудоспособности (больничный)
        </h4>
        <Image
          src={yslugi4}
          width="auto"
          height="auto"
          alt="Услуги"
          className="w-[107px] absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
}
