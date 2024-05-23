import Navbar from "../components/Navbar"
import "../styles/TeamPage.css"

function TeamPage() {
    const teamMembers = [
        {url: "/team1.png", name: "שחף", description: "פיתוח בינלאומי וקיימות"},
        {url: "/team2.png", name: "אושרי  אבוטבול", description: "תהיה השינוי שאתה רוצה לראות פה בארץ"},
        {url: "/team3.png", name: "שני", description: "רקדנית, יוצרת ויזמת חברתית"},
        {url: "/team4.png", name: "מיכאל מיליס", description: "להאמין במשהו עד כדי כך שאתה חייב לגרום לו לקרות"},
        {url: "/team5.png", name: "טובה ליפשיץ", description: "עו\"סית ומטפלת באמנות - יחד נתגבר גם על זה"},
        {url: "/team6.png", name: "שירה", description: "מסייעת באופרציית ניהול המפעילים ומעבירה סדנאות יצירה"},
        {url: "/team7.png", name: "ירון שוורצמן", description: "מנהל מוצר ורכז פעילויות"},
        {url: "/team8.png", name: "יניב בר", description: "אוהב להתנדב ולתת כתף"},
        {url: "/team9.png", name: "יפעת פורת", description: "גם וגמניקית - ומותר ומותר לאהוב"},
        {url: "/team10.png",name: "יפעת מינאי", description: "הצלם, העולם, הצילום והמצלמה הופכים לאחד"},
        {url: "/team11.png",name: "נעמה", description: "מחנכת ביסודי - מעט מן האור דוחה הרבה מן החושך"}
    ]
    return (
        <>
            <Navbar />
            <div className="outer">
            {teamMembers.map((member, index) => (
                <div className="person" key={index}>
                    <img className="img_p" src={member.url} />
                    <h4>{member.name}</h4>
                    <h5>{member.description}</h5>
                </div>
            ))}
            </div>
        </>
    )
}

export default TeamPage
