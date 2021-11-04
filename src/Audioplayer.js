import react, { Component } from "react"
import song from "./audio.mp3"
import ReactDOM from "react-dom"
import WaveSurfer from "wavesurfer.js"
import { WaveformContianer, Wave, PlayButton } from "./Waveformstyled"
import { createContext } from "react"
import "./Audioplayer.css"

class Audioplayer extends Component {
    state = {
        Playing: false,
    }

    componentDidMount() {
        const track = document.querySelector("#track")

        this.waveform = WaveSurfer.create({
            barWidth: 3,
            cursorWidth: 1,
            container: "#waveform",
            backend: "WebAudio",
            height: 80,
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

    render() {
        return (
            <div className="Audioplayer">
                <WaveformContianer>
                    <PlayButton onClick={this.handlePlay}>
                        {!this.state.playing ? "Play" : "Pause"}
                    </PlayButton>
                    <Wave id="waveform" />
                    <audio id="track" src={song} />
                </WaveformContianer>
            </div>
        )
    }
}

export default Audioplayer
