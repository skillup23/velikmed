'use client';

import { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();

    if (consent === null) {
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (consent === 'accepted') {
      initializeYandexMetrika();
    }
  }, []);

  const getCookieConsent = () => {
    if (typeof window === 'undefined') return null;

    const name = 'cookie_consent=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  };

  const setCookieConsent = (value) => {
    const d = new Date();
    d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + d.toUTCString();
    document.cookie = `cookie_consent=${value}; ${expires}; path=/; SameSite=Lax`;

    if (value === 'accepted') {
      initializeYandexMetrika();
    }

    setShowConsent(false);
  };

  const initializeYandexMetrika = () => {
    if (window.ym) return;

    (function (m, e, t, r, i) {
      m[i] =
        m[i] ||
        function () {
          (m[i].a = m[i].a || []).push(arguments);
        };
      m[i].l = 1 * new Date();
      const k = e.createElement(t);
      const a = e.getElementsByTagName(t)[0];
      k.async = 1;
      k.src = r;
      a?.parentNode?.insertBefore(k, a);
    })(
      window,
      document,
      'script',
      'https://mc.yandex.ru/metrika/tag.js?id=105637836',
      'ym'
    );

    window.ym(105637836, 'init', {
      ssr: true,
      webvisor: true,
      clickmap: true,
      ecommerce: 'dataLayer',
      accurateTrackBounce: true,
      trackLinks: true,
    });
  };

  if (!showConsent) return null;

  return (
    <div className="fixed w-8/12 sm:w-[700px] bottom-0 left-0 z-50 animate-slide-up">
      <div className="bg-white border-t border-gray-200 shadow-lg rounded-md">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-center sm:text-left flex-1">
              <p className="text-[11px] sm:text-sm text-gray-700">
                Мы используем файлы cookie для анализа трафика через
                Яндекс.Метрику. Продолжая использовать сайт, вы соглашаетесь с
                обработкой данных.
                <span className="block text-[10px] text-gray-500 mt-1">
                  Ваш выбор сохранится на 30 дней.
                </span>
              </p>
            </div>

            <div className="flex sm:flex-col items-center gap-2 shrink-0">
              <button
                onClick={() => setCookieConsent('accepted')}
                className="px-4 py-2 text-sm font-medium text-white bg-orange hover:bg-orange-second rounded-md transition-colors cursor-pointer"
              >
                Принять
              </button>
              <button
                onClick={() => setCookieConsent('declined')}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
              >
                Отклонить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
