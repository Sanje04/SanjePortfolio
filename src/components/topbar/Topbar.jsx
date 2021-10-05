import "./topbar.scss"
import {PersonSharp, MailSharp, ContactPhoneSharp} from "@material-ui/icons"

export default function topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Sanje Divakaran</a>
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
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
