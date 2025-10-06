import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
const Body=()=>{
   let [listResuseSt,setlistResuseSt]=useState([]);
   let [filteredResinfo,setfilteredResinfo]=useState([]);
   const [searchText,setSearchText]=useState("");
   useEffect(()=>{
      fetchData();
   },[]);
   const fetchData= async ()=>
      {
        const jsonData=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
         const data=await jsonData.json();
         // console.log(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
         setlistResuseSt(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         setfilteredResinfo(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   }
   return listResuseSt.length===0?  <Shimmer/>: (
      <div className="body">
      <div className="filter-res">
        <div className="search">
         <input type="text" className="search-box" value={searchText} onChange={(e)=>{
           setSearchText(e.target.value);
         }}/>
         <button onClick={()=>{
             let filteredRes=listResuseSt.filter((res)=>
               res.info.name.toLowerCase().includes(searchText.toLowerCase()));
               setfilteredResinfo(filteredRes);
         }}>Search</button>
        </div>
         <button className="filter-btn" onClick={()=>{
            let filterresList=listResuseSt.filter((res)=>res.info.avgRating>4.5);
           setlistResuseSt(filterresList);
         }}>TopRatedRestaurants</button>
         </div>
       <div className="res-container">
       {filteredResinfo.map((res,index)=>(
          <RestaurantCard key={index} resObj={res}/>
       ))}
       </div>
       
      </div>
   );
}
export  default Body;