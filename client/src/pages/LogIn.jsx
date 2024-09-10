import React from "react";
import "../assets/w3.css"
import { Link } from "react-router-dom";
import axios from "axios"
import { useRef, useState, useEffect } from "react";

function LogIn(){
  const [username, setUsername] = useState()
  const [password, setPassword] =useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError()

    try{
      const response = await axios.post("http//localhost:3001/login", {username, password})
      console.log(response.data)
    }catch (error) {
      setError("Invalid username or password")
    }finally{
      setLoading(false)
    }
  }
 return(
  <div>
    <h1>Login</h1><br></br>
    <div className="w3-container">
        <form onSubmit={handleSubmit}>
          <input type="text" className="w3-input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{width:"200%"}} required></input><br></br>
          <input type="password" className="w3-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{width:"200%"}} required></input><br></br>
          <button className="w3-btn w3-blue w3-border" style={{width:"200%"}} disabled={loading}>Login</button>   
        </form>
      
    </div>
  </div>
 )   
}
export default LogIn