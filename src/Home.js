import react, { Component } from "react"
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    useHistory,
} from "react-router-dom"
import Audioplayer from "./Audioplayer"
import "./Home.css"
import FancyButton from "./fancybtn"

function Home() {
    return (
        <div className="Home">
            <Link to="./Audioplayer">
                {
                    //}<button id="fancy-button" type="button"> Upload </button>
                }
                <FancyButton id="fancy-button">Upload</FancyButton>
            </Link>
        </div>
    )
}

export default Home
