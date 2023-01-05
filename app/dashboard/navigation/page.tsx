'use client';

import { useState } from 'react';
import Map, { GeolocateControl, Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiY29tbWFhaSIsImEiOiJjbGNpcHB1Nmw3Zjg3M3BwbjV2N2YxMjl5In0.73alGM0ovKLemvTo779Kag';
const MAP_STYLE = 'mapbox://styles/commaai/clcgvbi4f000q15t6o2s8gys3';

export default function Nav() {
  const [viewState, setViewState] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14
  });

  return (
    <Map
      {...viewState}
      onMove={evt => setViewState(evt.viewState)}
      initialViewState={{
        latitude: 37.8,
        longitude: -122.4,
        zoom: 14
      }}
      style={{ position: 'fixed', left: 0, right: 0, top: 56, bottom: 56 }}
      mapStyle={MAP_STYLE}
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <Marker longitude={-122.4} latitude={37.8} color="red" />
      <GeolocateControl />
    </Map>
  );
}
