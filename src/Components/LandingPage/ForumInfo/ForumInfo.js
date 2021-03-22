import React from "react";
import forumpic from "../../../Image/Landingpage/forumpic.jpg";
import Fab from "@material-ui/core/Fab"
import Link from "@material-ui/core/Link"
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  forumButton: {
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

function ForumInfo() {

  const classes = useStyles();

  return (
    <div style={{ marginTop: "5%", maxWidth:"1920px", textAlign:"center"}}>
      <h2 style={{ textDecorationLine: "underline", fontSize: 40 }}>
        More Nearby Information ?
      </h2>
      <div
        style={{
          backgroundImage: `url(${forumpic})`,
          height: "100%",
          maxWidth:"1920px",
          display: "flex",
          backgroundRepeat: "no-repeat",
          marginTop:"10px"
        }}
      >
        <div
          style={{
            marginLeft: "60%",
            backgroundColor: "rgb(255, 255, 255, 0.8)",
            maxWidth : "1000",
            textAlign:"left",
            
          }}
        >
          <h2 style={{ marginTop: "5%" }}>
            <p style={{ color: "#1737BE", fontSize: "40", fontWeight:"bold" }}>No information</p>
            <p style={{ fontWeight: "normal" }}>of your nearby area?</p>
            <p style={{ fontWeight: "normal" }}>Try the <text style={{color:"#1737BE", fontWeight:"bold"}}>Forum</text> and see what your neighbors' post and also share your information !!?</p>
          </h2>
          <Link href="/Forum" style={{textDecoration:"none"}}>
          <Fab variant="extended" className={classes.forumButton} style={{marginLeft:"40%", marginBottom:"5%"}}>Forum</Fab>
          </Link>
        </div>
        
      </div>
     
    </div>
  );
}

export default ForumInfo;
