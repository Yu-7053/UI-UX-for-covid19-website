import React, { useState } from "react";
import Infobox from "./Infobox";
import "./GlanceOfDashBoard.css";
import Fab from "@material-ui/core/Fab";
import Link from "@material-ui/core/Link";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function GlanceOfDashboard() {
  const [worldwide, setWorldwide] = useState({});

  const url = "https://disease.sh/v3/covid-19/all";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setWorldwide(data);
    });

  return (
    <div
      style={{
        marginTop: "8%",
        height: "300px",
        backgroundColor: "rgb(160, 160, 160, 0.1)",
      }}
    >
      <div style={{ justifyContent: "center" }}>
        <h2
          style={{
            textDecorationLine: "underline",
            textAlign: "center",
            fontSize: 40,
          }}
        >
          Glance of Dashboard
        </h2>
      </div>
      <div className="glanceOfDashboard__stats">
        <Infobox
          title="Cases"
          isRed
          cases={worldwide.todayCases}
          total={worldwide.cases}
        />

        <Infobox
          title="Recovered"
          cases={worldwide.todayRecovered}
          total={worldwide.recovered}
        />

        <Infobox
          title="Deaths"
          isRed
          cases={worldwide.todayDeaths}
          total={worldwide.deaths}
        />
      </div>
      <div style={{ marginLeft: "80%", marginTop: "2%" }}>
        <Link href="/Dashboard" style={{ cursor: "pointer" }}>
          <h3 style={{ fontSize: 30, color: "black" }}>Go to Dashboard</h3>
        </Link>
      </div>
    </div>
  );
}

export default GlanceOfDashboard;
