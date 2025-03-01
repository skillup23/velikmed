// import Script from "next/script";

// function YandexMap() {
//   return (
//     <Script id="map-script">{` initMap();

//       async function initMap() {
//           // ожидание загрузки модулей
//    await ymaps3.ready;
//    const {
//      YMap,
//      YMapDefaultSchemeLayer,
//      YMapControls,
//      YMapDefaultFeaturesLayer,
//      YMapMarker
//    } = ymaps3;

//    // Импорт модулей для элементов управления на карте
//    const {
//      YMapZoomControl,
//      YMapGeolocationControl
//    } = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');

//    // Координаты центра карты
//    const CENTER_COORDINATES = [39.122856, 45.038153];
//    // координаты метки на карте
//    const MARKER_COORDINATES = [39.122856, 45.038153];

//    // Объект с параметрами центра и зумом карты
//    const LOCATION = {center: CENTER_COORDINATES, zoom: 16};

//    // Создание объекта карты
//    map = new YMap(document.getElementById('map'), {location: LOCATION});

//    // Добавление слоев на карту
//    map.addChild(scheme = new YMapDefaultSchemeLayer());
//    map.addChild(new YMapDefaultFeaturesLayer());

//    // Добавление элементов управления на карту
//    map.addChild(new YMapControls({position: 'right'})
//      .addChild(new YMapZoomControl({}))
//    );
//    map.addChild(new YMapControls({position: 'top right'})
//      .addChild(new YMapGeolocationControl({}))
//    );

//    // Создание маркера
//    const el = document.createElement('img');
//    el.className = 'my-marker';
//    el.src = '/img/main/marker-orange.png';
//    el.title = 'Маркер';
//    // При клике на маркер меняем центр карты на LOCATION с заданным duration
//    el.onclick = () => map.update({location: {...LOCATION, duration: 400}});

//    // Создание заголовка маркера
//    const markerTitle = document.createElement('div');
//    markerTitle.className = 'marker-title';
//    markerTitle.innerHTML = '';

//    // Контейнер для элементов маркера
//    const imgContainer = document.createElement('div');
//    imgContainer.appendChild(el);
//    imgContainer.appendChild(markerTitle);

//    // Добавление центра карты
//    map.addChild(new YMapMarker({coordinates: CENTER_COORDINATES}));

//    // Добавление маркера на карту
//    map.addChild(new YMapMarker({coordinates: MARKER_COORDINATES}, imgContainer));

//       }`}</Script>
//   );
// }

// export default YandexMap;
