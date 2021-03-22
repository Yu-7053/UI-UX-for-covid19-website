import React from "react";
import Carousel from "./Carousel/Carousel";
import ForumInfo from "./ForumInfo/ForumInfo";
import GlanceOfDashboard from "./GlanceofDashboard/GlanceOfDashboard";
import HowToHelp from "./HowToHelp/HowToHelp";
import "./LandingPage.css"

function LandingPage() {
  return (
    <div className="landingPage">
      <Carousel />

      <GlanceOfDashboard />

      <ForumInfo />

      <HowToHelp />
    </div>
  );
}

export default LandingPage;
