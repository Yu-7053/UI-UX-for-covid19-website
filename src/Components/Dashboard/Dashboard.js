import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import DashInfoBox from "./DashInfoBox/DashInfoBox";
import numeral from "numeral";
import Map from "./Map/Map";
import Table from "./Table/Table";
import { sortData, prettyPrintStat } from "./Util/util";
import LineGraph from "./LineGraph/LineGraph";
import "leaflet/dist/leaflet.css";
import UsaStateTable from "./UsaTable/UsaStateTable";
import Covid19Decide from "./Choropleth/Covid19Decide";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";

const Dashboard = () => {
  const [country, setInputCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [countries, setCountries] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [testTableData, setTestTableData] = useState([]);
  const [mapBubble, setMapBubble] = useState(false);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getUsaStateData = async () => {
      await fetch("https://disease.sh/v3/covid-19/states")
        .then((response) => response.json())
        .then((data) => {
          const states = data.map((state) => ({
            name: state.state,
            value: state.state,
          }));

          setTestTableData(data);
        });
    };

    getUsaStateData();
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          let sortedData = sortData(data);
          setCountries(countries);
          setMapCountries(data);
          setTableData(sortedData);
        });
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInputCountry(countryCode);
        setCountryInfo(data);

        countryCode === "worldwide"
          ? setMapCenter([34.80746, -40.4796])
          : setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        countryCode === "worldwide" ? setMapZoom(2) : setMapZoom(4);
      });
  };

  return (
    <div>
      <div className="dashboard">
        <div className="dashboard__left">
          <div className="dashboard__header">
            <h1>Dashboard</h1>
            <FormControl className="dashboard__dropdown">
              <Select
                variant="outlined"
                value={country}
                onChange={onCountryChange}
              >
                <MenuItem value="worldwide">Worldwide</MenuItem>
                {countries.map((country) => (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="dashboard__stats">
            <DashInfoBox
              onClick={(e) => setCasesType("cases")}
              title="Coronavirus Cases"
              isRed
              active={casesType === "cases"}
              cases={prettyPrintStat(countryInfo.todayCases)}
              total={numeral(countryInfo.cases).format("0.0a")}
            />
            <DashInfoBox
              onClick={(e) => setCasesType("recovered")}
              title="Recovered"
              active={casesType === "recovered"}
              cases={prettyPrintStat(countryInfo.todayRecovered)}
              total={numeral(countryInfo.recovered).format("0.0a")}
            />
            <DashInfoBox
              onClick={(e) => setCasesType("deaths")}
              title="Deaths"
              isRed
              active={casesType === "deaths"}
              cases={prettyPrintStat(countryInfo.todayDeaths)}
              total={numeral(countryInfo.deaths).format("0.0a")}
            />
          </div>
          {mapBubble ? (
            <Map
              casesType={casesType}
              countries={mapCountries}
              center={mapCenter}
              zoom={mapZoom}
            />
          ) : (
            <Covid19Decide casesType={casesType} />
          )}
          <div style={{ justifyContent: "center", display: "flex" }}>
            <button
              style={{
                height: "50px",
                width: "40%",
                marginRight: "5%",
                borderTop: "none",
              }}
              onClick={() => {
                setMapBubble(false);
              }}
            >
              <h2> Choropleth Map</h2>
            </button>

            <button
              style={{
                height: "50px",
                width: "40%",
                borderTop: "none",
              }}
              onClick={() => {
                setMapBubble(true);
              }}
            >
              <h2>Bubble Map</h2>
            </button>
          </div>
        </div>
        <Card className="dashboard__right">
          <CardContent>
            <div className="dashboard__information">
              <h3>Live Cases by Country</h3>
              <Table countries={tableData} />
              <h3>
                {countryInfo.country} new {casesType}
              </h3>
              <LineGraph casesType={casesType} country={country} />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="dashboard__down">
        <Card className="dashboard__state">
          {countryInfo.country === "USA" ? (
            <CardContent>
              <h3>USA Cases by state</h3>
              <UsaStateTable countries={testTableData} />
            </CardContent>
          ) : (
            <CardContent>
              <h3>No data</h3>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
