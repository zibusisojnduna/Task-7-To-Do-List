import React from "react";
import Nav from "../components/nav";
import Overlay from "../components/overlay";

function Todo(){

    return(
        <section>
            <div style={{}}>
                <input type="text" placeholder="Search" style={{width:"200%"}}></input> 
                
            </div><br></br>

            <div>
                <h1>No Todo's added</h1>
                <button className="w3-btn w3-blue w3-border" onClick={<Overlay/>}>Add Todo</button>
                
            </div> 
        </section>
        

       
    )
}
export default Todo