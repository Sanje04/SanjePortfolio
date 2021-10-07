import "./portfolio.scss"
import PortfolioList from '../portfolioList/PortfolioList';
import { useState, useEffect } from "react";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App" 
        },
        {
            id: "portfolio",
            title: "Portfolio"
        },
        {
            id: "featured2",
            title: "Featured"
        },
        {
            id: "software",
            title: "Software"
        }
    ]
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
                <div className="item">
                    <img 
                        src="https://zellusmarketing.com/wp-content/uploads/2021/03/icon-1.8s-266px-2.gif" 
                        alt="" 
                    />
                    <h3>Youtube App</h3>
                </div>

                <div className="item">
                    <img 
                        src="https://zellusmarketing.com/wp-content/uploads/2021/03/icon-1.8s-266px-2.gif" 
                        alt="" 
                    />
                    <h3>Youtube App</h3>
                </div>

                <div className="item">
                    <img 
                        src="https://zellusmarketing.com/wp-content/uploads/2021/03/icon-1.8s-266px-2.gif" 
                        alt="" 
                    />
                    <h3>Youtube App</h3>
                </div>
                
                <div className="item">
                    <img 
                        src="https://zellusmarketing.com/wp-content/uploads/2021/03/icon-1.8s-266px-2.gif" 
                        alt="" 
                    />
                    <h3>Youtube App</h3>
                </div>

                <div className="item">
                    <img 
                        src="https://zellusmarketing.com/wp-content/uploads/2021/03/icon-1.8s-266px-2.gif" 
                        alt="" 
                    />
                    <h3>Youtube App</h3>
                </div>

                <div className="item">
                    <img 
                        src="https://zellusmarketing.com/wp-content/uploads/2021/03/icon-1.8s-266px-2.gif" 
                        alt="" 
                    />
                    <h3>Youtube App</h3>
                </div>
            </div>
        </div>
    )
}
