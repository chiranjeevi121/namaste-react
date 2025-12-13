
import { useContext } from "react";
import {RES_LOGO} from "../utils/constants"
import UserContext from "../utils/UserContext";
const RestaurantCard=({resObj})=>{
   const {info}=resObj;
   const {cloudinaryImageId,name,costForTwo,cuisines,avgRating,sla}=info
   const {loggedInUser}=useContext(UserContext);
   return (
      <div className=" m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-400">
         <img src={RES_LOGO+cloudinaryImageId} alt="meghana food" className="px-2  rounded-xl w-[200px]"/>
      <h3 className="text-2xl">{name}</h3>
      <h4>{costForTwo}</h4>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} star</h4>
      <h4>{sla.deliveryTime+" mins"}</h4>
      <h4 className="font-bold text-lg">User :{loggedInUser}</h4>
         </div>
   );
}
export const withRestaurantPromoted=(RestaurantCard)=>{
  return(
    (props)=>{
      return(
        <div>
        <label className="absolute bg-green-500 text-black mt-1 pt-1 rounded">Veg</label>
        <RestaurantCard {...props}/>
        </div>
      )
    }
  )
}

export default RestaurantCard;