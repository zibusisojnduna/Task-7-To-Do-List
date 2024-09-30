import React from "react";
import Nav from "../components/nav";
import Overlay from "../components/overlay";
import { useState } from "react";

function Todo(){
    
    const [isOverlayOpen, setOverlayOpen] = useState(false)

    const openOverlay = () => setOverlayOpen (true)
    const closeOverlay = () => setOverlayOpen (false)

    return(
        <section>
            <div>
                <input type="text" placeholder="Search" style={{width:"200%"}}></input> 
                
            </div><br></br>

            <div>
                <h1>No Todo's added</h1>
                <button className="w3-btn w3-blue w3-border" onClick={openOverlay}>Add Todo</button>
                <Overlay isOpen={isOverlayOpen} onClose={closeOverlay}/>
            
            </div> 
        </section>
        

       
    )
}
export default Todo