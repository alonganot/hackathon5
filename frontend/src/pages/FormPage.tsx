import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import "../styles/FormPage.css"
import { ChangeEvent, useState } from "react"
import { FormAnswer } from "../types/FormAnswer"

export const areas = [{
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

function FormPage() {
    const { purpose } = useParams()

    const [formAnswer, setFormAnswer] = useState<FormAnswer>({ email: '', fullname: '', phone: '', area: [] })

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target;

        if (name === "area") {
            if (value && !formAnswer.area.includes(value)) {
                setFormAnswer({ ...formAnswer, area: [...formAnswer.area, value] });
            } else {
                setFormAnswer({ ...formAnswer, area: formAnswer.area.filter(area => area !== value) });
            }
        } else if (name === "flexibility") {
            setFormAnswer({ ...formAnswer, [name]: checked });
        } else {
            setFormAnswer({ ...formAnswer, [name]: value });
        }
    };

    const submitForm = () => {
        const answerWithType = {...formAnswer, type: purpose}
        console.log(answerWithType);
    }

    return (
        <>
            <Navbar />
            <div className="form">
                <label htmlFor="email">אימייל</label>
                <input className="text" name="email" onChange={handleChange} /> <br />
                <label htmlFor="fullname">שם מלא</label>
                <input className="text" name="fullname" onChange={handleChange} /> <br />
                <label htmlFor="phone">פלאפון ליצירת קשר</label>
                <input className="text" name="phone" onChange={handleChange} />
                <div>
                    <p>איזור בארץ</p>
                    <div id="areas">
                        {areas.map((area, index) => (
                            <div key={index} style={{ width: "33%" }}>
                                <input type="checkbox" id={area.value} name="area" value={area.value} onChange={handleChange} />
                                <label htmlFor={area.value}>{area.name}</label><br />
                            </div>
                        ))}
                    </div>
                </div>
                {
                    purpose == "offer" && <div className="form">
                        <p>אני רוצה:</p>
                        <div>
                            <input type="radio" id="html" name="goal" value="organize" onChange={handleChange} />
                            <label htmlFor="html">להתנדב להעביר פעילות/הפעלה</label><br />
                        </div>
                        <div>
                            <input type="radio" id="css" name="goal" value="help" onChange={handleChange} />
                            <label htmlFor="css">להתנדב לעזור עם המשפחות/פעילות/הפעלה</label><br />
                        </div>
                        {
                            formAnswer.goal === 'organize' &&
                            <div>
                                <label htmlFor="description">איזה פעילות תוכל/י להעביר? ספר/י בקצרה</label><br />
                                <input className="text" name="description" onChange={handleChange} /> <br />
                                <label htmlFor="audience">מה קהל היעד של הפעילות שלך?</label><br />
                                <input className="text" name="audience" onChange={handleChange} /> <br />
                            </div>
                        }
                        <div>
                            <label htmlFor="flexibility">האם גמיש בשעות?</label>
                            <label className="switch">
                                <input type="checkbox" name="flexibility" onChange={handleChange} />
                                <span className="slider flexibility"></span>
                            </label>
                        </div>
                    </div>
                }
                {
                    purpose == "request" && <div className="form">
                        <label htmlFor="city">יישוב</label>
                        <input className="text" name="city" onChange={handleChange} /> <br />
                        <label htmlFor="familystatus">מצב משפחתי (רווק/פלוס/וכד)</label>
                        <input className="text" name="familystatus" onChange={handleChange} /> <br />
                        <label htmlFor="childrenage">גילאי הילדים</label>
                        <input className="text" name="childrenage" onChange={handleChange} /> <br />
                        <label htmlFor="hotel">באיזה מלון אתם?</label>
                        <input className="text" name="hotel" onChange={handleChange} /> <br />
                        <label htmlFor="comments">הערות נוספות/משהו חשוב שנדע...</label>
                        <input className="text" name="comments" onChange={handleChange} /> <br />
                    </div>
                }
                <button className="text" onClick={submitForm}>שליחה</button>
            </div>
        </>
    )
}

export default FormPage
