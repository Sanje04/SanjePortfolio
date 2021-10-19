import "./intro.scss"
import { ExpandMoreSharp } from "@material-ui/icons"
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
    const textRef = useRef();

    useEffect(() =>{
        init(textRef.current, { 
            showCursor: true, 
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Software Developer', 'Computer Engineer', 'Software Engineer', 'Waterloo Student', 'Full Stack Developer'] ,
            
        });
    }, []);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="https://avatars.slack-edge.com/2020-02-08/943465232224_8aa165e0dd959de8b928_512.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Greetings! I'm</h2>
                    <h1>Sanje Divakaran</h1>
                    <h3>I am a <span ref={textRef}></span></h3>
                </div>
            </div>
        </div>
    )
}
