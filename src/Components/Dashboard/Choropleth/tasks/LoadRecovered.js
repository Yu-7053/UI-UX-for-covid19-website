import papa from "papaparse";
import legendItemsTest from "../entities/LegendItemsTest";
import { features } from "../data/countries.json";
//    this.setState(features);

class LoadRecovered {
  covidUrl =
    //"https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/02-10-2021.csv";
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv";
  //"https://disease.sh/v3/covid-19/countries"
  setState = null;

  load = (setState) => {
    this.setState = setState;

    papa.parse(this.covidUrl, {
      download: true,
      header: true,
      complete: (result) => this.#processCovidData(result.data),
    });
  };

  #processCovidData = (covidCountries) => {
    for (let i = 0; i < features.length; i++) {
      const country = features[i];

      
      const covidCountry = covidCountries.find(
        (covidCountry) => covidCountry.ISO3 === country.properties.ISO_A3
      );

      country.properties.recovered = 0;
      country.properties.recoveredText = 0;

      if (covidCountry != null) {
        let recovered = Number(covidCountry.Recovered);
        country.properties.recovered = recovered;
        country.properties.recoveredText = this.#formatNumberWithCommas(
          recovered
        );
      }
      this.#setCountryColor(country);
    }

    this.setState(features);
  };

  #setCountryColor = (country) => {
    const legendItemTest = legendItemsTest.find((item) =>
      item.isFor(country.properties.recovered)
    );

    if (legendItemTest != null) country.properties.color = legendItemTest.color;
  };

  #formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
}

export default LoadRecovered;
