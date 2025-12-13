import  RestaurantCard,{withRestaurantPromoted} from "./RestaurantCard";
import {useEffect, useState,useContext} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import useOnlinestatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body=()=>{
   let [listResuseSt,setlistResuseSt]=useState([]);
   let [filteredResinfo,setfilteredResinfo]=useState([]);
   const [searchText,setSearchText]=useState("");
   useEffect(()=>{
      fetchData();
   },[]);
   const fetchData= async ()=>
      {
        const jsonData=await fetch("https://namastedev.com/api/v1/listRestaurants");
         const data=await jsonData.json();
         // console.log(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
         setlistResuseSt(data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         setfilteredResinfo(data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         // console.log(data);
   }
   const RestaurantCardPromoted=withRestaurantPromoted(RestaurantCard);
   const isOffline=useOnlinestatus();
   const {loggedInUser,setuserName}=useContext(UserContext);
   if(isOffline==="offline"){
      return <h1>Looks like your are offline please check your interent connection</h1>
   }
   return listResuseSt.length===0?  <Shimmer/>: (
      <div className="body">
      <div className="flex">
        <div className="search">
         <input type="text" className="m-4  border" value={searchText} onChange={(e)=>{
           setSearchText(e.target.value);
         }}/>
         <button onClick={()=>{
             let filteredRes=listResuseSt.filter((res)=>
               res.info.name.toLowerCase().includes(searchText.toLowerCase()));
               setfilteredResinfo(filteredRes);
         }} className=" m-4 px-4 py-2 bg-green-300  rounded-lg">Search</button>
        </div>
         <button className="m-4 px-4 py-2 bg-gray-400 rounded-lg" onClick={()=>{
            let filterresList=listResuseSt.filter((res)=>res.info.avgRating>4.0);
           setlistResuseSt(filterresList);
         }}>TopRatedRestaurants</button>
          <div>
            <label>User : </label>
            <input className=" border border-black p-4"  onChange={(e)=><div></div>} value={loggedInUser}/>
         </div>
         </div>
        
       <div className="flex flex-wrap">
        
       {filteredResinfo.map((res,index)=>(
         res.info.veg?<Link key={index} to={"/restaurants/"+res.info.id}><RestaurantCardPromoted  resObj={res}/></Link>:
          <Link key={index} to={"/restaurants/"+res.info.id}><RestaurantCard  resObj={res}/></Link>
       ))}
       </div>
      </div>
   );
}
export  default Body;