import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { FormAnswer } from "../types/FormAnswer"
import { areas } from "./FormPage"

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

      {attemptedPass && <Lists password={password}/>}
    </>
  )
}

function Lists({password}: {password: string}){
  const [offerEntries, setOfferEntries] = useState<FormAnswer[]>([])
  const [requestEntries, setRequestEntries] = useState<FormAnswer[]>([])
  const [regionalFilter, setRegionalFilter]= useState<string[]>([])
  useEffect(()=>{
    //send request to api file
    fetch('backend/admin/password')
    .then(res=>{return res.json()

    })
    .then(data=>{setOfferEntries(data)})
  },[])
  if (offerEntries[0].description === 'wrong password')
    return(<div>wrong password</div>)

  return (
    <>
    {/* this is copypaste for checking boxes  */}
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
    </>
  )
}

export default AdminPage
