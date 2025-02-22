"use client";

// components/YandexMap.js
import { useEffect, useRef } from "react";

const YandexMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Проверяем, что скрипт уже не был загружен
    if (!window.ymaps) {
      const script = document.createElement("script");
      script.src =
        "https://api-maps.yandex.ru/2.1/?apikey=82d6ee1a-17d2-4939-b863-509822c2c026&lang=ru_RU";
      script.async = true;
      script.onload = () => {
        window.ymaps.ready(initMap);
      };
      document.head.appendChild(script);
    } else {
      initMap();
    }

    function initMap() {
      const map = new window.ymaps.Map(mapRef.current, {
        center: [45.038153, 39.122856], // Координаты центра карты
        zoom: 16, // Масштаб карты
        controls: [], // Отключаем все элементы управления
      });

      // Добавляем кнопку масштаба
      map.controls.add("zoomControl", {
        size: "small",
        position: {
          right: 10,
          top: 100,
        },
      });

      // Добавляем кнопку "Определить местоположение"
      map.controls.add("geolocationControl", {
        position: {
          right: 10,
          top: 180,
        },
      });

      // Добавляем несколько маркеров
      const markers = [
        {
          coords: [45.038153, 39.122856],
          hintContent: "ВеликМЕД",
          balloonContent: "Лавочкина, 21",
        },
      ];

      markers.forEach((marker) => {
        const placemark = new window.ymaps.Placemark(
          marker.coords,
          {
            hintContent: marker.hintContent,
            balloonContent: marker.balloonContent,
          },
          {
            iconColor: "#e15225", // Изменяем цвет метки
          }
        );
        map.geoObjects.add(placemark);
      });
    }
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "100%" }} />;
};

export default YandexMap;
