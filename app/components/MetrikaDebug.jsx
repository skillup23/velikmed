// 'use client';

// import { useEffect } from 'react';

// export default function MetrikaDebug() {
//   useEffect(() => {
//     // Проверяем статус каждые 3 секунды
//     const interval = setInterval(() => {
//       console.log('=== Yandex Metrika Debug ===');
//       console.log('Timestamp:', new Date().toLocaleTimeString());
//       console.log('window.ym:', typeof window.ym);
//       console.log('yaCounter105637836:', window.yaCounter105637836);

//       // Проверка скриптов
//       const scripts = Array.from(document.scripts);
//       const yandexScripts = scripts.filter(
//         (s) => s.src && s.src.includes('yandex.ru')
//       );
//       console.log('Yandex scripts found:', yandexScripts.length);

//       // Проверка localStorage
//       const ymKeys = Object.keys(localStorage).filter((k) =>
//         k.includes('_ym_')
//       );
//       console.log('YM localStorage keys:', ymKeys.length);

//       console.log('===========================');
//     }, 3000);

//     // Останавливаем через 30 секунд
//     setTimeout(() => clearInterval(interval), 30000);

//     return () => clearInterval(interval);
//   }, []);

//   return null;
// }
