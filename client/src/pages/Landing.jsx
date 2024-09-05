import React from "react";
import Nav from "../components/nav";
import { Link } from "react-router-dom";
import "../assets/w3.css"

function Landing(){
   return(
    <section style={{display:"flex"}}>
      

        <div style={{padding:"10%"}}>
            <h1>Welcome to <h2 style={{color:"blue"}}>Equilibrium</h2></h1>
            <p>Let's complete the day together, one task at a time.</p>
            <button className="w3-button w3-blue "><Link to={"/Login"} className="w3-text-white">Login</Link></button><br></br>
            <p>Don't have an account?</p>
            <button className="w3-btn w3-white w3-border w3-border-black w3-round-large"><Link to={"/SignUp"} className="w3-text-black">Sign Up</Link></button>
        </div>
                 <img src={require("../assets/vector-inside-office-illustration.jpg")}></img>

        <div style={{display:"flex", marginLeft:"10%"}}>
            
        </div>

        
    </section>
   )
}
export default Landing