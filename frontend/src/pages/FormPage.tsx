import { Link, useNavigate, useParams } from "react-router-dom"
import "../styles/FormPage.css"
import { ChangeEvent, useState } from "react"
import { FormAnswer } from "../types/FormAnswer"
import { api } from "../api"

function FormPage() {
    const navigate = useNavigate();
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

    const submitForm = async () => {
        if (purpose === "offer") {
            await api().offers().create(formAnswer)
            navigate("/")
        } else {
            await api().requests().create(formAnswer)
            navigate("/")
        }
        console.log(formAnswer);
    }

    return (
        <>
            <div className="background">
            <img src="..\src\assets\back-button.svg" className="back">
                {/* <Link to='/'></Link> */}
            </img>
                <div className="form">

                    <div className="settings">
                        <label htmlFor="email">אימייל</label>
                        <input className="text" name="email" onChange={handleChange} />
                        <label htmlFor="fullname">שם מלא</label>
                        <input className="text" name="fullname" onChange={handleChange} />
                        <label htmlFor="phone">מספר טלפון</label>
                        <input className="text" name="phone" onChange={handleChange} />
                    </div>

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
                </div>
                {
                    purpose == "offer" && <div className="form">
                        <p>אני רוצה:</p>
                        <div>
                            <input type="radio" id="html" name="goal" value="organize" onChange={handleChange} />
                            <label htmlFor="html">אני מעוניין ליזום פעילות התנדבותית כלשהי</label><br />
                        </div>
                        <div>
                            <input type="radio" id="css" name="goal" value="help" onChange={handleChange} />
                            <label htmlFor="css">להתנדב לעזור בפעילות קיימת</label><br />
                        </div>
                        {
                            formAnswer.goal === 'organize' &&
                            <div className="settings">
                                <label htmlFor="description">איזו פעילות תוכל/י להעביר? ספר/י בקצרה</label>
                                <input className="text" name="description" onChange={handleChange} />
                                <label htmlFor="audience">מה קהל היעד של הפעילות שלך?</label>
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
                        <div className="settings">
                            <label htmlFor="city">יישוב</label>
                            <input className="text" name="city" onChange={handleChange} />
                            <label htmlFor="familystatus">מצב משפחתי(רווק/נשוי/גרוש/אלמן/אחר)</label>
                            <input className="text" name="familystatus" onChange={handleChange} />
                            <label htmlFor="childrenage">מספר וגיל הילדים</label>
                            <input className="text" name="childrenage" onChange={handleChange} />
                            <label htmlFor="hotel">היכן מתגורר כרגע?</label>
                            <input className="text" name="hotel" onChange={handleChange} />
                            <label htmlFor="comments">כללי - במה נוכל לעזור לך?</label>
                            <input className="text" name="comments" onChange={handleChange} /> <br />
                        </div>
                    </div>
                }
                <div className="button">
                    <button className="text submit" onClick={submitForm}>שליחה</button>
                </div>
            </div>
        </>
    )
}

export default FormPage
