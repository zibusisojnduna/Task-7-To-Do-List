import React from "react";
import "../assets/w3.css"
import { Link } from "react-router-dom";
import axios from "axios"
import { useRef, useState, useEffect } from "react";

function LogIn(){
  const onFinish = values =>{
    const {name, password} = values
    axios.post("http://localhost:3001/validatePassword", {name, password})
    .then(res => {
      if(res.data.validation){
        alert("Login sucessfull!")
      }
      else{
        alert("Username or password is incorrect.")
      }
    })

  }

 return(
  <div>
    <h1>Login</h1><br></br>
    <div className="w3-container">
        <form onFinish={onFinish}>
          <input type="text" className="w3-input" placeholder="Username" style={{width:"200%"}} required></input><br></br>
          <input type="password" className="w3-input" placeholder="Password" style={{width:"200%"}} required></input><br></br>
          <button className="w3-btn w3-blue w3-border" style={{width:"200%"}}>Login</button>   
        </form>
      
    </div>
  </div>
 )   
}
export default LogIn