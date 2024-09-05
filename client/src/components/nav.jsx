import React from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

function Nav(){
    return(
        <div style={{display:"flex",}}>
            <Link to={"/Todo"}><IoHome style={{height:"100%"}}/></Link><br></br>
            <Link to={""}><FaPlus /></Link><br></br>
            <Link to={"/Settings"}><FaGear /></Link><br></br>
        </div>
    )
}
export default Nav