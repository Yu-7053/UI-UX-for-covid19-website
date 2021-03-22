import "./ProsOpinion.css";
import { makeStyles } from "@material-ui/core/styles";
import { React, useState } from "react";
import Slider from "react-slick";
import pinkDoc from "../../../Image/News/Opinion/pinkDoc.jpg";
import focusDoc from "../../../Image/News/Opinion/focusDoc.jpg";
import studyDoc from "../../../Image/News/Opinion/studyDoc.jpg";
import banCovid from "../../../Image/News/Opinion/banCovid.jpg";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import {
  Link,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const newsData = [
  {
    image: pinkDoc,
    description: "“Washing hands is more effective than disinfectant” ",
  },
  {
    image: focusDoc,
    description: "Calls out for more Support for Frontline Medical Personnels",
  },
  {
    image: studyDoc,
    description: "”Medical information should be more accessible”",
  },
  {
    image: banCovid,
    description: "Vaccination Tested Successful on Citizens",
  },
];

function ProsOpinion() {
  const classes = useStyles();
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <ArrowForwardIos fontSize="large"/>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <ArrowBackIos fontSize="large"/>
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    className: "center",
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,

    centerMode: true,
  
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="prosOpinion">
      <div>
        <p style={{fontSize:40,textDecorationLine:"underline"}}>Opinions from the<text style={{fontWeight:"bold"}}> Pros</text></p>
        <Slider {...settings}>
          {newsData.map((img, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <Card className={classes.root}>
                <CardMedia image={img.image} className={classes.media} />
                <CardContent style={{ height: "70px" }}>
                  <Typography style={{fontSize:20}}>{img.description}</Typography>
                  <Link>Read More...</Link>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProsOpinion;
// <img src={img.image} alt={img.image} />
