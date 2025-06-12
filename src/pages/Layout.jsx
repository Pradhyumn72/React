import { Outlet,Link } from "react-router-dom";
const Layout=()=>{
    return(
        <>
    <Link to={"Home"}>Home</Link>
    <Link to={"Insert"}>Insert</Link>
    <Link to={"Display"}>Display</Link>
    <Link to={"Update"}>Update</Link>
    <Link to={"Contact"}>Contact</Link>
    <hr size="6" color="red" />
    <Outlet/>

    <hr size="8" color="red" />
    www.pro.com
    </>
)
}

export default Layout;

