import "./testimonials.scss";
import { ArrowRightSharp, Person, LinkedIn} from "@material-ui/icons"

export default function Testimonials() {
    const data = [
        {
            id: 1,
            name: 'Joe Known',
            title: "Senior Software Developer",
            desc: "Sanje is a great programmer! (Dummy Text)",
            img: "https://thumbs.dreamstime.com/b/attractive-men-work-office-mans-calculates-calculator-using-laptop-accounting-profession-man-sitting-desk-128696722.jpg"
        },
        {
            id: 2,
            name: 'Steve Rogers',
            title: "Senior Software Engineer",
            desc: "Sanje is a great programmer! (Dummy Text 2)",
            img: "https://i.pinimg.com/474x/31/5c/8b/315c8b0bcfc40900ae1462551f6d1ebd.jpg"
        },
        {
            id: 3,
            name: 'LeBron Games',
            title: "Senior Software Developer",
            desc: "Sanje is a goat programmer! (Dummy Text 3)",
            img: "https://cdn.cnn.com/cnnnext/dam/assets/210928172406-lebron-james-media-day-0928-large-169.jpg"
        }
    ];

    return (
        <div className="testimonials" id="testimonial">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d)=>(
                    <div className="card">
                        <div className="top">
                            <ArrowRightSharp className="left"/>
                            <img src={d.img} alt="" />
                            <LinkedIn className="right"/>
                        </div>
                        <div className="center">
                            {d.desc}
                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
