import { useState,useEffect} from "react";
 import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import {RES_INFO} from "../utils/constants"
const RestaurantInfo=()=>{
  const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
      fetchData();
    },[])
   const {id}=useParams();
   console.log(id);  
 const fetchData= async ()=>
      {
        try{
          console.log(RES_INFO);
         const jsondata=await fetch(RES_INFO+id);
         const data=await jsondata.json();
         setResInfo(data);
        } catch(error){
           console.log(error);
        } 
       
   };
    if (resInfo===null)
    {
      return (<Shimmer/>);
    }
    const {name,sla,costForTwo,cuisines} =resInfo.data.cards[2].card.card.info;
     const {itemCards}=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
     console.log(itemCards);
    return (
        <div>
            <h2>Restuarant name :{name} </h2>
          <h3>Delivery in {sla.deliveryTime} minutes</h3>
           <h3>Cost For Two {costForTwo}</h3>
           <h3>Cousinis {cuisines.join(",")}</h3>
          <h4>Restuarant</h4>
          <ul>
            { itemCards.map((item)=>
            <li key={item.card.info.id}>{item.card.info.name} -{item.card.info.price/100}</li>
            )
            }

          </ul>
          </div>
    )
};
export default RestaurantInfo;