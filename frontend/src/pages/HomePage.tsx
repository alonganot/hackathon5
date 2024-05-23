import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import '../styles/HomePage.css'

function HomePage() {
    return (
        <>
            <Navbar/>
            <div id="main-grid">
                <img style={{justifySelf:"center", height:"inherit", zIndex:6}} src="/mainTitle.svg"/>
                <div style={{justifyContent:"center", justifySelf:"center",height:"300px", position:"relative"}}>
                    <div className="brown" style={{transform:"translate(28px,-28px)"}} ></div>
                    <div className="brown" style={{transform:"translate(-28px,28px)" , left:"0px",bottom:"0px"}}></div>
                    <div style={{justifyContent:"center",borderRadius:"20px",overflow:"hidden", justifySelf:"center", height:"inherit"}}>
                        <video id="main-video" poster="/video-blur.png" controls>
                            <source src="/hamal-video.mp4" type="video/mp4"/>
                        </video>
                    </div>
                </div>
                <div>
                    <div className="text" style={{fontSize:"32px", paddingBottom:"20px"}}>אנחנו חמ"ל עוטף ישראל.</div>
                    <div className="text" style={{fontSize:"24px", fontWeight:"300", marginRight:"40px"}}>סייענו לכ-2500 תושבי הדרום והצפון ב-18 בתי מלון בתל אביב, ובנינו לוחות זמנים להפעלת ההורים והילדים בכל יום.</div>
                </div>
            </div>
            <div className="buttons">
                <Link id="route-link-offer" className="button" to={"/form/offer"}>אשמח לעזור</Link>
                <Link id="route-link-request" className="button" to={"/form/request"}>לבקשת עזרה</Link>
            </div>

            <div id="ops">
                הפעילויות שלנו
            </div>

            <div style={{position: "relative"}}>
                <img style={{justifySelf:"center", height:"1500px",position: "relative",top: "-30px", marginRight: "200px"}} src="/israel-color-map.svg"/>
                
                <div className="mapbutton" style={{top: "160px", right:"390px"}}>
                    <div id="photo1" className="photocontainer">
                        <img className="photo" src="/image1-20.png">
                        </img>
                        <div className="bottomtext"> פעילות לילדים בצפון </div>
                    </div>
                </div>

                <div className="mapbutton" style={{top: "180px", right:"430px"}}>
                    <div id="photo2" className="photocontainer">
                        <img className="photo" src="/hazer.jpeg">
                        </img>
                        <div className="bottomtext"> פעילות לילדים בצפון </div>
                    </div>
                </div>

                <div className="mapbutton" style={{top: "801px", right:"580px"}}>
                    <div id="photo3" className="photocontainer">
                        <img className="photo" src="/dance.png">
                        </img>
                        <div className="bottomtext"> פעילות למשפחות בדרום</div>
                    </div>
                </div>
            </div>



            <div id="bottomgrid">
                <div>
                    <div className="bottomgridTitle">שירה, רכזת פעילויות יצירה בחמ"ל</div>
                    <div className="bottomgridText">כשהמלחמה פרצה, קניתי חומרי יצירה, איתרתי בית מלון עם מפונים והגעתי להתנדב להעביר פעילויות יצירה. שם פגשתי את אנשי חמ"ל עוטף וביצעתי מגוון משימות. לאחר זמן מה חזרתי לעבוד כמנהלת מוצר בחברת הייטק וכיום אני ממשיכה להפעיל סדנאות יצירה בבית מלון ספציפי. אני יוצרת קשר קבוע ומשמעותי עם ילדים שחייהם השתנו מאוד ואני משתדלת להיות שם עבורם. התגובות מדהימות, וישנה המון הערכה והכרת תודה. אני מרגישה שאני מצליחה להביא מעט אור לתוך התקופה החשוכה הזו וזה נותן לי תכלית והרגשה של ביחד</div>
                </div>
                <div>
                    <div className="bottomgridTitle">משה, מנהל אמנותי של להקות "דרך הקצב"</div>
                    <div className="bottomgridText">הקמתי את להקות הקצב הראשונות בארץ. הייתי חלק מלהקת "טררם" והבנתי שאני רוצה להנגיש את העולם הזה לילדים ונוער. התחלתי בגנים ובמתנס"ים וכיום אני מנהל להקות שיש בהן משתתפים מגיל 6 ועד גיל 20+. אנחנו מעבירים תכנים מתוך עולמות התיפוף, תיפוף על הגוף, כלי הקשה, ריקוד ותנועה ובכך גם מסייעים להקנות ערכים שונים. עם חמ"ל עוטף אנחנו משתתפים בהפעלות והופעות באירועים שונים (בר/בת מצווה, ימי הולדת, אירועי קהילה) וגם מעבירים סדנאות למשתתפים נוספים. המטרה שלנו היא לשמח, להרים ולשנות אווירה</div>
                </div>
                <div>
                    <div className="bottomgridTitle">אושרת, משדרות, שוהה במלון טל</div>
                    <div className="bottomgridText">חמ"ל עוטף עוזרים לנו מכל הלב לארגן ימי הולדת, אירועים, ציוד לגן שפתחנו, והם דואגים לכל מחסורינו. בנוסף יש פעילויות שמסייעות לילדים לעבור את היום בנעימים. יש במלון כ- 250 אנשים משדרות ואנחנו מלאי תודה על הפעילות של כל המתנדבים מהחמ"ל</div>
                </div>
            </div>

            <div style={{height:"0px", width:"100%",backgroundColor: "black",position: "absolute",bottom:"0"}}>

            </div>
 
            {/* <div id="footer" style={{height: "300px",width: "66vw",backgroundColor:"#000000"}}>
                <div>
                    <a href="https://instagram.com/michaelmilis?igshid=YTQwZjQ0NmI0OA==">  </a>
                    <img></img>
                    <img></img>
                </div>
            </div> */}
 
        </>
    )
}

export default HomePage
