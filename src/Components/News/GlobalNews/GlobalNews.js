import "./GlobalNews.css";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Slider from "react-slick";
import covidBreakingNews from "../../../Image/News/Global/covidBreakingNews.jpg";
import covidPeople from "../../../Image/News/Global/covidPeople.jpg";
import covidNumbers from "../../../Image/News/Global/covidNumbers.jpg";
import redCovid from "../../../Image/News/Global/redCovid.jpg";
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
    maxWidth: 400,
  },
  media: {
    height: 140,
  },
});

const newsData = [
  {
    image: covidBreakingNews,
    description: "Who Reveals New Findings for Virus",
  },
  {
    image: covidPeople,
    description: "Vaccination Tested Successful on Citizens",
  },
  {
    image: covidNumbers,
    description: "Huge Donation to Support Global Medical Forces",
  },
  {
    image: redCovid,
    description: "Vaccination Tested Successful on Citizens",
  },
];

function GlobalNews() {
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
    <div className="globalNews">
      
        <p style={{fontSize:40, textDecorationLine:"underline"}}><text style={{fontWeight:"bold"}}>Global</text> News of Pandemic</p>
        <Slider {...settings}>
          {newsData.map((img, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <Card className={classes.root}>
                <CardMedia image={img.image} className={classes.media} />
                <CardContent style={{ maxHeight: "70px" }}>
                  <Typography style={{fontSize:20}}>{img.description}</Typography>
                  <Link>Read More...</Link>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      
    </div>
  );
}

export default GlobalNews;
// <img src={img.image} alt={img.image} />
