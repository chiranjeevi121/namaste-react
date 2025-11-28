import { useState ,useEffect} from "react";
const useOnlinestatus=()=>{
    const [isOnline,setIsOnline]=useState("online");
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setIsOnline("offline");
        })
        window.addEventListener("online",()=>{
            setIsOnline("online");
        },[])
    })
    return isOnline;
}
export default useOnlinestatus;