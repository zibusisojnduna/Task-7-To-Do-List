import { Outlet } from "react-router-dom";
import Nav from "../components/nav";

function Layout(){
    return(
        <>
         <Outlet/>
        <Nav/>
        
        </>
       



    )
}
export default Layout