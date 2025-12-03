'use client';

import { useEffect } from 'react';

export default function YandexMetrika() {
  useEffect(() => {
    // Проверяем, не добавлен ли уже счетчик
    if (window.ym && window.yaCounter105637836) return;

    // Создаем и добавляем скрипт
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://mc.yandex.ru/metrika/tag.js?id=105637836';

    // Обработчики для разных браузеров
    script.onload = script.onreadystatechange = function () {
      if (
        !this.readyState ||
        this.readyState === 'loaded' ||
        this.readyState === 'complete'
      ) {
        if (window.ym) {
          window.ym(105637836, 'init', {
            ssr: true,
            webvisor: true,
            clickmap: true,
            ecommerce: 'dataLayer',
            accurateTrackBounce: true,
            trackLinks: true,
          });
          console.log('Yandex Metrika loaded successfully');
        }
        // Очистка обработчиков
        script.onload = script.onreadystatechange = null;
      }
    };

    // Добавляем скрипт в документ
    document.head.appendChild(script);

    // Инициализация на случай, если ym уже доступен
    if (window.ym) {
      window.ym(105637836, 'init', {
        ssr: true,
        webvisor: true,
        clickmap: true,
        ecommerce: 'dataLayer',
        accurateTrackBounce: true,
        trackLinks: true,
      });
    }

    // Очистка
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}
