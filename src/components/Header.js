import { LOGO_URL } from "../utils/constants"
import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import useOnlinestatus from "../utils/useOnlineStatus"
const Header=()=>{
   const [btnName,setBtnName]=useState("Login");
   const isonline=useOnlinestatus();
   useEffect(()=>{
      console.log("useEffect called");
    
   },[btnName])
   return(
      <div className="header">
      <div className="logocontainer">
         <img src={LOGO_URL}   alt="logo" className="logo"/>
         </div>
      <div className="navitems">
         <ul>
            <li>Online status: {isonline=="online"? "✅":"🔴"}</li>
            <li><Link to="/">Home</Link></li>
            <li> <Link to="/about">About Us</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li><Link to="/contactus">Contact Us </Link></li>
            <li>Cart</li>
            {/* <button className="login-btn" onClick={()=>
            {
        btnName=="Login"?setBtnName("Logout"):setBtnName("Login");
            }
            }>{btnName}</button> */}
            <li><Link to="/login">Login</Link></li>
         </ul>
      </div>
         </div>
   );

}
export default Header;