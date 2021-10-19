import "./topbar.scss"
import {PersonSharp, MailSharp, ContactPhoneSharp, LinkedIn} from "@material-ui/icons"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { saveAs } from "file-saver";


export default function topbar({menuOpen, setMenuOpen}) {

    const downloadResume = () => {
        alert('You clicked on download');
        saveAs(
            "assets/Resume.pdf",
            "SanjeResume.pdf"
        );
    }

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
                    <div className="itemContainer">
                            <a href="https://www.linkedin.com/in/sanje-divakaran-4391101b0/" rel="noopener noreferrer" target="_blank">
                                <LinkedIn className="icon" cursor="pointer" />
                            </a>
                        <span></span>
                    </div>
                    <div className="itemContainer">
                        <Button variant="primary" size="sm" onClick={() => downloadResume()}>Download Resume</Button>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
