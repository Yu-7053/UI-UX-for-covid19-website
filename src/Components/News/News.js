import React from 'react'
import "./News.css"
import GlobalNews from "./GlobalNews/GlobalNews"
import AreaNews from "./AreaNews/AreaNews"
import ProsOpinion from './ProsOpinion/ProsOpinion'

function News() {
    return (
        <div className="news">
            <GlobalNews />
            <AreaNews />
            <ProsOpinion />
        </div>
    )
}

export default News
