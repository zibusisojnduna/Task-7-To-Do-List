import React, { useState } from "react";
import "../assets/w3.css"
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";


function SignUp(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
 
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.post("http://localhost:3001", {name, email, password})
            setSuccess("Infromation registered succesfully");
            setName("")
            setEmail("")
            setPassword("")
        } catch (err){
            setError("Error registering details.")
        }
    }
         

    
    
    



    return(
        <section style={{textAlign:"center"}}>
            <div style={{display:"flex", paddingBottom:"20%"}}>
                <Link to={"/Landing"}><IoIosArrowBack style={{color:"lightskyblue", height:"100%", margin:"10%"}}/></Link>
                <h2>Sign Up</h2> 
                </div>

            <form onSubmit={handleSubmit}>
                <input className="w3-input" type="text" placeholder="Full Name" style={{width:"200%"}} value={name} onChange={(e) => setName(e.target.value)} required></input>
                <input className="w3-input" type="text" placeholder="Email Address" style={{width:"200%"}} value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                <input className="w3-input" type="password" placeholder="Enter Password" style={{width:"200%"}} value={password} onChange={(e) => setPassword(e.target.value)} required></input><br></br>
                <button className="w3-btn w3-blue w3-border" style={{width:"200%"}}><Link to={"/Todo"} className="w3-text-white" style={{margin:"10%"}} >Sign Up</Link></button>
            </form>
           
            <br></br>
            <br></br>
            <br></br>



            
        </section>
    )
}
export default SignUp