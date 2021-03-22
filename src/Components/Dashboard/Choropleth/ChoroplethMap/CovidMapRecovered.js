import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CovidMap.css";
import Legend from "../Legend";
import legendItems from "../entities/LegendItems";
import legendItemsTest from "../entities/LegendItemsTest";

const legendItemsReverse = [...legendItems].reverse();
const legnedItemsTestReverse = [...legendItemsTest].reverse();

const CovidMapRecovered = ({ countries, casesType }) => {
  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };

  const onEachCountry = (country, layer) => {
    layer.options.fillColor = country.properties.color;
    const name = country.properties.ADMIN;
    const recoveredText = country.properties.recoveredText;
    layer.bindPopup(`${name} ${recoveredText}`);
  }; 




  



    

  return (
    <div className="covidMap">
    <MapContainer  zoom={2} center={[20, 60]}>
      <GeoJSON
        style={mapStyle}
        data={countries}
        onEachFeature={onEachCountry}
      />
    </MapContainer>
    
    <Legend legendItems={legnedItemsTestReverse} /> 
    </div> 
  );
};

export default CovidMapRecovered;