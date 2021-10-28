import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';


function Map() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 50.8503,
    longitude: 4.35236,
    zoom: 10
  });

  return (
    <div>

      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={"pk.eyJ1IjoibWlrZW1lbmRlcyIsImEiOiJja3Y5Nnh5eGIxbTNmMnRva3NtN20zamozIn0.ev4xhF6MPTT075ZELUJ_jg"}
        onViewportChange={nextViewport => setViewport(nextViewport)}
      />
    </div>
  );
}
export default Map