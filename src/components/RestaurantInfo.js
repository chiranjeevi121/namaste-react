
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantInfo=()=>{
    const {id}=useParams();
  const resInfo=useRestaurantInfo(id);
  const dummy ="dummy";
  const [showItem,setshowItem]=useState(null)
    if (resInfo===null)
    {
      return (<Shimmer/>);
    }
    const {name,sla,costForTwo,cuisines} =resInfo.data.cards[2].card.card.info;
     const categories=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category)=>category?.card?.card["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
   //  console.log(categories)
    return (
        <div className="text-center">
            <h2 className="font-bold py-2 my-2 text-lg">{name} </h2>
            <p className="font-bold ">{cuisines.join(",")}-{costForTwo}</p>
            {categories.map((items,index)=><RestaurantCategory key={items.card.card.title} data={items} showItem={index===showItem} setshowItem={()=>setshowItem(showItem==index?null:index)} dummy={dummy}/>)}
          
         
            </div>
       
    )
};
export default RestaurantInfo;