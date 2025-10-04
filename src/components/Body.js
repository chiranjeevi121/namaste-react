import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
import resList from "../utils/mockData";
const Body=()=>{
   let [listResuseSt,setlistResuseSt]=useState(resList)
   return (
      <div className="body">
         <button className="filter-btn" onClick={()=>{
            let filterresList=listResuseSt.filter((res)=>res.info.avgRating>4);
           setlistResuseSt(filterresList);
         }}>TopRatedRestaurants</button>
            <div className="res-container">
       { listResuseSt.map((res,index)=>(
          <RestaurantCard key={index} resObj={res}/>
       ))}
        </div>
      </div>
   );
}
export  default Body;