import { ChangeEvent, useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { FormAnswer } from "../types/FormAnswer"
import { areas } from "./FormPage"
import { api } from "../api"
import '../styles/AdminPage.css'

function AdminPage() {

  const [attemptedPass, setAttemptedPass] = useState(false)
  const [password, setPassword] = useState("")
  const handleSubmit = (event)=>{
    event.preventDefault()

    // move to home page as 
  }
  return (
    <>
      <Navbar />
      <h1>Admin</h1>
      {!attemptedPass && <form onSubmit={handleSubmit}>
        <label>Enter your password</label>
        <input type="text"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
      </form>}

      {<Lists password={password}/>}
    </>
  )
}

function Lists({password}: {password: string}){
  const [offerEntries, setOfferEntries] = useState<FormAnswer[]>([])
  const [requestEntries, setRequestEntries] = useState<FormAnswer[]>([])
  const [regionalFilter, setRegionalFilter]= useState<string[]>([])
  useEffect(()=>{
    const fetchData = async ()=>{
    let entries = await api().all().getAll()
    console.log(entries)
    setOfferEntries(entries.offers)
    setRequestEntries(entries.requests)
    }
    fetchData()    
  },[])

  const handleChange = (e : ChangeEvent<HTMLInputElement>)=>{
    const {name, value, checked} = e.target
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
          <p>איזור בארץ</p>
          <div id="areas">
              {areas.map((area, index) => (
                  <div key={index} style={{ width: "33%" }}>
                      <input type="checkbox" id={area.value} name="area" value={area.value}
                      onChange={handleChange}  />
                      <label htmlFor={area.value}>{area.name}</label><br />
                  </div>
              ))}
          </div>
      </div>

      <div className="lists-container">
      <h2>offer List</h2>
      <ul>
       { offerEntries.filter(offer=> !regionalFilter  || offer.area.some(relevantRegion =>  regionalFilter.includes(relevantRegion)))
        .map((item, index)=>(
          <li key = {index}>{item.email}</li>
        ))}
      </ul>

      <h2>Request List</h2>
      <ul>
      {requestEntries.filter(request=> !regionalFilter || request.area.some(relevantRegion=>  regionalFilter.includes(relevantRegion)))
      .map((item, index) => (
          <li key = {index}>{item.email}</li>
        ))}
      </ul>
      </div>
    </>
  )
}

export default AdminPage
