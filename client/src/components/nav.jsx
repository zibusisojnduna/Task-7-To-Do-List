import React from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

function Nav(){
    return(
        <div style={{display:"flex"}}>
            <div style={{paddingRight:"90%", paddingTop:"90%"}}>
                  <Link to={"/Todo"}><IoHome /></Link><br></br>
            </div>

            <div style={{paddingTop:"90%"}}>
                <Link to={"/"}><FaPlus /></Link><br></br>
            </div>
          
            <div style={{paddingLeft:"90%", paddingTop:"90%"}}>
                <Link to={"/Settings"}><FaGear /></Link><br></br>
            </div>
           
            
        </div>
    )
}
export default Nav