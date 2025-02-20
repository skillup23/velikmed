'use client';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Map = () => {
  const [reactifiedApi, setReactifiedApi] = React.useState();

  React.useEffect(() => {
    Promise.all([ymaps3.import('@yandex/ymaps3-reactify'), ymaps3.ready]).then(
      ([{ reactify }]) =>
        setReactifiedApi(reactify.bindTo(React, ReactDOM).module(ymaps3))
    );
  }, []);

  if (!reactifiedApi) {
    return null;
  }

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } =
    reactifiedApi;

  return (
    <YMap location={{ center: [45.038153, 39.122856], zoom: 9 }}>
      <YMapDefaultSchemeLayer />
      <YMapDefaultFeaturesLayer />
    </YMap>
  );
};

export default Map;
