
import {RES_LOGO} from "../utils/constants"
const RestaurantCard=({resObj})=>{
   const {info}=resObj;
   const {cloudinaryImageId,name,costForTwo,cuisines,avgRating,sla}=info
   return (
      <div className="rescard" style={{backgroundColor:"#ebe4e4ff"}}>
         <img src={RES_LOGO+cloudinaryImageId} alt="meghana food" className="res-logo"/>
      <h3>{name}</h3>
      <h4>{costForTwo}</h4>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} star</h4>
      <h4>{sla.deliveryTime+" mins"}</h4>
         </div>
   );
}
export default RestaurantCard;