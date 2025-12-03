// 'use client';

// import { useEffect } from 'react';

// export default function YandexMetrika() {
//   useEffect(() => {
//     // Вставляем оригинальный код Яндекс.Метрики
//     const script = document.createElement('script');
//     script.innerHTML = `
//       (function(m,e,t,r,i,k,a){
//         m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
//         m[i].l=1*new Date();
//         for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
//         k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
//       })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=105637836', 'ym');

//       ym(105637836, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
//     `;
//     document.head.appendChild(script);
//   }, []);

//   return null;
// }
