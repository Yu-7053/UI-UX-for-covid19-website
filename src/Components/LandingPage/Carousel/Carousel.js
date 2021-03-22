import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../CarouselData";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

function Carousel() {
  const useStyles = makeStyles((theme) => ({
    carouselButton: {
      marginLeft: theme.spacing(5),
      border:"5px solid #E56C53",
      backgroundColor:"white",
      
      '&:hover':{
        backgroundColor:"#E56C53",
        border:"5px solid white",
        color:"white"
        //transparent-duration
      }
    },
  }));

  const [currImg, setCurrImg] = useState(0);
  const [buttonCol1, setButtonCol1] = useState(true);
  const [buttonCol2, setButtonCol2] = useState(false);
  const [buttonCol3, setButtonCol3] = useState(false);

  const changeColor1 = () => {
    setButtonCol1(true);
  };

  const classes = useStyles();

  return (
    <div className="carousel" style={{ marginTop: "2%" }}>
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div
          style={{
            marginLeft: "70%",
            backgroundColor: "rgb(255, 255, 255, 0.8)",
            width: 500,
          }}
        >
          <h2 style={{ marginTop: "5%", fontSize: 40}}>{images[currImg].title}</h2>
          <h4>{images[currImg].subtitle}</h4>
          <Fab variant="extended" className={classes.carouselButton} style={{marginLeft:"28%", marginTop:"10%"}}>Check It Out</Fab>
        </div>
      </div>
      <div>
        {buttonCol1 ? (
          <Button
            variant="contained"
            style={{
              width: "33.33333%",
              marginTop: "1%",
              backgroundColor: "lightblue",
            }}
            onClick={() => {
              setCurrImg(0);
            }}
          >
            News of Pandemic
          </Button>
        ) : (
          <Button
            variant="contained"
            style={{ width: "33.33333%", marginTop: "1%" }}
            onClick={() => {
              setCurrImg(0);
              setButtonCol1(true);
              setButtonCol2(false);
              setButtonCol3(false);
            }}
          >
            News of Pandemic
          </Button>
        )}

        {buttonCol2 ? (
          <Button
            variant="contained"
            style={{
              width: "33.33333%",
              marginTop: "1%",
              backgroundColor: "lightblue",
            }}
            onClick={() => {
              setCurrImg(1);
            }}
          >
            Prevention
          </Button>
        ) : (
          <Button
            variant="contained"
            style={{ width: "33.33333%", marginTop: "1%" }}
            onClick={() => {
              setCurrImg(1);
              setButtonCol1(false);
              setButtonCol2(true);
              setButtonCol3(false);
            }}
          >
            Prevention
          </Button>
        )}

        {buttonCol3 ? (
          <Button
            variant="contained"
            style={{
              width: "33.33333%",
              marginTop: "1%",
              backgroundColor: "lightblue",
            }}
            onClick={() => {
              setCurrImg(2);
            }}
          >
            Dashboard
          </Button>
        ) : (
          <Button
            variant="contained"
            style={{ width: "33.33333%", marginTop: "1%" }}
            onClick={() => {
              setCurrImg(2);
              setButtonCol1(false);
              setButtonCol2(false);
              setButtonCol3(true);
            }}
          >
            Dashboard
          </Button>
        )}

        
      </div>
    </div>
  );
}

export default Carousel;
