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
      <div className=" m-4 flex justify-between bg-blue-400 shadow-blue-300 sm:bg-green-300 lg:bg-amber-300">
      <div className="logocontainer">
         <img src={LOGO_URL}   alt="logo" className="w-24"/>
         </div>
      <div className="flex items-center">
         <ul className="flex p-4 m-4">
            <li className="px-4">Online status: {isonline=="online"? "✅":"🔴"}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"> <Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4"><Link to="/contactus">Contact Us </Link></li>
            <li className="px-4">Cart</li>
            {/* <button className="login-btn" onClick={()=>
            {
        btnName=="Login"?setBtnName("Logout"):setBtnName("Login");
            }
            }>{btnName}</button> */}
            <li className="px-4"><Link to="/login">Login</Link></li>
         </ul>
      </div>
         </div>
   );

}
export default Header;