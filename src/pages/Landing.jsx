import React from "react";
import Nav from "../components/nav";
import { Link } from "react-router-dom";

function Landing(){
   return(
    <section>
      

        <div>
            <h1>Welcome to <h2 style={{color:"blue"}}>Equilibrium</h2></h1>
            <p>Let's complete the day together, one task at a time.</p>

            <img src={require("../assets/vector-inside-office-illustration.jpg")}></img>
        </div>
    
        <div style={{display:"flex", marginLeft:"10%"}}>
            <button style={{backgroundColor:"blue", margin:"2%", color:"white"}}><Link to={"./LogIn"}/>Login</button><br></br>
            <button style={{backgroundColor:"white"}}><Link to={"./SignUp"}/>Sign Up</button>
        </div>

        
    </section>
   )
}
export default Landing