import React from "react";

const Overlay = ({isVisible, onClose}) => {
    if (!isVisible) return null

    return(
        <div style={{position:"fixed", top:"0", left:"0", right:"0", bottom:"0", background:"rgba(0, 0, 0, 0.5)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:"1000"}}>
            <div style={{background:"white", padding:"5%", borderRadius:"5%", position:"relative"}}>
                <div>
                    <h1>Create Task</h1>
                    <input type="text" placeholder="Task Name" className="w3-input"></input>
                    <select>
                        <option>---Priority---</option>
                        <option value={high}>High Priority</option>
                        <option value={medium}>Medium Priority</option>
                        <option value={low}>Low Priority</option>
                    </select>
                </div>
            </div>
            <button style={{position:"absolute", top:"5%", right:"5%", background:"green", color:"white", border:"none", borderRadius:"25%", cursor:"pointer"}} onClick={{onClose}}>Confrim</button>
        </div>
    )
}
export default Overlay