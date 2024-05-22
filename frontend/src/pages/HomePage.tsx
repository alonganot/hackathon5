import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import '../styles/HomePage.css'

function HomePage() {
    return (
        <>
            <Navbar/>
            <div id="main-grid">
                <img style={{justifySelf:"center", height:"inherit"}} src="../src/assets/mainTitle.svg"/>
                <div style={{justifyContent:"center", justifySelf:"center",height:"300px", position:"relative"}}>
                    <div className="brown" style={{transform:"translate(28px,-28px)"}} ></div>
                    <div className="brown" style={{transform:"translate(-28px,28px)" , left:"0px",bottom:"0px"}}></div>
                    <div style={{justifyContent:"center",borderRadius:"20px",overflow:"hidden", justifySelf:"center", height:"inherit"}}>
                        <video style={{height:"inherit",position:"relative"}} controls>
                            <source src="../src/assets/hamal-video.mp4" type="video/mp4"/>
                        </video>
                    </div>
                </div>
                <div>
                    <div className="text" style={{fontSize:"32px", paddingBottom:"20px"}}>אנחנו חמ"ל עוטף ישראל.</div>
                    <div className="text" style={{fontSize:"24px", fontWeight:"300", marginRight:"40px"}}>סייענו לכ-2500 תושבי הדרום והצפון ב-18 בתי מלון בתל אביב, ובנינו לוחות זמנים להפעלת ההורים והילדים בכל יום.</div>
                </div>
            </div>
            <div className="buttons">
                <Link id="route-link-offer" className="button" to={"/form/offer"}>לסיוע</Link>
                <Link id="route-link-request" className="button" to={"/form/request"}>לבקשת עזרה</Link>
            </div>

 
        </>
    )
}

export default HomePage
