import { LOGO_URL } from "../utils/constants"
const Header=()=>{
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
         </ul>
      </div>
         </div>
   );

}
export default Header;