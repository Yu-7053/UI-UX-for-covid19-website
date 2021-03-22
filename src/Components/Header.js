import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  Navbutton: {
    marginLeft: theme.spacing(1),
  },
  extendedIcon: {
    marginLeft: theme.spacing(5),
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

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#42607A" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link href="/" style={{ color: "white" }}>
              {" "}
              COVID-Check
            </Link>
          </Typography>

          <Link href="/News" style={{ color: "white" }}>
            <Button color="inherit" className={classes.Navbutton}>
              News
            </Button>
          </Link>

          <h3>|</h3>
          <Link href="/Dashboard" style={{ color: "white" }}>
            <Button color="inherit" className={classes.Navbutton}>
              Dashboard
            </Button>
          </Link>
          <h3>|</h3>
          <Link href="/Forum" style={{ color: "white" }}>
            <Button color="inherit" className={classes.Navbutton}>
              Forum
            </Button>
          </Link>

          <Fab variant="extended" size="small" className={classes.extendedIcon}>
            Login
          </Fab>
        </Toolbar>
      </AppBar>
    </div>
  );
}
