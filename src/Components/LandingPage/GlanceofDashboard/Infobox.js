import React from 'react'
import {Card, CardContent, Typography} from "@material-ui/core"
import "./InfoBox.css";

function Infobox({title, cases, total, isRed}) {
    return (
        <Card className="infoBox" style={{marginRight:"10%"}}>
            <CardContent>
                <Typography className="inforBox__title" color="textSecondary">
                {title}
                </Typography>
                <h2 className={` infoBox__green ${isRed && "infoBox__cases"}`}>{cases}</h2>
                <Typography className="inforBox__total" color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Infobox 
