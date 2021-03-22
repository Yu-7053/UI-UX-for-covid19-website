import React, { useState, useEffect } from "react";
import LoadRecovered from "./tasks/LoadRecovered";
import Loading from "./Loading";
import CovidMap from "./ChoroplethMap/CovidMap";
import CovidMapRecovered from "./ChoroplethMap/CovidMapRecovered";
import LoadCountriesTask from "./tasks/LoadCountriesTask";

import legendItems from "./entities/LegendItems";

const Covid19Recovered = ({casesType}) => {
  const [countries, setCountries] = useState([]);

  const legendItemsReverse = [...legendItems].reverse();

  

  const loadT = () => {
    const loadRecovered = new LoadRecovered();
    loadRecovered.load((countries) => setCountries(countries));
  };

  useEffect(loadT, [casesType]); 


 
  // useEffect(() => {casesType === "cases" ? (loadT) : (load1)}, [])

  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <CovidMapRecovered countries={countries} /> 
        </div>
      )}
    </div>
  );
};

export default Covid19Recovered;


