import "./topbar.scss"
import {PersonSharp, MailSharp, ContactPhoneSharp} from "@material-ui/icons"

export default function topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">genius.</a>
                    <div className="itemContainer">
                        <ContactPhoneSharp className="icon"/>
                        <span>289-923-0203</span>
                    </div>
                    <div className="itemContainer">
                        <MailSharp className="icon"/>
                        <span>sanje.divakaran@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    
                </div>
            </div>
        </div>
    )
}
