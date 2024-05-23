import { ChangeEvent, useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { FormAnswer } from "../types/FormAnswer"
import { areas } from "./FormPage"
import { api } from "../api"
import '../styles/AdminPage.css'

function AdminPage() {

  const [attemptedPass, setAttemptedPass] = useState(false)
  const [password, setPassword] = useState("")
  const handleSubmit = async (event: any) =>{
    event.preventDefault()
    let token = await api().auth().verify(password)
    localStorage.setItem("token", token)
    setAttemptedPass(true)
    // move to home page as 
  }
  return (
    <>
      <Navbar />
      {!attemptedPass && <form onSubmit={handleSubmit}>
        <label>Enter your password</label>
        <input type="text"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
      </form>}

      {attemptedPass && <Lists/>}
    </>
  )
}

function Lists(){
  const [offerEntries, setOfferEntries] = useState<FormAnswer[]>([])
  const [requestEntries, setRequestEntries] = useState<FormAnswer[]>([])
  const [regionalFilter, setRegionalFilter]= useState<string[]>([])
  const [loading, setLoading]= useState<boolean>(true)

  useEffect(()=>{
    api().all().getAll().then(codedEntries => {
      let entries = (JSON.parse(codedEntries))
      setOfferEntries(entries.offers)
      setRequestEntries(entries.requests)
      setLoading(false)
    })
  },[])

  const handleChange = (e : ChangeEvent<HTMLInputElement>)=>{
    const { value} = e.target
    if (value && !regionalFilter.includes(value))
      setRegionalFilter([...regionalFilter, value])
    else setRegionalFilter(regionalFilter.filter(area=>area!==value))
  }

  // if (offerEntries[0].description === 'wrong password')
  //   return(<div>wrong password</div>)

  return (
    <>
    {/* this is copypaste for checking boxes  */}
       <div>
          <h2>איזור בארץ</h2>
          <div id="areas">
              {areas.map((area, index) => (
                  <div key={index} style={{ width: "20%" }}>
                      <input type="checkbox" id={area.value} name="area" value={area.value}
                      onChange={handleChange}  />
                      <label htmlFor={area.value}>{area.name}</label><br />
                  </div>
              ))}
          </div>
      </div>
{ !loading && 
    <div className="lists-container">
      <div className="list-container">

      <h2>רשימת הצעות</h2>
      <ul>
       {offerEntries.length > 0 && offerEntries.filter((offer)=> regionalFilter.length === 0  || offer.area?.some(relevantRegion =>  regionalFilter.includes(relevantRegion)))
        .map((item, index)=>(
          <div>
            <li key = {index}>{item.email} - {item.fullname}</li>
            { item.goal === "help" && <p className="smalltext">עזרה כללית</p>}
            { item.flexibility ? <p className="greentext">גמיש בשעות</p> : <p className="redtext">לא גמיש בשעות</p>}
          </div>
        ))}
      </ul>
        </div>
      <div className="list-container">
      <h2>רשימת בקשות</h2>
      <ul>
      {requestEntries.length > 0 && requestEntries.filter(request=> regionalFilter.length === 0 || request.area?.some(relevantRegion=>  regionalFilter.includes(relevantRegion)))
      .map((item, index) => (
        <div>
          <li key = {index}>{item.email} - { item.fullname }</li>
          <p className="smalltext">{item.phone}</p>
          <p className="smalltext">{item.familystatus} - {item.childrenage} </p>

        </div>
        ))}
      </ul>
      </div>
      </div>
}
    </>
  )
}

export default AdminPage
