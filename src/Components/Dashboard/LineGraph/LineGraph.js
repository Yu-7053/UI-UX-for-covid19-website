import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";

const options = {
  legend: {
    display: false,
  },
  elements: {
    points: {
      radius: 0,
    },
  },
  maintainAspecRation: false,
  tooltips: {
    mode: "index",
    intesect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        tickes: {
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

const buildChartDataWorld = (data, casesType) => {
  let chartData = [];
  let lastDataPoint;

  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
};

const buildChartData = (data, casesType) => {
  let chartData = [];
  let lastDataPoint;

  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
};

function LineGraph({ casesType, country }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      country === "worldwide"
        ? (await fetch(
            `https://disease.sh/v3/covid-19/historical/all?lastdays=30`
          )
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              
              let chartData = buildChartDataWorld(data, casesType);
              setData(chartData);
            }))
        : (await fetch(
            `https://disease.sh/v3/covid-19/historical/${country}?lastdays=30`
          )
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              const country = data.timeline;
              let chartData = buildChartData(country, casesType);
              setData(chartData);
            }));
    };

    fetchData();
  }, [casesType]);

  // https://disease.sh/v3/covid-19/historical/all?lastdays=120

  {/*useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://disease.sh/v3/covid-19/historical/${country}?lastdays=30`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const country = data.timeline;
          let chartData = buildChartData(country, casesType);
          setData(chartData);
        });
    };

    fetchData();
  }, [casesType]);*/}

  return (
    <div>
      {data?.length > 0 && (
        <Line
          options={options}
          data={{
            datasets: [
              {
                backgroundColor: "rgba(204, 16, 52, 0.3)",
                borderColor: "#CC1034",
                data: data,
              },
            ],
          }}
        />
      )}
    </div>
  );
}

export default LineGraph;