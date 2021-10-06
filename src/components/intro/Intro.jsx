import "./intro.scss"
import { ExpandMoreSharp } from "@material-ui/icons"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Greetings! I'm</h2>
                    <h1>Sanje Divakaran</h1>
                    <h3>I am a <span>Software Developer</span></h3>
                </div>
                <ExpandMoreSharp className="icon" id="ExpandMoreSharp"/>
            </div>
        </div>
    )
}
