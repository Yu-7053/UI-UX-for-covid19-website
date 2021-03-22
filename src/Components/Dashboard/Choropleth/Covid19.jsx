import React, { useState, useEffect } from "react";
import LoadRecovered from "./tasks/LoadRecovered";
import Loading from "./Loading";
import CovidMap from "./ChoroplethMap/CovidMap";
import LoadCountriesTask from "./tasks/LoadCountriesTask";

import legendItems from "./entities/LegendItems";

const Covid19 = ({ casesType }) => {
  const [countries, setCountries] = useState([]);

  const legendItemsReverse = [...legendItems].reverse();

  {
    /*const load1 = () => {
    const loadCountriesTask = new LoadCountriesTask();
    loadCountriesTask.load((countries) => setCountries(countries));
  };

  const loadT = () => {
    const loadRecovered = new LoadRecovered();
    loadRecovered.load((countries) => setCountries(countries));
  };
  
  
  const loadCountriesTask = new LoadCountriesTask();
  const loadRecovered = new LoadRecovered();

  //useEffect(loadT, []);

  useEffect(() => {
    casesType === "cases"
      ? loadCountriesTask.load((countries) => setCountries(countries))
      : loadRecovered.load((countries) => setCountries(countries));
  }, [{casesType}]);*/
  }

  const load1 = () => {
    const loadCountriesTask = new LoadCountriesTask();
    loadCountriesTask.load((countries) => setCountries(countries));
  };

  useEffect(load1, [casesType]); 

  

  //useEffect(casesType === "cases" ? (load1) : (loadT), [casesType]);
  // useEffect(() => {casesType === "cases" ? (loadT) : (load1)}, [])

  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <CovidMap countries={countries} casesType={""}/>
        </div>
      )}
    </div>
  );
};

export default Covid19;

//casesType === cases ? (load1, []):(loadT, [])

/*
class Covid19 extends Component {
  state = {
    countries: [],
  };

  loadCountryTask = new LoadCountryTask();

  componentDidMount() {
    this.loadCountryTask.load((countries) => this.setState({ countries }));
  }

  render() {
    const { countries } = this.state;
    return (
      <div>
        {countries.length === 0 ? (
          <Loading />
        ) : (
          <div>
            <CovidMap countries={countries} />
            <Legend legendItems={legendItems} />
          </div>
        )}
      </div>
    );
  }
}

export default Covid19;
*/
