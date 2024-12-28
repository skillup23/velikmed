'use client';
import { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import doctor1 from '@/public/img/main/doctor1.png';
import Image from 'next/image';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div
    className="item w-[357px] pt-8 px-6 shrink-0 bg-white rounded-xl overflow-hidden animate-simple"
    data-value="1"
  >
    <h4>Фамилия Имя Отчество</h4>
    <h6 className="my-[12px] py-2 px-[18px] text-orange border border-orange rounded-2xl inline-block">
      эндокринолог
    </h6>
    <h6>стаж 12 лет</h6>
    <Image
      src={doctor1}
      width="auto"
      height="auto"
      alt="Специалист Клиники"
      className="w-[454px] -mt-6 ml-6 -mr-6 pointer-events-none"
    />
  </div>,
  <div className="item" data-value="2">
    2
  </div>,
  <div className="item" data-value="3">
    3
  </div>,
  <div className="item" data-value="4">
    4
  </div>,
  <div className="item" data-value="5">
    5
  </div>,
];

export default function SliderMain() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          className="flex gap-6"
        />
      ) : (
        'Загрузка'
      )}
    </>
  );
}

// "use client";

// import arroyLeft from "@/public/img/main/arroyLeft.svg";
// import arroyRight from "@/public/img/main/arroyRight.svg";
// import doctor1 from "@/public/img/main/doctor1.png";
// import Image from "next/image";
// import { useRef } from "react";

// export default function SliderMain() {
//   //   const [moveSlide, setMoveSlide] = useState("0");
//   const ref = useRef(null);

//   const slideLeft = () => {
//     let slider = document.getElementById("slider");
//     slider.scrollLeft = slider.scrollLeft - (ref.current.offsetWidth + 24);
//   };

//   const slideRight = () => {
//     let slider = document.getElementById("slider");
//     slider.scrollLeft = slider.scrollLeft + (ref.current.offsetWidth + 24);
//   };

//   return (
//     <div className="w-full relative mt-8">
//       <div
//         className={`flex gap-6 overflow-x-scroll overflow-y-hidden scroll-smooth slider-container`}
//         id="slider"
//       >
//         <div
//           ref={ref}
//           className="w-[357px] pt-8 px-6 shrink-0 bg-white rounded-xl overflow-hidden animate-simple"
//         >
//           <h4>Фамилия Имя Отчество</h4>
//           <h6 className="my-[12px] py-2 px-[18px] text-orange border border-orange rounded-2xl inline-block">
//             эндокринолог
//           </h6>
//           <h6>стаж 12 лет</h6>
//           <Image
//             src={doctor1}
//             width="auto"
//             height="auto"
//             alt="Специалист Клиники"
//             className="w-[454px] -mt-6 ml-6 -mr-6 pointer-events-none"
//           />
//         </div>

//         <div className="w-[357px] pt-8 px-6 shrink-0 bg-white rounded-xl overflow-hidden animate-simple">
//           <h4>Фамилия Имя Отчество</h4>
//           <h6 className="my-[12px] py-2 px-[18px] text-orange border border-orange rounded-2xl inline-block">
//             кардиолог
//           </h6>
//           <h6>стаж 17 лет</h6>
//           <Image
//             src={doctor1}
//             width="auto"
//             height="auto"
//             alt="Специалист Клиники"
//             className="w-[454px] -mt-6 ml-6 -mr-6 pointer-events-none"
//           />
//         </div>

//         <div className="w-[357px] pt-8 px-6 shrink-0 bg-white rounded-xl overflow-hidden animate-simple">
//           <h4>Фамилия Имя Отчество</h4>
//           <h6 className="my-[12px] py-2 px-[18px] text-orange border border-orange rounded-2xl inline-block">
//             гастроэнтеролог
//           </h6>
//           <h6>стаж 8 лет</h6>
//           <Image
//             src={doctor1}
//             width="auto"
//             height="auto"
//             alt="Специалист Клиники"
//             className="w-[454px] -mt-6 ml-6 -mr-6 pointer-events-none"
//           />
//         </div>

//         <div className="w-[357px] pt-8 px-6 shrink-0 bg-white rounded-xl overflow-hidden animate-simple">
//           <h4>Фамилия Имя Отчество</h4>
//           <h6 className="my-[12px] py-2 px-[18px] text-orange border border-orange rounded-2xl inline-block">
//             терапевт
//           </h6>
//           <h6>стаж 4 года</h6>
//           <Image
//             src={doctor1}
//             width="auto"
//             height="auto"
//             alt="Специалист Клиники"
//             className="w-[454px] -mt-6 ml-6 -mr-6 pointer-events-none"
//           />
//         </div>

//         <div className="w-[357px] pt-8 px-6 shrink-0 bg-white rounded-xl overflow-hidden animate-simple">
//           <h4>Фамилия Имя Отчество</h4>
//           <h6 className="my-[12px] py-2 px-[18px] text-orange border border-orange rounded-2xl inline-block">
//             педиатр
//           </h6>
//           <h6>стаж 2 года</h6>
//           <Image
//             src={doctor1}
//             width="auto"
//             height="auto"
//             alt="Специалист Клиники"
//             className="w-[454px] -mt-6 ml-6 -mr-6 pointer-events-none"
//           />
//         </div>
//       </div>
//       <div className="flex absolute -top-[86] right-0 gap-[67px]">
//         <Image
//           src={arroyLeft}
//           width="auto"
//           height="auto"
//           alt="Стрелка влево"
//           className="w-12 cursor-pointer"
//           onClick={slideLeft}
//         />
//         <Image
//           src={arroyRight}
//           width="auto"
//           height="auto"
//           alt="Стрелка вправо"
//           className="w-12 cursor-pointer"
//           onClick={slideRight}
//         />
//       </div>
//     </div>
//   );
// }

// "use client";

// import arroyLeft from "@/public/img/main/arroyLeft.svg";
// import arroyRight from "@/public/img/main/arroyRight.svg";
// import doctor1 from "@/public/img/main/doctor1.png";
// import Image from "next/image";
// import { useRef, useState } from "react";

// export default function SliderMain() {
//   const [moveSlide, setMoveSlide] = useState("0");
//   const ref = useRef(null);

//   function nextSlide() {
//     let num = Number(moveSlide);
//     let summ = ref.current.offsetWidth + num + 24;
//     let test = String(summ);

//     setMoveSlide(test);

//     console.log(moveSlide);
//     console.log(typeof moveSlide);
//   }

//   return (
//     <div className="w-full relative mt-8">
//       <div className="">
//         <div className={`flex gap-6 -translate-x-[${moveSlide}px]`}>
//           <div
//             ref={ref}
//             className="w-[357px] pt-8 px-6 shrink-0 bg-white rounded-xl overflow-hidden"
//           >
//             <h4>Фамилия Имя Отчество</h4>
//             <h6 className="my-[12px] py-2 px-[18px] text-orange border border-orange rounded-2xl inline-block">
//               эндокринолог
//             </h6>
//             <h6>стаж 12 лет</h6>
//             <Image
//               src={doctor1}
//               width="auto"
//               height="auto"
//               alt="Специалист Клиники"
//               className="w-[454px] -mt-6 ml-6 -mr-6 pointer-events-none"
//             />
//           </div>

//           <div className="w-[357px] pt-8 px-6 shrink-0 bg-white rounded-xl overflow-hidden">
//             <h4>Фамилия Имя Отчество</h4>
//             <h6 className="my-[12px] py-2 px-[18px] text-orange border border-orange rounded-2xl inline-block">
//               кардиолог
//             </h6>
//             <h6>стаж 17 лет</h6>
//             <Image
//               src={doctor1}
//               width="auto"
//               height="auto"
//               alt="Специалист Клиники"
//               className="w-[454px] -mt-6 ml-6 -mr-6 pointer-events-none"
//             />
//           </div>

//           <div className="w-[357px] pt-8 px-6 shrink-0 bg-white rounded-xl overflow-hidden">
//             <h4>Фамилия Имя Отчество</h4>
//             <h6 className="my-[12px] py-2 px-[18px] text-orange border border-orange rounded-2xl inline-block">
//               гастроэнтеролог
//             </h6>
//             <h6>стаж 8 лет</h6>
//             <Image
//               src={doctor1}
//               width="auto"
//               height="auto"
//               alt="Специалист Клиники"
//               className="w-[454px] -mt-6 ml-6 -mr-6 pointer-events-none"
//             />
//           </div>

//           <div className="w-[357px] pt-8 px-6 shrink-0 bg-white rounded-xl overflow-hidden">
//             <h4>Фамилия Имя Отчество</h4>
//             <h6 className="my-[12px] py-2 px-[18px] text-orange border border-orange rounded-2xl inline-block">
//               терапевт
//             </h6>
//             <h6>стаж 4 года</h6>
//             <Image
//               src={doctor1}
//               width="auto"
//               height="auto"
//               alt="Специалист Клиники"
//               className="w-[454px] -mt-6 ml-6 -mr-6 pointer-events-none"
//             />
//           </div>

//           <div className="w-[357px] pt-8 px-6 shrink-0 bg-white rounded-xl overflow-hidden">
//             <h4>Фамилия Имя Отчество</h4>
//             <h6 className="my-[12px] py-2 px-[18px] text-orange border border-orange rounded-2xl inline-block">
//               педиатр
//             </h6>
//             <h6>стаж 2 года</h6>
//             <Image
//               src={doctor1}
//               width="auto"
//               height="auto"
//               alt="Специалист Клиники"
//               className="w-[454px] -mt-6 ml-6 -mr-6 pointer-events-none"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="flex absolute -top-[86] right-0 gap-[67px]">
//         <Image
//           src={arroyLeft}
//           width="auto"
//           height="auto"
//           alt="Стрелка влево"
//           className="w-12 cursor-pointer"
//         />
//         <Image
//           src={arroyRight}
//           width="auto"
//           height="auto"
//           alt="Стрелка вправо"
//           className="w-12 cursor-pointer"
//           onClick={() => nextSlide()}
//         />
//       </div>
//     </div>
//   );
// }
