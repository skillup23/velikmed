"use client";

import { useEffect } from "react";

const YandexMetrika = () => {
  useEffect(() => {
    // Проверяем, что скрипт ещё не загружен
    if (window.ym) return;

    // Вставляем скрипт Метрики
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
      "script",
      "https://mc.yandex.ru/metrika/tag.js?id=105637836",
      "ym"
    );

    // Инициализируем счётчик
    window.ym(105637836, "init", {
      ssr: true,
      webvisor: true,
      clickmap: true,
      ecommerce: "dataLayer",
      accurateTrackBounce: true,
      trackLinks: true,
    });
  }, []);

  return (
    <>
      {/* Ноускрипт-версия */}
      <noscript>
        <div style={{ position: "absolute", left: "-9999px" }}>
          <img src="https://mc.yandex.ru/watch/105637836" alt="" />
        </div>
      </noscript>
    </>
  );
};

export default YandexMetrika;
