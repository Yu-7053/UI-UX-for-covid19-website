import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Instagram, Twitter, Facebook } from "@material-ui/icons";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "30ch",
      maxHeight: "5ch",
    },
    button: {
      width: "30ch",
    },
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div style={{ marginTop: "10%" }}>
      <div
        style={{
          backgroundColor: "#42607A",
          maxWidth: "1920px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "white" }}>Subscribe</h2>
        <div>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Email"
              size="small"
              color="green"
              style={{ backgroundColor: "white" }}
            />
          </form>
          <button>submit</button>
        </div>
      </div>
      <div
        style={{
          marginTop: "1%",
          backgroundColor: "#42607A",
          maxWidth: "1920px",
          textAlign: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid xs={4}>
            <h2 style={{ color: "white", textDecorationLine: "underline" }}>
              Current Situation
            </h2>
            <Link href="/Dashboard" style={{ color: "white" }}>
              <p style={{ color: "white", fontSize: 20 }}>Dashboard</p>
            </Link>
            <Link href="/Dashboard" style={{ color: "white" }}>
              <p style={{ color: "white", fontSize: 20 }}>News</p>
            </Link>
            <Link href="/Dashboard" style={{ color: "white" }}>
              <p style={{ color: "white", fontSize: 20 }}>Forum</p>
            </Link>
          </Grid>
          <Grid xs={4}>
            <h2 style={{ color: "white", textDecorationLine: "underline" }}>
              About Us
            </h2>
            <p style={{ color: "white", fontSize: 20 }}>
              Number: +49 176 6589 4800
            </p>
            <p style={{ color: "white", fontSize: 20 }}>
              Email: covidprevent@gmail.com
            </p>
            <p style={{ color: "white", fontSize: 20 }}>Address:</p>
          </Grid>
          <Grid xs={4}>
            <h2 style={{ color: "white", textDecorationLine: "underline" }}>
              Social Media
            </h2>
            <Instagram style={{ fontSize: 45, color: "white" }} />
            <Facebook style={{ fontSize: 45, color: "white" }} />
            <Twitter style={{ fontSize: 45, color: "white" }} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
