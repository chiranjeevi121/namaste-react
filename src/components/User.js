import { useEffect, useState } from "react";
const User=({name})=>{
    const [count0]=useState(0);
    const [count1]=useState(1);
    useEffect(()=>{
        console.log("useEffect");
        const timer=setInterval(()=>{
            console.log("hello");
        },1000);
        return ()=>{
            console.log("useeefect on mounting pahe")
            clearInterval(timer);
        }
    })
    return(
        <div className="user-card">
            <h3>Count0:{count0}</h3>
            <h3>Count1:{count1}</h3>
            <h2>Name:{name}</h2>
            <h3>Location:srikalahasti</h3>
            <h4>Contact:chiru@nov</h4>
        </div>
    )
}
export default User;