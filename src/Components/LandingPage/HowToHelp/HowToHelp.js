import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Fab,
} from "@material-ui/core";
import doctors from "../../../Image/Landingpage/doctors.jpg";
import cutGirlHeart from "../../../Image/Landingpage/cutGirlHeart.jpg";
import handsHeart from "../../../Image/Landingpage/handsHeart.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "70%", // 16:9
  },
  helpButton: {
    border: "5px solid #E56C53",
    backgroundColor: "white",

    "&:hover": {
      backgroundColor: "#E56C53",
      border: "5px solid white",
      color: "white",
      //transparent-duration
    },
  },
}));

function HowToHelp() {
  const classes = useStyles();
  const cardData = [
    {
      imgdoc: doctors,
      description1: "support local hospital, doctors and nurses",
    },
    {
      imggirl: cutGirlHeart,
      description2:
        "Support Non-profit organizations to help with the pandemic",
    },
    {
      imghands: handsHeart,
      description3: "Support countries in need and send your love abroad",
    },
  ];

  return (
    <div style={{ marginTop: "5%", width: "100%" }}>
      <div
        style={{
          backgroundColor: "rgb(160, 160, 160, 0.1)",

          width: "auto",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              textDecorationLine: "underline",
              fontSize: 40,
              textAlign: "center",
            }}
          >
            How to Help?
          </h2>
          <p style={{ fontSize: 30, marginTop: "20px" }}>
            Donate not only{" "}
            <text style={{ fontWeight: "bold", color: "#1737BE" }}>Money</text>,
            but{" "}
            <text style={{ fontWeight: "bold", color: "#1737BE" }}>Mask </text>{" "}
            and{" "}
            <text style={{ fontWeight: "bold", color: "#1737BE" }}>
              Protection Clothing
            </text>{" "}
            are all in option
          </p>
          <div>
            <Grid container spacing={4} style={{ marginTop: "10px" }}>
              <Grid item xs={3} style={{ marginLeft: "12%" }}>
                <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image={doctors}
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Support send your love to local{" "}
                      <text style={{ color: "#1737BE" }}>
                        hospital, doctors
                      </text>{" "}
                      and <text style={{ color: "#1737BE" }}>nurses</text>
                    </Typography>
                  </CardContent>
                  <Fab
                    variant="extended"
                    className={classes.helpButton}
                    style={{ marginBottom: "3%" }}
                  >
                    Donate
                  </Fab>
                </Card>
              </Grid>

              <Grid item xs={3}>
                <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image={cutGirlHeart}
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Support{" "}
                      <text style={{ color: "#1737BE" }}>
                        Non-profit organizations
                      </text>{" "}
                      to help with the pandemic
                    </Typography>
                  </CardContent>
                  <Fab
                    variant="extended"
                    className={classes.helpButton}
                    style={{ marginBottom: "3%" }}
                  >
                    Donate
                  </Fab>
                </Card>
              </Grid>

              <Grid item xs={3}>
                <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image={handsHeart}
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Support{" "}
                      <text style={{ color: "#1737BE" }}>
                        countries in need
                      </text>{" "}
                      and send your love abroad
                    </Typography>
                  </CardContent>
                  <Fab
                    variant="extended"
                    className={classes.helpButton}
                    style={{ marginBottom: "3%" }}
                  >
                    Donate
                  </Fab>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToHelp;
