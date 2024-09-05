import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav";
import Footer from "../components/footer";

function Layout(){
    return(
        <>
        
            <Outlet/>
            <Nav/>
            <Footer/>
        </>
       



    )
}
export default Layout