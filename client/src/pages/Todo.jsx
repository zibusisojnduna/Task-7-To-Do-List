import React from "react";
import Nav from "../components/nav";
import Overlay from "../components/overlay";
import { useState } from "react";

function Todo(){
    const [isOverlayVisible, setOverlayVisible] = useState(false)

    const showOverlay = () => setOverlayVisible(true)
    const hideOverlay = () => setOverlayVisible(false)

    return(
        <section>
            <div style={{}}>
                <input type="text" placeholder="Search" style={{width:"200%"}}></input> 
                
            </div><br></br>

            <div>
                <h1>No Todo's added</h1>
                <button className="w3-btn w3-blue w3-border" onClick={showOverlay}>Add Todo</button>
                <Overlay isVisible={isOverlayVisible} onClose={hideOverlay}/>
            </div> 
        </section>
        

       
    )
}
export default Todo