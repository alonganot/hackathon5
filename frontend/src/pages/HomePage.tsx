import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import '../styles/HomePage.css'
import Title from "../assets/mainTitle.svg"

function HomePage() {
    const homeText = `מחזירים את האור למפונים מהדרום והצפון

    אנחנו עוטף ישראל.
    
    אנו מלווים משפחות מהדרום ומהצפון ונותנים להם מעטפת של 360 מעלות בתחומים הבאים: בריאות הגוף והנפש, תרבות, חינוך, ביגוד, ציוד ועוד. בסיוע של גופים מובילים במשק, אנו מספקים פעילויות חינוכיות וטכנולוגיות, 3 ארוחות ביום ופעילויות חברתיות כגון: ספורט, יצירה, דרמה, הופעות, ריקוד ועוד... 
    
    אם אתם מעוניינים לתאם פעילות, מתנדבים להעביר פעילות כלשהיא, או זקוקים לכל סיוע אחר מאיתנו, אתם מוזמנים לפנות אלינו בטפסים כאן למטה - יש ללחוץ על הכפתור המתאים ולמלא את הטופס
    (חמ"ל עוטף יכול לסייע לכם גם בדברים נוספים, מוזמנים לדבר איתנו גם לגבי זה)
    
    סייענו לכ-2500 תושבי הדרום והצפון ב-18 בתי מלון בתל אביב, ובנינו לוחות זמנים להפעלת ההורים והילדים בכל יום.`

    const minText = ``;
    return (
        <>
            <Navbar/>
            <div id="main-grid">
                {/* <h4>{homeText}</h4> */}
                <img height={'400px'} style={{justifySelf:"center"}} src="../src/assets/mainTitle.svg"/>
                <div>
                    <video width="200" controls>
                        <source src="../src/assets/hamal-video.mp4" type="video/mp4"/>
                    </video>
                </div>
                {/* <Title/> */}
                {/* <p id="main-text">{minText}</p> */}

            </div>
            <Link id="route-link" to={"/form/offer"}>לסיוע</Link>
            <Link id="route-link" to={"/form/request"}>לבקשת עזרה</Link>
 
        </>
    )
}

export default HomePage
