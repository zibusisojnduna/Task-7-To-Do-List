import React from "react";
import "../assets/w3.css"
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";


function SignUp(){
    return(
        <section style={{textAlign:"center"}}>
            <div style={{display:"flex", paddingBottom:"20%"}}>
                <Link to={"/Landing"}><IoIosArrowBack style={{color:"lightskyblue", height:"100%", margin:"10%"}}/></Link>
                <h2>Sign Up</h2> 
                </div>
            <form>
                
                <input className="w3-input" type="text" placeholder="Full Name" style={{width:"200%"}}></input>
                <input className="w3-input" type="text" placeholder="Emial Address" style={{width:"200%"}}></input>
                <input className="w3-input" type="text" placeholder="Enter Password" style={{width:"200%"}}></input><br></br>
                <button className="w3-btn w3-blue w3-border" style={{width:"200%"}}><Link to={"/Todo"} className="w3-text-white" style={{margin:"10%"}}>Sign Up</Link></button>
            </form>
            <br></br>
            <br></br>
            <br></br>



            
        </section>
    )
}
export default SignUp