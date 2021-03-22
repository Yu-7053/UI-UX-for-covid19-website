import React from "react";
import Covid19 from "./Covid19";
import Covid19Recovered from "./Covid19Recovered";

const Covid19Decide = ({ casesType }) => {
  return casesType === "cases" ? <Covid19 /> : <Covid19Recovered />;
};

export default Covid19Decide;
