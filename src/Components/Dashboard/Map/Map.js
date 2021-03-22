import {React, useState} from "react";
import { showDataOnMap } from "../Util/util";
import "./Map.css";

import { MapContainer, TileLayer } from "react-leaflet";

function Map({ countries, casesType, center, zoom }) {
  const [mapFly, setMapFly] = useState(null);
  if (mapFly) {
    mapFly.flyTo(center);
  }

  return (
    <div className="map">
      <MapContainer
        center={center}
        zoom={zoom}
        whenCreated={setMapFly}
        maxZoom={8}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap'
        />
        {countries ? showDataOnMap(countries, casesType) : null}{" "}
      </MapContainer>
    </div>
  );
}

export default Map;
