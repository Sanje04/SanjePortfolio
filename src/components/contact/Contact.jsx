import "./contact.scss"
import {} from "@material-ui/icons";
import { useState } from "react";

export default function Contact() {

    const[message,setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    } 
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="https://www.marketernity.com/wp-content/uploads/2020/04/undraw_email_campaign_qa8y.png" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button>Send</button>
                    {message && <span>Thanks, I will reply soon! </span>}
                </form>
            </div>
        </div>
    )
}
