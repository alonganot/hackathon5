import { Link } from "react-router-dom"
import '../styles/Navbar.css'

function Navbar() {
    const routes = [{ name: "דף הבית", route: "/" }, { name: "סקר", route: "/form" }, { name: "מנהל", route: "/admin" }]
    return (
        <>
            <div id="navbar">
                {routes.map((route, index) => (
                    <Link key={index} to={route.route}>{route.name}</Link>
                ))}
            </div>
        </>
    )
}

export default Navbar
