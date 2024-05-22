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
  const [entries, setEntries] = useState()

  useEffect(()=>{
    fetch('backend/admin/password')
    .then(res=>{return res.json()

    })
    .then(data=>{setEntries(data)})
  },[])
    if (entries === 'wrong password')
    return(<div>wrong password</div>)

    const volunteerList = entries.filter(item=> item.volunteer === 'true')//instead of filter, index res
    const requestList = entries.filter(item=> item.volunteer === 'false')

  return (
    <>
      <h2>Volunteer List</h2>
      <ul>
        volunteerList.map((item, index)=>(
          <li key = {index}>{item.content}</li>
          {/* item.content needs to be replaced with formatting - name area contact info title and text */}
        ))
      </ul>

      <h2>Request List</h2>
      <ul>
        requestList.map((item, index)=>(
          <li key = {index}>{item.content}</li>
          {/* item.content needs to be replaced with formatting */}
        ))
      </ul>
    </>
  )
}

export default AdminPage
