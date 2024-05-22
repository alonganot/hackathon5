import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import "../styles/FormPage.css"

function FormPage() {
    const { purpose } = useParams()
    const areas = [{
        name: 'רמת הגולן', value: 'ramatHagolan'
    }, {
        name: 'גליל עליון', value: 'galilElion'
    }, {
        name: 'גליל תחתון', value: 'galilTahton'
    }, {
        name: 'חיפה', value: 'haifa'
    }, {
        name: 'השומרון', value: 'hashomron'
    }, {
        name: 'השרון', value: 'hasharon'
    }, {
        name: 'גוש דן', value: 'gushDan'
    }, {
        name: 'ירושלים', value: 'jerusalem'
    }, {
        name: 'עוטף עזה', value: 'otefAza'
    }, {
        name: 'הרי יהודה', value: 'hareiYehuda'
    }, {
        name: 'הנגב', value: 'hanegev'
    }, {
        name: 'הערבה', value: 'haarava'
    }, {
        name: 'מדבר יהודה', value: 'midbarYehuda'
    }, {
        name: 'אילת', value: 'eilat'
    },]
    return (
        <>
            <Navbar />
            <div className="form">
                <label htmlFor="email">אימייל</label>
                <input className="text" name="email" /> <br />
                <label htmlFor="fullname">שם מלא</label>
                <input className="text" name="fullname" /> <br />
                <label htmlFor="phone">פלאפון ליצירת קשר</label>
                <input className="text" name="phone" />
                <div>
                    <p>איזור בארץ</p>
                    <div id="areas">
                        {areas.map((area, index) => (
                            <div key={index} style={{width: "33%"}}>
                                <input type="checkbox" id={area.value} name={area.value} value={area.value} />
                                <label htmlFor={area.value}>{area.name}</label><br />
                            </div>
                        ))}
                    </div>
                </div>
                {
                    purpose == "offer" && <div className="form">
                        <p>אני רוצה:</p>
                        <div>
                            <input type="radio" id="html" name="goal" value="HTML" />
                            <label htmlFor="html">להתנדב להעביר פעילות/הפעלה</label><br />
                        </div>
                        <div>
                            <input type="radio" id="css" name="goal" value="CSS" />
                            <label htmlFor="css">להתנדב לעזור עם המשפחות/פעילות/הפעלה</label><br />
                        </div>
                        <label htmlFor="description">רוצה להעביר פעילות:</label><br />
                        <label htmlFor="description">איזה פעילות תוכל/י להעביר? ספר/י בקצרה</label>
                        <input className="text" name="description" /> <br />
                        <label htmlFor="audience">מה קהל היעד של הפעילות שלך?</label>
                        <input className="text" name="audience" /> <br />
                        <div>
                            <label htmlFor="flexibility">האם גמיש בשעות?</label>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider flexibility"></span>
                            </label>
                        </div>
                    </div>
                }
                {
                    purpose == "request" && <div className="form">
                        <label htmlFor="city">יישוב</label>
                        <input className="text" name="city" /> <br />
                        <label htmlFor="familystatus">מצב משפחתי (רווק/פלוס/וכד)</label>
                        <input className="text" name="familystatus" /> <br />
                        <label htmlFor="childrenage">גילאי הילדים</label>
                        <input className="text" name="childrenage" /> <br />
                        <label htmlFor="hotel">באיזה מלון אתם?</label>
                        <input className="text" name="hotel" /> <br />
                        <label htmlFor="comments">הערות נוספות/משהו חשוב שנדע...</label>
                        <input className="text" name="comments" /> <br />
                    </div>
                }
                <button className="text" type="submit">שליחה</button>
            </div>
        </>
    )
}

export default FormPage
