import { LOGO_URL } from "../utils/constants"
import {useState} from"react"
const Header=()=>{
   const [btnName,setBtnName]=useState("Login");
   return(
      <div className="header">
      <div className="logocontainer">
         <img src={LOGO_URL}   alt="logo" className="logo"/>
         </div>
      <div className="navitems">
         <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login-btn" onClick={()=>
            {
        btnName=="Login"?setBtnName("Logout"):setBtnName("Login");
            }
            }>{btnName}</button>
         </ul>
      </div>
         </div>
   );

}
export default Header;