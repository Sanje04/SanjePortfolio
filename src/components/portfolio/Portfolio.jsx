import "./portfolio.scss"
import PortfolioList from '../portfolioList/PortfolioList';
import { useState, useEffect } from "react";
import { featuredPortfolio, reactWork, javaWork, pythonWork, cppWork, jsWork } from '../../data.js';

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "react",
            title: "React Work" 
        },
        {
            id: "java",
            title: "Java Work"
        },
        {
            id: "python",
            title: "Python Work"
        },
        {
            id: "cpp",
            title: "C++ Work"
        },
        {
            id: "js",
            title: "JavaScript Work"
        }
    ]

    useEffect(() => {

        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "react":
                setData(reactWork);
                break;
            case "java":
                setData(javaWork);
                break
            case "python":
                setData(pythonWork);
                break;
            case "cpp":
                setData(cppWork);
                break;
            case "js":
                setData(jsWork);
                break;
            default:
                setData(featuredPortfolio);
        }

    },[selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList 
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map(d=>(
                    <div className="item">
                        <img 
                            src={d.img}
                            alt="" 
                        />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
