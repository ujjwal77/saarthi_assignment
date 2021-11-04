import react, { Component } from "react"
import song from "./audio.mp3"
import ReactDOM from "react-dom"
import WaveSurfer from "wavesurfer.js"
import { WaveformContianer, Wave, PlayButton } from "./Waveformstyled"
import { createContext } from "react"
// import { useStateValue } from "./StateProvider";
import "./Audioplayer.css"
import play from "./Assets/play.png"
import volume from "./Assets/volume.png"
import mute from "./Assets/mute.png"
import pause from "./Assets/pause.png"
import stop from "./Assets/stop.png"

// function Audioplayer(props){
//      console.log(props.files)
//     return <img src={props.files} width={400} height={300}></img>;
// }
// export default Audioplayer

class Audioplayer extends Component {

    state = {
        Playing: false,
        vol:false,
    }

    componentDidMount() {
        const track = document.querySelector("#track")

        this.waveform = WaveSurfer.create({
            barWidth: 3,
            cursorWidth: 1,
            container: "#waveform",
            backend: "WebAudio",
            height: 150,
            progressColor: "#2D5BFF",
            responsive: true,
            waveColor: "#EFEFEF",
            cursorColor: "transparent",
            
        })
        

        this.waveform.load(track)
    }

    handlePlay = () => {
        this.setState({ playing: !this.state.playing })
        this.waveform.playPause()
    }
    handleReplay = () => {
        this.setState({ playing: false})
        this.waveform.stop()
    }

    handleVolume = () => {
        this.setState({ vol: !this.state.vol })
        this.waveform.toggleMute()
    }

    handleVol = () => {
        this.waveform.setVolume(0.5);
        // wavesurfer.current.play();
      }

    

    render() {
        return (
            <div className="Audioplayer">
                <WaveformContianer>
                    <div className="sound">
                        <div className="soundaudio">
                            <Wave id="waveform" />
                            <audio id="track" src={song} />
                        </div>

                    <div className="soundcheck">
                    <PlayButton onClick={this.handlePlay}>
                        {!this.state.playing ? <img src={play} height={40} /> : <img src={pause} height={50} />}
                    </PlayButton>
                    <PlayButton onClick={this.handleReplay}>
                        <img src={stop} height={50} />
                    </PlayButton>
                    <PlayButton onClick={this.handleVolume}>
                        {!this.state.vol ? <img src={volume} height={50} /> : <img src={mute} height={50} />}
                    </PlayButton>
                    
                    </div>
                    </div>
                    
                </WaveformContianer>
            </div>
        )
    }
}

export default Audioplayer
