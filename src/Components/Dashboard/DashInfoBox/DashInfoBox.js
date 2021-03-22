import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./DashInfoBox.css";

function DashInfoBox({ title, cases, total, active, isRed, ...props }) {
  
  return (
    <Card
      onClick={props.onClick}
      className={`dashInfoBox ${active && "dashInfoBox--selected"} ${
        isRed && "dashInfoBox--red"
      }`}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h2 className={`dashInfoBox__cases ${!isRed && "dashInfoBox__cases--green"}`}>
          {cases}
        </h2>

        <Typography className="dashInfoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DashInfoBox;