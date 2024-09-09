import React, { useState } from "react";
import "../assets/w3.css"
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";


function SignUp(){
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:5000/users", error)
        } catch (error) {
            console.error("There was an error!", error)
        }
    }
    
    
    



    return(
        <section style={{alignItems:"center"}}>
            <div style={{display:"flex", paddingBottom:"20%"}}>
                <Link to={"/Landing"}><IoIosArrowBack style={{color:"lightskyblue", height:"100%", margin:"10%"}}/></Link>
                <h2>Sign Up</h2> 
                </div>

            <form onSubmit={handleSubmit}>
                <input className="w3-input" type="text" placeholder="Enter Username" style={{width:"200%"}} value={formData.name} onChange={handleChange} required></input>
                <input className="w3-input" type="text" placeholder="Email Address" style={{width:"200%"}} value={formData.email} onChange={handleChange} required></input>
                <input className="w3-input" type="password" placeholder="Enter Password" style={{width:"200%"}} value={formData.password} onChange={handleChange} required></input><br></br>
                <button className="w3-btn w3-blue w3-border" style={{width:"200%"}}><Link to={"/Todo"} className="w3-text-white" style={{margin:"10%"}} >Sign Up</Link></button>
            </form>
           
            <br></br>
            <br></br>
            <br></br>



            
        </section>
    )
}
export default SignUp