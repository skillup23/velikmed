"use client";

import { useEffect, useRef, useState } from "react";

const YandexMap = () => {
  const mapRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const scriptLoadedRef = useRef(false);
  const mapInitializedRef = useRef(false);

  // Отслеживаем появление карты в viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        rootMargin: "200px", // Начинаем загружать заранее
        threshold: 0.1,
      }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);

  // Загружаем карту только когда она видима
  useEffect(() => {
    if (!isVisible || mapInitializedRef.current) return;

    const loadMap = () => {
      if (!window.ymaps && !scriptLoadedRef.current) {
        scriptLoadedRef.current = true;

        const script = document.createElement("script");
        script.src =
          "https://api-maps.yandex.ru/2.1/?apikey=82d6ee1a-17d2-4939-b863-509822c2c026&lang=ru_RU&load=Map,Placemark,control.ZoomControl,control.GeolocationControl";
        script.async = true;
        script.defer = true;

        // Обработчики для разных состояний загрузки
        const cleanup = () => {
          script.onload = null;
          script.onerror = null;
        };

        script.onload = () => {
          initMap();
          cleanup();
        };

        script.onerror = (error) => {
          console.error("Failed to load Yandex Maps:", error);
          cleanup();
        };

        document.head.appendChild(script);
      } else if (window.ymaps) {
        initMap();
      }
    };

    // Небольшая задержка для приоритизации более важного контента
    const timeoutId = setTimeout(loadMap, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isVisible]);

  const initMap = () => {
    if (!mapRef.current || mapInitializedRef.current) return;

    try {
      window.ymaps.ready(() => {
        if (!mapRef.current || mapInitializedRef.current) return;

        mapInitializedRef.current = true;

        const map = new window.ymaps.Map(mapRef.current, {
          center: [45.038153, 39.122856],
          zoom: 16,
          controls: [],
        });

        // Отключаем лишние поведение для повышения производительности
        map.behaviors.disable([
          "scrollZoom", // можно оставить если нужно
          "dblClickZoom",
          "rightMouseButtonMagnifier",
          "multiTouch",
        ]);

        // Добавляем только необходимые контролы
        map.controls.add("zoomControl", {
          size: "small",
          position: {
            right: 10,
            top: 100,
          },
        });

        map.controls.add("geolocationControl", {
          position: {
            right: 10,
            top: 180,
          },
        });

        // Создаем маркер с оптимизацией
        const placemark = new window.ymaps.Placemark(
          [45.038153, 39.122856],
          {
            hintContent: "ВеликМЕД",
            balloonContent: `
              <div style="padding: 8px;">
                <strong>ВеликМЕД</strong><br/>
                <div>Лавочкина, 21</div>
                <div style="margin-top: 8px;">
                  <a href="https://yandex.ru/maps/org/velikmed/219700175050/" 
                     target="_blank" 
                     style="color: #e15225; text-decoration: none;">
                    Открыть в Яндекс.Картах →
                  </a>
                </div>
              </div>
            `,
          },
          {
            preset: "islands#orangeMedicalIcon", // Используем встроенный иконку
            iconColor: "#e15225",
          }
        );

        map.geoObjects.add(placemark);

        // Оптимизация для мобильных устройств
        if (window.innerWidth < 768) {
          map.behaviors.disable("drag");
        }

        // Очистка при размонтировании
        return () => {
          if (map && map.destroy) {
            map.destroy();
          }
        };
      });
    } catch (error) {
      console.error("Error initializing map:", error);
    }
  };

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "400px",
        backgroundColor: "#f5f5f5",
        minHeight: "400px",
        position: "relative",
      }}
    >
      {/* Fallback пока карта загружается */}
      {!mapInitializedRef.current && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            background:
              "linear-gradient(135deg, #f5f5f5 25%, #e8e8e8 25%, #e8e8e8 50%, #f5f5f5 50%, #f5f5f5 75%, #e8e8e8 75%, #e8e8e8)",
            backgroundSize: "40px 40px",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              border: "3px solid #e15225",
              borderTopColor: "transparent",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              marginBottom: "16px",
            }}
          />
          <div
            style={{
              color: "#666",
              fontSize: "14px",
              textAlign: "center",
              padding: "0 20px",
            }}
          >
            Загрузка карты...
            <br />
            <small style={{ color: "#999", fontSize: "12px" }}>
              Адрес: Лавочкина, 21
            </small>
          </div>
          {/* Статическая ссылка как fallback */}
          <a
            href="https://yandex.ru/maps/org/velikmed/219700175050/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "16px",
              padding: "8px 16px",
              backgroundColor: "#e15225",
              color: "white",
              textDecoration: "none",
              borderRadius: "4px",
              fontSize: "14px",
            }}
          >
            Открыть в Яндекс.Картах
          </a>
        </div>
      )}
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

// Опционально: обертка с динамическим импортом для SSR
export default YandexMap;
