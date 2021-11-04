import react, { Component } from "react"
import React from "react";
// import FileBase from 'react-file-base64';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    useHistory,
} from "react-router-dom"
import Audioplayer from "./Audioplayer"
import "./Home.css"

function Home() {
    const [file, setFile] = React.useState("");

    function upload(event){
        setFile(event.target.files[0]);
    };

    // function handleSubmit(){
    //     console.log('ukk')
    //     return(
    //         <div>
    //             {file && <Audioplayer files={file}/>}
    //         </div>
    //     )
    // };

    return (
        <div className="Home">
                <div className="upload"> 
                <input type="file" onChange={upload} accept="audio/*" name="Audio"/>
                {/* <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setFile({selectedFile: base64 })} /></div> */}
                <br/>
                {/* {file && <button onClick={handleSubmit}>Trim</button>} */}
                {file && <Link to="./Audioplayer">
                <button id="fancy-button">Trim</button>
                </Link>
                }
                
                </div>
                
        </div>
    )
}

export default Home
