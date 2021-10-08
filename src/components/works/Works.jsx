import "./works.scss";
import { PhoneAndroidSharp, ArrowBackIosSharp, ArrowForwardIosSharp, LaptopChromebookSharp } from "@material-ui/icons";
import { useState } from "react";
//import { workData } from "./workData.js";


export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: 1,
            //icon: <PhoneAndroidSharp />,
            title: "Software Developer",
            desc: "Software Developer for ADP",
            img: "https://1000logos.net/wp-content/uploads/2021/04/ADP-logo.png",
            time: "Feb 2021 - Apr 2021"
        },
        {
            id: 2,
            //icon: <PhoneAndroidSharp />,
            title: "Software Engineer",
            desc: "Software Engineer for AHead Simulation",
            img: "data:image/jpeg;base64,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",
            time: "Sep 2021 - Dec 2021"
        }
    ];
    //let data = workData;

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1) :
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }

    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <LaptopChromebookSharp />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Work Period</span>
                                    <p>{d.time}</p>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img }
                                alt="" />
                            </div>
                        </div>  
                    </div>
                    ))}
            </div>
            <ArrowBackIosSharp className="arrow left" onClick={()=>handleClick('left')}/>
            <ArrowForwardIosSharp className="arrow right" onClick={()=>handleClick()}/>
        </div>
    )
}
