import { Link } from "react-router-dom"
import '../styles/Navbar.css'

function Navbar() {
    const routes = [{ name: "דף הבית", route: "/" }, { name: "ארועים", route: "/events" }, { name: "מי אנחנו", route: "/team" }, { name: "גלריה", route: "/gallery" }]
    return (
        <>
            <div id="navbar">
                {routes.map((route, index) => (
                    <Link id="route-link" key={index} to={route.route}>{route.name}</Link>
                ))}
            </div>
        </>
    )
}

export default Navbar
