import { Link } from "react-router-dom"
import '../styles/Navbar.css'

function Navbar() {
    const routes = [{ name: "אירועים", route: "/events" }, { name: "מי אנחנו", route: "/team" }, { name: "גלריה", route: "/gallery" },{ name: "מנהל", route: "/admin" }]
    return (
        <div id="navbar">
            <Link to="/">
                <img id="logo" src="/logo.svg"></img>
            </Link>
            {routes.map((route, index) => (
                <Link id="route-link" key={index} to={route.route}>{route.name}</Link>
            ))}
        </div>
    )
}

export default Navbar
