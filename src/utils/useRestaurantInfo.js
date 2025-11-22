import { useEffect, useState } from "react";
import {RES_INFO} from "../utils/constants"
const useRestaurantInfo=(resId)=>{
     const [resInfo,setResInfo]=useState();
    useEffect(()=>{
        fetchData();
    })
    const fetchData= async ()=>{
        const data=await fetch(RES_INFO+resId);
        const json =await data.json();
        setResInfo(json.data);

    }
    return resInfo;
}
export default useRestaurantInfo;