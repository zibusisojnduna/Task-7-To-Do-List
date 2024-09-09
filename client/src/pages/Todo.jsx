import React from "react";
import Nav from "../components/nav";

function Todo(){

    return(
        <section>
            <div>
                <input type="text" placeholder="Search" style={{width:"200%"}}></input> 
                
            </div><br></br>

            <div>
                <h1>No Todo's added</h1>
            </div> 
        </section>
        

       
    )
}
export default Todo