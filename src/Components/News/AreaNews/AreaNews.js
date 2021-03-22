import "./AreaNews.css";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import maskTrain from "../../../Image/News/Area/maskTrain.jpg";
import boardMan from "../../../Image/News/Area/boardMan.jpg";
import emptyRoom from "../../../Image/News/Area/emptyRoom.jpg";
import policePeople from "../../../Image/News/Area/policePeople.jpg";

import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import {
  Link,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import {
    MenuItem,
    FormControl,
    Select
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
      image: maskTrain,
      description: "Who Reveals New Findings for Virus",
    },
    {
      image: boardMan,
      description: "Vaccination Tested Successful on Citizens",
    },
    {
      image: emptyRoom,
      description:
        "Huge Donation to Support Global Medical Forces",
    },
    {
      image: policePeople,
      description: "Vaccination Tested Successful on Citizens",
    },
  ];



function AreaNews() {
    const [country, setCountry] = useState("");
    const [countries, setCountries] = useState([]);


    useEffect(() => {
        const getCountriesData = async () => {
          await fetch("https://disease.sh/v3/covid-19/countries")
            .then((response) => response.json())
            .then((data) => {
              const countries = data.map((country) => ({
                name: country.country,
                value: country.countryInfo.iso2,
              }));
              setCountries(countries);
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
            setCountry(countryCode);
       
          });
      };



  const classes = useStyles();
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <ArrowForwardIos fontSize="large" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <ArrowBackIos fontSize="large" />
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
    <div className="areaNews" style={{backgroundColor:"rgba(198,198,198,0.3)"}}>
      <div className="areaNews__content">
        <p style={{ fontSize: 40, textDecorationLine:"underline" }}>
          News of Pandemic in
          <text style={{ fontWeight: "bold" }}> Your Country</text>{" "}
        </p>
        <p style={{fontSize:25, marginTop:"1%"}}>
          Select your country :
          <FormControl>
            <Select
              varient="outlined"
              value={country}
              onChange={onCountryChange}
              style={{ width: "150px", marginLeft:"20%", marginTop:"2%" }}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </p>
        <Slider {...settings}>
          {newsData.map((img, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <Card className={classes.root}>
                <CardMedia image={img.image} className={classes.media} />
                <CardContent style={{ height: "70px" }}>
                  <Typography style={{ fontSize: 20 }}>
                    {img.description}
                  </Typography>
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

export default AreaNews;
// <img src={img.image} alt={img.image} />
