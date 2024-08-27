import React from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

function Nav(){
    return(
        <div style={{display:"flex",}}>
            <Link to={"/Todo"}><IoHome /></Link>
            <Link to={"/"}><FaPlus /></Link>
            <Link to={"/Settings"}><FaGear /></Link>
        </div>
    )
}
export default Nav