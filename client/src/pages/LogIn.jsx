import React from "react";
import "../assets/w3.css"
import { Link } from "react-router-dom";
import axios from "axios"
import { useRef, useState, useEffect } from "react";

function LogIn(){
  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState()
  const [pwd, setPwd] = useState()
  const [errMsg, setErrMsg] = useState() 
  const [success, setSeccess] = useState()

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(()=> {
    setErrMsg()
  }, [user, pwd])
  
  const handleSubmit = async (e) => {
    e.preventDefault()
  }
  
 return(
  <div>
    <h1>Login</h1><br></br>
    <div className="w3-container">
        <form onSubmit={handleSubmit}>
          <input type="text" className="w3-input" placeholder="Username" style={{width:"200%"}} ref={userRef} autoComplete="off" onChange={(e) => setUser(e.target.value)} value={user} required></input><br></br>
          <input type="password" className="w3-input" placeholder="Password" style={{width:"200%"}} onChange={(e) => setPwd(e.target.value)} value={pwd} required></input><br></br>
          <button className="w3-btn w3-blue w3-border" style={{width:"200%"}}>Login</button>   
        </form>
      
    </div>
  </div>
 )   
}
export default LogIn