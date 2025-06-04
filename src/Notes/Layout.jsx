import {Outlet } from "react-router-dom";
import Navv from "./pages/Nav";

const Layout=()=>{
    return(
        <>
        <Navv/>
        <Outlet/>
        </>
    )
}

export default Layout;