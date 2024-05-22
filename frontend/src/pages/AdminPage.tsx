import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"

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

function Lists(password){
  const [offerEntries, setOfferEntries] = useState()
  const [requestEntries, setRequestEntries] = useState()
  const [regionalFilter, setRegionalFilter]= useState()
  useEffect(()=>{
    //send request to api file
    fetch('backend/admin/password')
    .then(res=>{return res.json()

    })
    .then(data=>{setOfferEntries(data)})
  },[])
    if (offerEntries === 'wrong password')
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


      <h2>Volunteer List</h2>
      <ul>
        offerEntries.filter(offer=> !regionalFilter  || offer.regions.some(relevantRegion =>  regionalFilter.includes(relevantRegion)))
        .map((item, index)=>(
          <li key = {index}>{item.content}</li>
          {/* item.content needs to be replaced with formatting - name area contact info title and text */}
        ))
      </ul>

      <h2>Request List</h2>
      <ul>
      requestEntries.filter(request=> !regionalFilter || request.regions.some(relevantRegion=>  regionalFilter.includes(relevantRegion)))
      .map((item, index) => (
          <li key = {index}>{item.content}</li>
          {/* item.content needs to be replaced with formatting */}
        ))
      </ul>
    </>
  )
}

export default AdminPage
