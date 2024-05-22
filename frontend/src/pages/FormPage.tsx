import Navbar from "../components/Navbar"

function FormPage() {
    return (
        <>
            <Navbar />
            <label htmlFor="first">שם מלא</label>
            <input name="first" />
            <label htmlFor="last">שם מלhא</label>
            <input name="last" />
            <button type="submit">Search</button>
        </>
    )
}

export default FormPage
