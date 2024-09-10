import React from "react";
import { Link } from "react-router-dom";

function Settings(){
    return(
        <button className="w3-btn w3-red w3-border"><Link to={"/Landing"}>Sign Out</Link></button>
    )
}
export default Settings