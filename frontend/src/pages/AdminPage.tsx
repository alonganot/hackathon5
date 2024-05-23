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
      <h1>Admin</h1>
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
{ !loading && 
    <div className="lists-container">
      <h2>offer List</h2>
      <ul>
       {offerEntries.length > 0 && offerEntries.filter((offer)=> regionalFilter.length === 0  || offer.area?.some(relevantRegion =>  regionalFilter.includes(relevantRegion)))
        .map((item, index)=>(
          <li key = {index}>{item.email}</li>
        ))}
      </ul>

      <h2>Request List</h2>
      <ul>
      {requestEntries.length > 0 && requestEntries.filter(request=> regionalFilter.length === 0 || request.area?.some(relevantRegion=>  regionalFilter.includes(relevantRegion)))
      .map((item, index) => (
          <li key = {index}>{item.email}</li>
        ))}
      </ul>
      </div>
}
    </>
  )
}

export default AdminPage
